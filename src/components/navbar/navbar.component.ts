import {
  Component,
  HostListener,
  inject,
  signal,
  ElementRef,
  Renderer2,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

interface Menu {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnDestroy {
  menuOpen = signal<boolean>(false);
  isScroll = signal<boolean>(true);
  pages = signal<Menu[]>([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Application', path: '/application' },
    { name: 'Parking-Ecosystem', path: '/parking' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ]);

  private router = inject(Router);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  private clickListener: () => void;
  private lastScrollTop = 0;
  navbarVisible = signal<boolean>(true);

  constructor() {
    this.clickListener = this.renderer.listen(
      'document',
      'click',
      (event: Event) => {
        this.onClickOutside(event);
      }
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.scrollY;
    if (st > this.lastScrollTop) {
      this.navbarVisible.set(false);
    } else {
      this.navbarVisible.set(true);
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
    this.isScroll.set(window.scrollY <= 10);
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.menuOpen.set(false);
    }
  }

  ngOnDestroy() {
    this.clickListener(); // Remove the event listener when the component is destroyed
  }
}
