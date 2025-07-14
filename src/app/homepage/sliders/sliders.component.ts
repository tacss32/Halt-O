import { Component } from '@angular/core';
import { Carousel, initTWE } from 'tw-elements';

@Component({
    selector: 'app-sliders',
    imports: [],
    templateUrl: './sliders.component.html'
})
export class SlidersComponent {
  ngOnInit() {
    initTWE({ Carousel });
  }
}
