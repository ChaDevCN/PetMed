import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MedicalManagementService } from './medical-management.service';
import { DoctorsResolver } from './doctors.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/medical-management/gql/medical-management.gql',
    }),
  ],
  providers: [MedicalManagementService, DoctorsResolver],
})
export class MedicalManagementModule {}
