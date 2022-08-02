import { Resolver, Args, Query } from '@nestjs/graphql';
import { CalculatorService } from './calculator.service';

@Resolver()
export class CalculatorResolver {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Query(() => String)
  calculate(@Args('input') input: string) {
    return this.calculatorService.calculate(input);
  }
}
