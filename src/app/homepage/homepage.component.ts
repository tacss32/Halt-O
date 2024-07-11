import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TruckComponent } from './truck/truck.component';
import { AppComponent } from './app/app.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BackComponent } from '../../components/back/back.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  imports: [
    NavbarComponent,
    HeaderComponent,
    SlidersComponent,
    TruckComponent,
    AppComponent,
    FooterComponent,
    BackComponent,
  ],
})
export class HomepageComponent {}
