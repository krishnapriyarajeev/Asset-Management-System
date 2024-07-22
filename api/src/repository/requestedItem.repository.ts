import { Repository } from "typeorm";
import Assets from "../entity/assets.entity";
import Category from "../entity/category.entity";
import Requests from "../entity/requests.entity";
import RequestedItems from "../entity/requestedItems.entity";

export default class RequestedItemRepository {
  constructor(private requestedItemRepository: Repository<RequestedItems>) {
    this.requestedItemRepository = requestedItemRepository;
  }

  find = async () =>
    await this.requestedItemRepository.find({
      relations: { requests: true, subcategory: true },
    });

  //add relations
  findOneBy = async (filter: Partial<RequestedItems>) =>
    await this.requestedItemRepository.findOne({
      where: filter,
      relations: { requests: true, subcategory: true },
    });

  save = async (newRequest: Partial<RequestedItems>) =>
    await this.requestedItemRepository.save(newRequest);

  remove = async (filter: Partial<RequestedItems>) =>
    await this.requestedItemRepository.softDelete(filter);
}
