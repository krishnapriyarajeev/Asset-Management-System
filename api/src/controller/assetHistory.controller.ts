import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateAssetHistoryDto, UpdateAssetHistoryDto } from "../dto/assetHistory.dto";
import AssetHistoryService from "../service/assetHistory.services";

export default class assetHistoryController {
  public router: Router;

  constructor(private assetHistoryService: AssetHistoryService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllAssetHistory);
    this.router.get("/:id", authMiddleware, this.getAssetHistoryById);
    this.router.post("/", authMiddleware, this.createAssetHistory);
    this.router.put("/", authMiddleware, this.updateAssetHistory);
    this.router.delete("/:id", authMiddleware, this.deleteAssetHistory);
  }


  getAllAssetHistory = async (_, res: Response) => {
    const assetHistory = await this.assetHistoryService.getAllAssetHistory();
    res.status(200).send(assetHistory);
  };

  getAssetHistoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const assetHistory = await this.assetHistoryService.getAssetHistoryById(id);
      if (!assetHistory) {
        throw new HttpException(404, "Asset not found");
      }
      res.status(200).send(assetHistory);
    } catch (error) {
      next(error);
    }
  };

  createAssetHistory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const assetHistoryDto = plainToInstance(CreateAssetHistoryDto, req.body);
      const errors = await validate(assetHistoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const assetHistoryData = await this.assetHistoryService.createNewAssetHistory(
        assetHistoryDto.serialNumber,
        assetHistoryDto.status,
        assetHistoryDto.userId
      );

      res.status(201).send(assetHistoryData);
    } catch (error) {
      next(error);
    }
  };

  updateAssetHistory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const assetHistoryDto = plainToInstance(UpdateAssetHistoryDto, req.body);
      const errors = await validate(assetHistoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const assetHistoryData = await this.assetHistoryService.updateAssetHistory(assetHistoryDto);
      res.status(200).send(assetHistoryData);
    } catch (err) {
      next(err);
    }
  };

  deleteAssetHistory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.assetHistoryService.deleteAssetHistory(id);
      res.json({ sucess: true, message: "AssetHistory Deleted!" });
    } catch (err) {
      next(err);
    }
  };
}
