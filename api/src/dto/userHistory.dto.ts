import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsNumber,
    } from "class-validator";
  
  export class CreateUserHistoryDto {
    @IsNumber()
    @IsNotEmpty()
    userId: number;
  
    @IsString()
    @IsNotEmpty()
    action: string;

    @IsNumber()
    @IsNotEmpty()
    assetId: number;
  
  }
  
  export class UpdateUserHistoryDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsOptional()
    userId: number;
  
    @IsString()
    @IsOptional()
    action: string;
    
    @IsNumber()
    @IsOptional()
    assetId: number;
  }
  
  export class UserHistoryResponseDto extends CreateUserHistoryDto {}
  