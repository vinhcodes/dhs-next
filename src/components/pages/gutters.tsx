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
        <div className="space-y-4">
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
              className="text-orange-600 font-semibold hover:text-orange-700"
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
        <div className="space-y-3">
          <p>I provide comprehensive gutter services including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Complete gutter and downspout cleaning</li>
            <li>Minor leak repairs and resealing</li>
            <li>Gutter realignment and slope adjustment</li>
            <li>Loose bracket tightening and reinforcement</li>
            <li>Downspout extension installation</li>
            <li>Gutter guard installation and maintenance</li>
          </ul>
          <p>For major replacements, I'll provide honest recommendations and referrals to trusted specialists.</p>
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
    <div className="overflow-x-hidden">
        <CarouselSlider slides={heroSlides} />
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide sm:tracking-wider uppercase text-zinc-700">
          Professional Gutter Cleaning Services Tampa Bay
        </h1>

        <h2 className="max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-orange-500/80 tracking-wide sm:tracking-wider px-2 sm:px-0">
          Expert Gutter Maintenance Specialist Serving Tampa, St. Petersburg,
          Clearwater & Pinellas Park
        </h2>

        <div className="pt-4 sm:pt-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed w-full mx-auto px-2 sm:px-0 font-light">
            Looking for a reliable gutter cleaning professional in Tampa Bay? I'm
            a licensed specialist with over 10 years of experience protecting homes
            throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My
            journey began in commercial building maintenance, where I mastered working
            at heights safely and efficiently on large-scale properties - from
            office complexes to industrial facilities. My commercial background taught
            me the critical importance of proper water management systems, advanced
            safety protocols, and preventive maintenance that saves thousands in
            water damage repairs. Today, I bring that same professional-grade
            expertise to protect your home's most important drainage system.
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
              titleText="Why Choose My Gutter Cleaning Services in Tampa Bay?"
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-start"
            />

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/images/gutters/1.png"
                    alt="Professional gutter cleaning in Tampa Bay"
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

        {/* Gutter Cleaning Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="My Professional Gutter Cleaning Process"
               className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-start"
            />
            <ProcessCard steps={cleaningProcessData} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <FAQ 
              questions={faqData}
              title="Frequently Asked Gutter Cleaning Questions"
              subtitle="Have questions about protecting your home? Here's what Tampa Bay homeowners ask us most about professional gutter cleaning."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GutterCleaningTemplate;