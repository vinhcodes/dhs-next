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
        id: 1,
        title: "Exterior Painting Service",
        subtitle: "Lasting Color. Expert Finish.",
        description:
          "We use premium materials designed to hold up against Florida’s harsh sun, humidity, and storms—so your home stays beautiful and protected for years to come.",
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
        <div className="space-y-4">
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
              className="text-orange-600 font-semibold hover:text-orange-700"
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
        <div className="space-y-3">
          <p>Our comprehensive exterior preparation includes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Complete pressure washing and surface cleaning</li>
            <li>Inspection and repair of weather damage, wood rot, and cracks</li>
            <li>Mildew treatment and prevention application</li>
            <li>Professional caulking of all gaps and joints</li>
            <li>Primer application for maximum paint adhesion</li>
            <li>Landscape and property protection</li>
            <li>Window and fixture masking</li>
          </ul>
          <p>Proper preparation is critical for Florida's demanding climate!</p>
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
    <div className="overflow-x-hidden">
        <CarouselSlider slides={heroSlides} />
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide sm:tracking-wider uppercase text-zinc-700">
          Professional Exterior Painting Services Tampa Bay
        </h1>

        <h2 className="max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-orange-500/80 tracking-wide sm:tracking-wider px-2 sm:px-0">
          Expert Exterior Painting Contractor Serving Tampa, St. Petersburg,
          Clearwater & Pinellas Park
        </h2>

        <div className="pt-4 sm:pt-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed w-full mx-auto px-2 sm:px-0 font-light">
            Looking for a skilled exterior painting contractor in Tampa Bay? I'm
            a licensed professional painter with over 10 years of experience
            protecting homes throughout Tampa, St. Petersburg, Clearwater, and
            Pinellas Park. My journey began in commercial painting, where I
            mastered working with challenging weather conditions and large-scale
            exterior projects - from office complexes to industrial facilities.
            My commercial background taught me to handle Florida's most
            demanding weather challenges, work with hurricane-resistant
            coatings, and deliver results that withstand our intense UV rays and
            coastal conditions. Today, I bring that same professional-grade
            expertise to protect and beautify your home's exterior.
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
              titleText="Why Choose My Exterior Painting Services in Tampa Bay?"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-center lg:text-left"
            />

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/images/exterior/1.png"
                    alt="Professional exterior painting in Tampa Bay"
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

        {/* Exterior Painting Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="My Signature Exterior Painting Process"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-center"
            />
            <ProcessCard steps={paintingProcessData} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <FAQ 
              questions={faqData}
              title="Frequently Asked Exterior Painting Questions"
              subtitle="Have questions before booking your next project? Here's what Tampa Bay homeowners ask us most about exterior painting."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExteriorTemplate;