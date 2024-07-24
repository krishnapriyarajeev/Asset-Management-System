import { UpdateUserHistoryDto } from "../dto/userHistory.dto";
import UserHistory from "../entity/userHistory.entity";
import HttpException from "../exceptions/http.exception";
import UserHistoryRepository from "../repository/userHistory.repository";

export default class UserHistoryService {
  constructor(private userHistoryRepository: UserHistoryRepository) {
    this.userHistoryRepository= userHistoryRepository;
  }

  public getAllUserHistory = async () => this.userHistoryRepository.find();

  public getUserHistoryById = async (id: number) =>
    this.userHistoryRepository.findOneBy({ id });

  public createNewUserHistory = async (
    userId: number,
    action: string,
    assetId: number,
  ) => {
    const newUserHistory = new UserHistory();
    newUserHistory.userId = userId;
    newUserHistory.action = action;
    newUserHistory.assetId = assetId;
    return await this.userHistoryRepository.save(newUserHistory);
  };
  
  public updateUserHistory = async (userHistory: UpdateUserHistoryDto) => {
    const userHistoryData = await this.getUserHistoryById(userHistory.id);

    if (userHistory.userId) {
      userHistoryData.userId = userHistory.userId;
    }

    if (userHistory.action) {
      userHistoryData.action = userHistory.action;
    }

    if (userHistory.assetId) {
      userHistoryData.assetId= userHistory.assetId;
    }

    return await this.userHistoryRepository.save(userHistoryData);
  };

  public deleteUserHistory = async (id: number) => {
    const userHistoryData = await this.getUserHistoryById(id);
    if (!userHistoryData) {
      throw new HttpException(404, "userHistory Not Found");
    }
    this.userHistoryRepository.remove({ id });
    return userHistoryData;
  };
}
