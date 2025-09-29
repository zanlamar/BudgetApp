import { Component } from '@angular/core';
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
  seoSelected = false;
  adsSelected = false;
  webSelected = false;

  totalPrice = 0;

  private seoData = { pages: 1, languages: 1 };
  private adsData = { pages: 1, languages: 1 };
  private webData = { pages: 1, languages: 1 };

  onSeoSelectionChange(eventData: {isSelected: boolean, price: number, service: string, pagesNumber: number, languagesNumber: number}) {
    this.seoSelected = eventData.isSelected;
    this.seoData = {pages: eventData.pagesNumber, languages: eventData.languagesNumber}
    this.updateTotalPrice();
  }

  onAdsSelectionChange(eventData: {isSelected: boolean, price: number, service: string, pagesNumber: number, languagesNumber: number}) {
    this.adsSelected = eventData.isSelected;
    this.adsData = {pages: eventData.pagesNumber, languages: eventData.languagesNumber}
    this.updateTotalPrice();
  }

  onWebSelectionChange(eventData: {isSelected: boolean, price: number, service: string, pagesNumber: number, languagesNumber: number}) {
    this.webSelected = eventData.isSelected;
    this.webData = {pages: eventData.pagesNumber, languages: eventData.languagesNumber}
    this.updateTotalPrice();
  }

  private updateTotalPrice() {
    this.totalPrice = 0;

    if (this.seoSelected) {
      const pagesPrice = PRICES.seoService * this.seoData.pages;
      const languagesPrice = PRICES.extraLanguage * (this.seoData.languages - 1);
      this.totalPrice += pagesPrice + languagesPrice;
    }

    if (this.adsSelected) {
      const pagesPrice = PRICES.adsService * this.adsData.pages;
      const languagesPrice = PRICES.extraLanguage * (this.adsData.languages - 1);
      this.totalPrice += pagesPrice + languagesPrice;
    }

    if (this.webSelected) {
      const pagesPrice = PRICES.webService * this.webData.pages;
      const languagesPrice = PRICES.extraLanguage * (this.webData.languages - 1);
      this.totalPrice += pagesPrice + languagesPrice;
    }

  }


}
