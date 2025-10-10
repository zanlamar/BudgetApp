import { Injectable } from '@angular/core';
import { PRICES } from '../model/pricing.constants'

@Injectable({
    providedIn: 'root'
})

export class BudgetCalculatorService {

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