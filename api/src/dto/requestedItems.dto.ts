import { IsNotEmpty, IsOptional, IsString,IsNumber } from "class-validator";

export class CreateRequestedItems {
    @IsString()
    @IsNotEmpty()
    reason: string;

    @IsString()
    @IsNotEmpty()
    requestType: string;

    // @ValidateNested()
    // @IsOptional()
    // @Type(() => CreateRequestsDto)
    @IsNotEmpty()
    @IsNumber()
    requests_id: number;

    // @ValidateNested()
    // @IsOptional()
    // @Type(() => CreateSubcategoryDto)
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

    
    // @ValidateNested()
    // @Type(() => CreateSubcategoryDto)
    @IsOptional()
    @IsNumber()
    subcategory_id: number;
}