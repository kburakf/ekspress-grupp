import { Injectable } from '@nestjs/common';
import { evaluate } from 'mathjs';

@Injectable()
export class CalculatorService {
  calculate(input: string) {
    // Remove white spaces.
    const cleanInput = input.replace(/ /g, '');

    if (!cleanInput.length) {
      throw new Error('Invalid input!');
    }

    const result = evaluate(cleanInput);

    return `Input: ${cleanInput}, Result: ${result}`;
  }
}
