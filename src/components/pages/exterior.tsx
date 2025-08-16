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
    title: "Exterior Painting Service",
    subtitle: "Lasting Color. Expert Finish.",
    description:
      "We use premium materials designed to hold up against Florida's harsh sun, humidity, and storms—so your home stays beautiful and protected for years to come.",
    image: "/images/hero/1.png",
  },
];

const ExteriorTemplate = () => {
  const benefits = [
    "Master-Level Craftsmanship with 10+ Years Experience",
    "Commercial-Grade Weather Preparation Process",
    "Florida Hurricane & UV Resistance Expertise",
    "All Surface Types & Premium Weather Coatings",
    "Licensed, Insured & Weather-Tested Guarantee",
  ];

  const paintingProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Comprehensive Weather Assessment & Preparation",
      subtitle: "The foundation of hurricane-resistant paint jobs",
      label: "What I do differently",
      items: [
        "Complete exterior surface inspection and weather damage assessment",
        "Professional pressure washing and mildew treatment",
        "Advanced primer systems for Florida's UV and salt air exposure",
        "Comprehensive caulking and weatherproofing of all joints",
      ],
    },
    {
      id: 2,
      title: "Premium Weather-Resistant Application",
      subtitle: "Where 10+ years of Florida experience shows",
      label: "Professional techniques",
      items: [
        "Premium painter's tape and surface protection systems",
        "Multiple thin coats designed for maximum weather adhesion",
        "Commercial-grade spraying equipment for large surfaces",
        "Hurricane-resistant paint systems for long-term protection",
      ],
    },
    {
      id: 3,
      title: "Weather Protection Guarantee & Cleanup",
      subtitle: "Your investment is protected against Florida elements",
      label: "What's included",
      items: [
        "Final inspection and weather seal verification",
        "Complete cleanup and landscape protection",
        "Hurricane-season durability guarantee",
        "10-15 year weather resistance promise",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "exterior-cost-tampa",
      question: "HOW MUCH DOES EXTERIOR PAINTING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Exterior painting costs in Tampa Bay typically range from $4-8 per
            square foot, depending on factors like home size, surface condition,
            weather damage, and paint quality. A typical single-story home costs
            $3,500-7,500, while two-story homes range from $6,000-15,000.
          </p>
          <p>
            We provide detailed estimates including weather-resistant materials,
            extensive prep work, and hurricane-season guarantees. Call{" "}
            <a
              href="tel:7272564467"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              (727) 256-4467
            </a>{" "}
            for your free weather assessment and estimate!
          </p>
        </div>
      ),
    },
    {
      id: "exterior-timeline",
      question: "HOW LONG DOES EXTERIOR PAINTING TAKE IN FLORIDA?",
      answer:
        "Most exterior painting projects take 5-10 days depending on home size and weather conditions. Single-story homes typically require 4-6 days, while two-story homes need 7-10 days. We build in buffer time for Florida's afternoon storms and high humidity. Weather delays are common but we work efficiently during optimal conditions to stay on schedule.",
    },
    {
      id: "florida-exterior-paint",
      question: "WHAT EXTERIOR PAINT WORKS BEST IN FLORIDA'S CLIMATE?",
      answer:
        "We use premium exterior paints specifically engineered for extreme weather conditions. Our go-to systems include Sherwin-Williams Duration and Benjamin Moore Aura - both offer maximum UV resistance, mildew prevention, and hurricane-grade adhesion. These paints are formulated to withstand Florida's brutal sun, coastal salt air, and severe weather while maintaining color integrity for 10-15 years.",
    },
    {
      id: "hurricane-season",
      question: "DO YOU WORK DURING HURRICANE SEASON?",
      answer:
        "Yes, but we carefully monitor weather patterns and plan accordingly. We use quick-drying, weather-resistant primers and can secure partially completed projects if storms threaten. We typically avoid starting projects during active storm watches but can work safely during calm periods. Our hurricane-resistant paint systems are actually designed to be applied year-round in Florida.",
    },
    {
      id: "exterior-prep",
      question: "WHAT PREPARATION IS INCLUDED FOR EXTERIOR PAINTING?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>Our comprehensive exterior preparation includes:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Complete pressure washing and surface cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Inspection and repair of weather damage, wood rot, and cracks
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Mildew treatment and prevention application
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Professional caulking of all gaps and joints
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Primer application for maximum paint adhesion
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Landscape and property protection
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Window and fixture masking
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">Proper preparation is critical for Florida's demanding climate!</p>
        </div>
      ),
    },
    {
      id: "exterior-guarantee",
      question: "WHAT GUARANTEE DO YOU OFFER ON EXTERIOR PAINTING?",
      answer:
        "We provide a comprehensive 5-year warranty against peeling, cracking, and premature fading, plus a 10-15 year durability promise when using our recommended premium paint systems. This covers normal Florida weather conditions including hurricanes, UV exposure, and coastal elements. We're fully licensed and insured, and if you're not satisfied, we'll make it right at no additional cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <CarouselSlider slides={heroSlides} />
      
      {/* Hero Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight uppercase">
            Professional Exterior Painting Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Exterior Painting Contractor Serving Tampa, St. Petersburg, Clearwater & Pinellas Park
          </p>
          
          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for a skilled exterior painting contractor in Tampa Bay? I'm a licensed professional painter with over 10 years of experience protecting homes throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My journey began in commercial painting, where I mastered working with challenging weather conditions and large-scale exterior projects. Today, I bring that same professional-grade expertise to protect and beautify your home's exterior.
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
              Why Choose My Exterior Painting Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/exterior/1.png"
                  alt="Professional exterior painting in Tampa Bay"
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
              My Signature Exterior Painting Process
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <ProcessCard steps={paintingProcessData} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ 
            questions={faqData}
            title="Frequently Asked Exterior Painting Questions"
            subtitle="Have questions before booking your next project? Here's what Tampa Bay homeowners ask us most about exterior painting."
          />
        </div>
      </section>
    </div>
  );
};

export default ExteriorTemplate;