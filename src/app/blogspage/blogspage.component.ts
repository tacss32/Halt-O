import { Component, inject } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogspage',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CardComponent],
  templateUrl: './blogspage.component.html',
})
export class BlogspageComponent {
  private blogsService = inject(BlogsService);
  blogs = this.blogsService.blogs;
}
