import requestedItemController from "../controller/requestedItems.controller";
import requestsController from "../controller/requests.controller";
import { dataSource } from "../db/data-source.db";
import RequestedItems from "../entity/requestedItems.entity";
import Requests from "../entity/requests.entity";
import RequestRepository from "../repository/request.repository";
import RequestedItemRepository from "../repository/requestedItem.repository";
import RequestService from "../service/request.service";
import RequestedItemService from "../service/requestedItems.service";
import AssetService from "../service/assets.services";
import AssetRepository from "../repository/assets.repository";
import Assets from "../entity/assets.entity";

const assetService = new AssetService(
  new AssetRepository(dataSource.getRepository(Assets))
);

export const requestedItemService = new RequestedItemService(
  new RequestedItemRepository(dataSource.getRepository(RequestedItems)),
  assetService
);

const requestedItemsRouter = new requestedItemController(requestedItemService)
  .router;

export default requestedItemsRouter;
