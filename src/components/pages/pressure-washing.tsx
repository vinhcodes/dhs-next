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
        <div className="space-y-4">
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
              className="text-orange-600 font-semibold hover:text-orange-700"
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
        <div className="space-y-3">
          <p>I safely clean a wide variety of surfaces including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Driveways, sidewalks, and concrete surfaces</li>
            <li>Home exterior siding (vinyl, stucco, brick, wood)</li>
            <li>Decks, patios, and outdoor living spaces</li>
            <li>Pool decks and surrounding areas</li>
            <li>Fences, gates, and outdoor structures</li>
            <li>Commercial parking lots and building exteriors</li>
          </ul>
          <p>Each surface receives customized pressure and cleaning solution treatment!</p>
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
    <div className="overflow-x-hidden">
        <CarouselSlider slides={heroSlides} />
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide sm:tracking-wider uppercase text-zinc-700">
          Professional Pressure Washing Services Tampa Bay
        </h1>

        <h2 className="max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-orange-500/80 tracking-wide sm:tracking-wider px-2 sm:px-0">
          Expert Property Cleaning Specialist Serving Tampa, St. Petersburg,
          Clearwater & Pinellas Park
        </h2>

        <div className="pt-4 sm:pt-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed w-full mx-auto px-2 sm:px-0 font-light">
            Looking for professional pressure washing services in Tampa Bay? I'm
            a licensed specialist with over 10 years of experience restoring
            properties throughout Tampa, St. Petersburg, Clearwater, and Pinellas
            Park. My journey began in commercial building maintenance, where I
            mastered advanced pressure washing techniques on large-scale properties
            - from shopping centers to office complexes and industrial facilities.
            My commercial background taught me the critical importance of proper
            pressure settings, surface-safe techniques, and environmental protection
            protocols. Today, I bring that same professional-grade expertise to
            restore your property's beauty and protect your valuable investment.
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
              titleText="Why Choose My Pressure Washing Services in Tampa Bay?"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-center lg:text-left"
            />

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/images/pressure/1.png"
                    alt="Professional pressure washing in Tampa Bay"
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

        {/* Pressure Washing Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="My Professional Pressure Washing Process"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-center"
            />
            <ProcessCard steps={cleaningProcessData} />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <FAQ 
              questions={faqData}
              title="Frequently Asked Pressure Washing Questions"
              subtitle="Have questions about professional property cleaning? Here's what Tampa Bay homeowners ask us most about pressure washing services."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PressureWashingTemplate;