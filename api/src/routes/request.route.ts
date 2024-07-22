import requestsController from "../controller/requests.controller";
import { dataSource } from "../db/data-source.db";
import Requests from "../entity/requests.entity";
import RequestRepository from "../repository/request.repository";
import RequestService from "../service/request.service";

const requestRouter = new requestsController(
  new RequestService(new RequestRepository(dataSource.getRepository(Requests)))
).router;

export default requestRouter;
