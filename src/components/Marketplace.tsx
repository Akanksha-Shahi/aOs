import React, { useState } from 'react';
import { Coins, TrendingUp, TrendingDown, Plus, Filter, Search, ShoppingCart } from 'lucide-react';
import { MarketplaceOrder } from '../types';

interface MarketplaceProps {
  userTokens: number;
  onBuyTokens: (amount: number, price: number) => void;
  onSellTokens: (amount: number, price: number) => void;
}

const Marketplace: React.FC<MarketplaceProps> = ({ userTokens, onBuyTokens, onSellTokens }) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell' | 'orders'>('buy');
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [orderForm, setOrderForm] = useState({
    amount: '',
    price: ''
  });

  // Mock marketplace data
  const buyOrders: MarketplaceOrder[] = [
    {
      id: '1',
      sellerId: '2',
      tokenAmount: 500,
      pricePerToken: 0.85,
      totalPrice: 425,
      status: 'active',
      createdAt: new Date('2024-01-20')
    },
    {
      id: '2',
      sellerId: '3',
      tokenAmount: 1000,
      pricePerToken: 0.82,
      totalPrice: 820,
      status: 'active',
      createdAt: new Date('2024-01-19')
    },
    {
      id: '3',
      sellerId: '4',
      tokenAmount: 250,
      pricePerToken: 0.90,
      totalPrice: 225,
      status: 'active',
      createdAt: new Date('2024-01-18')
    }
  ];

  const sellOrders: MarketplaceOrder[] = [
    {
      id: '4',
      sellerId: '5',
      tokenAmount: 750,
      pricePerToken: 0.95,
      totalPrice: 712.5,
      status: 'active',
      createdAt: new Date('2024-01-20')
    },
    {
      id: '5',
      sellerId: '6',
      tokenAmount: 300,
      pricePerToken: 0.98,
      totalPrice: 294,
      status: 'active',
      createdAt: new Date('2024-01-19')
    }
  ];

  const marketStats = {
    currentPrice: 0.87,
    priceChange: 0.05,
    volume24h: 15420,
    totalSupply: 1000000
  };

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseInt(orderForm.amount);
    const price = parseFloat(orderForm.price);
    
    if (orderType === 'buy') {
      onBuyTokens(amount, price);
    } else {
      onSellTokens(amount, price);
    }
    
    setOrderForm({ amount: '', price: '' });
    setShowCreateOrder(false);
  };

  const MarketStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Current Price</p>
            <p className="text-2xl font-bold text-gray-900">${marketStats.currentPrice}</p>
          </div>
          <Coins className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">24h Change</p>
            <p className={`text-2xl font-bold ${marketStats.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {marketStats.priceChange >= 0 ? '+' : ''}${marketStats.priceChange}
            </p>
          </div>
          {marketStats.priceChange >= 0 ? 
            <TrendingUp className="h-8 w-8 text-green-600" /> : 
            <TrendingDown className="h-8 w-8 text-red-600" />
          }
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">24h Volume</p>
            <p className="text-2xl font-bold text-gray-900">{marketStats.volume24h.toLocaleString()}</p>
          </div>
          <ShoppingCart className="h-8 w-8 text-teal-600" />
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Your Balance</p>
            <p className="text-2xl font-bold text-blue-600">{userTokens}</p>
          </div>
          <Coins className="h-8 w-8 text-blue-600" />
        </div>
      </div>
    </div>
  );

  const OrderBook = ({ orders, type }: { orders: MarketplaceOrder[], type: 'buy' | 'sell' }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {type === 'buy' ? 'Buy Orders' : 'Sell Orders'}
        </h3>
        <div className="flex space-x-2">
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Search className="h-4 w-4" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-sm font-medium text-gray-600">Amount</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">Price</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">Total</th>
              <th className="text-left py-3 text-sm font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 text-sm text-gray-900">{order.tokenAmount}</td>
                <td className="py-4 text-sm text-gray-900">${order.pricePerToken}</td>
                <td className="py-4 text-sm text-gray-900">${order.totalPrice}</td>
                <td className="py-4">
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    type === 'buy' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}>
                    {type === 'buy' ? 'Buy' : 'Sell'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Token Marketplace</h2>
        <button
          onClick={() => setShowCreateOrder(true)}
          className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
        >
          <Plus className="h-5 w-5" />
          <span>Create Order</span>
        </button>
      </div>

      <MarketStats />

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'buy', label: 'Buy Orders' },
            { id: 'sell', label: 'Sell Orders' },
            { id: 'orders', label: 'My Orders' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'buy' | 'sell' | 'orders')}
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
      {activeTab === 'buy' && <OrderBook orders={buyOrders} type="buy" />}
      {activeTab === 'sell' && <OrderBook orders={sellOrders} type="sell" />}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
          <Coins className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Active Orders</h3>
          <p className="text-gray-600 mb-6">You don't have any active buy or sell orders.</p>
          <button
            onClick={() => setShowCreateOrder(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
          >
            Create Your First Order
          </button>
        </div>
      )}

      {/* Create Order Modal */}
      {showCreateOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Create Order</h3>
            </div>
            
            <form onSubmit={handleCreateOrder} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setOrderType('buy')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      orderType === 'buy' 
                        ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300'
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('sell')}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      orderType === 'sell' 
                        ? 'bg-red-100 text-red-700 border-2 border-red-300' 
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300'
                    }`}
                  >
                    Sell
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Token Amount</label>
                <input
                  type="number"
                  value={orderForm.amount}
                  onChange={(e) => setOrderForm(prev => ({ ...prev, amount: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter token amount"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price per Token ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={orderForm.price}
                  onChange={(e) => setOrderForm(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter price per token"
                  required
                />
              </div>
              
              {orderForm.amount && orderForm.price && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    Total: ${(parseFloat(orderForm.amount) * parseFloat(orderForm.price)).toFixed(2)}
                  </p>
                </div>
              )}
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCreateOrder(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                >
                  Create Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;