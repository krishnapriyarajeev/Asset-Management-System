import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import CategoryService from "../service/category.service";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import {
  CategoryResponseDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from "../dto/category.dto";

export default class categoryController {
  public router: Router;

  constructor(private categoryService: CategoryService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllCategory);
    this.router.get("/:id", this.getCategoryById);
    this.router.post("/", this.createCategory);
    this.router.put("/", authMiddleware, this.updateCategory);
    this.router.delete("/:id", authMiddleware, this.deleteCategory);
  }
  getAllCategory = async (_, res: Response) => {
    const category = await this.categoryService.getAllCategory();
    res.json(plainToInstance(CategoryResponseDto, category));

  };

  getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const category = await this.categoryService.getCategoryById(id);
      if (!category) {
        throw new HttpException(404, "Category not found");
      }
      //   res.json(plainToInstance(UpdateAssetDto, asset));
      res.status(200).send(category);
    } catch (error) {
      next(error);
    }
  };

  createCategory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // if (req.role !== Role.ADMIN) {
      //   throw new HttpException(403, "Invalid Access");
      // }
      const categoryDto = plainToInstance(CreateCategoryDto, req.body);
      const errors = await validate(categoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const categoryData = await this.categoryService.createNewCatgory(
        categoryDto.categoryName
      );

      res.status(201).send(categoryData);
    } catch (error) {
      next(error);
    }
  };

  updateCategory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const categoryDto = plainToInstance(UpdateCategoryDto, req.body);
      const errors = await validate(categoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const categoryData = await this.categoryService.updateCategory(
        categoryDto
      );
      //   res.json({
      //     sucess: true,
      //     message: "Asset Updated!",
      //     data: assetData,
      //   });
      res.status(200).send(categoryData);
    } catch (err) {
      next(err);
    }
  };

  deleteCategory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.categoryService.deleteCategory(id);
      res.json({ sucess: true, message: "Category Deleted!" });
    } catch (err) {
      next(err);
    }
  };
}
