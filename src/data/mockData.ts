import { Customer, Deal, Activity } from '../types';

export const customers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@company.com',
    phone: '(555) 123-4567',
    company: 'Tech Solutions Inc',
    status: 'opportunity',
    lastContact: new Date('2024-03-10'),
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@innovate.co',
    phone: '(555) 987-6543',
    company: 'Innovate Co',
    status: 'lead',
    lastContact: new Date('2024-03-12'),
  },
];

export const deals: Deal[] = [
  {
    id: '1',
    customerId: '1',
    title: 'Enterprise Software License',
    value: 50000,
    stage: 'proposal',
    expectedCloseDate: new Date('2024-04-15'),
    notes: 'Pending technical review',
  },
];

export const activities: Activity[] = [
  {
    id: '1',
    customerId: '1',
    type: 'call',
    description: 'Initial discovery call',
    date: new Date('2024-03-10'),
  },
  {
    id: '2',
    customerId: '2',
    type: 'email',
    description: 'Sent product information',
    date: new Date('2024-03-12'),
  },
];