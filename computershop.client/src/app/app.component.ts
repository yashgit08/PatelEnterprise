import { Component } from '@angular/core';

interface ServiceItem {
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

interface PricingItem {
  name: string;
  price: string;
  detail: string;
  features: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly brand = 'PMS';
  readonly headlinePrefix = 'Empowering Your';
  readonly subheadline =
    'Tailored investment strategies for discerning investors. Experience professional portfolio management with expertise, transparency, and unwavering trust.';

  readonly services: ServiceItem[] = [
    {
      title: 'Wealth Planning',
      description: 'Goal-focused plans for education, retirement, and generational wealth transfer.'
    },
    {
      title: 'Portfolio Management',
      description: 'Data-backed portfolio construction with active risk management and diversification.'
    },
    {
      title: 'Tax Optimization',
      description: 'Tax-aware investing strategies that protect returns and support long-term growth.'
    }
  ];

  readonly testimonials: TestimonialItem[] = [
    {
      quote: 'Their disciplined approach gave me confidence and measurable long-term growth.',
      name: 'Michael Turner',
      role: 'Business Owner'
    },
    {
      quote: 'Clear reporting, practical advice, and excellent communication at every step.',
      name: 'Olivia Brooks',
      role: 'Healthcare Professional'
    },
    {
      quote: 'From planning to execution, they handled our family portfolio exceptionally well.',
      name: 'Daniel Reed',
      role: 'Entrepreneur'
    }
  ];

  readonly pricing: PricingItem[] = [
    {
      name: 'Starter Advisory',
      price: '$199/mo',
      detail: 'For individuals beginning their investment journey.',
      features: ['Financial health review', 'Quarterly portfolio check-ins', 'Email support']
    },
    {
      name: 'Growth Strategy',
      price: '$449/mo',
      detail: 'For professionals seeking active portfolio guidance.',
      features: ['Custom asset allocation', 'Monthly performance reports', 'Priority advisor access', 'Tax planning support'],
      featured: true
    },
    {
      name: 'Private Wealth',
      price: 'Custom',
      detail: 'For families and executives with complex financial goals.',
      features: ['Dedicated wealth manager', 'Estate and legacy planning', 'Advanced risk analytics']
    }
  ];
}
