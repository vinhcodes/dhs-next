"use client"

import React, { useState } from 'react';
import { Send, User, Mail, Phone, Paintbrush, AlertCircle, CheckCircle2, MapPin, Upload, X, Square, XCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import GooglePlacesAutocomplete from '@/components/ui/google-places-autocomplete';

// Zod-like validation (simplified for artifact environment)
const validateForm = (data: FormData) => {
  const errors: Partial<FormData> = {};
  
  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!data.service) errors.service = 'Please select a service';
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  address?: string;
  photos?: FileList | null;
  squareFootage?: string;
}

const EstimateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    photos: null,
    squareFootage: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Services that need square footage
  const paintingServices = ['interior-painting', 'exterior-painting', 'garage-floor-painting', 'pool-painting'];
  const showSquareFootage = paintingServices.includes(formData.service);

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showPopup, setShowPopup] = useState(false);

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'interior-painting', label: 'Interior Painting' },
    { value: 'exterior-painting', label: 'Exterior Painting' },
    { value: 'cabinet-makeover', label: 'Cabinet Makeover' },
    { value: 'pool-painting', label: 'Pool Painting' },
    { value: 'fence-painting', label: 'Fence Painting' },
    { value: 'garage-floor-painting', label: 'Garage Floor Painting' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // Filter for image files only
      const imageFiles = Array.from(files).filter(file => 
        file.type.startsWith('image/')
      );
      
      // Limit to 5 files
      const limitedFiles = imageFiles.slice(0, 5);
      
      setUploadedFiles(prev => {
        const newFiles = [...prev, ...limitedFiles].slice(0, 5);
        return newFiles;
      });
      
      setFormData(prev => ({
        ...prev,
        photos: files
      }));
    }
  };

  const handleAddressChange = (address: string) => {
    setFormData(prev => ({
      ...prev,
      address: address
    }));
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getSquareFootageLabel = (service: string) => {
    switch (service) {
      case 'interior-painting':
        return 'square feet of interior space';
      case 'exterior-painting':
        return 'square feet of exterior surface';
      case 'garage-floor-painting':
        return 'square feet of garage floor';
      case 'pool-painting':
        return 'square feet of pool surface';
      default:
        return 'square feet';
    }
  };

  const getSquareFootageHelper = (service: string) => {
    switch (service) {
      case 'interior-painting':
        return 'Include all rooms and areas to be painted. This helps us calculate paint quantities and labor time.';
      case 'exterior-painting':
        return 'Include walls, trim, and other surfaces to be painted. Approximate measurements are fine.';
      case 'garage-floor-painting':
        return 'Measure the length × width of your garage floor area to be coated.';
      case 'pool-painting':
        return 'Include pool walls and floor surface area. We can help calculate this during our assessment.';
      default:
        return 'Approximate square footage helps us provide more accurate estimates.';
    }
  };

  const handleSubmit = async () => {
    // Reset status
    setSubmitStatus('idle');
    
    // Validate form
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Create FormData to handle file uploads
      const submitData = new FormData();
      
      // Add text fields
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('service', formData.service);
      
      // Add optional fields if they exist
      if (formData.address) {
        submitData.append('address', formData.address);
      }
      
      if (formData.squareFootage) {
        submitData.append('squareFootage', formData.squareFootage);
      }
      
      // Add uploaded files
      uploadedFiles.forEach((file) => {
        submitData.append('photos', file);
      });

      // Send to your API endpoint
      const response = await fetch('/api/estimate', {
        method: 'POST',
        body: submitData, // No Content-Type header needed for FormData
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      // Success - reset form and show popup
      setSubmitStatus('success');
      setShowPopup(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        address: '',
        photos: null,
        squareFootage: ''
      });
      setUploadedFiles([]); // Clear uploaded files

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmitStatus('idle');
  };

  // Popup Modal Component
  const PopupModal = ({ show, status, onClose }: { show: boolean, status: 'success' | 'error', onClose: () => void }) => {
    if (!show) return null;

    const isSuccess = status === 'success';

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 transform transition-all">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Icon */}
            <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              isSuccess 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {isSuccess ? (
                <CheckCircle2 className="w-8 h-8" />
              ) : (
                <XCircle className="w-8 h-8" />
              )}
            </div>

            {/* Title */}
            <h3 className={`text-xl font-bold mb-2 ${
              isSuccess ? 'text-green-900' : 'text-red-900'
            }`}>
              {isSuccess ? 'Request Submitted!' : 'Submission Failed'}
            </h3>

            {/* Message */}
            <p className={`text-sm mb-6 leading-relaxed ${
              isSuccess ? 'text-green-700' : 'text-red-700'
            }`}>
              {isSuccess ? (
                <>
                  Thank you for your estimate request! We've received your information and will contact you within 24 hours to schedule your consultation.
                  <br /><br />
                  <strong>Check your email</strong> for a confirmation message.
                </>
              ) : (
                <>
                  We're sorry, but there was an error submitting your request. Please try again or contact us directly.
                  <br /><br />
                  <strong>Call us at (727) 614-5087</strong> for immediate assistance.
                </>
              )}
            </p>

            {/* Action Button */}
            <button
              onClick={onClose}
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                isSuccess 
                  ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isSuccess ? 'Great, Thanks!' : 'Try Again'}
            </button>

            {/* Additional Action for Error */}
            {!isSuccess && (
              <a
                href="tel:7276145087"
                className="block mt-3 py-2 px-4 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Or Call Us Now: (727) 614-5087
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Popup Modal */}
      <PopupModal 
        show={showPopup} 
        status={submitStatus as 'success' | 'error'} 
        onClose={closePopup} 
      />

      <section className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
              Get Your Estimate
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Get a quick, no-obligation estimate from us. We'll provide you with a detailed quote within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">

          <div className="space-y-6">
            
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.firstName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  Last Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.lastName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="(727) 555-0123"
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">
                Select Your Service *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Paintbrush className="h-4 w-4 text-gray-400" />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer ${
                    errors.service 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
                
                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.service && (
                <p className="text-sm text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {errors.service}
                </p>
              )}
            </div>

            {/* Square Footage Field (Conditional & Optional) */}
            {showSquareFootage && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  Approximate Square Footage <span className="text-gray-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Square className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="squareFootage"
                    value={formData.squareFootage || ''}
                    onChange={handleInputChange}
                    className="w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-200 hover:border-gray-300"
                    placeholder={`Enter approximate ${getSquareFootageLabel(formData.service)} (e.g., 1200)`}
                    min="1"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  {getSquareFootageHelper(formData.service)}
                </p>
              </div>
            )}

            {/* Address Field (Optional) - Google Places Autocomplete */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">
                Project Address <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <GooglePlacesAutocomplete
                value={formData.address || ''}
                onChange={handleAddressChange}
                placeholder="Start typing your address for suggestions..."
                className="w-full h-12 pl-12 pr-4 text-sm border rounded-xl bg-gray-50 focus:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-200 hover:border-gray-300"
              />
              <p className="text-xs text-gray-500">
                Start typing to see address suggestions. This helps us provide more accurate estimates and scheduling.
              </p>
            </div>

            {/* Photo Upload (Optional) */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-900">
                Project Photos <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="file"
                    id="photo-upload"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="w-full h-24 border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-2"
                  >
                    <Upload className="h-6 w-6 text-gray-400" />
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-600">Upload project photos</p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB each (max 5 photos)</p>
                    </div>
                  </label>
                </div>
                
                {/* Uploaded Files Display */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{uploadedFiles.length} photo(s) selected:</p>
                    <div className="space-y-1">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                          <span className="text-sm text-gray-700 truncate flex-1 mr-2">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Photos help us provide more accurate estimates by showing the project scope and current conditions.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full h-12 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get A Estimate
                  </>
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <div className="text-center pt-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
              </p>
            </div>

          </div>
        </div>

        {/* Contact Alternative */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Prefer to talk? Give us a call!</p>
          <a
            href="tel:7276145087"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            (727) 614-5087
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default EstimateForm;