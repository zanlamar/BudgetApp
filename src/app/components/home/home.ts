import { Component } from '@angular/core';
import { ServiceCard } from '../service-card/service-card';


@Component({
  selector: 'app-home',
  imports: [ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {

}
