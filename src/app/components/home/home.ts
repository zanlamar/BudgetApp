import { Component, signal, inject} from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { FinalPrice } from '../final-price/final-price';
import { ServiceChangeEvent } from '../../model/service-event.model';

import { ServiceState } from '../../services/serviceState-service';

import { ContactForm } from '../contact-form/contact-form';

import { ConfirmedSubmission } from '../../services/createOrder'; 
import { SubmissionData, ContactFormData } from '../../../types/types';

import { OrderList } from '../order-list/order-list';



@Component({
  selector: 'app-home',
  imports: [ServiceCard, FinalPrice, ContactForm, OrderList ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

  private serviceState = inject(ServiceState);
  private orderService = inject(ConfirmedSubmission);
  private orderIdCounter = 0;

  // Exponer señales del servicio (en lugar de crear nuevas)
  seoSelected = this.serviceState.seoSelected$;
  adsSelected = this.serviceState.adsSelected$;
  webSelected = this.serviceState.webSelected$;
  totalPrice = this.serviceState.totalPrice;

  orderSummary = signal<SubmissionData | null>(null);
  
  allOrders = signal<SubmissionData[]>([]);

  onSeoSelectionChange(eventData: ServiceChangeEvent): void {
    this.serviceState.updateService('seo', eventData.isSelected, {
      pages: eventData.pages,
      languages: eventData.languages
    });
  }

  onAdsSelectionChange(eventData: ServiceChangeEvent): void {
    this.serviceState.updateService('ads', eventData.isSelected, {
      pages: eventData.pages,
      languages: eventData.languages
    });
  }

  onWebSelectionChange(eventData: ServiceChangeEvent): void {
    this.serviceState.updateService('web', eventData.isSelected, {
      pages: eventData.pages,
      languages: eventData.languages
    });
  }

  onFormSubmitted(formData: ContactFormData) {
    if (this.totalPrice() === 0) {
      alert('Please select at least one service before submitting.');
      return; 
    }

    const submission = this.orderService.createSubmission(
      formData,
      this.serviceState.getSelectedServicesData(),
      this.totalPrice()
    );

      this.orderIdCounter++;
      const submissionWithId = { 
        ...submission,
        id: this.orderIdCounter
      };

    this.allOrders.update(orders => [...orders, submissionWithId]);
    this.orderSummary.set(submissionWithId);
    this.serviceState.resetBudget();

    alert(`Thank you, ${submission.userName}! Your we will get in touch with you soon.`);
  }
}

