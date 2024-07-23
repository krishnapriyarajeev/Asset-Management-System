import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { AssetStatus } from "../utils/assetStatus.enum";
import { CreateSubcategoryDto } from "./subcategory.dto";
import Subcategory from "../entity/subcategory.entity";
import { Type } from "class-transformer";
import Employee from "../entity/employee.entity";
import { CreateEmployeeDto } from "./employee.dto";
import { CannotCreateEntityIdMapError } from "typeorm";
import { Transform } from "class-transformer";

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  serialNumber: string;

  @IsOptional()
  @IsEnum(AssetStatus)
  @Transform(({ value }) => (value === "" ? AssetStatus.UNALLOCATED : value))
  status?: AssetStatus;

  // @ValidateNested()
  // @Type(() => CreateSubcategoryDto)
  @IsNotEmpty()
  @IsNotEmpty()
  subcategory_id: number;

  // @ValidateNested()
  // @Type(() => CreateEmployeeDto)
  @IsNotEmpty()
  @IsOptional()
  employee_id: number;
}

export class UpdateAssetDto {
  @IsString()
  @IsOptional()
  serialNumber: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsEnum(AssetStatus)
  @IsOptional()
  status: AssetStatus;

  // @ValidateNested()
  // @Type(() => CreateSubcategoryDto)
  @IsOptional()
  @IsNumber()
  subcategory_id: number;

  // @ValidateNested()
  // @Type(() => CreateEmployeeDto)
  @IsOptional()
  @IsNumber()
  employee_id: number;
}

export class AssetResponseDto extends CreateAssetDto {}
