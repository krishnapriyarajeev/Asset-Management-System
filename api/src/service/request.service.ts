import { AssetStatus } from "../utils/assetStatus.enum";
import Employee from "../entity/employee.entity";
import Assets from "../entity/assets.entity";
import HttpException from "../exceptions/http.exception";
import Requests from "../entity/requests.entity";
import { RequestStatus } from "../utils/requestStatus.enum";
import RequestRepository from "../repository/request.repository";

export default class RequestService {
  constructor(private requestRepository: RequestRepository) {
    this.requestRepository = requestRepository;
  }

  public getAllRequests = async () => this.requestRepository.find();

  public getRequestById = async (id: number) =>
    this.requestRepository.findOneBy({ id });

  public createNewRequest = async (
    employee: Employee,
    status: RequestStatus
  ) => {
    const newRequest = new Requests();
    newRequest.employee = employee;
    newRequest.status = status;
    return await this.requestRepository.save(newRequest);
  };

  //Handle edge cases
  public updateRequest = async (employee: Employee, status: RequestStatus) => {
    const newRequest = new Requests();
    if (employee) {
      newRequest.employee = employee;
    }

    if (status) {
      newRequest.status = status;
    }
    return await this.requestRepository.save(newRequest);
  };

  public deleteRequest = async (id: number) => {
    const requestData = await this.getRequestById(id);
    if (!requestData) {
      throw new HttpException(404, "asset Not Found");
    }
    this.requestRepository.remove(requestData);
    return requestData;
  };
}
