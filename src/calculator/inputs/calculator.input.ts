import { Field, InputType } from 'type-graphql';

@InputType()
export class CalculatorInput {
  @Field()
  readonly input: string;
}
