import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecycleComponent } from './recycle/recycle.component';
import { BackComponent } from '../../components/back/back.component';

@Component({
  selector: 'app-parkingpage',
  standalone: true,
  templateUrl: './parkingpage.component.html',
  imports: [
    NavbarComponent,
    HeaderComponent,
    EcosystemComponent,
    FooterComponent,
    RecycleComponent,
    BackComponent,
  ],
})
export class ParkingpageComponent {
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
