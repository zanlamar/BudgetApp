import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Panel } from '../panel/panel';

@Component({
  selector: 'app-service-card',
  imports: [Panel],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
  standalone: true,
})
export class ServiceCard {

  currentPages: number = 1;
  currentLanguages: number = 1;

  @Input() service: string = '';
  @Input() serviceDescription: string = '';
  @Input() price: string = '';
  @Input() isSelected: boolean = false;

  @Output() checkboxChanged = new EventEmitter<{
    isSelected: boolean;
    price: number;
    service: string;
    pagesNumber: number;
    languagesNumber: number;
  }>();

  onCheckboxChange(event: any) {
    const isSelected = event.target.checked;

    this.checkboxChanged.emit({
      isSelected: isSelected,
      price: parseFloat(this.price),
      service: this.service,
      pagesNumber: this.currentPages,
      languagesNumber: this.currentLanguages,
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
      pagesNumber: this.currentPages,
      languagesNumber: this.currentLanguages,
    })
  }
}
