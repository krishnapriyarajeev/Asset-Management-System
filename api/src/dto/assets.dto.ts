import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  } from "class-validator";
import { AssetStatus } from "../utils/assetStatus.enum";
import { Transform, Type } from "class-transformer";


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

export class UploadAssetDto {
  @IsString()
  @IsNotEmpty()
  serialNumber: string;

  @IsEnum(AssetStatus)
  @IsNotEmpty()
  status: AssetStatus;

  @IsNotEmpty()
  @IsNotEmpty()
  subcategory_id: number;

  @IsNotEmpty()
  @IsOptional()
  employee_id: number;
}

export class AssetResponseDto extends CreateAssetDto {}
