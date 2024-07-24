import { IsEnum, IsNotEmpty, IsNumber, IsOptional} from "class-validator";
import { RequestStatus } from "../utils/requestStatus.enum";


export class CreateRequestsDto {
    @IsEnum(RequestStatus)
    @IsNotEmpty()
    status: RequestStatus; 

    // @ValidateNested()
    // @Type(() => CreateEmployeeDto)
    @IsNotEmpty()
    @IsNumber()
    employee_id: number;
}

export class UpdateRequestsDto {
    @IsNumber()
    id: number;
  
    @IsEnum(RequestStatus)
    @IsOptional()
    status: RequestStatus;

    // @ValidateNested()
    // @Type(() => CreateEmployeeDto)
      
    @IsOptional()
    @IsNumber()
    employee_id: number;
  }

export class RequestResponseDto extends CreateRequestsDto{

}