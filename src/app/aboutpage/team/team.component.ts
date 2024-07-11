import { Component, signal } from '@angular/core';

interface TeamMember {
  photo: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  members = signal<TeamMember[]>([
    {
      photo: '../../../assets/team/aathav_cha.png',
      name: 'Aathav Chander',
      role: 'SALES',
    },
    {
      photo: '../../../assets/team/aravind_rj.png',
      name: 'Aravind Jawahar',
      role: 'LOGISTICS',
    },
    {
      photo: '../../../assets/team/profile.jpg',
      name: 'Aravinth Msk',
      role: 'TECHNOLOGY',
    },
    {
      photo: '../../../assets/team/profile.jpg',
      name: 'Ashwanth',
      role: 'GREEN ENERGY',
    },
    {
      photo: '../../../assets/team/bharath_vp.png',
      name: 'Bharath',
      role: 'PROCUREMENT',
    },
    {
      photo: '../../../assets/team/jagadeesh.png',
      name: 'Jagadeesh',
      role: 'VENDOR MANAGEMENT',
    },
    {
      photo: '../../../assets/team/jaishankar.png',
      name: 'Jai Shankar',
      role: 'SUPPLY CHAIN MANAGEMENT',
    },
    {
      photo: '../../../assets/team/kalai.png',
      name: 'Kalai Raj',
      role: 'HR & OPERATIONS',
    },
    {
      photo: '../../../assets/team/manikandan.png',
      name: 'ManiKandan',
      role: 'LEGAL COMPLIANCE',
    },
    {
      photo: '../../../assets/team/kamaal.png',
      name: 'Mohammed Kamaal',
      role: 'LAND CONVERSION',
    },
    {
      photo: '../../../assets/team/profile.jpg',
      name: 'V Ramprasanna',
      role: 'BUSINESS DEVELOPMENT',
    },
  ]);
}
