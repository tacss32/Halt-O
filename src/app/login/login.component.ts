import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
    selector: 'app-login',
    imports: [NavbarComponent],
    templateUrl: './login.component.html'
})
export class LoginComponent {
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
