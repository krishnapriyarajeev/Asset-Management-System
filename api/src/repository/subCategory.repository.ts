import { Repository } from "typeorm";
import Assets from "../entity/assets.entity";
import Category from "../entity/category.entity";
import Subcategory from "../entity/subcategory.entity";

export default class SubCategoryRepository {
  constructor(private subCategoryRepository: Repository<Subcategory>) {
    this.subCategoryRepository = subCategoryRepository;
  }

  find = async () =>
    await this.subCategoryRepository.find({
      relations: { category: true, assets: true },
    });

  //add relations
  findOneBy = async (filter: Partial<Subcategory>) =>
    await this.subCategoryRepository.findOne({
      where: filter,
      relations: { category: true, assets: true },
    });

  save = async (newAsset: Partial<Subcategory>) =>
    await this.subCategoryRepository.save(newAsset);

  remove = async (filter: Partial<Subcategory>) =>
    await this.subCategoryRepository.softDelete(filter);
}
