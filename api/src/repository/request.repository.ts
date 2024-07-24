import { Repository } from "typeorm";
import Assets from "../entity/assets.entity";
import Category from "../entity/category.entity";
import Requests from "../entity/requests.entity";

export default class RequestRepository {
  constructor(private requestRepository: Repository<Requests>) {
    this.requestRepository = requestRepository;
  }

  find = async () =>
    await this.requestRepository.find({
      relations: { employee: true },
    });

  //add relations
  findOneBy = async (filter: Partial<Requests>) =>
    await this.requestRepository.findOne({
      where: filter,
      relations: { employee: true },
    });

  save = async (newRequest: Partial<Requests>) =>
    await this.requestRepository.save(newRequest);

  remove = async (filter: Partial<Requests>) =>
    await this.requestRepository.softDelete(filter);
}
