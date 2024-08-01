import { Component, input } from '@angular/core';

interface Blog {
  id: string;
  photo: string;
  date: string;
  topic: string;
  tags: string[];
  header: string;
  points: { title: string; content: string }[];
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  blog = input.required<Blog>();
}
