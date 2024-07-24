import Assets from "../entity/assets.entity";
import AssetRepository from "../repository/assets.repository";
import AssetService from "../service/assets.services";
import assetController from "../controller/asset.controller";
import { dataSource } from "../db/data-source.db";


const assetRouter = new assetController(
  new AssetService(new AssetRepository(dataSource.getRepository(Assets))
    )
).router;

export default assetRouter;

//DOUBT
