import { Type } from "class-transformer";
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
} from "class-validator";



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

  // @ValidateNested()
  // @Type(() => CreateCategoryDto)
  @IsNumber()
  @IsNotEmpty()
  category_id: number;
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

  
  // @ValidateNested()
  // @Type(() => CreateCategoryDto)
  @IsOptional()
  @IsNumber()
  category_id: number;
}

export class SubcategoryResponseDto extends CreateSubcategoryDto {}
