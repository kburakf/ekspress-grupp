import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();
    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should return success response', () => {
    expect(service.calculate('2-6(-3*6)/2-5*2')).toEqual(
      'Input: 2-6(-3*6)/2-5*2, Result: 46',
    );
  });

  it('should return success response for right input with white space', () => {
    expect(service.calculate('2+   5')).toEqual('Input: 2+5, Result: 7');
  });

  it('should throw an error for empty string', () => {
    expect(() => {
      service.calculate('');
    }).toThrow('Invalid input!');
  });

  it('should throw an error for white space input', () => {
    expect(() => {
      service.calculate('   ');
    }).toThrow('Invalid input!');
  });
});
