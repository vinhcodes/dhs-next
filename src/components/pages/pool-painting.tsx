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
import { COMPANY } from "@/config/company";

const heroSlides = [
  {
    id: 1,
    title: "Professional Pool Painting",
    subtitle: "Transform Your Pool. Protect Your Investment.",
    description:
      "Expert pool painting services using marine-grade coatings designed for Florida's harsh sun and chlorine exposure. Transform your pool into a stunning backyard centerpiece.",
    image: "/images/hero/4.png",
  },
];

const PoolPaintingTemplate = () => {
  const benefits = [
    "Master-Level Expertise with 7+ Years Experience",
    "Marine-Grade Pool Coatings & Surface Preparation",
    "Florida Climate & Chemical Resistance Specialists",
    "Complete Pool Deck & Tile Restoration Services",
    "Licensed, Insured & Satisfaction Guaranteed",
  ];

  const paintingProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Complete Pool Assessment & Surface Preparation",
      subtitle: "The foundation of long-lasting pool transformations",
      label: "What I assess differently",
      items: [
        "Comprehensive pool surface condition evaluation and repair planning",
        "Chemical balance testing and surface contamination analysis",
        "Crack repair and surface smoothing for optimal paint adhesion",
        "Professional acid washing and degreasing preparation",
      ],
    },
    {
      id: 2,
      title: "Professional Pool Coating Application",
      subtitle: "Where 7+ years of experience delivers stunning results",
      label: "Expert application process",
      items: [
        "Marine-grade pool paints designed for maximum chemical resistance",
        "Multiple thin coats applied with professional spray equipment",
        "Specialized pool deck and tile restoration techniques",
        "Weather monitoring for optimal curing conditions",
      ],
    },
    {
      id: 3,
      title: "Quality Assurance & Pool Restoration",
      subtitle: "Your pool transformation guaranteed to last",
      label: "What's included",
      items: [
        "Complete quality inspection and touch-up of any imperfections",
        "Pool equipment protection and cleanup",
        "Chemical balance guidance for new coating protection",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "pool-cost-tampa",
      question: "HOW MUCH DOES POOL PAINTING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Professional pool painting in Tampa Bay typically costs $3-8 per
            square foot depending on pool size, surface condition, and coating
            type. Standard pools range from $2,000-6,000, while larger pools
            or those requiring extensive prep work can be $6,000-12,000. This
            investment dramatically improves your pool's appearance and protects
            the underlying structure.
          </p>
          <p>
            We provide detailed estimates including surface preparation,
            marine-grade coatings, and all labor. Call{" "}
            <a
              href={COMPANY.phoneTel}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              {COMPANY.phoneDisplay}
            </a>{" "}
            for your free pool assessment and transformation estimate!
          </p>
        </div>
      ),
    },
    {
      id: "pool-timeline",
      question: "HOW LONG DOES POOL PAINTING TAKE?",
      answer:
        "Most pool painting projects take 5-10 days to complete, including cure time. Surface preparation takes 2-3 days, coating application requires 2-3 days, and the pool needs 5-7 days to fully cure before refilling. Weather conditions can affect the timeline, but we work efficiently to minimize your pool's downtime.",
    },
    {
      id: "pool-durability",
      question: "HOW LONG WILL MY POOL PAINT LAST IN FLORIDA?",
      answer:
        "With proper preparation and marine-grade coatings, pool paint can last 7-12 years in Florida's climate. We use specialized pool paints that resist UV damage, chemical erosion, and thermal expansion. Our 5-year warranty covers normal pool use, proper chemical maintenance, and typical Florida weather conditions.",
    },
    {
      id: "pool-materials",
      question: "WHAT TYPE OF PAINT DO YOU USE FOR POOLS?",
      answer:
        "We use premium marine-grade pool paints like epoxy and chlorinated rubber coatings specifically designed for underwater use. These paints offer superior chemical resistance, UV protection, and adhesion to concrete and plaster surfaces. The choice depends on your pool's surface type and your specific needs.",
    },
    {
      id: "pool-preparation",
      question: "WHAT PREPARATION IS REQUIRED FOR POOL PAINTING?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>Proper pool preparation is critical for lasting results:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Complete pool draining and debris removal
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Professional acid washing and surface cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Crack repair and surface smoothing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Equipment protection and masking
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Surface priming for maximum paint adhesion
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">
            Proper preparation ensures your pool paint lasts for years!
          </p>
        </div>
      ),
    },
    {
      id: "pool-maintenance",
      question: "HOW DO I MAINTAIN MY NEWLY PAINTED POOL?",
      answer:
        "Maintain proper chemical balance (pH 7.2-7.6, chlorine 1-3 ppm), avoid abrasive cleaning tools, and use pool brushes designed for painted surfaces. We provide detailed maintenance guidelines after completion. Regular water testing and gentle cleaning will help your pool paint last its full lifespan while keeping your pool looking beautiful.",
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
            Professional Pool Painting Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Pool Painting Specialist Serving Tampa, St. Petersburg,
            Clearwater & Pinellas Park
          </p>

          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for professional pool painting services in Tampa Bay?
              I'm a professional painter with nearly a decade of experience
              transforming pools throughout Tampa, St. Petersburg, Clearwater,
              and Pinellas Park. My journey began in commercial painting, where
              I mastered working with specialized coatings and challenging
              environments. Today, I bring that same professional-grade
              expertise to transform your pool into a stunning backyard oasis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button
              size="xl"
              variant="outline"
              className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Get A Estimate
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
              Why Choose My Pool Painting Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/pool/1.png"
                  alt="Professional pool painting in Tampa Bay"
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
              My Professional Pool Painting Process
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
            title="Frequently Asked Pool Painting Questions"
            subtitle="Have questions about professional pool transformation? Here's what Tampa Bay homeowners ask us most about pool painting services."
          />
        </div>
      </section>
    </div>
  );
};

export default PoolPaintingTemplate;