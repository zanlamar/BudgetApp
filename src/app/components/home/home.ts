import { Component, signal, computed} from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { FinalPrice } from '../final-price/final-price';
import { PRICES } from '../../model/pricing.constants';


@Component({
  selector: 'app-home',
  imports: [ServiceCard, FinalPrice],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

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
      total += PRICES.seoService * data.pages + (data.languages -1 ) * PRICES.extraLanguage
    }

    if (this.adsSelected()) {
      const data = this.adsData();
      total += PRICES.adsService * data.pages + (data.languages -1 ) * PRICES.extraLanguage
    }

    if (this.webSelected()) {
      const data = this.webData();
      total += PRICES.webService * data.pages + (data.languages -1 ) * PRICES.extraLanguage
    }

    return total; 
  });


  onSeoSelectionChange(eventData: {isSelected: boolean, price: number, service: string, pages: number, languages: number}) {
    this.seoSelected.set(eventData.isSelected);
    this.seoData.set({pages: eventData.pages, languages: eventData.languages});
  }

  onAdsSelectionChange(eventData: {isSelected: boolean, price: number, service: string, pages: number, languages: number}) {
    this.adsSelected.set(eventData.isSelected);
    this.adsData.set({pages: eventData.pages, languages: eventData.languages});
  }

  onWebSelectionChange(eventData: {isSelected: boolean, price: number, service: string, pages: number, languages: number}) {
    this.webSelected.set(eventData.isSelected);
    this.webData.set({pages: eventData.pages, languages: eventData.languages});
  }


}
