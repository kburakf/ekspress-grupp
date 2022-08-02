import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CalculatorModule } from './calculator/calculator.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    CalculatorModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
