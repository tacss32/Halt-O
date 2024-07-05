import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  templateUrl: './contactpage.component.html',
  imports: [NavbarComponent, HeaderComponent],
})
export class ContactpageComponent {}
