import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-final-price',
  imports: [],
  templateUrl: './final-price.html',
  styleUrl: './final-price.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalPrice {

  @Input() totalPrice = 0;
}



