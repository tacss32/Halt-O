import { Component } from '@angular/core';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MissionVissionComponent } from './mission-vission/mission-vission.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  templateUrl: './aboutpage.component.html',
  imports: [
    NavbarComponent,
    HeaderComponent,
    AboutusComponent,
    MissionVissionComponent,
    TeamComponent,
    FooterComponent,
  ],
})
export class AboutpageComponent {}
