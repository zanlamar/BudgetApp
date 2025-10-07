import { Component, Input, signal, computed, effect } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FinalCard } from '../final-card/final-card';
import { SubmissionData } from '../../../types/types';
import { filter } from 'rxjs';

@Component({
  selector: 'app-order-list',
  imports: [MatButtonToggleModule, FinalCard],
  templateUrl: './order-list.html',
  styleUrl: './order-list.scss',
  standalone: true
})
export class OrderList {

  ordersSignal = signal<SubmissionData[]>([]);
  private _orders: SubmissionData[] = [];

  @Input() get orders(): SubmissionData[] {
    return this._orders;
  }
  set orders(value: SubmissionData[]) {
    this._orders = value ?? [];
    this.ordersSignal.set([...this._orders]);
  }

  selectedServiceFilter = signal<string>('all');
  selectedPriceFilter = signal<string>('priciest');
  selectedNameFilter = signal<string>('A-Z');


  constructor() {
    effect(() => {
      const currentOrders = this.ordersSignal();
      if (currentOrders.length) {
        this.selectedServiceFilter.set('all');
      }
    });
  }

filteredOrders = computed(() => {
  const serviceFilter = this.selectedServiceFilter();
  const priceFilter = this.selectedPriceFilter();
  const nameFilter = this.selectedNameFilter();

  const filteredOrders = this.ordersSignal().filter(order => {
    switch (serviceFilter) {
      case "web": return !!order.services?.web;
      case "seo": return !!order.services?.seo;
      case "ads": return !!order.services?.ads;
      case "all": 
        default: 
          return !!order.services?.web || !!order.services?.seo || !!order.services?.ads;
    }
  });

  const result = [...filteredOrders];

  switch (priceFilter) {
    case "priciest": return result.sort((a, b) => a.totalPrice - b.totalPrice);
    case "cheapest": return result.sort((a, b) => b.totalPrice - a.totalPrice);
    default: 
      return filteredOrders;
  }
});
}  
