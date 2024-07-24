import { UpdateAssetHistoryDto } from "../dto/assetHistory.dto";
import AssetHistory from "../entity/assetHistory.entity";
import HttpException from "../exceptions/http.exception";
import AssetHistoryRepository from "../repository/assetHistory.repository";

export default class AssetHistoryService {
  constructor(private assetHistoryRepository: AssetHistoryRepository) {
    this.assetHistoryRepository= assetHistoryRepository;
  }

  public getAllAssetHistory = async () => this.assetHistoryRepository.find();

  public getAssetHistoryById = async (id: number) =>
    this.assetHistoryRepository.findOneBy({ id });

  public createNewAssetHistory = async (
    serialNumber: string,
    status: string,
    userId: number
  ) => {
    const newAssetHistory = new AssetHistory();
    newAssetHistory.serialNumber = serialNumber;
    newAssetHistory.status = status;
    newAssetHistory.userId = userId;
    return await this.assetHistoryRepository.save(newAssetHistory);
  };
  
  public updateAssetHistory = async (assetHistory: UpdateAssetHistoryDto) => {
    const assetHistoryData = await this.getAssetHistoryById(assetHistory.id);

    if (assetHistory.serialNumber) {
      assetHistoryData.serialNumber = assetHistory.serialNumber;
    }

    if (assetHistory.status) {
      assetHistoryData.status = assetHistory.status;
    }

    if (assetHistory.userId) {
      assetHistoryData.userId= assetHistory.userId;
    }

    return await this.assetHistoryRepository.save(assetHistoryData);
  };

  public deleteAssetHistory = async (id: number) => {
    const assetHistoryData = await this.getAssetHistoryById(id);
    if (!assetHistoryData) {
      throw new HttpException(404, "assetHistory Not Found");
    }
    this.assetHistoryRepository.remove({ id });
    return assetHistoryData;
  };
}
