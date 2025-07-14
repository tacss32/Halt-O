import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-features',
    imports: [],
    templateUrl: './features.component.html'
})
export class FeaturesComponent {
  features = signal<string[]>([
    'Pay for the parking',
    'Data Analytics on parking utilization',
    'Transparency in parking charges',
    'Real Time Parking infrastructure',
    'View your past and upcoming bookings',
    'Pay using your wallet or bank',
    'User can recharge their wallet from bank',
    'Advance book or Instant book',
    'Park the vehicle',
    'Live CCTV view of your parked vehicle',
  ]);
}
