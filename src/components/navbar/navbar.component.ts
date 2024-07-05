import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = signal<boolean>(false);
  isScroll = signal<boolean>(true);

  private router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.menuOpen.set(false);
    this.isScroll.set(window.scrollY <= 100);
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
