import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MedicalManagementService } from './medical-management.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/medical-management/gql/medical-management.gql',
    }),
  ],
  providers: [MedicalManagementService],
})
export class MedicalManagementModule {}
