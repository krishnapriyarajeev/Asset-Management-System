import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    categoryName: string;
}

export class UpdateCategoryDto {
    @IsString()
    @IsOptional()
    categoryName: string;
}

export class CategoryResponseDto{
    @IsString()
    @IsNotEmpty()
    categoryName: string;
}