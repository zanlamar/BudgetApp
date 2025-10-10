import { Injectable, signal, computed, inject} from '@angular/core';
import { PRICES } from '../model/pricing.constants'

import { ServiceData } from '../../types/types';
import { BudgetCalculatorService } from '../../app/services/calculateBudget-service'



@Injectable({
    providedIn: 'root'
})

export class ServiceState {

    private priceCalculator = inject(BudgetCalculatorService);

    seoSelected = signal(false);
    adsSelected = signal(false);
    webSelected = signal(false);

    private seoData = signal<ServiceData>({ pages: 1, languages: 1 });
    private adsData = signal<ServiceData>({ pages: 1, languages: 1 });
    private webData = signal<ServiceData>({ pages: 1, languages: 1 });

    // Exponer como readonly
    readonly seoSelected$ = this.seoSelected.asReadonly();
    readonly adsSelected$ = this.adsSelected.asReadonly();
    readonly webSelected$ = this.webSelected.asReadonly();
    
    readonly seoData$ = this.seoData.asReadonly();
    readonly adsData$ = this.adsData.asReadonly();
    readonly webData$ = this.webData.asReadonly();

    
    readonly totalPrice = computed(() => {
        let total = 0;

        if (this.seoSelected()) {
        const data = this.seoData();
        total += this.priceCalculator.calculateServicePrice(
            PRICES.seoService, 
            data.pages,
            data.languages
        );
        }

        if (this.adsSelected()) {
        const data = this.adsData();
            total += this.priceCalculator.calculateServicePrice(
            PRICES.adsService,
            data.pages,
            data.languages
        );
        }

        if (this.webSelected()) {
        const data = this.webData();
        total += this.priceCalculator.calculateServicePrice(
            PRICES.webService,
            data.pages,
            data.languages
        );
        }
        return total;
    });

    resetBudget(): void {
        this.seoSelected.set(false);
        this.adsSelected.set(false);
        this.webSelected.set(false);
        this.seoData.set({ pages: 1, languages: 1 });
        this.adsData.set({ pages: 1, languages: 1 });
        this.webData.set({ pages: 1, languages: 1 });
    }

      // Gestion de estado
    updateService(service: 'seo' | 'ads' | 'web', isSelected: boolean, data: ServiceData): void {
        switch(service) {
        case 'seo':
            this.seoSelected.set(isSelected);
            this.seoData.set(data);
            break;
        case 'ads':
            this.adsSelected.set(isSelected);
            this.adsData.set(data);
            break;
        case 'web':
            this.webSelected.set(isSelected);
            this.webData.set(data);
            break;
        }
    }

    getSelectedServicesData() {
        return {
        web: this.webSelected() ? this.webData() : undefined,
        ads: this.adsSelected(),
        seo: this.seoSelected()
        };
    }

    hasSelectedServices(): boolean {
        return this.seoSelected() || this.adsSelected() || this.webSelected();
    }

    getTotalBudget(): number {
        return this.totalPrice();
    }

    resetTotalBudget(): void {
        this.resetBudget();
    }
    
}


