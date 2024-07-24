import AssetHistory from "../entity/assetHistory.entity";
import AssetHistoryRepository from "../repository/assetHistory.repository";
import AssetHistoryService from "../service/assetHistory.services";
import assetHistoryController from "../controller/assetHistory.controller";
import { dataSource } from "../db/data-source.db";


const assetHistoryRouter = new assetHistoryController(
  new AssetHistoryService(new AssetHistoryRepository(dataSource.getRepository(AssetHistory))
    )
).router;

export default assetHistoryRouter;