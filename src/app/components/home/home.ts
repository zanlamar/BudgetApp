import { Component } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { FinalPrice } from '../final-price/final-price';


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

  onSeoSelectionChange(eventData: {isSelected: boolean, price: number, service: string}) {
    this.seoSelected = eventData.isSelected;
    this.updateTotalPrice(eventData);
  }

  onAdsSelectionChange(eventData: {isSelected: boolean, price: number, service: string}) {
    this.adsSelected = eventData.isSelected;
    this.updateTotalPrice(eventData);
  }

  onWebSelectionChange(eventData: {isSelected: boolean, price: number, service: string}) {
    this.webSelected = eventData.isSelected;
    this.updateTotalPrice(eventData);
  }


  private updateTotalPrice(data: {isSelected: boolean, price: number, service: string}) {
    if (data.isSelected) {
      this.totalPrice += data.price;
    } else {
        this.totalPrice -= data.price;
    };
  }
}
