import { TestBed } from '@angular/core/testing';
import { BudgetCalculatorService } from './calculateBudget-service';
import { ServiceChangeEvent } from '../model/service-event.model';

describe('BudgetCalculatorService', () => {
    let service: BudgetCalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BudgetCalculatorService);
    }); 

   it('should calculate service price correctly', () => {
    const mockService: ServiceChangeEvent = {
      service: 'seo',
      isSelected: true,
      pages: 2,
      languages: 3,
      price: 300
    };
    
    const result = service.calculateServicePrice(mockService.price, mockService.pages, mockService.languages);
    expect(result).toBe(660); 
});})