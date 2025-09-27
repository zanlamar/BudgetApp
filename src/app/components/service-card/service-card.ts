import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
  standalone: true,
})
export class ServiceCard {

  @Input() service: string = '';
  @Input() serviceDescription: string = '';
  @Input() price: string = '';


}
