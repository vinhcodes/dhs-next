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
    id: 3,
    title: "Cabinet Refinishing Service",
    subtitle: "Revive, Don't Replace",
    description:
      "Our cabinet refinishing service gives your existing cabinets a fresh, clean look—without the cost of a full remodel.",
    image: "/images/hero/3.png",
  },
];

const CabinetTemplate = () => {
  const benefits = [
    "Master-Level Craftsmanship with 10+ Years Experience",
    "Commercial-Grade Surface Preparation & Priming",
    "Custom Color Matching & Design Consultation",
    "Durable Finishes Built for High-Traffic Kitchens",
    "Licensed, Insured & Satisfaction Guaranteed",
  ];

  const paintingProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Detailed Assessment & Custom Design",
      subtitle: "The foundation of every stunning kitchen transformation",
      label: "What I do differently",
      items: [
        "Complete cabinet condition assessment and repair evaluation",
        "Custom color consultation with kitchen lighting analysis",
        "Hardware upgrade recommendations and coordination",
        "Detailed timeline planning to minimize kitchen disruption",
      ],
    },
    {
      id: 2,
      title: "Professional Surface Preparation & Priming",
      subtitle: "Where 10+ years of experience creates lasting results",
      label: "Expert preparation process",
      items: [
        "Complete cabinet door and drawer removal for workshop-quality finish",
        "Thorough cleaning, sanding, and degreasing of all surfaces",
        "High-adhesion primer specifically designed for kitchen cabinets",
        "Professional spray booth setup for flawless, even coverage",
      ],
    },
    {
      id: 3,
      title: "Premium Application & Quality Assurance",
      subtitle: "Your kitchen transformation guaranteed to last",
      label: "What's included",
      items: [
        "Multiple thin coats of premium cabinet-grade paint",
        "Professional hardware installation and adjustment",
        "Complete cleanup and kitchen restoration",
        "5-year durability guarantee against chipping and wear",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "cabinet-cost-tampa",
      question: "HOW MUCH DOES CABINET PAINTING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Cabinet painting in Tampa Bay typically costs $3,000-8,000 for a
            full kitchen, depending on cabinet size, condition, and finish
            complexity. This is 60-80% less expensive than full cabinet
            replacement, which often costs $15,000-40,000.
          </p>
          <p>
            We provide detailed estimates including all materials, labor, and
            hardware options. Call{" "}
            <a
              href="tel:7272564467"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              (727) 256-4467
            </a>{" "}
            for your free consultation and kitchen transformation estimate!
          </p>
        </div>
      ),
    },
    {
      id: "cabinet-timeline",
      question: "HOW LONG DOES CABINET PAINTING TAKE?",
      answer:
        "Most cabinet painting projects take 4-7 days to complete. We remove doors and drawers for 2-3 days of workshop finishing, while painting cabinet boxes in your home takes 1-2 days. Final installation and touch-ups require 1 additional day. We work efficiently to minimize kitchen disruption and can often coordinate with your schedule for optimal convenience.",
    },
    {
      id: "cabinet-durability",
      question: "HOW LONG WILL MY PAINTED CABINETS LAST?",
      answer:
        "With proper preparation and premium cabinet-grade paints, painted cabinets can last 10-15 years or more. We use high-durability finishes specifically designed for kitchen environments - resistant to moisture, grease, and daily wear. Our 5-year guarantee covers chipping, peeling, and normal kitchen use when properly maintained.",
    },
    {
      id: "cabinet-materials",
      question: "WHAT TYPE OF PAINT DO YOU USE FOR KITCHEN CABINETS?",
      answer:
        "We use premium cabinet-specific paints like Benjamin Moore Advance and Sherwin-Williams ProClassic. These are hybrid enamel paints that cure to an extremely hard, smooth finish perfect for kitchen use. They're self-leveling, which eliminates brush marks, and provide superior durability against moisture, heat, and daily cleaning.",
    },
    {
      id: "kitchen-disruption",
      question: "CAN I STILL USE MY KITCHEN DURING THE PROJECT?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>Yes! We plan projects to minimize kitchen disruption:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Doors and drawers are removed for off-site finishing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Lower cabinets remain functional during upper cabinet work
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Sink and appliances stay accessible when possible
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              We can work in phases to maintain kitchen functionality
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Clear timeline communication so you can plan accordingly
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">
            Most families can maintain basic kitchen use throughout the project!
          </p>
        </div>
      ),
    },
    {
      id: "cabinet-vs-replacement",
      question: "IS CABINET PAINTING BETTER THAN REPLACING CABINETS?",
      answer:
        "Cabinet painting is ideal if your cabinet boxes are structurally sound but outdated in appearance. You'll save 60-80% compared to replacement while achieving a completely fresh look. Replacement is better for damaged cabinets or major layout changes. During our consultation, I'll honestly assess whether painting or replacement is the better investment for your specific situation.",
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
            Professional Cabinet Painting Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Cabinet Makeover Specialist Serving Tampa, St. Petersburg, Clearwater & Pinellas Park
          </p>
          
          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for a skilled cabinet painting specialist in Tampa Bay? I'm a licensed professional painter with over 10 years of experience transforming kitchens throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My journey began in commercial painting, where I mastered working with high-traffic surfaces and demanding durability requirements. Today, I bring that same professional-grade expertise to transform your kitchen cabinets with results that rival expensive full replacements.
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
              Why Choose My Cabinet Painting Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/cabinet/1.png"
                  alt="Professional cabinet painting in Tampa Bay"
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
              My Signature Cabinet Transformation Process
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
            title="Frequently Asked Cabinet Painting Questions"
            subtitle="Have questions before booking your kitchen transformation? Here's what Tampa Bay homeowners ask us most about cabinet painting."
          />
        </div>
      </section>
    </div>
  );
};

export default CabinetTemplate;