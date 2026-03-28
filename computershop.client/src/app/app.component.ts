import { Component } from '@angular/core';

interface StatItem {
  value: string;
  label: string;
}

interface FeatureItem {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface PlanItem {
  name: string;
  audience: string;
  price: string;
  billing: string;
  features: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly brand = 'Patel Enterprise';
  readonly title = 'Powering Homes & Businesses with Smart IT Infrastructure';
  readonly tagline = 'From CCTV security to laptops, networking, and annual maintenance contracts, we deliver dependable technology that grows with your needs.';

  readonly stats: StatItem[] = [
    { value: '12+', label: 'Years of Service' },
    { value: '1,500+', label: 'Installations Completed' },
    { value: '98%', label: 'Client Retention Rate' }
  ];

  readonly features: FeatureItem[] = [
    {
      title: 'End-to-End Security Setup',
      description: 'CCTV planning, supply, installation, remote mobile viewing setup, and maintenance under one roof.'
    },
    {
      title: 'Business-Ready Systems',
      description: 'Desktops, laptops, and peripherals configured for offices, retail stores, and educational institutions.'
    },
    {
      title: 'Network & Infrastructure',
      description: 'Structured cabling, Wi-Fi optimization, routers, switches, and rack setup with documentation.'
    }
  ];

  readonly principles: FeatureItem[] = [
    {
      title: 'Site-First Assessment',
      description: 'Every solution starts with a practical site survey so we can recommend only what truly fits your environment.'
    },
    {
      title: 'Quality-Driven Procurement',
      description: 'We partner with trusted brands to ensure stable performance, genuine warranties, and longer hardware life.'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear quotations, implementation timelines, and post-installation training for your team.'
    },
    {
      title: 'Ongoing Service Commitment',
      description: 'Fast issue resolution, preventive maintenance visits, and continuous support after deployment.'
    }
  ];

  readonly process: ProcessStep[] = [
    {
      title: 'Discovery Call',
      description: 'Share your requirements for security coverage, computing capacity, and service expectations.'
    },
    {
      title: 'On-Site Survey',
      description: 'Our engineers inspect your location and map technical requirements and constraints.'
    },
    {
      title: 'Proposal & Deployment',
      description: 'Receive a detailed proposal, approve your package, and get professional installation by our team.'
    },
    {
      title: 'Support & AMC',
      description: 'Stay protected with scheduled maintenance, rapid troubleshooting, and upgrades as your needs evolve.'
    }
  ];

  readonly plans: PlanItem[] = [
    {
      name: 'Essential Care',
      audience: 'For homes & small shops',
      price: '₹2,999',
      billing: '/quarter',
      features: [
        'Up to 4 CCTV camera health checks',
        'One preventive maintenance visit',
        'Remote troubleshooting support',
        'Priority spare-part sourcing'
      ]
    },
    {
      name: 'Business Shield',
      audience: 'For offices & retail chains',
      price: '₹7,499',
      billing: '/quarter',
      features: [
        'Up to 16 camera + network audit',
        'Two preventive maintenance visits',
        'System backup & software updates',
        'Same-day support response',
        'Dedicated service coordinator'
      ],
      featured: true
    },
    {
      name: 'Enterprise Plus',
      audience: 'For campuses & multi-site teams',
      price: 'Custom',
      billing: 'plan',
      features: [
        'Multi-branch infrastructure management',
        'Centralized monitoring advisory',
        'Monthly performance reporting',
        'SLA-based on-call engineering',
        'Procurement and upgrade planning'
      ]
    }
  ];

  readonly faqs: string[] = [
    'Do you provide genuine branded products with warranty?',
    'Can you migrate our existing CCTV and networking setup?',
    'What is your response time for AMC clients?',
    'Do you provide service support outside business hours?',
    'Can we get a custom quote for multiple branch locations?'
  ];
}
