// - getPriceList(): devuelve los precios base
// - calculateTotal(services): lógica pura de cálculo
// - Inyectable y testeable

import { Injectable, signal } from '@angular/core';
import { PRICES } from '../model/pricing.constants'

@Injectable({
    providedIn: 'root'
})

export class BudgetCalculatorService {

    private totalBudget = signal(0);

    getTotalBudget(): number {
        return this.totalBudget();
    }

    resetTotalBudget(): void {
        this.totalBudget.set(0);
    }

    setTotalBudget(value: number): void {
        this.totalBudget.set(value);
    }

    calculateServicePrice(
        price: number, 
        pages: number, 
        languages: number
    ): number {
        const pagesPrice = price * pages;
        const languagesPrice = (languages - 1 ) * PRICES.extraLanguage;
        return pagesPrice + languagesPrice;
    }
}


