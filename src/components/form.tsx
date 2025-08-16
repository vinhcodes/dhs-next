"use client"

import React, { useState } from 'react';
import { Send, User, Mail, Phone, Paintbrush, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
}

const EstimateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'interior-painting', label: 'Interior Painting' },
    { value: 'exterior-painting', label: 'Exterior Painting' },
    { value: 'cabinet-makeover', label: 'Cabinet Makeover' },
    { value: 'gutters-cleaning', label: 'Gutters Cleaning' },
    { value: 'window-washing', label: 'Window Washing' },
    { value: 'pressure-washing', label: 'Pressure Washing' }
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
      // Send to your API endpoint
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      // Success
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="text-orange-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            GET YOUR FREE ESTIMATE
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            READY TO TRANSFORM YOUR SPACE?
          </h2>
          <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Get a free, no-obligation estimate from us. 
            We'll provide you with a detailed quote within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Thank you! Your estimate request has been submitted successfully. We'll contact you within 24 hours.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                Sorry, there was an error submitting your request. Please try again or call us at (813) 966-3909.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  First Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`flex h-10 w-full rounded-md border pl-10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.firstName 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'border-input focus-visible:ring-orange-500'
                    }`}
                    placeholder="Enter your first name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Last Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`flex h-10 w-full rounded-md border pl-10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                      errors.lastName 
                        ? 'border-red-500 focus-visible:ring-red-500' 
                        : 'border-input focus-visible:ring-orange-500'
                    }`}
                    placeholder="Enter your last name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border pl-10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.email 
                      ? 'border-red-500 focus-visible:ring-red-500' 
                      : 'border-input focus-visible:ring-orange-500'
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border pl-10 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.phone 
                      ? 'border-red-500 focus-visible:ring-red-500' 
                      : 'border-input focus-visible:ring-orange-500'
                  }`}
                  placeholder="(813) 555-0123"
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Select Your Service *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Paintbrush className="h-4 w-4 text-gray-400" />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`flex h-10 w-full rounded-md border pl-10 pr-8 px-3 py-2 text-sm ring-offset-background bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.service 
                      ? 'border-red-500 focus-visible:ring-red-500' 
                      : 'border-input focus-visible:ring-orange-500'
                  }`}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              
              </div>
              {errors.service && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.service}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full h-11 px-8 bg-orange-600 text-primary-foreground hover:bg-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Get My Free Estimate
                  </>
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;