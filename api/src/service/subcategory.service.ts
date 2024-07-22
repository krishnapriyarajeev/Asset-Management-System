import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import SubCategoryRepository from "../repository/subCategory.repository";
import Category from "../entity/category.entity";
import Subcategory from "../entity/subcategory.entity";
import { UpdateSubcategoryDto } from "../dto/subcategory.dto";

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

    if (subcategory.category) {
      updateSubCategoryData.category = subcategory.category;
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
