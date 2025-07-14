import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { PassageComponent } from './passage/passage.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BackComponent } from '../../components/back/back.component';

@Component({
    selector: 'app-applicationpage',
    templateUrl: './applicationpage.component.html',
    imports: [
        NavbarComponent,
        HeaderComponent,
        PassageComponent,
        FeaturesComponent,
        FooterComponent,
        BackComponent,
    ]
})
export class ApplicationpageComponent {
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
