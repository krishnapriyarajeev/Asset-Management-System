import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import AssetRepository from "../repository/assets.repository";
import Subcategory from "../entity/subcategory.entity";

export default class AssetService {
  constructor(private assetRepository: AssetRepository) {
    this.assetRepository = assetRepository;
  }

  public getAllAssets = async () => this.assetRepository.find();

  public getAssetById = async (id: number) =>
    this.assetRepository.findOneBy({ id });

  public createNewAsset = async (serialNumber: string, status: AssetStatus,subcategory: Subcategory,employee:Employee) => {
    const newAsset = new Assets();
    newAsset.serialNumber = serialNumber;
    newAsset.status = status;
    newAsset.subcategory= subcategory;
    newAsset.employee=employee
    return await this.assetRepository.save(newAsset);
  };
  //Handle edge cases
  public updateAsset = async (
    serialNumber: string,
    status: AssetStatus,
    subcategory:Subcategory,
    employee:Employee
  
 
  ) => {
    const newAsset = new Assets();
    if (serialNumber) {
      newAsset.serialNumber = serialNumber;
    }

    if (status) {
      newAsset.status = status;
    }

    if (employee) {
      newAsset.employee = employee;
    }

    if (subcategory) {
      newAsset.subcategory = subcategory;
    }
    return await this.assetRepository.save(newAsset);
  };

  public deleteAsset = async (id: number) => {
    const assetData = await this.getAssetById(id);
    if (!assetData) {
      throw new HttpException(404, "asset Not Found");
    }
    this.assetRepository.remove(assetData);
    return assetData;
  };
}
