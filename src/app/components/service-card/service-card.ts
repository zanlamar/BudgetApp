import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Panel } from '../panel/panel';
import { ServiceChangeEventFull } from '../../../types/types';

@Component({
  selector: 'app-service-card',
  imports: [Panel],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
  standalone: true,
})
export class ServiceCard {

  currentPages = 1;
  currentLanguages = 1;

  @Input() service = '';
  @Input() serviceDescription = '';
  @Input() price = '';
  @Input() isSelected = false;

  @Output() checkboxChanged = new EventEmitter<ServiceChangeEventFull>();

  onCheckboxChange(event: Event) {
    const isSelected = (event.target as HTMLInputElement).checked;
    
    this.checkboxChanged.emit({
      isSelected: isSelected,
      price: parseFloat(this.price),
      service: this.service,
      pages: this.currentPages,
      languages: this.currentLanguages,
    });
  }

  onPagesInputChange(pagesNumber: number) {
    this.currentPages = pagesNumber;
    if (this.isSelected) {
      this.emitChanges(true);
    }
  }

  onLanguagesInputChange(languagesNumber: number) {
    this.currentLanguages = languagesNumber;
    if (this.isSelected) {
      this.emitChanges(true);
    }
  }

  private emitChanges(isSelected: boolean) {
    this.checkboxChanged.emit({
      isSelected: isSelected,
      price: parseFloat(this.price),
      service: this.service,
      pages: this.currentPages,
      languages: this.currentLanguages,
    })
  }
}
