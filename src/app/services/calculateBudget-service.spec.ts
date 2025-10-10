import { TestBed } from '@angular/core/testing';
import { BudgetCalculatorService } from './calculateBudget-service';
describe('BudgetCalculatorService', () => {

  it('should calculate base price correctly with 1 page and 1 language', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(BudgetCalculatorService);
    
    const result = service.calculateServicePrice(500, 1, 1);
    expect(result).toBe(500);
  });

  it('should calculate price with multiple pages', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(BudgetCalculatorService);
    
    const result = service.calculateServicePrice(300, 3, 1);
    expect(result).toBe(900);
  });

  it('should add extra language cost correctly', () => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(BudgetCalculatorService);
    
    const result = service.calculateServicePrice(500, 1, 3);
    expect(result).toBe(560);
  });
});