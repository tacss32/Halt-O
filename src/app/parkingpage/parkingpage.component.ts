import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecycleComponent } from './recycle/recycle.component';

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
  ],
})
export class ParkingpageComponent {}
