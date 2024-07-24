import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import Requests from "../entity/requests.entity";
import { RequestStatus } from "../utils/requestStatus.enum";
import Subcategory from "../entity/subcategory.entity";
import RequestedItems from "../entity/requestedItems.entity";
import RequestedItemRepository from "../repository/requestedItem.repository";
import { UpdateRequestedItems } from "../dto/requestedItems.dto";

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

    subcategory: any
  ) => {
    const newRequestedItem = new RequestedItems();

    newRequestedItem.reason = reason;
    newRequestedItem.requestType = requestType;
    newRequestedItem.subcategory = subcategory;

    return await this.requestedItemRepository.save(newRequestedItem);
  };

  //Handle edge cases
  public updateRequestedItem = async (requestedItem: UpdateRequestedItems) => {
    const requestedItemsData = await this.getRequestedItemsById(
      requestedItem.id
    );
    if (requestedItem.reason) {
      requestedItemsData.reason = requestedItem.reason;
    }

    if (requestedItem.requests_id) {
      requestedItemsData.requests.id = requestedItem.requests_id;
    }

    if (requestedItem.subcategory_id) {
      requestedItemsData.subcategory.id = requestedItem.subcategory_id;
    }
    return await this.requestedItemRepository.save(requestedItemsData);
  };

  public deleteRequestedItem = async (id: number) => {
    const requestItemData = await this.getRequestedItemsById(id);
    if (!requestItemData) {
      throw new HttpException(404, "Requested Item Not Found");
    }
    this.requestedItemRepository.remove({ id });
    return requestItemData;
  };

  public countRequestedItem = async (items: any) => {
    let totalRequest = items.length;

    const array = [];
    let seenArray = new Set();
    items.map((item) => {
      if (!(item.requests.status in seenArray)) {
        seenArray.add(item.requests.status);
        let countStatus = {
          Accepted: 0,
          Declined: 0,
          Pending: 0,
        };
        items.map((itemstatus) => {
          if (itemstatus.requests.status === item.requests.status) {
            if (itemstatus.requests.status == "Accepted") {
              countStatus.Accepted += 1;
            } else if (itemstatus.requests.status == "Declined") {
              countStatus.Declined += 1;
            } else {
              countStatus.Pending += 1;
            }
          }
        });
        array.push({ Status: item.requests.status, statusCounts: countStatus });
      }
    });
    console.log("service", array);
    return { totalRequest, array };
  };
}
