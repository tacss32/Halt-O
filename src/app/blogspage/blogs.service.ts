import { Injectable } from '@angular/core';

import { Blogs } from './blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  get blogs() {
    return Blogs;
  }
}
