"use client";
import ReviewSection from "@/components/review";
import { Button } from "@/components/ui/button";
import InfiniteLinkCarousel from "@/components/ui/infinite-carousel";
import TitleWithLine from "@/components/ui/title-with-line";
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
    subtitle: "Revive, Don’t Replace",
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
        <div className="space-y-4">
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
              className="text-orange-600 font-semibold hover:text-orange-700"
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
        <div className="space-y-3">
          <p>Yes! We plan projects to minimize kitchen disruption:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Doors and drawers are removed for off-site finishing</li>
            <li>Lower cabinets remain functional during upper cabinet work</li>
            <li>Sink and appliances stay accessible when possible</li>
            <li>We can work in phases to maintain kitchen functionality</li>
            <li>Clear timeline communication so you can plan accordingly</li>
          </ul>
          <p>
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
    <div className="overflow-x-hidden">
      <CarouselSlider slides={heroSlides} />
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide sm:tracking-wider uppercase text-zinc-700">
          Professional Cabinet Painting Services Tampa Bay
        </h1>

        <h2 className="max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-orange-500/80 tracking-wide sm:tracking-wider px-2 sm:px-0">
          Expert Cabinet Makeover Specialist Serving Tampa, St. Petersburg,
          Clearwater & Pinellas Park
        </h2>

        <div className="pt-4 sm:pt-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed w-full mx-auto px-2 sm:px-0 font-light">
            Looking for a skilled cabinet painting specialist in Tampa Bay? I'm
            a licensed professional painter with over 10 years of experience
            transforming kitchens throughout Tampa, St. Petersburg, Clearwater,
            and Pinellas Park. My journey began in commercial painting, where I
            mastered working with high-traffic surfaces and demanding durability
            requirements - from restaurant kitchens to office break rooms. My
            commercial background taught me the importance of surface
            preparation, proper primer selection, and durable finish application
            that withstands daily use. Today, I bring that same
            professional-grade expertise to transform your kitchen cabinets with
            results that rival expensive full replacements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center align-middle gap-4 pt-6 sm:pt-8">
          <Button
            size={"lg"}
            variant={"outline"}
            className="font-bold border-orange-500 border-2 text-orange-500 hover:text-orange-50 hover:bg-orange-500 pointer"
          >
            Get Free Estimate
          </Button>
          <PhoneCallButton />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="">
        <InfiniteLinkCarousel />
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <ReviewSection />
        <div className="mt-12 sm:mt-16">
          <ReviewCarousel />
        </div>
      </section>

      {/* Main Content - Dark Background */}
      <div className="bg-gray-900 text-white">
        {/* Why Choose Us Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="Why Choose My Cabinet Painting Services in Tampa Bay?"
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-start"
            /> 
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/images/cabinet/1.png"
                    alt="Professional cabinet painting in Tampa Bay"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <span className="text-green-400 text-lg sm:text-xl md:text-2xl font-bold mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cabinet Painting Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="My Signature Cabinet Transformation Process"
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-start"
            />
            <ProcessCard steps={paintingProcessData} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <FAQ
              questions={faqData}
              title="Frequently Asked Cabinet Painting Questions"
              subtitle="Have questions before booking your kitchen transformation? Here's what Tampa Bay homeowners ask us most about cabinet painting."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CabinetTemplate;
