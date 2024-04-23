// create-doctor.dto.ts
import {
  IsInt,
  IsString,
  IsDecimal,
  IsOptional,
  Length,
  IsPhoneNumber,
  IsIn,
  Min,
  Max,
} from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsDecimal({ decimal_digits: '2' })
  commissionRate: number;

  @IsIn([0, 1])
  gender: number;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @IsPhoneNumber(null)
  phoneNumber: string;

  @IsIn([0, 1, 2, 3])
  status: number;

  @IsOptional()
  @IsInt()
  experience?: number;

  @IsOptional()
  @IsString()
  introduction?: string;

  @IsInt()
  departmentId: number;
}
