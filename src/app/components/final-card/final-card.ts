import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionData } from '../../../types/types';


@Component({
  selector: 'app-final-card',
  imports: [CommonModule],
  templateUrl: './final-card.html',
  styleUrl: './final-card.scss',
  standalone: true,
})
export class FinalCard {

  @Input() order: SubmissionData | null = null;

}
