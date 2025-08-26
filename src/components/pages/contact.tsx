"use client";

import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Star, Users } from 'lucide-react';
import EstimateForm from '@/components/form';
import { Button } from '@/components/ui/button';
import PhoneCallButton from '@/components/ui/phonecall-btn';

const ContactTemplate: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      content: "(727) 614-5087",
      description: "Available 7 days a week",
      href: "tel:7276145087"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      content: "info@dhsservices.com", 
      description: "Quick response guaranteed",
      href: "mailto:info@dhsservices.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Service Area",
      content: "Tampa Bay Area",
      description: "Tampa, St. Pete, Clearwater & Pinellas Park",
      href: "#service-areas"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" }
  ];

  const serviceAreas = [
    {
      city: "Tampa",
      description: "Downtown, Westshore, Hyde Park, Seminole Heights, Carrollwood"
    },
    {
      city: "St. Petersburg", 
      description: "Downtown, The Pier District, Northeast, Kenwood, Historic Old Northeast"
    },
    {
      city: "Clearwater",
      description: "Downtown, Highland, Countryside, Safety Harbor, Dunedin"
    },
    {
      city: "Pinellas Park",
      description: "Gateway, Lakeview, Park Boulevard, Cross Bayou"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Local Family Business",
      description: "Tampa Bay owned and operated with deep community roots"
    },
    {
      icon: <Star className="w-5 h-5 text-blue-600" />,
      title: "7+ Years Experience",
      description: "Proven track record with hundreds of satisfied customers"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      title: "Quality Guarantee",
      description: "Licensed, insured, and committed to exceptional results"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white sm: mt-8 md:mt-10 py-12 sm:py-16 lg:py-24 min-h-screen sm:min-h-0 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 mt-16 sm:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
              Get Your Painting Estimate
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
              Ready to transform your space? Contact Tampa Bay's trusted painting professionals. 
              We're here to bring your vision to life with quality craftsmanship and exceptional service.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                  <div className="scale-75 sm:scale-100">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{contact.title}</h3>
                <p className="text-lg sm:text-xl font-bold mb-1 break-words">{contact.content}</p>
                <p className="text-blue-100 text-xs sm:text-sm leading-tight">{contact.description}</p>
              </a>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 px-4">
            <PhoneCallButton className="bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-200" />
            <Button 
              variant="outline" 
              size="xl"
              className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 text-white hover:text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Form */}
            <div id="contact-form">
              <EstimateForm />
            </div>

            {/* Right Column - Business Information */}
            <div className="space-y-8">
              
              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
                </div>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-blue-800">
                    <strong>Emergency Services Available:</strong> Contact us for urgent painting needs or storm damage repairs.
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Diverse Home Solution?</h2>
                
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time Promise */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24-Hour Response Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We respond to all estimate requests within 24 hours. Most phone calls are answered immediately during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proudly Serving Tampa Bay
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a local Tampa Bay painting company, we know the unique challenges of Florida's climate. 
              We serve the following areas with professional painting services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.city}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Don't See Your Area Listed?</h3>
              <p className="text-gray-600 mb-6">
                We may still serve your location! Contact us to discuss your project and confirm service availability in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PhoneCallButton />
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Estimate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of satisfied Tampa Bay homeowners who trust us with their painting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCallButton className="bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200" />
            <Button 
              variant="outline" 
              size="xl"
              className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 text-white hover:text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Estimate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactTemplate;