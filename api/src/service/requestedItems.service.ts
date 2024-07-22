import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import Requests from "../entity/requests.entity";
import { RequestStatus } from "../utils/requestStatus.enum";
import Subcategory from "../entity/subcategory.entity";
import RequestedItems from "../entity/requestedItems.entity";
import RequestedItemRepository from "../repository/requestedItem.repository";

export default class RequestedItemService {
  constructor(private requestedItemRepository: RequestedItemRepository) {
    this.requestedItemRepository = requestedItemRepository;
  }

  public getAllRequestedItems = async () => this.requestedItemRepository.find();

  public getRequestedItemsById = async (id: number) =>
    this.requestedItemRepository.findOneBy({ id });

  public createNewRequestedItem = async (
    reason: string,

    requestType: string,

    requests: Requests,

    subcategory: Subcategory
  ) => {
    const newRequest = new Requests();
    const newsubCategory = new Subcategory();

    const newRequestedItem = new RequestedItems();

    newRequestedItem.reason = reason;
    newRequestedItem.requests = requests;
    newRequestedItem.subcategory = subcategory;

    return await this.requestedItemRepository.save(newRequestedItem);
  };

  //Handle edge cases
  public updateRequestedItem = async (
    reason: string,

    requestType: string,

    requests: Requests,

    subcategory: Subcategory
  ) => {
    const newRequestedItem = new RequestedItems();
    if (reason) {
      newRequestedItem.reason = reason;
    }

    if (requests) {
      newRequestedItem.requests = requests;
    }

    if (subcategory) {
      newRequestedItem.subcategory = subcategory;
    }
    return await this.requestedItemRepository.save(newRequestedItem);
  };

  public deleteRequestedItem = async (id: number) => {
    const requestItemData = await this.getRequestedItemsById(id);
    if (!requestItemData) {
      throw new HttpException(404, "asset Not Found");
    }
    this.requestedItemRepository.remove(requestItemData);
    return requestItemData;
  };
}
