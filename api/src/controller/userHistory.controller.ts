import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateUserHistoryDto, UpdateUserHistoryDto } from "../dto/userHistory.dto";
import UserHistoryService from "../service/userHistory.services";

export default class userHistoryController {
  public router: Router;

  constructor(private userHistoryService: UserHistoryService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllUserHistory);
    this.router.get("/:id", authMiddleware, this.getUserHistoryById);
    this.router.post("/", authMiddleware, this.createUserHistory);
    this.router.put("/", authMiddleware, this.updateUserHistory);
    this.router.delete("/:id", authMiddleware, this.deleteUserHistory);
  }


  getAllUserHistory = async (_, res: Response) => {
    const userHistory = await this.userHistoryService.getAllUserHistory();
    res.status(200).send(userHistory);
  };

  getUserHistoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const userHistory = await this.userHistoryService.getUserHistoryById(id);
      if (!userHistory) {
        throw new HttpException(404, "Asset not found");
      }
      res.status(200).send(userHistory);
    } catch (error) {
      next(error);
    }
  };

  createUserHistory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const userHistoryDto = plainToInstance(CreateUserHistoryDto, req.body);
      const errors = await validate(userHistoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const userHistoryData = await this.userHistoryService.createNewUserHistory(
        userHistoryDto.userId,
        userHistoryDto.action,
        userHistoryDto.assetId
      );

      res.status(201).send(userHistoryData);
    } catch (error) {
      next(error);
    }
  };

  updateUserHistory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const userHistoryDto = plainToInstance(UpdateUserHistoryDto, req.body);
      const errors = await validate(userHistoryDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const userHistoryData = await this.userHistoryService.updateUserHistory(userHistoryDto);
      res.status(200).send(userHistoryData);
    } catch (err) {
      next(err);
    }
  };

  deleteUserHistory = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.userHistoryService.deleteUserHistory(id);
      res.json({ sucess: true, message: "UserHistory Deleted!" });
    } catch (err) {
      next(err);
    }
  };
}
