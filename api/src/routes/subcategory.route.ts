import { dataSource } from "../db/data-source.db";
import Subcategory from "../entity/subcategory.entity";
import CategoryRepository from "../repository/category.repository";
import SubCategoryRepository from "../repository/subCategory.repository";
import CategoryService from "../service/category.service";
import SubCategoryService from "../service/subcategory.service";
import SubCategoryController from "../controller/subCategory.controller";
import Category from "../entity/category.entity";

export const subcategoryService = new SubCategoryService(
  new SubCategoryRepository(dataSource.getRepository(Subcategory))
);

const SubcategoryRouter = new SubCategoryController(subcategoryService).router;

export default SubcategoryRouter;
