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

export default class RequestService {
  constructor(private requestRepository: RequestRepository) {
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
    const newRequest = new Requests();
    newRequest.employee = employee;
    newRequest.status = status;
    newRequest.requestedItems = requestedItems as unknown as RequestedItems[];

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
