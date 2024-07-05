import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ParkingpageComponent } from './parkingpage/parkingpage.component';
import { ApplicationpageComponent } from './applicationpage/applicationpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'about',
    component: AboutpageComponent,
  },
  {
    path: 'parking',
    component: ParkingpageComponent,
  },
  {
    path: 'application',
    component: ApplicationpageComponent,
  },
  {
    path: 'contact',
    component: ContactpageComponent,
  },
];
