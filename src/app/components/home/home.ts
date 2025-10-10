import { Component, signal, inject} from '@angular/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { ServiceCard } from '../service-card/service-card';
import { FinalPrice } from '../final-price/final-price';

import { ServiceState } from '../../services/serviceState-service';

import { ContactForm } from '../contact-form/contact-form';

import { ConfirmedSubmission } from '../../services/createOrder'; 
import { SubmissionData, ContactFormData, ServiceChangeEvent } from '../../../types/types';

import { OrderList } from '../order-list/order-list';


@Component({
  selector: 'app-home',
  imports: [ServiceCard, FinalPrice, ContactForm, OrderList, MatSnackBarModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

  // parte servicios

  serviceState = inject(ServiceState);
  private orderService = inject(ConfirmedSubmission);
  
  orderSummary = signal<SubmissionData | null>(null);
  allOrders = signal<SubmissionData[]>([]);
  private orderIdCounter = 0;

  private snackBar = inject(MatSnackBar);


  // checkboxes

  onServiceChange(service: 'seo' | 'ads' | 'web', event: ServiceChangeEvent): void {
    this.serviceState.updateService(service, event.isSelected, {
      pages: event.pages,
      languages: event.languages
    });
  }

  // parte snackbar

  private showSnackBar(message: string, type: 'success' | 'error') {
      this.snackBar.open(message, 'Close', {
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: type === 'success' ? ['snackbar-success'] : ['snackbar-error'],
    });
  }

  
  // parte del form

  onFormSubmitted(formData: ContactFormData):void {
    if (!this.serviceState.hasSelectedServices()) {
      this.showSnackBar('Please select at least one service before submitting.', 'error');
      return; 
    }

    const submission = this.orderService.createSubmission(
      formData,
      this.serviceState.getSelectedServicesData(),
      this.serviceState.totalPrice(),
    );

      this.orderIdCounter++;
      const submissionWithId = { 
        ...submission,
        id: this.orderIdCounter
      };

    this.allOrders.update(orders => [...orders, submissionWithId]);
    this.orderSummary.set(submissionWithId);
    this.serviceState.resetBudget();
    this.showSnackBar(`Thank you, ${submission.userName}! Your we will get in touch with you soon`, 'success');
  }
}




