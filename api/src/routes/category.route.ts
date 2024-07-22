import categoryController from "../controller/category.controller";
import { dataSource } from "../db/data-source.db";
import Category from "../entity/category.entity";
import CategoryRepository from "../repository/category.repository";
import CategoryService from "../service/category.service";

const categoryRouter = new categoryController(
  new CategoryService(
    new CategoryRepository(dataSource.getRepository(Category))
  )
).router;

export default categoryRouter;
