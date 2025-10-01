import { Component, signal, computed, inject} from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { FinalPrice } from '../final-price/final-price';
import { PRICES } from '../../model/pricing.constants';
import { ServiceChangeEvent } from '../../model/service-event.model';
import { BudgetCalculatorService} from '../../services/calculateBudget-service'
import { ContactForm } from '../contact-form/contact-form';


@Component({
  selector: 'app-home',
  imports: [ServiceCard, FinalPrice, ContactForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

  private budgetCalculator = inject(BudgetCalculatorService);

  seoSelected = signal(false);
  adsSelected = signal(false);
  webSelected = signal(false);

  seoData = signal({ pages: 1, languages: 1 });
  adsData = signal({ pages: 1, languages: 1 });
  webData = signal({ pages: 1, languages: 1 });

  totalPrice = computed(() => {
    let total = 0;

    if (this.seoSelected()) {
      const data = this.seoData();
      total += this.budgetCalculator.calculateServicePrice(
        PRICES.seoService, 
        data.pages,
        data.languages
      );
    }

    if (this.adsSelected()) {
      const data = this.adsData();
       total += this.budgetCalculator.calculateServicePrice(
        PRICES.adsService,
        data.pages,
        data.languages
      );
    }

    if (this.webSelected()) {
      const data = this.webData();
      total += this.budgetCalculator.calculateServicePrice(
        PRICES.webService,
        data.pages,
        data.languages
      );
    }

    return total;
  });


  onSeoSelectionChange(eventData: ServiceChangeEvent) {
    this.seoSelected.set(eventData.isSelected);
    this.seoData.set({pages: eventData.pages, languages: eventData.languages});
  }

  onAdsSelectionChange(eventData: ServiceChangeEvent) {
    this.adsSelected.set(eventData.isSelected);
    this.adsData.set({pages: eventData.pages, languages: eventData.languages});
  }

  onWebSelectionChange(eventData: ServiceChangeEvent) {
    this.webSelected.set(eventData.isSelected);
    this.webData.set({pages: eventData.pages, languages: eventData.languages});
  }


}
