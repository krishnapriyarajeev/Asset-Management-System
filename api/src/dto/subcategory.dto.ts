import { Type } from "class-transformer";
import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsOptional,
  IsNumber,
} from "class-validator";
import { CreateCategoryDto } from "./category.dto";
import Category from "../entity/category.entity";
import { CreateEmployeeDto } from "./employee.dto";

export class CreateSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  brandName: string;

  @IsString()
  @IsNotEmpty()
  modelName: string;

  @IsString()
  @IsNotEmpty()
  Specifications: string;

  @ValidateNested()
  @Type(() => CreateCategoryDto)
  category: Category;
}

export class UpdateSubcategoryDto {
  @IsString()
  @IsOptional()
  brandName: string;

  @IsNumber()
  id: number;

  @IsString()
  @IsOptional()
  modelName: string;

  @IsString()
  @IsOptional()
  Specifications: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCategoryDto)
  category: Category;
}

export class SubcategoryResponseDto extends CreateSubcategoryDto {}
