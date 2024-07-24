import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { RequestStatus } from "../utils/requestStatus.enum";
import { Type } from "class-transformer";
import Employee from "../entity/employee.entity";
import { CreateEmployeeDto } from "./employee.dto";
import RequestedItems from "../entity/requestedItems.entity";
import { CreateRequestedItems } from "./requestedItems.dto";

export class CreateRequestsDto {
  @IsEnum(RequestStatus)
  @IsNotEmpty()
  status: RequestStatus;

  // @ValidateNested()
  // @Type(() => CreateEmployeeDto)
  @IsNotEmpty()
  @IsNumber()
  employee_id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRequestedItems)
  requestedItems: CreateRequestedItems[];
}

export class UpdateRequestsDto {
  @IsNumber()
  id: number;

  @IsEnum(RequestStatus)
  @IsOptional()
  status: RequestStatus;

  // @ValidateNested()
  // @Type(() => CreateEmployeeDto)

  @IsOptional()
  @IsNumber()
  employee_id: number;
}

export class RequestResponseDto extends CreateRequestsDto {}
