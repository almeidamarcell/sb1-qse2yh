export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'lead' | 'opportunity' | 'customer';
  lastContact: Date;
}

export interface Deal {
  id: string;
  customerId: string;
  title: string;
  value: number;
  stage: 'qualification' | 'proposal' | 'negotiation' | 'closed-won' | 'closed-lost';
  expectedCloseDate: Date;
  notes: string;
}

export interface Activity {
  id: string;
  customerId: string;
  type: 'call' | 'email' | 'meeting' | 'note';
  description: string;
  date: Date;
}