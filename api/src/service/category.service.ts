import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import CategoryRepository from "../repository/category.repository";
import Category from "../entity/category.entity";

export default class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  public getAllCategory = async () => this.categoryRepository.find();

  public getCategoryById = async (id: number) =>
    this.categoryRepository.findOneBy({ id });

  public createNewCatgory = async (categoryName: string) => {
    const newCategory = new Category();
    newCategory.categoryName = categoryName;
    return await this.categoryRepository.save(newCategory);
  };

  //Handle edge cases
  public updateCategory = async (categoryName: string) => {
    const newCategory = new Category();
    if (categoryName) {
      newCategory.categoryName = categoryName;
    }
    return await this.categoryRepository.save(newCategory);
  };

  public deleteCategory = async (id: number) => {
    const categoryData = await this.getCategoryById(id);
    if (!categoryData) {
      throw new HttpException(404, "Category Not Found");
    }
    this.categoryRepository.remove(categoryData);
    return categoryData;
  };
}
