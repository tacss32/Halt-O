import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  templateUrl: './contactpage.component.html',
  imports: [
    NavbarComponent,
    HeaderComponent,
    QuestionsComponent,
    FooterComponent,
  ],
})
export class ContactpageComponent {}
