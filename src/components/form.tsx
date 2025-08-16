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
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Get Your Free Estimate
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ready to Transform Your Space?
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation estimate from us. We'll provide you with a detailed quote within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <Alert className="mb-8 border-green-200 bg-green-50">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <AlertDescription className="text-green-800 font-medium">
                Thank you! Your estimate request has been submitted successfully. We'll contact you within 24 hours.
              </AlertDescription>
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert className="mb-8 border-red-200 bg-red-50">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <AlertDescription className="text-red-800 font-medium">
                Sorry, there was an error submitting your request. Please try again or call us at (727) 256-4467.
              </AlertDescription>
            </Alert>
          )}

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
                    Get My Free Estimate
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
            href="tel:7272564467"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            (727) 256-4467
          </a>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;