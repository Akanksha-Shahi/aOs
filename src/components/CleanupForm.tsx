import React, { useState } from 'react';
import { X, MapPin, Camera, FileText, Upload } from 'lucide-react';

interface CleanupData {
  reportId: string;
  location: string;
  description: string;
  beforeImage: File | null;
  afterImage: File | null;
  wasteAmount: string;
  wasteType: string;
  volunteersCount: string;
  id?: string;
  submittedAt?: Date;
  verificationStatus?: string;
  tokensEarned?: number;
}

interface CleanupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (cleanupData: CleanupData) => void;
}

const CleanupForm: React.FC<CleanupFormProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    reportId: '',
    location: '',
    description: '',
    beforeImage: null as File | null,
    afterImage: null as File | null,
    wasteAmount: '',
    wasteType: 'plastic',
    volunteersCount: '1'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const wasteTypes = [
    { value: 'plastic', label: 'Plastic Waste' },
    { value: 'chemical', label: 'Chemical Waste' },
    { value: 'oil', label: 'Oil/Petroleum' },
    { value: 'organic', label: 'Organic Waste' },
    { value: 'metal', label: 'Metal Debris' },
    { value: 'mixed', label: 'Mixed Waste' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'beforeImage' | 'afterImage') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, [field]: file }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }
    if (!formData.beforeImage) {
      newErrors.beforeImage = 'Before photo is required';
    }
    if (!formData.afterImage) {
      newErrors.afterImage = 'After photo is required';
    }
    if (!formData.wasteAmount.trim()) {
      newErrors.wasteAmount = 'Waste amount is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const cleanupData = {
      ...formData,
      id: Date.now().toString(),
      submittedAt: new Date(),
      verificationStatus: 'pending',
      tokensEarned: Math.floor(Math.random() * 100) + 50 // Mock token calculation
    };

    onSubmit(cleanupData);
    
    // Reset form
    setFormData({
      reportId: '',
      location: '',
      description: '',
      beforeImage: null,
      afterImage: null,
      wasteAmount: '',
      wasteType: 'plastic',
      volunteersCount: '1'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Submit Cleanup Activity</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Related Report ID (Optional)
            </label>
            <input
              type="text"
              name="reportId"
              value={formData.reportId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter report ID if this cleanup is related to a specific report"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cleanup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter the cleanup location"
              />
            </div>
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cleanup Description
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Describe the cleanup activity, methods used, and impact achieved..."
              />
            </div>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Waste Amount
              </label>
              <input
                type="text"
                name="wasteAmount"
                value={formData.wasteAmount}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                  errors.wasteAmount ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., 15kg, 50 bags"
              />
              {errors.wasteAmount && <p className="text-red-500 text-sm mt-1">{errors.wasteAmount}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Waste Type
              </label>
              <select
                name="wasteType"
                value={formData.wasteType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                {wasteTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volunteers
              </label>
              <input
                type="number"
                name="volunteersCount"
                value={formData.volunteersCount}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Before Photo *
              </label>
              <div className="relative">
                <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'beforeImage')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.beforeImage ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.beforeImage && <p className="text-red-500 text-sm mt-1">{errors.beforeImage}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                After Photo *
              </label>
              <div className="relative">
                <Camera className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'afterImage')}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.afterImage ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.afterImage && <p className="text-red-500 text-sm mt-1">{errors.afterImage}</p>}
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-green-800 mb-2">Token Rewards</h4>
            <p className="text-sm text-green-700">
              Verified cleanup activities earn 50-200 tokens based on impact, waste amount, and photo quality. 
              Larger cleanups and team efforts receive bonus multipliers.
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Upload className="h-5 w-5" />
              <span>Submit Cleanup</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CleanupForm;