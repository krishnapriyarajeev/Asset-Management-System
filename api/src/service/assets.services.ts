import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import AssetRepository from "../repository/assets.repository";
import Subcategory from "../entity/subcategory.entity";
import { UpdateAssetDto } from "../dto/assets.dto";

export default class AssetService {
  constructor(private assetRepository: AssetRepository) {
    this.assetRepository = assetRepository;
  }

  public getAllAssets = async () => this.assetRepository.find();

  public getAssetById = async (id: number) =>
    this.assetRepository.findOneBy({ id });

  public createNewAsset = async (
    serialNumber: string,
    status: AssetStatus,
    subcategory: Subcategory,
    employee: Employee
  ) => {
    const newAsset = new Assets();
    newAsset.serialNumber = serialNumber;
    newAsset.status = status;
    newAsset.subcategory = subcategory;
    newAsset.employee = employee;
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

    if (asset.employee) {
      assetData.employee = asset.employee;
    }

    if (asset.subcategory) {
      assetData.subcategory = asset.subcategory;
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
}
