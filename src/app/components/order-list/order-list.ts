import { Component, Input, signal, computed } from '@angular/core';
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

 @Input() orders: SubmissionData[] = [];
  selectedFilter = signal<string>('all');

  filteredOrders = computed(() => {
    const filter = this.selectedFilter();
    return this.orders.filter(order => {
      const services = order.services ?? {};

      switch (filter) {
        case 'web':
          return !!services.web;
        case 'seo':
          return !!services.seo;
        case 'ads':
          return !!services.ads;
        case 'all':
        default:
          return services.web || services.seo || services.ads;
      }
    });
  });
}
