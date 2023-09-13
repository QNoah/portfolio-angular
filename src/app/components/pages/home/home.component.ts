import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  customOptions: OwlOptions = {
    items: 1, // Slechts één item tegelijkertijd weergeven
  autoplay: true, // Automatisch afspelen inschakelen
  autoplayTimeout: 5000, // Tijd tussen elke dia in milliseconden (bijv. 3000ms = 3 seconden)
  autoplayHoverPause: true, // Pauzeer automatisch afspelen wanneer de muis over de carrousel zweeft
  loop: true, // Laat de carrousel continu doorlopen
  dots: false,
  };
}
