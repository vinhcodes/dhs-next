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
      description: "Family-owned in Tampa, FL — no third parties, just honest work and personal care. We treat your home like it’s our own, with the transparency and respect you’d expect from family."
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Hustle-Free Workmanship Warranty",
      description: "We don’t cut corners, rush jobs, or leave you with callbacks. We do it right the first time — with pride, precision, and care you can count on."
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
      description: "Over a decade of hands-on work in Florida’s unique climate, I’ve honed the skills and knowledge to deliver lasting results."
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="text-orange-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4">
            THE PEACH PAINTING DIFFERENCE
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            WHY TAMPA FL HOMEOWNERS CHOOSE US
          </h2>
          <p className="text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed px-2">
            We combine local expertise, premium craftsmanship, and customer-first service to deliver a painting experience Tampa FL 
            homeowners can trust—backed by the top house painters in Tampa FL
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/choose/1.png"
                alt="Diverse Home Solution Painter painting a frame"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Quote Button */}
              <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-1 sm:flex-none">
                <span className="text-lg">Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Phone Button */}
              <Link  href='tel:7272564467' className="group bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg flex-1 sm:flex-none">
                <Phone className="w-5 h-5 text-gray-600" />
                <span className="text-lg">813-966-3909</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;