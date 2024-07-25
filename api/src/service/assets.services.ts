import { AssetStatus } from "../utils/assetStatus.enum";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import AssetRepository from "../repository/assets.repository";
import { UpdateAssetDto, UploadAssetDto } from "../dto/assets.dto";
import * as ExcelJS from "exceljs";
import pool from "../utils/db";
import { dataSource } from "../db/data-source.db";

export default class AssetService {
  constructor(private assetRepository: AssetRepository) {
    this.assetRepository = assetRepository;
  }

  public processExcelFile = async (file: Express.Multer.File) => {
    console.log(file);
    console.log("buffer", file.buffer);
    if (!file) {
      throw new HttpException(400, "File Missing");
    }
    if (file.buffer.length === 0) {
      throw new HttpException(400, "Empty file");
    }
    // console.log(file);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);
    const worksheet = workbook.worksheets[0];

    const data: UploadAssetDto[] = [];

    console.log(data);

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) {
        return;
      }
      const rowData: UploadAssetDto = {
        serialNumber: row.getCell(1).value as string,
        status: row.getCell(2).value as AssetStatus,
        subcategory_id: row.getCell(3).value as number,
        employee_id: row.getCell(4).value as number,
      };
      data.push(rowData);
    });

    // // Bulk insert into PostgreSQL
    // const client = await pool.connect();
    const queryRunner = dataSource.createQueryRunner();
    const con = await queryRunner.connect();
    const start = await queryRunner.startTransaction();

    console.log(con);
    console.log(start);

    try {
      let AddedAssets = [];
      for (const asset of data) {
        const data = await this.createNewAsset(
          asset.serialNumber,
          asset.status,
          asset.subcategory_id,
          asset.employee_id
        );
        AddedAssets.push(data);
      }
      await pool.query("COMMIT");
      console.log(AddedAssets);
      return AddedAssets;
    } catch (err) {
      await pool.query("ROLLBACK");
      throw err;
    }
  };

  public getAllAssets = async () => this.assetRepository.find();

  public getAssetById = async (id: number) =>
    this.assetRepository.findOneBy({ id });

  public getBySerialNumber = async (serialNumber: string) => {
    return this.assetRepository.findOneBy({ serialNumber });
  };

  public exchangeAsset = async (oldAsset: Assets, newAsset: Assets) => {
    const id = oldAsset.employeeId;
    const object = oldAsset.employee;
    // console.log("oldassetnefore",oldAsset.employeeId)
    // console.log("oldasset no1",oldAsset)
    oldAsset.employeeId = newAsset.employeeId;
    oldAsset.employee = newAsset.employee;
    // console.log("oldasset no2",oldAsset)
    // console.log("oldassetneAFTER",oldAsset.employeeId)
    if (oldAsset.employeeId != null) {
      oldAsset.status = AssetStatus.ALLOCATED;
    } else {
      oldAsset.status = AssetStatus.UNALLOCATED;
    }
    await this.assetRepository.save(oldAsset);

    newAsset.employeeId = id;
    newAsset.employee = object;
    newAsset.status = AssetStatus.ALLOCATED;
    await this.assetRepository.save(newAsset);
  };

  public getUnallocatedAssetById = async (id: number) =>
    this.assetRepository.findOneUnallocatedAssetBySubcategoryId(id);

  public createNewAsset = async (
    serialNumber: string,
    status: AssetStatus,
    subcategory: any,
    employee: any
  ) => {
    const newAsset = new Assets();
    newAsset.serialNumber = serialNumber;
    newAsset.status = status;
    newAsset.subcategory = subcategory;

    newAsset.employeeId = employee;
    return await this.assetRepository.save(newAsset);
  };
  //Handle edge cases
  public updateAsset = async (asset: UpdateAssetDto) => {
    const assetData = await this.getAssetById(asset.id);

    if (asset.serialNumber) {
      assetData.serialNumber = asset.serialNumber;
    }

    if (asset.status) {
      assetData.status = asset.status;
    }

    if (asset.employee_id) {
      assetData.employeeId = asset.employee_id;
    }

    if (asset.subcategory_id) {
      assetData.subcategory.id = asset.subcategory_id;
    }
    return await this.assetRepository.save(assetData);
  };

  public deleteAsset = async (id: number) => {
    const assetData = await this.getAssetById(id);
    if (!assetData) {
      throw new HttpException(404, "asset Not Found");
    }
    this.assetRepository.remove({ id });
    return assetData;
  };

  public countByCategory = async (asset: any) => {
    let totalCategory = asset.length;
    let total = { Allocated: 0, Unallocated: 0, Damaged: 0 };
    asset.map((assets) => {
      if (assets.status == "Allocated") {
        total.Allocated += 1;
      } else if (assets.status == "Damaged") {
        total.Damaged += 1;
      } else {
        total.Unallocated += 1;
      }
    });
    const array = [];
    let seenArray = new Set();
    asset.map((assets) => {
      if (!seenArray.has(assets.subcategory.category.categoryName)) {
        // console.log("here")
        // console.log("SN",seenArray)

        seenArray.add(assets.subcategory.category.categoryName);

        let countStatus = {
          Allocated: 0,
          Unallocated: 0,
          Damaged: 0,
        };
        console.log("assetStatus", assets.status);

        asset.map((assetitem) => {
          if (
            assetitem.subcategory.category.categoryName ==
            assets.subcategory.category.categoryName
          ) {
            if (assetitem.status == "Allocated") {
              countStatus.Allocated += 1;
            } else if (assetitem.status == "Damaged") {
              countStatus.Damaged += 1;
            } else {
              countStatus.Unallocated += 1;
            }
          }
        });

        array.push({
          Category: assets.subcategory.category.categoryName,
          statusCounts: countStatus,
        });
      }
    });
    console.log("service", array);
    return { totalCategory, total, array };
  };

  public countByAsset = async (asset: any) => {
    const array = [];
    const arr = new Set();
    asset.map((assets) => {
      if (
        !(
          assets.subcategory.modelName in array &&
          assets.subcategory.Specifications in array
        )
      ) {
        array.push([
          assets.subcategory.modelName,
          assets.subcategory.Specifications,
        ]);
      }
    });

    asset.map((assets) => {
      if (
        !(
          assets.id in arr &&
          assets.subcategory.modelName in arr &&
          assets.subcategory.Specifications in arr
        )
      ) {
        arr.add({
          assets_id: assets.id,
          ModelName: assets.subcategory.modelName,
          Specifications: assets.subcategory.Specifications,
          Status: assets.status,
        });
      }
    });
    // console.log(array)
    // console.log("arr",arr)

    const count = {};

    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (count[item]) {
        count[item] += 1;
      } else {
        count[item] = 1;
      }
    }

    const set = new Set();

    const res = [];

    arr.forEach((item: any) => {
      if (!set.has(`${item.ModelName}-${item.Specifications}`)) {
        set.add(`${item.ModelName}-${item.Specifications}`);

        let countStatus = { Allocated: 0, Unallocated: 0, Damaged: 0 };
        arr.forEach((innerItem: any) => {
          if (
            innerItem.ModelName === item.ModelName &&
            innerItem.Specifications === item.Specifications
          ) {
            if (innerItem.Status === "Allocated") {
              countStatus.Allocated++;
            } else if (innerItem.Status === "Unallocated") {
              countStatus.Unallocated++;
            } else if (innerItem.Status === "Damaged") {
              countStatus.Damaged++;
            }
          }
        });

        res.push({
          subCategory: [item.ModelName, item.Specifications],
          countStatus: countStatus,
        });
      }
    });

    // console.log(res);
    return { count, res };
  };
}
