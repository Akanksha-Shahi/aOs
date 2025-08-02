export interface User {
  id: string;
  name: string;
  email: string;
  tokens: number;
  reportsSubmitted: number;
  cleanupsCompleted: number;
}

export interface PollutionReport {
  id: string;
  userId: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  pollutionType: 'chemical' | 'plastic' | 'oil' | 'sewage' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  imageUrl?: string;
  status: 'pending' | 'verified' | 'cleaned' | 'rejected';
  reportedAt: Date;
  tokensRewarded?: number;
}

export interface CleanupActivity {
  id: string;
  userId: string;
  reportId: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  tokensEarned: number;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  submittedAt: Date;
}

export interface TokenTransaction {
  id: string;
  fromUserId?: string;
  toUserId?: string;
  amount: number;
  type: 'earned' | 'traded' | 'spent';
  description: string;
  timestamp: Date;
}

export interface Site {
  id: string;
  userId: string;
  companyName: string;
  companyId: string;
  iotId: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  registeredAt: Date;
  status: 'active' | 'inactive' | 'maintenance';
}

export interface MarketplaceOrder {
  id: string;
  sellerId: string;
  buyerId?: string;
  tokenAmount: number;
  pricePerToken: number;
  totalPrice: number;
  status: 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  completedAt?: Date;
}