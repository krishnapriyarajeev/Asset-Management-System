import {
    IsNotEmpty,
    IsOptional,
    IsString,
    IsNumber,
    } from "class-validator";
  
  export class CreateAssetHistoryDto {
    @IsString()
    @IsNotEmpty()
    serialNumber: string;
  
    @IsString()
    @IsNotEmpty()
    status: string;
    
    @IsNumber()
    @IsNotEmpty()
    userId: number;
  
  }
  
  export class UpdateAssetHistoryDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsOptional()
    serialNumber: string;
  
    @IsString()
    @IsOptional()
    status: string;
    
    @IsNumber()
    @IsOptional()
    userId: number;

  }
  
  export class AssetHistoryResponseDto extends CreateAssetHistoryDto {}
  