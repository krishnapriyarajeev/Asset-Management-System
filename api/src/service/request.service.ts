import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import Requests from "../entity/requests.entity";
import { RequestStatus } from "../utils/requestStatus.enum";
import RequestRepository from "../repository/request.repository";
import { CreateRequestsDto, UpdateRequestsDto } from "../dto/requests.dto";
import { CreateEmployeeDto } from "../dto/employee.dto";
import RequestedItems from "../entity/requestedItems.entity";
import { CreateRequestedItems } from "../dto/requestedItems.dto";
import RequestedItemService from "./requestedItems.service";
import SubCategoryService from "./subcategory.service";

export default class RequestService {
  constructor(
    private requestedItemService: RequestedItemService,
    private subcategoryService: SubCategoryService,
    private requestRepository: RequestRepository
  ) {
    this.requestRepository = requestRepository;
  }

  public getAllRequests = async () => this.requestRepository.find();

  public getRequestById = async (id: number) =>
    this.requestRepository.findOneBy({ id });

  public createNewRequest = async (
    employee: any,
    status: RequestStatus,
    requestedItems: CreateRequestedItems[]
  ) => {
    const requestedItemsEntities = [];
    requestedItems.map(async (requestedItem) => {
      const subcategory = await this.subcategoryService.getSubCategoryById(
        requestedItem.subcategory_id
      );
      const requestedItemEntity =
        await this.requestedItemService.createNewRequestedItem(
          requestedItem.reason,
          requestedItem.requestType,
          subcategory
        );
      requestedItemsEntities.push(requestedItemEntity);
    });
    const newRequest = new Requests();
    newRequest.employee = employee;
    newRequest.status = status;
    newRequest.requestedItems = requestedItemsEntities;

    return await this.requestRepository.save(newRequest);
  };

  //Handle edge cases
  public updateRequest = async (request: UpdateRequestsDto) => {
    const requestData = await this.getRequestById(request.id);

    if (request.employee_id) {
      requestData.employee.id = request.employee_id;
    }

    if (request.status) {
      requestData.status = request.status;
    }
    return await this.requestRepository.save(requestData);
  };

  public deleteRequest = async (id: number) => {
    const requestData = await this.getRequestById(id);
    if (!requestData) {
      throw new HttpException(404, "asset Not Found");
    }
    this.requestRepository.remove({ id });
    return requestData;
  };
}
