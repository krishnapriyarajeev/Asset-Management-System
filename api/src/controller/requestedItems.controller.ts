import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import RequestedItemService from "../service/requestedItems.service";
import {
  CreateRequestedItems,
  UpdateRequestedItems,
} from "../dto/requestedItems.dto";

export default class requestedItemController {
  public router: Router;

  constructor(private requestedItemService: RequestedItemService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllRequestedItem);
    this.router.get("/count",this.countRequestedItem)
    this.router.get("/:id", authMiddleware, this.getRequestedItemById);
    this.router.post("/", authMiddleware, this.createRequestedItem);
    this.router.put("/", authMiddleware, this.updateRequestedItem);
    this.router.delete("/:id", authMiddleware, this.deleteRequestedItem);
  }
  getAllRequestedItem = async (_, res: Response) => {
    const requestedItem =
      await this.requestedItemService.getAllRequestedItems();
    res.status(200).send(requestedItem);
  };

  getRequestedItemById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = Number(req.params.id);
      const requestedItem =
        await this.requestedItemService.getRequestedItemsById(id);
      if (!requestedItem) {
        throw new HttpException(404, "Requested item not found");
      }
      //   res.json(plainToInstance(UpdateAssetDto, asset));
      res.status(200).send(requestedItem);
    } catch (error) {
      next(error);
    }
  };

  createRequestedItem = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const requestedItemDto = plainToInstance(CreateRequestedItems, req.body);
      const errors = await validate(requestedItemDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const requestedItemData =
        await this.requestedItemService.createNewRequestedItem(
          requestedItemDto.reason,
          requestedItemDto.requestType,
          requestedItemDto.requests_id,
          requestedItemDto.subcategory_id
        );

      res.status(201).send(requestedItemData);
    } catch (error) {
      next(error);
    }
  };

  updateRequestedItem = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const requestedItemDto = plainToInstance(UpdateRequestedItems, req.body);
      const errors = await validate(requestedItemDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const requestedItemData =
        await this.requestedItemService.updateRequestedItem(requestedItemDto);
      //   res.json({
      //     sucess: true,
      //     message: "Asset Updated!",
      //     data: assetData,
      //   });
      res.status(200).send(requestedItemData);
    } catch (err) {
      next(err);
    }
  };

  deleteRequestedItem = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.requestedItemService.deleteRequestedItem(id);
      res.json({ sucess: true, message: "Requested item message Deleted!" });
    } catch (err) {
      next(err);
    }
  };

  countRequestedItem=async (_, res: Response)=>{
    const requestedItem= await this.requestedItemService.getAllRequestedItems()
    const result= await this.requestedItemService.countRequestedItem(requestedItem)
    res.status(200).send(result)
  }

}
