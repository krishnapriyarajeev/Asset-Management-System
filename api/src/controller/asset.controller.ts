import { NextFunction, Router, Response, Request } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import RequestWithUser from "../utils/requestWithUser";
import HttpException from "../exceptions/http.exception";
import { Role } from "../utils/role.enum";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { CreateAssetDto, UpdateAssetDto } from "../dto/assets.dto";
import AssetService from "../service/assets.services";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ dest: "uploads/", storage });

export default class assetController {
  public router: Router;

  constructor(private assetService: AssetService) {
    this.router = Router();

    this.router.get("/", authMiddleware, this.getAllAsset);
    this.router.get("/count", this.countByCategory);
    this.router.post("/upload", upload.single("file"), this.uploadFile);
    this.router.get("/:id", authMiddleware, this.getAssetById);
    this.router.post("/", authMiddleware, this.createAsset);
    this.router.put("/", authMiddleware, this.updateAsset);
    this.router.delete("/:id", authMiddleware, this.deleteAsset);
  }

  uploadFile = async (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;
    if (!file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    // console.log(file);

    try {
      const data = await this.assetService.processExcelFile(file);
      console.log(data);
      res.send(`${data.length} datas inserted successfully!`);
      // res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  getAllAsset = async (_, res: Response) => {
    const asset = await this.assetService.getAllAssets();
    // let Allocated=0;
    // let Unallocated=0;
    // let Damaged=0;
    // asset.map((assets)=>{
    //     if(assets.status=="Allocated"){
    //         Allocated+=1
    //     }
    //     else if(assets.status=="Damaged"){
    //         Damaged+=1
    //     }
    //     else{
    //         Unallocated+=1
    //     }
    //     console.log("asttt",assets.subcategory.category.categoryName)
    // })
    // const countStatus=[{"Allocated":Allocated},{"Unallocated":Unallocated},{"Damaged":Damaged}]
    // console.log("countStatus",countStatus)
    // console.log("Total",Total)
    res.status(200).send(asset);
  };

  getAssetById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const asset = await this.assetService.getAssetById(id);
      if (!asset) {
        throw new HttpException(404, "Asset not found");
      }
      //   res.json(plainToInstance(UpdateAssetDto, asset));
      res.status(200).send(asset);
    } catch (error) {
      next(error);
    }
  };

  createAsset = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const assetDto = plainToInstance(CreateAssetDto, req.body);
      const errors = await validate(assetDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      const assetData = await this.assetService.createNewAsset(
        assetDto.serialNumber,
        assetDto.status,
        assetDto.subcategory_id,
        assetDto.employee_id
      );

      res.status(201).send(assetData);
    } catch (error) {
      next(error);
    }
  };

  updateAsset = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const assetDto = plainToInstance(UpdateAssetDto, req.body);
      const errors = await validate(assetDto);

      if (errors.length) {
        throw new HttpException(400, JSON.stringify(errors));
      }

      console.log("Here");
      const assetData = await this.assetService.updateAsset(assetDto);
      //   res.json({
      //     sucess: true,
      //     message: "Asset Updated!",
      //     data: assetData,
      //   });
      res.status(200).send(assetData);
    } catch (err) {
      next(err);
    }
  };

  deleteAsset = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (req.role !== Role.ADMIN) {
        throw new HttpException(403, "Invalid Access");
      }
      const id = Number(req.params.id);
      await this.assetService.deleteAsset(id);
      res.json({ sucess: true, message: "Asset Deleted!" });
    } catch (err) {
      next(err);
    }
  };

  countByCategory = async (_, res: Response) => {
    const asset = await this.assetService.getAllAssets();
    const result = await this.assetService.countByCategory(asset);

    res.status(200).send(result);
  };
}
