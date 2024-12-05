import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal } from 'lucide-react';
import { customers } from '../../data/mockData';
import { Customer } from '../../types';
import CustomerDetailsModal from './CustomerDetailsModal';

const CustomerList: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <input type="checkbox" className="rounded border-gray-300" />
              </button>
              <span className="text-sm font-medium text-gray-500">Company</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedCustomer(customer)}
            >
              <div className="flex items-center">
                <input type="checkbox" className="mr-4 rounded border-gray-300" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{customer.company}</h3>
                      <p className="text-sm text-gray-500">{customer.name}</p>
                    </div>
                    <StatusBadge status={customer.status} />
                  </div>
                  <div className="mt-2 flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{customer.email}</span>
                    <span className="text-sm text-gray-500">{customer.phone}</span>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCustomer && (
        <CustomerDetailsModal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const statusColors = {
    lead: 'bg-yellow-100 text-yellow-800',
    opportunity: 'bg-blue-100 text-blue-800',
    customer: 'bg-green-100 text-green-800',
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default CustomerList;