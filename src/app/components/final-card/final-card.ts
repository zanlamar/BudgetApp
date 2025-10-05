import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createSummary } from 'src/app/model/summary.model';

@Component({
  selector: 'app-final-card',
  imports: [CommonModule],
  templateUrl: './final-card.html',
  styleUrl: './final-card.scss'
})
export class FinalCard {
  createSummary = createSummary;

}
