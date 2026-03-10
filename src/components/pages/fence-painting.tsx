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
    title: "Professional Fence Painting",
    subtitle: "Protect Your Property. Enhance Your Curb Appeal.",
    description:
      "Expert fence painting services using weather-resistant coatings designed to protect and beautify your property boundaries while withstanding Florida's challenging climate.",
    image: "/images/hero/5.png",
  },
];

const FencePaintingTemplate = () => {
  const benefits = [
    "Master-Level Expertise with 7+ Years Experience",
    "Weather-Resistant Coatings & Professional Preparation",
    "Florida Hurricane & UV Protection Specialists",
    "All Fence Materials: Wood, Vinyl, Metal & Composite",
  ];

  const paintingProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Complete Fence Assessment & Surface Preparation",
      subtitle: "The foundation of long-lasting fence protection",
      label: "What I assess differently",
      items: [
        "Comprehensive fence condition evaluation and material analysis",
        "Weather damage assessment and repair recommendations",
        "Professional cleaning and surface preparation for each material type",
        "Hardware inspection and rust treatment for metal components",
      ],
    },
    {
      id: 2,
      title: "Professional Coating & Protection Application",
      subtitle: "Where 7+ years of experience ensures lasting results",
      label: "Expert application process",
      items: [
        "Weather-resistant stains and paints designed for outdoor exposure",
        "Specialized techniques for wood, vinyl, metal, and composite materials",
        "Professional spray and brush application for optimal coverage",
        "Multiple coats applied under ideal weather conditions",
      ],
    },
    {
      id: 3,
      title: "Quality Assurance & Property Protection",
      subtitle: "Your fence transformation guaranteed to withstand Florida weather",
      label: "What's included",
      items: [
        "Complete quality inspection and touch-up of any missed areas",
        "Landscape protection and complete cleanup",
        "Hardware reinstallation and gate functionality testing",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "fence-cost-tampa",
      question: "HOW MUCH DOES FENCE PAINTING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Professional fence painting in Tampa Bay typically costs $3-8 per
            linear foot depending on fence height, material, and condition.
            Standard 6-foot wood fences average $5-7 per foot, while metal
            fences requiring rust treatment can be $6-10 per foot. This
            investment significantly extends your fence's lifespan and enhances
            property value.
          </p>
          <p>
            We provide detailed estimates based on fence measurements, material
            type, and preparation requirements. Call{" "}
            <a
              href={COMPANY.phoneTel}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              {COMPANY.phoneDisplay}
            </a>{" "}
            for your free fence assessment and protection estimate!
          </p>
        </div>
      ),
    },
    {
      id: "fence-timeline",
      question: "HOW LONG DOES FENCE PAINTING TAKE?",
      answer:
        "Most fence painting projects take 3-7 days depending on fence length and material type. Preparation takes 1-2 days, while application requires 2-3 days for proper coverage. Weather conditions can affect the timeline, but we work efficiently to complete your project while ensuring quality results.",
    },
    {
      id: "fence-durability",
      question: "HOW LONG WILL MY FENCE PAINT LAST IN FLORIDA?",
      answer:
        "With proper preparation and weather-resistant coatings, fence paint can last 5-10 years in Florida's climate. We use specialized outdoor paints that resist UV damage, moisture, and thermal expansion. Our warranty covers normal weather exposure and properly maintained fences.",
    },
    {
      id: "fence-materials",
      question: "WHAT TYPES OF FENCES CAN YOU PAINT?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>We professionally paint all fence materials including:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Wood fences (cedar, pine, pressure-treated lumber)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Metal fences (aluminum, steel, wrought iron)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Vinyl fences requiring color refresh
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Composite fencing materials
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Chain link with privacy slats
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">
            Each material receives specialized preparation and coating treatment!
          </p>
        </div>
      ),
    },
    {
      id: "fence-weather",
      question: "CAN YOU PAINT FENCES DURING FLORIDA'S RAINY SEASON?",
      answer:
        "Yes, but we carefully plan around weather conditions. We monitor forecasts and avoid painting when rain is expected within 24-48 hours. Florida's high humidity requires special timing and paint selection. We often work in the early morning when humidity is lower and allow proper curing time before weather changes.",
    },
    {
      id: "fence-maintenance",
      question: "HOW DO I MAINTAIN MY NEWLY PAINTED FENCE?",
      answer:
        "Regular maintenance includes annual cleaning with mild detergent, trimming vegetation away from the fence, and inspecting for damage after storms. Avoid pressure washing painted surfaces and touch up any scratches or chips promptly. We provide detailed maintenance guidelines and can perform annual inspections to maximize your fence's lifespan.",
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
            Professional Fence Painting Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Fence Painting Specialist Serving Tampa, St. Petersburg,
            Clearwater & Pinellas Park
          </p>

          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for professional fence painting services in Tampa Bay?
              I'm a professional painter with nearly a decade of experience
              protecting and beautifying fences throughout Tampa, St. Petersburg,
              Clearwater, and Pinellas Park. My journey began in commercial
              painting, where I mastered working with diverse materials and
              weather-resistant coatings. Today, I bring that same
              professional-grade expertise to protect your property boundaries
              and enhance your home's curb appeal.
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
              Why Choose My Fence Painting Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/fence/1.png"
                  alt="Professional fence painting in Tampa Bay"
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
              My Professional Fence Painting Process
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
            title="Frequently Asked Fence Painting Questions"
            subtitle="Have questions about protecting your property boundaries? Here's what Tampa Bay homeowners ask us most about professional fence painting."
          />
        </div>
      </section>
    </div>
  );
};

export default FencePaintingTemplate;