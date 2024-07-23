import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import SubCategoryService from "../service/subcategory.service";
import {
  CreateSubcategoryDto,
  SubcategoryResponseDto,
  UpdateSubcategoryDto,
} from "../dto/subcategory.dto";

export default class SubCategoryController {
  public router: Router;

  constructor(private subCategoryService: SubCategoryService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllSubCategory);
    this.router.get("/:id", authMiddleware, this.getSubCategoryById);
    this.router.post("/", this.createNewSubCategory);
    this.router.put("/", authMiddleware, this.updateSubCategory);
    this.router.delete("/:id", authMiddleware, this.deleteSubCategory);
  }
  getAllSubCategory = async (_, res: Response) => {
    const subCategory = await this.subCategoryService.getAllSubCategory();
    res.json(plainToInstance(SubcategoryResponseDto, subCategory));
  };

  getSubCategoryById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = Number(req.params.id);
      const subCategory = await this.subCategoryService.getSubCategoryById(id);
      if (!subCategory) {
        throw new HttpException(404, "Sub-Category not found");
      }
      //   res.json(plainToInstance(UpdateAssetDto, asset));
      res.status(200).send(subCategory);
    } catch (error) {
      next(error);
    }
  };

  createNewSubCategory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      // if (req.role !== Role.ADMIN) {
      //   throw new HttpException(403, "Invalid Access");
      // }
      const subCategoryDto = plainToInstance(CreateSubcategoryDto, req.body);
      const errors = await validate(subCategoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const subCategoryData =
        await this.subCategoryService.createNewSubCategory(
          subCategoryDto.brandName,
          subCategoryDto.modelName,
          subCategoryDto.Specifications,
          subCategoryDto.category_id
        );

      res.status(201).send(subCategoryData);
    } catch (error) {
      next(error);
    }
  };

  updateSubCategory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const subCategoryDto = plainToInstance(UpdateSubcategoryDto, req.body);
      const errors = await validate(subCategoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const subCategoryData = await this.subCategoryService.updateSubCategory(
        subCategoryDto
      );
      //   res.json({
      //     sucess: true,
      //     message: "Asset Updated!",
      //     data: assetData,
      //   });
      res.status(200).send(subCategoryData);
    } catch (err) {
      next(err);
    }
  };

  deleteSubCategory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.subCategoryService.deleteSubCategory(id);
      res.json({ sucess: true, message: "Sub-Category Deleted!" });
    } catch (err) {
      next(err);
    }
  };
}
