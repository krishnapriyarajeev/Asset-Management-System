import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import RequestService from "../service/request.service";
import {
  CreateRequestsDto,
  RequestResponseDto,
  UpdateRequestsDto,
} from "../dto/requests.dto";

export default class requestsController {
  public router: Router;

  constructor(private requestsService: RequestService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllRequests);
    this.router.get("/:id", authMiddleware, this.getRequestsById);
    this.router.post("/", authMiddleware, this.createRequests);
    this.router.put("/", authMiddleware, this.updateRequests);
    this.router.delete("/:id", authMiddleware, this.deleteRequests);
  }
  getAllRequests = async (_, res: Response) => {
    const requests = await this.requestsService.getAllRequests();
    res.json(plainToInstance(RequestResponseDto, requests));
  };

  getRequestsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const requests = await this.requestsService.getRequestById(id);
      if (!requests) {
        throw new HttpException(404, "Request not found");
      }
      //   res.json(plainToInstance(UpdateAssetDto, asset));
      res.status(200).send(requests);
    } catch (error) {
      next(error);
    }
  };

  createRequests = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const requestsDto = plainToInstance(CreateRequestsDto, req.body);
      const errors = await validate(requestsDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const requestsData = await this.requestsService.createNewRequest(
        requestsDto.employee_id,
        requestsDto.status,
        requestsDto.requestedItems
      );

      res.status(201).send(requestsData);
    } catch (error) {
      next(error);
    }
  };

  updateRequests = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const updateRequestsDto = plainToInstance(UpdateRequestsDto, req.body);
      const errors = await validate(updateRequestsDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const requestsData = await this.requestsService.updateRequest(
        updateRequestsDto
      );
      //   res.json({
      //     sucess: true,
      //     message: "Asset Updated!",
      //     data: assetData,
      //   });
      res.status(200).send(requestsData);
    } catch (err) {
      next(err);
    }
  };

  deleteRequests = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.requestsService.deleteRequest(id);
      res.json({ sucess: true, message: "Request Deleted!" });
    } catch (err) {
      next(err);
    }
  };
}
