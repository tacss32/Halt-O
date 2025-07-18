import { Component, signal } from '@angular/core';

interface TeamMember {
  photo: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  members = signal<TeamMember[]>([
    {
      photo: '../../../assets/team/aathav_cha.jpg',
      name: 'Aathav Chander',
      role: 'SALES',
    },
    {
      photo: '../../../assets/team/aravind_rj.jpg',
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
      photo: '../../../assets/team/bharath_vp.jpg',
      name: 'Bharath',
      role: 'PROCUREMENT',
    },
    {
      photo: '../../../assets/team/ganeshpandian.jpg',
      name: 'Ganesh Pandian',
      role: 'Business to Government B2G',
    },
    {
      photo: '../../../assets/team/jagadeesh.jpg',
      name: 'Jagadeesh',
      role: 'VENDOR MANAGEMENT',
    },
    {
      photo: '../../../assets/team/jaishankar.jpg',
      name: 'Jai Shankar',
      role: 'SUPPLY CHAIN MANAGEMENT',
    },
    {
      photo: '../../../assets/team/jayshankaranK.jpg',
      name: 'Jayshankaran K',
      role: 'Head Transformation',
    },
    {
      photo: '../../../assets/team/kalai.jpg',
      name: 'Kalai Raj',
      role: 'HR & OPERATIONS',
    },
    {
      photo: '../../../assets/team/manikandan.jpg',
      name: 'ManiKandan',
      role: 'LEGAL COMPLIANCE',
    },
    {
      photo: '../../../assets/team/kamaal.jpg',
      name: 'Mohammed Kamaal',
      role: 'LAND CONVERSION',
    },
    {
      photo: '../../../assets/team/profile.jpg',
      name: 'Ramprasanna V',
      role: 'BUSINESS DEVELOPMENT',
    },
  ]);
}
