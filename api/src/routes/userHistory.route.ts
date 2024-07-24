import UserHistory from "../entity/userHistory.entity";
import UserHistoryRepository from "../repository/userHistory.repository";
import UserHistoryService from "../service/userHistory.services";
import userHistoryController from "../controller/userHistory.controller";
import { dataSource } from "../db/data-source.db";


const userHistoryRouter = new userHistoryController(
  new UserHistoryService(new UserHistoryRepository(dataSource.getRepository(UserHistory))
    )
).router;

export default userHistoryRouter;