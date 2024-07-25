import { Repository } from "typeorm";
import Assets from "../entity/assets.entity";
import { AssetStatus } from "../utils/assetStatus.enum";

export default class AssetRepository {
  constructor(private assetRepository: Repository<Assets>) {
    this.assetRepository = assetRepository;
  }

  find = async () =>
    await this.assetRepository.find({
      relations: ["subcategory", "employee", "subcategory.category"],
    });

  //add relations
  findOneBy = async (filter: Partial<Assets>) =>
    await this.assetRepository.findOne({
      where: filter,
      relations: { subcategory: true, employee: true },
    });

  findOneUnallocatedAssetBySubcategoryId = async (subcategoryId: number) => {
    return await this.assetRepository.findOne({
      where: {
        subcategory_Id: subcategoryId,
        status: AssetStatus.UNALLOCATED,
      },
      relations: { subcategory: true, employee: true },
      order: { id: "ASC" },
    });
  };

  save = async (newAsset: Partial<Assets>) =>
    await this.assetRepository.save(newAsset);

  remove = async (filter: Partial<Assets>) =>
    await this.assetRepository.softDelete(filter);
}
