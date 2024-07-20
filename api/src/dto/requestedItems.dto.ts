import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
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

    @ValidateNested()
    @Type(() => CreateRequestsDto)
    requests: Requests;

    @ValidateNested()
    @Type(() => CreateSubcategoryDto)
    subcategory: Subcategory;
}

export class UpdateRequestedItems {
    @IsString()
    @IsOptional()
    reason: string;

    @IsString()
    @IsOptional()
    requestType: string;
    
    @IsOptional()
    @ValidateNested()
    @Type(() => CreateRequestsDto)
    requests: Requests;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateSubcategoryDto)
    subcategory: Subcategory;
}