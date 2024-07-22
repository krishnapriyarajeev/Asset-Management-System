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

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  serialNumber: string;

  @IsEnum(AssetStatus)
  @IsNotEmpty()
  status: AssetStatus;

  @ValidateNested()
  @Type(() => CreateSubcategoryDto)
  @IsOptional()
  subcategory: Subcategory;

  @ValidateNested()
  @Type(() => CreateEmployeeDto)
  @IsOptional()
  employee: Employee;
}

export class UpdateAssetDto {
  @IsString()
  @IsOptional()
  serialNumber: string;

  @IsNumber()
  id: number;

  @IsEnum(AssetStatus)
  @IsOptional()
  status: AssetStatus;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateSubcategoryDto)
  subcategory: Subcategory;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateEmployeeDto)
  employee: Employee;
}

export class AssetResponseDto extends CreateAssetDto {}
