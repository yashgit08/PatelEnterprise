import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Patel Enterprise - Sales & Services';
  tagline = 'All types of CCTV cameras, computers, laptops, and accessories under one roof.';

  services: ServiceItem[] = [
    {
      title: 'CCTV Cameras',
      description: 'HD, IP, and smart surveillance setups with installation and maintenance support.'
    },
    {
      title: 'Computers & Laptops',
      description: 'New systems, upgrades, and tailored business or home-use recommendations.'
    },
    {
      title: 'Accessories',
      description: 'Keyboards, mouse, storage devices, networking tools, and power backup solutions.'
    },
    {
      title: 'Sales & Services',
      description: 'Trusted product guidance, quick repairs, and after-sales support from experts.'
    }
  ];

  highlights: string[] = [
    'Professional installation and setup',
    'Affordable pricing with quality products',
    'On-site service for homes and offices'
  ];
}
