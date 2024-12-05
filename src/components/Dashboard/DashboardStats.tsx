import React from 'react';
import { Users, Target, BarChart3, DollarSign, MoreVertical } from 'lucide-react';
import { customers, deals } from '../../data/mockData';

const DashboardStats: React.FC = () => {
  const totalCustomers = customers.length;
  const activeMembers = Math.floor(totalCustomers * 0.8);
  const activeNow = Math.floor(totalCustomers * 0.2);
  const growthRate = 20;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Customers"
        value={totalCustomers.toLocaleString()}
        change={growthRate}
        trend="up"
      />
      <StatCard
        title="Members"
        value={activeMembers.toLocaleString()}
        change={15}
        trend="up"
      />
      <StatCard
        title="Active Now"
        value={activeNow.toLocaleString()}
        avatars={[
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50',
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50'
        ]}
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change?: number;
  trend?: 'up' | 'down';
  avatars?: string[];
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, avatars }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-3xl font-semibold text-gray-900">{value}</div>
          {change && (
            <div className="mt-1 flex items-center">
              <span className={`text-sm ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {trend === 'up' ? '↑' : '↓'} {change}%
              </span>
            </div>
          )}
        </div>
        {avatars && (
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="User avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardStats;