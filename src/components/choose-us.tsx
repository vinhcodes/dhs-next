import React from 'react';
import { ArrowRight, Phone, Users, Award, Paintbrush, Shield } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Family-Owned And Locally Trusted",
      description: "Family-owned in Tampa, FL — no third parties, just honest work and personal care. We treat your home like it's our own, with the transparency and respect you'd expect from family."
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Hustle-Free Workmanship Warranty",
      description: "We don't cut corners, rush jobs, or leave you with callbacks. We do it right the first time — with pride, precision, and care you can count on."
    },
    {
      id: 3,
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      title: "Free Estimate",
      description: "We offer free, no-pressure estimates — no hidden fees, no sales tricks. Just honest pricing, clear answers, and guidance you can trust from a family who cares."
    },
    {
      id: 4,
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "10+ Years of Trusted Experience",
      description: "Over a decade of hands-on work in Florida's unique climate, I've honed the skills and knowledge to deliver lasting results."
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Diverse Home Solution
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Why Tampa FL Homeowners Choose Us
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine local expertise, premium craftsmanship, and customer-first service to deliver a painting experience Tampa FL 
            homeowners can trust — backed by the top house painters in Tampa FL
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/choose/1.png"
                alt="Diverse Home Solution Painter painting a frame"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Quote Button */}
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg flex-1 sm:flex-none">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              {/* Phone Button */}
              <Link href='tel:7272564467' className="group bg-white hover:bg-gray-50 text-gray-800 font-medium px-8 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center gap-3 hover:shadow-lg flex-1 sm:flex-none">
                <Phone className="w-4 h-4 text-gray-600" />
                <span>(727) 256-4467</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;