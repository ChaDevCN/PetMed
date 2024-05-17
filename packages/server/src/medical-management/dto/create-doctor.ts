import {
  IsInt,
  IsString,
  Length,
  Min,
  Max,
  IsOptional,
  Matches,
  IsIn,
  IsNumber,
} from 'class-validator';

export class CreateDoctorDTO {
  @IsString({ message: '用户名必须是字符串' })
  @Length(6, 20, {
    message: '用户名最少6个字符，不能超过20个字符',
  })
  username: string;

  @IsString({ message: '姓名必须是字符串' })
  @Length(2, 20, {
    message: '姓名最少2个字符，不能超过20个字符',
  })
  name: string;

  @IsInt({ message: '性别必须为整数' })
  @IsIn([0, 1], { message: '性别必须填写' })
  gender: number;

  @IsNumber({}, { message: '佣金比例必须是数字' })
  @Min(0, { message: '佣金比例不能小于0.00' })
  @Max(99.99, { message: '佣金比例不能大于99.99' })
  commissionRate: string;

  @IsNumber({}, { message: '年龄必须是数字' })
  @Min(19, { message: '年龄不能小于19' })
  @Max(99, { message: '年龄不能大于99' })
  age: string;

  @IsNumber({}, { message: '工作经验必须是数字' })
  @Min(0, { message: '工作经验不能小于0' })
  @Max(50, { message: '工作经验不能大于50' })
  experience: string;

  @IsString()
  @IsOptional()
  @Length(0, 255, {
    message: '简介不能超过255个字符',
  })
  introduction?: string;

  @IsString({ message: '科室必须是字符串' })
  department: string;
}
