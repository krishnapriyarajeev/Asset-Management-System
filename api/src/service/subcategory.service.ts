import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import SubCategoryRepository from "../repository/subCategory.repository";
import Category from "../entity/category.entity";
import Subcategory from "../entity/subcategory.entity";
import { UpdateSubcategoryDto } from "../dto/subcategory.dto";
import CategoryService from "./category.service";

export default class SubCategoryService {
  constructor(
    private subCategoryRepository: SubCategoryRepository
  ) {
    this.subCategoryRepository = subCategoryRepository;
  }

  public getAllSubCategory = async () => this.subCategoryRepository.find();

  public getSubCategoryById = async (id: number) =>
    this.subCategoryRepository.findOneBy({ id });

  public getSubCategoryByName = async (brandName: string, modelName: string, Specifications: string) =>
    this.subCategoryRepository.findOneBy({ brandName, modelName, Specifications });

  public createNewSubCategory = async (
    modelName: string,
    Specifications: string,
    brandName: string,
    category: any
  ) => {
    console.log(category);

    const newSubCategory = new Subcategory();
    newSubCategory.modelName = modelName;
    newSubCategory.brandName = brandName;
    newSubCategory.Specifications = Specifications;
    newSubCategory.category = category;

    return await this.subCategoryRepository.save(newSubCategory);
  };

  //Handle edge cases
  public updateSubCategory = async (subcategory: UpdateSubcategoryDto) => {
    const updateSubCategoryData = await this.getSubCategoryById(subcategory.id);

    if (subcategory.Specifications) {
      updateSubCategoryData.Specifications = subcategory.Specifications;
    }

    if (subcategory.modelName) {
      updateSubCategoryData.modelName = subcategory.modelName;
    }

    if (subcategory.brandName) {
      updateSubCategoryData.brandName = subcategory.brandName;
    }

    if(subcategory.category_id){
    updateSubCategoryData.category.id = subcategory.category_id;
    }

    return await this.subCategoryRepository.save(updateSubCategoryData);
  };

  public deleteSubCategory = async (id: number) => {
    const subCategoryData = await this.getSubCategoryById(id);
    if (!subCategoryData) {
      throw new HttpException(404, "subCategory Not Found");
    }
    this.subCategoryRepository.remove({ id });
    return subCategoryData;
  };
}
