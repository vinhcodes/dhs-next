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
    id: 2,
    title: "Interior Painting Service",
    subtitle: "Your Home Deserves the Best",
    description:
      "From single rooms to whole house makeovers, we deliver flawless finishes that enhance your home's beauty and value.",
    image: "/images/hero/2.png",
  },
];

const InteriorTemplate = () => {
  const benefits = [
    "Master-Level Craftsmanship with 10+ Years Experience",
    "Commercial-Grade Preparation Process", 
    "Florida Climate Expertise & Humidity-Resistant Solutions",
    "All Paint Types & Custom Color Matching",
    "Licensed, Insured & Guaranteed Work",
  ];

  const paintingProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Professional Surface Preparation",
      subtitle: "The foundation of every lasting paint job",
      label: "What I do differently",
      items: [
        "Hand-inspect and repair every surface imperfection",
        "Professional wood filler for seamless hole repairs", 
        "Premium primer application for Florida's humidity",
        "Comprehensive caulking and sanding for smooth finish",
      ],
    },
    {
      id: 2,
      title: "Expert Paint Application",
      subtitle: "Where 10+ years of experience shows",
      label: "Professional techniques",
      items: [
        "Premium painter's tape for razor-sharp lines",
        "Multiple thin coats (never rushed thick applications)",
        "Humidity-resistant paints for Florida climate", 
        "Commercial-grade tools and brushes",
      ],
    },
    {
      id: 3,
      title: "Quality Guarantee & Cleanup",
      subtitle: "Your satisfaction is guaranteed",
      label: "What's included",
      items: [
        "Final walkthrough and touch-ups",
        "Complete cleanup and furniture replacement",
        "Satisfaction guarantee on all work",
        "7-10 year durability promise",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "cost-tampa",
      question: "HOW MUCH DOES INTERIOR PAINTING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Interior painting costs in Tampa Bay typically range from $3-7 per
            square foot, depending on several factors including room size,
            ceiling height, paint quality, and the amount of prep work required.
            A standard 12x12 room usually costs $800-1,500, while whole-house
            interior painting ranges from $4,000-12,000.
          </p>
          <p>
            We provide detailed, transparent estimates with no hidden fees.
            Every quote includes high-quality paint, professional labor, surface
            preparation, and cleanup. Call{" "}
            <a
              href="tel:7272564467"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              (727) 256-4467
            </a>{" "}
            for your free estimate today!
          </p>
        </div>
      ),
    },
    {
      id: "timeline",
      question: "HOW LONG DOES IT TAKE TO PAINT A HOUSE INTERIOR?",
      answer:
        "Most interior painting projects are completed within 3-7 days. A single room typically takes 1-2 days, while a full 3-bedroom home usually requires 4-6 days. Larger homes or projects requiring extensive prep work may take up to 10 days. We work efficiently while maintaining our high-quality standards, and we'll provide you with a detailed timeline during your consultation.",
    },
    {
      id: "florida-paint", 
      question: "WHAT TYPE OF PAINT DO YOU USE FOR FLORIDA'S HUMID CLIMATE?",
      answer:
        "We use premium, humidity-resistant paints specifically designed for Florida's climate. Our go-to brands include Sherwin-Williams ProClassic and Benjamin Moore Advance - both offer excellent moisture resistance, mold/mildew protection, and superior durability. We typically use semi-gloss or satin finishes in bathrooms and kitchens for maximum humidity protection, while eggshell finishes work beautifully in living areas.",
    },
    {
      id: "furniture-prep",
      question: "DO I NEED TO MOVE FURNITURE AND PREPARE MY HOME?",
      answer:
        "No need to stress about preparation! We handle all the heavy lifting. We'll carefully move and protect your furniture with plastic coverings, remove outlet covers and switch plates, and protect your floors with drop cloths. You only need to remove personal items, artwork, and valuable/fragile decorations. We'll put everything back in place when we're finished.",
    },
    {
      id: "guarantee",
      question: "WHAT GUARANTEE DO YOU OFFER ON YOUR PAINTING WORK?",
      answer:
        "We stand behind our work with a comprehensive 3-year warranty on all interior painting services. This covers peeling, cracking, or premature fading under normal conditions. Additionally, we're fully licensed and insured for your peace of mind. If you're not completely satisfied with our work, we'll make it right at no additional cost.",
    },
    {
      id: "service-included",
      question: "WHAT'S INCLUDED IN YOUR INTERIOR PAINTING SERVICE?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>Our complete interior painting service includes:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Free color consultation and paint selection assistance
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Complete surface preparation (cleaning, sanding, filling holes)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Premium primer application when needed
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Two coats of high-quality paint
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Furniture moving and protection
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Trim and detail work
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Complete cleanup and debris removal
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Final walkthrough and touch-ups
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">Everything you need for a beautiful, long-lasting paint job!</p>
        </div>
      ),
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
            Professional Interior Painting Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Interior Painting Contractor Serving Tampa, St. Petersburg, Clearwater & Pinellas Park
          </p>
          
          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for a skilled interior painting contractor in Tampa Bay? I'm a licensed professional painter with over 10 years of experience transforming homes throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My journey began in commercial painting, where I mastered the precision required for large-scale projects. Today, I bring that same professional-grade expertise to your home.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button 
              size="xl"
              variant={"outline"}
              className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Get Free Estimate
            </Button>
            <PhoneCallButton className="rounded-full"/>
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
              Why Choose My Interior Painting Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/interior/1.png"
                  alt="Professional interior painting in Tampa Bay"
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
              My Signature Interior Painting Process
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
            title="Frequently Asked Interior Painting Questions"
            subtitle="Have questions before booking your next project? Here's what Tampa homeowners ask us most about interior painting."
          />
        </div>
      </section>
    </div>
  );
};

export default InteriorTemplate;