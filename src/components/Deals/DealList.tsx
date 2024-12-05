import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';
import { deals, customers } from '../../data/mockData';
import { format } from 'date-fns';

const DealList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Active Deals</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {deals.map((deal) => {
          const customer = customers.find(c => c.id === deal.customerId);
          return (
            <div key={deal.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{deal.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {customer?.company} - {customer?.name}
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>${deal.value.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Expected close: {format(deal.expectedCloseDate, 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                </div>
                <StageBadge stage={deal.stage} />
              </div>
              {deal.notes && (
                <p className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  {deal.notes}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const StageBadge: React.FC<{ stage: string }> = ({ stage }) => {
  const stageColors = {
    'qualification': 'bg-purple-100 text-purple-800',
    'proposal': 'bg-blue-100 text-blue-800',
    'negotiation': 'bg-yellow-100 text-yellow-800',
    'closed-won': 'bg-green-100 text-green-800',
    'closed-lost': 'bg-red-100 text-red-800',
  };

  const stageDisplay = stage.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${stageColors[stage as keyof typeof stageColors]}`}>
      {stageDisplay}
    </span>
  );
};

export default DealList;