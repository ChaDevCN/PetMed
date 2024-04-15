import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicalManagementInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
