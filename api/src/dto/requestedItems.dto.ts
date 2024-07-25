import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { CreateRequestsDto } from "./requests.dto";
import { Type } from "class-transformer";
import Requests from "../entity/requests.entity";
import Subcategory from "../entity/subcategory.entity";
import { CreateSubcategoryDto } from "./subcategory.dto";
import { RequestItemStatus } from "../utils/RequestItemStatus.enum";

export class CreateRequestedItems {
  @IsString()
  @IsNotEmpty()
  reason: string;

  @IsString()
  @IsNotEmpty()
  requestType: string;

  @IsNotEmpty()
  @IsNumber()
  subcategory_id: number;
}

export class UpdateRequestedItems {
  @IsString()
  @IsOptional()
  reason: string;

  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  requestType: string;

  // @ValidateNested()
  // @Type(() => CreateRequestsDto)
  @IsOptional()
  @IsNumber()
  requests_id: number;

  @IsString()
  @IsNotEmpty()
  requestStatus: string;

  // @ValidateNested()
  // @Type(() => CreateSubcategoryDto)
  @IsOptional()
  @IsNumber()
  subcategory_id: number;
}

export class handleRequestedItem {
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  requestStatus: RequestItemStatus;

  @IsNumber()
  employee_id: number;

  @IsNotEmpty()
  @IsNumber()
  subcategory_id: number;
}
