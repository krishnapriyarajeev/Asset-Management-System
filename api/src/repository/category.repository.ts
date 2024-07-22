import { Repository } from "typeorm";
import Assets from "../entity/assets.entity";
import Category from "../entity/category.entity";

export default class CategoryRepository {
  constructor(private categoryRepository: Repository<Category>) {
    this.categoryRepository = categoryRepository;
  }

  find = async () =>
    await this.categoryRepository.find({
      relations: { subcategory: true },
    });

  //add relations
  findOneBy = async (filter: Partial<Category>) =>
    await this.categoryRepository.findOne({
      where: filter,
      relations: { subcategory: true },
    });

  save = async (newAsset: Partial<Category>) =>
    await this.categoryRepository.save(newAsset);

  remove = async (filter: Partial<Category>) =>
    await this.categoryRepository.softDelete(filter);
}
