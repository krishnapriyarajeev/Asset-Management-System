import { Repository } from "typeorm";
import UserHistory from "../entity/userHistory.entity";

export default class UserHistoryRepository {
  constructor(private userHistoryRepository: Repository<UserHistory>) {
    this.userHistoryRepository = userHistoryRepository;
  }

  find = async () =>
    await this.userHistoryRepository.find();

  //add relations
  findOneBy = async (filter: Partial<UserHistory>) =>
    await this.userHistoryRepository.findOne({
      where: filter
    });

  save = async (newUserHistory: Partial<UserHistory>) =>
    await this.userHistoryRepository.save(newUserHistory);

  remove = async (filter: Partial<UserHistory>) =>
    await this.userHistoryRepository.softDelete(filter);
}
