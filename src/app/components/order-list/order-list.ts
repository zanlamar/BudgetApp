import { Component, Input, signal, computed, effect } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FinalCard } from '../final-card/final-card';
import { SubmissionData } from '../../../types/types';

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

  selectedFilter = signal<string>('all');
  selectedPriceFilter = signal<string>('all');
  selectedNameFilter = signal<string>('all');


  constructor() {
    effect(() => {
      const currentOrders = this.ordersSignal();
      if (currentOrders.length) {
        this.selectedFilter.set('all');
      }
    });
  }

 filteredOrders = computed(() => {
  const filter = this.selectedFilter();
  return this.ordersSignal().filter(order => {
    switch (filter) {
      case 'web': return !!order.services?.web;
      case 'seo': return !!order.services?.seo;
      case 'ads': return !!order.services?.ads;
      case 'all':
      default: 
        return !!order.services?.web || !!order.services?.seo || !!order.services?.ads;
    }
  });
});
}  
