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
    });

    // it('should calculate budget as 0 when no services selected', () => {
    //   const result = service.calculateServicePrice(0, 0, 0);
    //   expect(result).toBe(0);
    // });

    it('should have initial total budget as 0', () => {
        expect(service.getTotalBudget()).toBe(0);
    });

    it('should reset total budget to 0', () => {
      service.setTotalBudget(500);
      expect(service.getTotalBudget()).toBe(500);
  
      service.resetTotalBudget();
      expect(service.getTotalBudget()).toBe(0);
    });

});