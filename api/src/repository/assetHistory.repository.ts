import { Repository } from "typeorm";
import AssetHistory from "../entity/assetHistory.entity";

export default class AssetHistoryRepository {
  constructor(private assetHistoryRepository: Repository<AssetHistory>) {
    this.assetHistoryRepository = assetHistoryRepository;
  }

  find = async () =>
    await this.assetHistoryRepository.find();

  //add relations
  findOneBy = async (filter: Partial<AssetHistory>) =>
    await this.assetHistoryRepository.findOne({
      where: filter
    });

  save = async (newAssetHistory: Partial<AssetHistory>) =>
    await this.assetHistoryRepository.save(newAssetHistory);

  remove = async (filter: Partial<AssetHistory>) =>
    await this.assetHistoryRepository.softDelete(filter);
}
