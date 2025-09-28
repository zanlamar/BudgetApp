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

  @Input() service: string = '';
  @Input() serviceDescription: string = '';
  @Input() price: string = '';
  @Input() isSelected: boolean = false;

  @Output() checkboxChanged = new EventEmitter<boolean>();

  onCheckboxChange(event: any) {
    const isSelected = event.target.checked;
    this.checkboxChanged.emit(isSelected);
  }
  


}
