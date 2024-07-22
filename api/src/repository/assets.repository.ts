import { Repository } from "typeorm";
import Assets from "../entity/assets.entity";

export default class AssetRepository {
  constructor(private assetRepository: Repository<Assets>) {
    this.assetRepository = assetRepository;
  }

  find = async () =>
    await this.assetRepository.find({
      relations: {subcategory:true,employee:true},
    });



    //add relations
  findOneBy = async (filter: Partial<Assets>) =>
    await this.assetRepository.findOne({
      where: filter,
      relations :{subcategory:true,employee:true},
    });

  save = async (newAsset: Partial<Assets>) =>
    await this.assetRepository.save(newAsset);

  remove = async (filter: Partial<Assets>) =>
    await this.assetRepository.softDelete(filter);
}
