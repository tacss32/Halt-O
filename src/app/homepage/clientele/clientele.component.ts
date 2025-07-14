import { Component } from '@angular/core';

@Component({
  selector: 'app-clientele',
  standalone: true,
  imports: [],
  templateUrl: './clientele.component.html',
})
export class ClienteleComponent {
  logos = [
    '../../../assets/clientele/apollo.jpg',
    '../../../assets/clientele/MyTvsLogo.svg',
    '../../../assets/clientele/khalf.jpg',
    '../../../assets/clientele/urbaser.jpg',
    '../../../assets/clientele/rootquotient.png',
    '../../../assets/clientele/hyundai.png',
    '../../../assets/clientele/upavihar.jpg',
    '../../../assets/clientele/v3.jpg',
    '../../../assets/clientele/kyn.jpg',
  ];

  duplicatedLogos = [
    ...this.logos,
    ...this.logos,
    ...this.logos,
    ...this.logos,
  ];
}
