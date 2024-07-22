import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { RequestStatus } from "../utils/requestStatus.enum";
import { Type } from "class-transformer";
import Employee from "../entity/employee.entity";
import { CreateEmployeeDto } from "./employee.dto";

export class CreateRequestsDto {
  @IsEnum(RequestStatus)
  @IsNotEmpty()
  status: RequestStatus;

  @ValidateNested()
  @Type(() => CreateEmployeeDto)
  employee: Employee;
}

export class UpdateRequestsDto {
  @IsNumber()
  id: number;

  @IsEnum(RequestStatus)
  @IsOptional()
  status: RequestStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateEmployeeDto)
  employee: Employee;
}

export class RequestResponseDto extends CreateRequestsDto {}
