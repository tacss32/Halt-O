import { Component, computed, inject, input } from '@angular/core';

import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blogpage',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './blogpage.component.html',
})
export class BlogpageComponent {
  blogId = input.required<string>();

  private blogsService = inject(BlogsService);
  blog = computed(() =>
    this.blogsService.blogs.find((blog) => blog.id == this.blogId())
  );
}
