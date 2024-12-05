import React from 'react';
import { X, Phone, Mail, Building2, Calendar, Target, BarChart3, MessageSquare } from 'lucide-react';
import { Customer, Deal, Activity } from '../../types';
import { deals, activities } from '../../data/mockData';
import { format, formatDistanceToNow } from 'date-fns';

interface CustomerDetailsModalProps {
  customer: Customer;
  onClose: () => void;
}

const CustomerDetailsModal: React.FC<CustomerDetailsModalProps> = ({ customer, onClose }) => {
  const customerDeals = deals.filter(deal => deal.customerId === customer.id);
  const customerActivities = activities.filter(activity => activity.customerId === customer.id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">{customer.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href={`mailto:${customer.email}`} className="hover:text-blue-600">
                    {customer.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href={`tel:${customer.phone}`} className="hover:text-blue-600">
                    {customer.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Building2 className="w-5 h-5 mr-3" />
                  <span>{customer.company}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>Last contact: {formatDistanceToNow(customer.lastContact)} ago</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Deals</h3>
              <div className="space-y-3">
                {customerDeals.map(deal => (
                  <div key={deal.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{deal.title}</span>
                      <span className="text-green-600">${deal.value.toLocaleString()}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        <span>{deal.stage.charAt(0).toUpperCase() + deal.stage.slice(1)}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Close: {format(deal.expectedCloseDate, 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {customerDeals.length === 0 && (
                  <p className="text-gray-500 italic">No active deals</p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {customerActivities.map(activity => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <ActivityIcon type={activity.type} />
                  <div>
                    <p className="text-gray-900">{activity.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDistanceToNow(activity.date)} ago
                    </p>
                  </div>
                </div>
              ))}
              {customerActivities.length === 0 && (
                <p className="text-gray-500 italic">No recent activities</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityIcon: React.FC<{ type: string }> = ({ type }) => {
  const icons = {
    call: <Phone className="w-5 h-5 text-blue-500" />,
    email: <Mail className="w-5 h-5 text-green-500" />,
    meeting: <Calendar className="w-5 h-5 text-purple-500" />,
    note: <MessageSquare className="w-5 h-5 text-yellow-500" />,
  };

  return icons[type as keyof typeof icons] || null;
};

export default CustomerDetailsModal;