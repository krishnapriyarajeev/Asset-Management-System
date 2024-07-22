import requestedItemController from "../controller/requestedItems.controller";
import requestsController from "../controller/requests.controller";
import { dataSource } from "../db/data-source.db";
import RequestedItems from "../entity/requestedItems.entity";
import Requests from "../entity/requests.entity";
import RequestRepository from "../repository/request.repository";
import RequestedItemRepository from "../repository/requestedItem.repository";
import RequestService from "../service/request.service";
import RequestedItemService from "../service/requestedItems.service";

const requestedItemsRouter = new requestedItemController(
  new RequestedItemService(
    new RequestedItemRepository(dataSource.getRepository(RequestedItems))
  )
).router;

export default requestedItemsRouter;
