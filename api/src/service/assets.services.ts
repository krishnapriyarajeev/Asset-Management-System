import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import AssetRepository from "../repository/assets.repository";
import Subcategory from "../entity/subcategory.entity";
import { UpdateAssetDto } from "../dto/assets.dto";
import EmployeeService from "./employee.service";
import SubCategoryService from "./subcategory.service";

export default class AssetService {
  constructor(
    private assetRepository: AssetRepository,
  ) {
    this.assetRepository = assetRepository;
  }

  public getAllAssets = async () => this.assetRepository.find();

  public getAssetById = async (id: number) =>
    this.assetRepository.findOneBy({ id });

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

    if (asset.employee_id){
      assetData.employee.id = asset.employee_id;
    }

    if (asset.subcategory_id){
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

  public countByCategory=async (asset:any)=>{
    
    let totalCategory=asset.length
    let total={"Allocated":0,"Unallocated":0, "Damaged":0}

    const array=[]
    let seenArray=new Set()
    asset.map((assets)=>{
        if(!(assets.subcategory.category.categoryName in seenArray)){
          seenArray.add(assets.subcategory.category.categoryName)
           let countStatus={
            "Allocated":0,"Unallocated":0, "Damaged":0
           }
           if(assets.status=="Allocated"){
            total.Allocated+=1
           }
           else if(assets.status=="Damaged"){
            total.Damaged+=1
           }
           else{
            total.Unallocated+=1
           }
           asset.map((assetitem)=>{
            if(assetitem.subcategory.category.categoryName===assets.subcategory.category.categoryName){
                if(assetitem.status=="Allocated"){
                    countStatus.Allocated+=1
                }
                else if(assetitem.status=="Damaged"){
                    countStatus.Damaged+=1
                }
                else{
                    countStatus.Unallocated+=1
                }
            }
           })
           array.push({"Category":assets.subcategory.category.categoryName,"statusCounts":countStatus})
        }
    })
    console.log("service",array)
    return {totalCategory,total,array}
  }


}
