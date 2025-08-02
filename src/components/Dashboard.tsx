import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Award, MapPin, Camera, TrendingUp, Plus, Filter, Search, CreditCard, FileText, Settings, Building, User, Bell, Shield, Eye, EyeOff, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { PollutionReport, CleanupActivity, Site } from '../types';
import SiteRegistration from './SiteRegistration';
import Marketplace from './Marketplace';
import ReportForm from './ReportForm';
import CleanupForm from './CleanupForm';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'cleanup' | 'marketplace' | 'sites' | 'credits' | 'settings'>('overview');
  const [showSiteModal, setShowSiteModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showCleanupModal, setShowCleanupModal] = useState(false);
  const [sites, setSites] = useState<Site[]>([]);

  // Mock data
  const pollutionData = [
    { name: 'Jan', reports: 12, cleanups: 8 },
    { name: 'Feb', reports: 19, cleanups: 15 },
    { name: 'Mar', reports: 15, cleanups: 12 },
    { name: 'Apr', reports: 22, cleanups: 18 },
    { name: 'May', reports: 18, cleanups: 16 },
    { name: 'Jun', reports: 25, cleanups: 20 }
  ];

  const pollutionTypes = [
    { name: 'Plastic', value: 35, color: '#3B82F6' },
    { name: 'Chemical', value: 25, color: '#EF4444' },
    { name: 'Oil', value: 20, color: '#F59E0B' },
    { name: 'Sewage', value: 15, color: '#10B981' },
    { name: 'Other', value: 5, color: '#8B5CF6' }
  ];

  const tokenEarnings = [
    { month: 'Jan', tokens: 150 },
    { month: 'Feb', tokens: 230 },
    { month: 'Mar', tokens: 180 },
    { month: 'Apr', tokens: 290 },
    { month: 'May', tokens: 240 },
    { month: 'Jun', tokens: 320 }
  ];

  const mockReports: PollutionReport[] = [
    {
      id: '1',
      userId: user?.id || '1',
      location: { lat: 40.7128, lng: -74.0060, address: 'Hudson River, NYC' },
      pollutionType: 'plastic',
      severity: 'high',
      description: 'Large amount of plastic debris observed',
      status: 'verified',
      reportedAt: new Date('2024-01-15'),
      tokensRewarded: 50
    },
    {
      id: '2',
      userId: user?.id || '1',
      location: { lat: 34.0522, lng: -118.2437, address: 'Santa Monica Beach, CA' },
      pollutionType: 'oil',
      severity: 'critical',
      description: 'Oil spill contaminating beach area',
      status: 'pending',
      reportedAt: new Date('2024-01-20')
    }
  ];

  const mockCleanups: CleanupActivity[] = [
    {
      id: '1',
      userId: user?.id || '1',
      reportId: '1',
      description: 'Removed 15kg of plastic waste from river bank',
      beforeImageUrl: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg',
      afterImageUrl: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
      tokensEarned: 75,
      verificationStatus: 'verified',
      submittedAt: new Date('2024-01-16')
    }
  ];

  const handleSiteRegistration = (siteData: any) => {
    const newSite: Site = {
      ...siteData,
      userId: user?.id || '1'
    };
    setSites(prev => [...prev, newSite]);
  };

  const handleBuyTokens = (amount: number, price: number) => {
    console.log('Buying tokens:', amount, 'at price:', price);
    // Handle token purchase logic
  };

  const handleSellTokens = (amount: number, price: number) => {
    console.log('Selling tokens:', amount, 'at price:', price);
    // Handle token sale logic
  };

  const handleReportSubmit = (reportData: any) => {
    console.log('New report submitted:', reportData);
    // Handle report submission logic
  };

  const handleCleanupSubmit = (cleanupData: any) => {
    console.log('New cleanup submitted:', cleanupData);
    // Handle cleanup submission logic
  };

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Tokens</p>
              <p className="text-3xl font-bold">{user?.tokens || 0}</p>
            </div>
            <Award className="h-12 w-12 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 text-sm">Reports Submitted</p>
              <p className="text-3xl font-bold">{user?.reportsSubmitted || 0}</p>
            </div>
            <MapPin className="h-12 w-12 text-teal-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Cleanups Completed</p>
              <p className="text-3xl font-bold">{user?.cleanupsCompleted || 0}</p>
            </div>
            <Camera className="h-12 w-12 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Impact Score</p>
              <p className="text-3xl font-bold">8.9</p>
            </div>
            <TrendingUp className="h-12 w-12 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pollutionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reports" fill="#3B82F6" />
              <Bar dataKey="cleanups" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Pollution Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pollutionTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pollutionTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Token Earnings</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tokenEarnings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="tokens" stroke="#3B82F6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const ReportsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-900">Pollution Reports</h3>
        <button
          onClick={() => setShowReportModal(true)}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
        >
          <Plus className="h-5 w-5" />
          <span>New Report</span>
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search reports..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Filter className="h-5 w-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid gap-4">
        {mockReports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{report.location.address}</h4>
                <p className="text-gray-600">{report.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                report.status === 'verified' 
                  ? 'bg-green-100 text-green-800' 
                  : report.status === 'pending'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {report.status}
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{report.pollutionType}</span>
              </span>
              <span>Severity: {report.severity}</span>
              <span>{report.reportedAt.toLocaleDateString()}</span>
              {report.tokensRewarded && (
                <span className="text-green-600 font-medium">+{report.tokensRewarded} tokens</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CleanupTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold text-gray-900">Cleanup Activities</h3>
        <button 
          onClick={() => setShowCleanupModal(true)}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:from-green-700 hover:to-teal-700 transition-all duration-200"
        >
          <Plus className="h-5 w-5" />
          <span>Submit Cleanup</span>
        </button>
      </div>

      <div className="grid gap-6">
        {mockCleanups.map((cleanup) => (
          <div key={cleanup.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Cleanup Activity</h4>
                <p className="text-gray-600">{cleanup.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                cleanup.verificationStatus === 'verified' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {cleanup.verificationStatus}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Before</p>
                <img 
                  src={cleanup.beforeImageUrl} 
                  alt="Before cleanup" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">After</p>
                <img 
                  src={cleanup.afterImageUrl} 
                  alt="After cleanup" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{cleanup.submittedAt.toLocaleDateString()}</span>
              <span className="text-green-600 font-medium">+{cleanup.tokensEarned} tokens earned</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MarketplaceTab = () => (
    <div className="space-y-6">
      <div className="text-center py-12">
        <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Token Marketplace</h3>
        <p className="text-gray-600">
          Trade your BlueGuard tokens, purchase cleanup equipment, or support environmental projects.
        </p>
        <button className="mt-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
          Coming Soon
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">
            Track your environmental impact and manage your BlueGuard tokens
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'reports', label: 'Reports' },
              { id: 'cleanup', label: 'Cleanup' },
              { id: 'marketplace', label: 'Marketplace' },
              { id: 'sites', label: 'Sites' },
              { id: 'credits', label: 'Credits' },
              { id: 'settings', label: 'Settings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'reports' && <ReportsTab />}
        {activeTab === 'cleanup' && <CleanupTab />}
        {activeTab === 'marketplace' && (
          <Marketplace 
            userTokens={user?.tokens || 0}
            onBuyTokens={handleBuyTokens}
            onSellTokens={handleSellTokens}
          />
        )}
        {activeTab === 'sites' && <div className="py-12 text-center text-gray-500">Sites tab coming soon.</div>}
        {activeTab === 'credits' && <CreditCard />}
        {activeTab === 'settings' && <Settings />}
      </div>

      {/* Site Registration Modal */}
      <SiteRegistration
        isOpen={showSiteModal}
        onClose={() => setShowSiteModal(false)}
        onSubmit={handleSiteRegistration}
      />

      {/* Report Form Modal */}
      <ReportForm
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        onSubmit={handleReportSubmit}
      />

      {/* Cleanup Form Modal */}
      <CleanupForm
        isOpen={showCleanupModal}
        onClose={() => setShowCleanupModal(false)}
        onSubmit={handleCleanupSubmit}
      />
    </div>
  );
};

export default Dashboard;