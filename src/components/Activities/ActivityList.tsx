import React from 'react';
import { Phone, Mail, Calendar, MessageSquare } from 'lucide-react';
import { activities, customers } from '../../data/mockData';
import { formatDistanceToNow } from 'date-fns';

const ActivityList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity) => {
          const customer = customers.find(c => c.id === activity.customerId);
          return (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <ActivityIcon type={activity.type} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.description}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {customer?.name} - {customer?.company}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDistanceToNow(activity.date)} ago
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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

export default ActivityList;