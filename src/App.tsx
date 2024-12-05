import React from 'react';
import { Building2, Home, Bell, FolderGit2, ClipboardList, BarChart2, Users, Settings, HelpCircle } from 'lucide-react';
import DashboardStats from './components/Dashboard/DashboardStats';
import CustomerList from './components/Customers/CustomerList';
import DealList from './components/Deals/DealList';
import ActivityList from './components/Activities/ActivityList';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900">ClientEase</span>
          </div>
        </div>
        
        <nav className="px-4 space-y-1">
          <NavItem icon={<Home />} text="Home" active={false} />
          <NavItem icon={<Bell />} text="Notifications" active={true} />
          <NavItem icon={<FolderGit2 />} text="Projects" active={false} />
          <NavItem icon={<ClipboardList />} text="Tasks" count={10} active={false} />
          <NavItem icon={<BarChart2 />} text="Reporting" active={false} />
          <NavItem icon={<Users />} text="Users" active={false} />
        </nav>

        <div className="absolute bottom-0 w-64 border-t border-gray-200">
          <nav className="px-4 py-4 space-y-1">
            <NavItem icon={<Bell />} text="Notifications" count={10} active={false} />
            <NavItem icon={<HelpCircle />} text="Support" active={false} />
            <NavItem icon={<Settings />} text="Settings" active={false} />
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-900">Bessie Cooper</div>
                <div className="text-sm text-gray-500">@bessie</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Customers</h1>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                <span>Import</span>
              </button>
              <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <span>Add Customer</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CustomerList />
              <div className="space-y-6">
                <DealList />
                <ActivityList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  count?: number;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, count, active }) => {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
        active
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <span className="w-5 h-5 mr-3">{icon}</span>
      <span>{text}</span>
      {count !== undefined && (
        <span className="ml-auto bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
          {count}
        </span>
      )}
    </a>
  );
};

export default App;