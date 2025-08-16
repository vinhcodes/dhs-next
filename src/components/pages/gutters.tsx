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
    title: "Professional Gutter Cleaning",
    subtitle: "Protect Your Home. Prevent Water Damage.",
    description:
      "Expert gutter cleaning and maintenance designed for Florida's heavy rains and hurricane seasons. Keep your home protected year-round with professional gutter care.",
    image: "/images/hero/4.png",
  },
];

const GutterCleaningTemplate = () => {
  const benefits = [
    "Master-Level Expertise with 10+ Years Experience",
    "Commercial-Grade Safety Equipment & Insurance",
    "Florida Hurricane Season Preparation Specialist",
    "Complete Gutter System Inspection & Repair",
    "Licensed, Insured & Satisfaction Guaranteed",
  ];

  const cleaningProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Comprehensive Gutter System Assessment",
      subtitle: "The foundation of effective water management",
      label: "What I inspect differently",
      items: [
        "Complete gutter and downspout condition evaluation",
        "Roof drainage pattern analysis for optimal flow",
        "Gutter slope and alignment inspection for proper drainage",
        "Fascia board and soffit damage assessment",
      ],
    },
    {
      id: 2,
      title: "Professional Cleaning & Debris Removal",
      subtitle: "Where 10+ years of experience ensures thorough results",
      label: "Expert cleaning process",
      items: [
        "Complete hand removal of all leaves, debris, and buildup",
        "High-pressure flushing to clear downspouts and test flow",
        "Gutter screen and guard cleaning for maximum efficiency",
        "Professional-grade safety equipment for all roof heights",
      ],
    },
    {
      id: 3,
      title: "System Testing & Preventive Maintenance",
      subtitle: "Your home protection guaranteed against water damage",
      label: "What's included",
      items: [
        "Complete water flow testing and drainage verification",
        "Minor repair recommendations and adjustment services",
        "Seasonal maintenance scheduling for hurricane preparedness",
        "Satisfaction guarantee with before/after documentation",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "gutter-cost-tampa",
      question: "HOW MUCH DOES GUTTER CLEANING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Professional gutter cleaning in Tampa Bay typically costs $150-400 
            depending on home size, gutter height, and debris level. Single-story 
            homes average $150-250, while two-story homes range from $200-400. 
            This is far less than the thousands in water damage that clogged gutters can cause.
          </p>
          <p>
            We provide upfront pricing with no hidden fees, including complete cleaning 
            and flow testing. Call{" "}
            <a
              href="tel:7272564467"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              (727) 256-4467
            </a>{" "}
            for your free estimate and hurricane season preparation!
          </p>
        </div>
      ),
    },
    {
      id: "gutter-frequency",
      question: "HOW OFTEN SHOULD GUTTERS BE CLEANED IN FLORIDA?",
      answer:
        "Florida gutters should be cleaned at least twice per year - once before hurricane season (April-May) and once after heavy leaf-fall (November-December). Homes with lots of trees may need quarterly cleaning. I recommend pre-hurricane season cleaning as essential preparation, since clogged gutters can cause severe water damage during Florida's intense storms.",
    },
    {
      id: "gutter-safety",
      question: "IS GUTTER CLEANING DANGEROUS? WHY HIRE A PROFESSIONAL?",
      answer:
        "Yes, gutter cleaning can be extremely dangerous. Falls from ladders cause thousands of injuries annually. As a professional with 10+ years experience, I use commercial-grade safety equipment, proper ladder techniques, and am fully insured. I also know how to identify structural issues that homeowners often miss, potentially saving you from expensive repairs.",
    },
    {
      id: "gutter-hurricane-prep",
      question: "DO YOU PROVIDE HURRICANE SEASON GUTTER PREPARATION?",
      answer:
        "Absolutely! Hurricane preparation is critical for Florida homes. I ensure gutters are completely clear, properly sloped, and securely attached. Clogged gutters during hurricanes can cause water to back up under roof shingles, leading to interior flooding and structural damage. I also check for loose gutter sections that high winds could tear away.",
    },
    {
      id: "gutter-repairs",
      question: "DO YOU HANDLE GUTTER REPAIRS OR JUST CLEANING?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>I provide comprehensive gutter services including:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Complete gutter and downspout cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Minor leak repairs and resealing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Gutter realignment and slope adjustment
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Loose bracket tightening and reinforcement
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Downspout extension installation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Gutter guard installation and maintenance
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">For major replacements, I'll provide honest recommendations and referrals to trusted specialists.</p>
        </div>
      ),
    },
    {
      id: "gutter-damage-signs",
      question: "WHAT ARE SIGNS MY GUTTERS NEED IMMEDIATE ATTENTION?",
      answer:
        "Warning signs include: water overflowing during rain, sagging gutter sections, water stains on exterior walls, foundation pudling, peeling paint near gutters, or visible plant growth in gutters. In Florida's climate, these issues can quickly lead to serious water damage, mold problems, and foundation issues. If you notice any of these signs, call for immediate inspection.",
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
            Professional Gutter Cleaning Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Gutter Maintenance Specialist Serving Tampa, St. Petersburg, Clearwater & Pinellas Park
          </p>
          
          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for a reliable gutter cleaning professional in Tampa Bay? I'm a licensed specialist with over 10 years of experience protecting homes throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My journey began in commercial building maintenance, where I mastered working at heights safely and efficiently on large-scale properties. Today, I bring that same professional-grade expertise to protect your home's most important drainage system.
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
              Why Choose My Gutter Cleaning Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/gutters/1.png"
                  alt="Professional gutter cleaning in Tampa Bay"
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
              My Professional Gutter Cleaning Process
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
            title="Frequently Asked Gutter Cleaning Questions"
            subtitle="Have questions about protecting your home? Here's what Tampa Bay homeowners ask us most about professional gutter cleaning."
          />
        </div>
      </section>
    </div>
  );
};

export default GutterCleaningTemplate;