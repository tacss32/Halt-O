import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PassageComponent } from './passage/passage.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-applicationpage',
  standalone: true,
  templateUrl: './applicationpage.component.html',
  imports: [
    NavbarComponent,
    HeaderComponent,
    PassageComponent,
    FeaturesComponent,
    FooterComponent,
  ],
})
export class ApplicationpageComponent {}
