import { IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  categoryName: string;
}

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  categoryName: string;

  @IsNumber()
  id: number;
}

export class CategoryResponseDto {
  @IsString()
  @IsNotEmpty()
  categoryName: string;
}
