import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import SubCategoryRepository from "../repository/subCategory.repository";
import Category from "../entity/category.entity";
import Subcategory from "../entity/subcategory.entity";

export default class SubCategoryService {
  constructor(private subCategoryRepository: SubCategoryRepository) {
    this.subCategoryRepository = subCategoryRepository;
  }

  public getAllSubCategory = async () => this.subCategoryRepository.find();

  public getSubCategoryById = async (id: number) =>
    this.subCategoryRepository.findOneBy({ id });

  public createNewSubCategory = async (
    modelName: string,

    Specifications: string,
    brandName: string,

    category: Category
  ) => {
    const newSubCategory = new Subcategory();
    newSubCategory.modelName = modelName;
    newSubCategory.brandName = brandName;
    newSubCategory.Specifications = Specifications;
    newSubCategory.category = category;

    return await this.subCategoryRepository.save(newSubCategory);
  };

  //Handle edge cases
  public updateSubCategory = async (
    modelName: string,

    Specifications: string,
    brandName: string,

    category: Category
  ) => {
    const newSubCategory = new Subcategory();
    if (Specifications) {
      newSubCategory.Specifications = Specifications;
    }

    if (modelName) {
      newSubCategory.modelName = modelName;
    }

    if (brandName) {
      newSubCategory.brandName = brandName;
    }

    if (category) {
      newSubCategory.category = category;
    }
    return await this.subCategoryRepository.save(newSubCategory);
  };

  public deleteSubCategory = async (id: number) => {
    const subCategoryData = await this.getSubCategoryById(id);
    if (!subCategoryData) {
      throw new HttpException(404, "subCategory Not Found");
    }
    this.subCategoryRepository.remove(subCategoryData);
    return subCategoryData;
  };
}
