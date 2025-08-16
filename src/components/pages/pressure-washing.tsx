"use client";
import ReviewSection from "@/components/review";
import { Button } from "@/components/ui/button";
import InfiniteLinkCarousel from "@/components/ui/infinite-carousel";
import PhoneCallButton from "@/components/ui/phonecall-btn";
import ReviewCarousel from "@/components/ui/review-carousel";
import { ProcessStep } from "@/components/ui/process-card";
import { FAQItem } from "@/components/faq";
import ProcessCard from "@/components/ui/process-card";
import React from "react";
import FAQ from "@/components/faq";
import CarouselSlider from "@/components/ui/carousel";

const heroSlides = [
  {
    id: 1,
    title: "Professional Pressure Washing",
    subtitle: "Restore Your Property. Boost Curb Appeal.",
    description:
      "Expert pressure washing using commercial-grade equipment designed to safely remove Florida's toughest stains, mold, and algae buildup while protecting your surfaces.",
    image: "/images/hero/7.png",
  },
];

const PressureWashingTemplate = () => {
  const benefits = [
    "Master-Level Expertise with 10+ Years Experience",
    "Commercial-Grade Equipment & Surface-Safe Techniques",
    "Florida Mold, Algae & Salt Buildup Specialists",
    "Comprehensive Property Cleaning Services",
    "Licensed, Insured & Surface Protection Guarantee",
  ];

  const cleaningProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Complete Property Assessment & Surface Analysis",
      subtitle: "The foundation of safe, effective pressure washing",
      label: "What I assess differently",
      items: [
        "Comprehensive surface material evaluation and pressure requirements",
        "Mold, algae, and stain pattern analysis for targeted treatment",
        "Landscape and property protection planning and setup",
        "Drainage and runoff management for environmental safety",
      ],
    },
    {
      id: 2,
      title: "Professional Cleaning & Surface Restoration",
      subtitle: "Where 10+ years of experience delivers outstanding results",
      label: "Expert cleaning process",
      items: [
        "Variable pressure settings calibrated for each specific surface",
        "Eco-friendly cleaning solutions designed for Florida conditions",
        "Systematic cleaning patterns for complete coverage and even results",
        "Commercial-grade equipment with advanced safety and efficiency features",
      ],
    },
    {
      id: 3,
      title: "Quality Verification & Property Protection",
      subtitle: "Your satisfaction guaranteed with every surface restored",
      label: "What's included",
      items: [
        "Complete quality inspection and spot treatment of missed areas",
        "Final rinse and debris cleanup from all cleaned surfaces",
        "Landscape restoration and protection removal",
        "Before/after documentation and maintenance recommendations",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "pressure-cost-tampa",
      question: "HOW MUCH DOES PRESSURE WASHING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Professional pressure washing in Tampa Bay typically costs $0.15-0.50 
            per square foot, depending on surface type and cleaning complexity. 
            Driveways average $150-300, house washing ranges from $300-800, and 
            complete property services can be $500-1,500. This investment dramatically 
            increases curb appeal and property value.
          </p>
          <p>
            We provide detailed estimates based on actual surface measurements and 
            cleaning requirements. Call{" "}
            <a
              href="tel:7272564467"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              (727) 256-4467
            </a>{" "}
            for your free assessment and property transformation estimate!
          </p>
        </div>
      ),
    },
    {
      id: "pressure-frequency",
      question: "HOW OFTEN SHOULD I PRESSURE WASH MY PROPERTY IN FLORIDA?",
      answer:
        "Florida properties should be pressure washed annually, with high-traffic areas like driveways and walkways potentially needing bi-annual cleaning. Our humid climate promotes rapid mold, algae, and mildew growth. Regular cleaning prevents permanent staining, maintains property value, and creates a healthier environment around your home.",
    },
    {
      id: "pressure-safety",
      question: "IS PRESSURE WASHING SAFE FOR ALL SURFACES?",
      answer:
        "Not all surfaces can handle the same pressure levels. As a professional with 10+ years experience, I adjust pressure settings for each surface - from delicate stucco (low pressure) to concrete driveways (high pressure). I also use appropriate cleaning solutions and techniques to avoid damage while achieving optimal results. This expertise prevents costly surface damage.",
    },
    {
      id: "pressure-surfaces",
      question: "WHAT SURFACES CAN YOU PRESSURE WASH?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>I safely clean a wide variety of surfaces including:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Driveways, sidewalks, and concrete surfaces
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Home exterior siding (vinyl, stucco, brick, wood)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Decks, patios, and outdoor living spaces
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Pool decks and surrounding areas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Fences, gates, and outdoor structures
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Commercial parking lots and building exteriors
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">Each surface receives customized pressure and cleaning solution treatment!</p>
        </div>
      ),
    },
    {
      id: "pressure-mold-algae",
      question: "CAN PRESSURE WASHING REMOVE FLORIDA'S MOLD AND ALGAE?",
      answer:
        "Absolutely! Florida's humid climate creates perfect conditions for mold, algae, and mildew growth. I use specialized cleaning solutions combined with appropriate pressure settings to completely remove these organisms. The key is using the right combination of cleaning agents and pressure to kill the growth at its source, not just clean the surface appearance.",
    },
    {
      id: "pressure-environmental",
      question: "IS PRESSURE WASHING ENVIRONMENTALLY SAFE?",
      answer:
        "Yes, when done professionally. I use eco-friendly, biodegradable cleaning solutions that are safe for plants, pets, and waterways. I also manage water runoff properly and follow all local environmental guidelines. My commercial background includes extensive training in environmental safety protocols that protect both your property and the surrounding ecosystem.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <CarouselSlider slides={heroSlides} />
      
      {/* Hero Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight uppercase">
            Professional Pressure Washing Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Property Cleaning Specialist Serving Tampa, St. Petersburg, Clearwater & Pinellas Park
          </p>
          
          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for professional pressure washing services in Tampa Bay? I'm a licensed specialist with over 10 years of experience restoring properties throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My journey began in commercial building maintenance, where I mastered advanced pressure washing techniques on large-scale properties. Today, I bring that same professional-grade expertise to restore your property's beauty and protect your valuable investment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button 
              size="xl"
              variant="outline"
              className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Get Free Estimate
            </Button>
            <PhoneCallButton className="rounded-full" />
          </div>
        </div>
      </section>

      {/* Infinite Carousel */}
      <section className="bg-gray-50">
        <InfiniteLinkCarousel />
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-16 lg:py-24">
        <ReviewSection />
        <div className="mt-16">
          <ReviewCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose My Pressure Washing Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/pressure/1.png"
                  alt="Professional pressure washing in Tampa Bay"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

            {/* Benefits List */}
            <div className="order-1 lg:order-2 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Professional Pressure Washing Process
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <ProcessCard steps={cleaningProcessData} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ 
            questions={faqData}
            title="Frequently Asked Pressure Washing Questions"
            subtitle="Have questions about professional property cleaning? Here's what Tampa Bay homeowners ask us most about pressure washing services."
          />
        </div>
      </section>
    </div>
  );
};

export default PressureWashingTemplate;