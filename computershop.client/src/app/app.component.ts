import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  description: string;
}

interface HighlightItem {
  value: string;
  label: string;
}

interface SolutionItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly brand = 'Patel Enterprise';
  readonly tagline = 'Sales & Services';
  readonly headlinePrefix = 'Reliable IT Sales, CCTV, Networking and';
  readonly headlineHighlight = 'Business Support';
  readonly subheadline =
    'Patel Enterprise delivers trusted computer, laptop, CCTV, fire alarm, networking and security solutions for homes, offices and growing businesses.';
  readonly officeAddress =
    'Shop No. G-14, Basement, Megh Malhar Complex, Opp. HP Petrol Pump, Sector 11, Gandhinagar, Gujarat 382011';
  readonly email = 'sandipengineer@gmail.com';
  readonly primaryPhone = '8849614217';
  readonly secondaryPhone = '7801877041';
  readonly whatsappLink = 'https://wa.me/918849614217';

  readonly services: ServiceItem[] = [
    {
      title: 'CCTV Surveillance Systems',
      description: 'Supply, installation and maintenance of CCTV setups for shops, offices, societies and industrial sites.'
    },
    {
      title: 'Computer & Laptop Sales',
      description: 'Desktops, laptops, printers, accessories and genuine components from leading technology brands.'
    },
    {
      title: 'Networking Solutions',
      description: 'Structured cabling, router setup, Wi-Fi coverage, switch installation and office network support.'
    },
    {
      title: 'Fire Alarm Systems',
      description: 'Complete fire alarm system support with practical guidance for reliable protection and compliance.'
    },
    {
      title: 'Hardware & Software Support',
      description: 'Troubleshooting, upgrades, formatting, software installation and preventive maintenance services.'
    },
    {
      title: 'Data Storage & Security',
      description: 'Backup planning, storage devices, system protection and security-focused IT support for daily operations.'
    }
  ];

  readonly highlights: HighlightItem[] = [
    {
      value: '7+',
      label: 'Key service categories'
    },
    {
      value: 'Home to Office',
      label: 'Solutions for every scale'
    },
    {
      value: 'Fast Support',
      label: 'Responsive service assistance'
    }
  ];

  readonly solutions: SolutionItem[] = [
    {
      title: 'For Homes & Apartments',
      description: 'Security cameras, Wi-Fi improvement, laptop setup and everyday repair support.'
    },
    {
      title: 'For Shops & Offices',
      description: 'Business systems, attendance and surveillance support, networking and printer solutions.'
    },
    {
      title: 'For Ongoing Maintenance',
      description: 'Annual or on-call technical assistance to keep systems stable, secure and productive.'
    }
  ];

  readonly brands: string[] = ['HP', 'Dell', 'Apple', 'Asus', 'Lenovo', 'Toshiba', 'Acer'];
}
