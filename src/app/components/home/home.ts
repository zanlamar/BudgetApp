import { Component } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';
import { Panel } from '../panel/panel';


@Component({
  selector: 'app-home',
  imports: [ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {
  seoSelected = false;
  adsSelected = false;
  webSelected = false;

  onSeoSelectionChange(isSelected:boolean) {
    this.seoSelected = isSelected;
  }

  onAdsSelectionChange(isSelected:boolean) {
    this.adsSelected = isSelected;
  }

  onWebSelectionChange(isSelected:boolean) {
    this.webSelected = isSelected;
  }

}
