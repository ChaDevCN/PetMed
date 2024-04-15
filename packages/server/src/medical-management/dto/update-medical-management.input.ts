import { CreateMedicalManagementInput } from './create-medical-management.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicalManagementInput extends PartialType(CreateMedicalManagementInput) {
  @Field(() => Int)
  id: number;
}
