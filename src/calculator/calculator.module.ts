import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorResolver } from './calculator.resolver';
@Module({
  imports: [],
  providers: [CalculatorService, CalculatorResolver],
})
export class CalculatorModule {}
