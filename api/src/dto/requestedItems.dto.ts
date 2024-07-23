import { IsNotEmpty, IsOptional, IsString, ValidateNested,IsNumber } from "class-validator";
import { CreateRequestsDto } from "./requests.dto";
import { Type } from "class-transformer";
import Requests from "../entity/requests.entity";
import Subcategory from "../entity/subcategory.entity";
import { CreateSubcategoryDto } from "./subcategory.dto";

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