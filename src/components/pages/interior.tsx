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
        <div className="space-y-4">
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
              className="text-orange-600 font-semibold hover:text-orange-700"
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
        <div className="space-y-3">
          <p>Our complete interior painting service includes:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Free color consultation and paint selection assistance</li>
            <li>
              Complete surface preparation (cleaning, sanding, filling holes)
            </li>
            <li>Premium primer application when needed</li>
            <li>Two coats of high-quality paint</li>
            <li>Furniture moving and protection</li>
            <li>Trim and detail work</li>
            <li>Complete cleanup and debris removal</li>
            <li>Final walkthrough and touch-ups</li>
          </ul>
          <p>Everything you need for a beautiful, long-lasting paint job!</p>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-x-hidden">
         <CarouselSlider slides={heroSlides} />
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide sm:tracking-wider uppercase text-zinc-700">
          Professional Interior Painting Services Tampa Bay
        </h1>

        <h2 className="max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-orange-500/80 tracking-wide sm:tracking-wider px-2 sm:px-0">
          Expert Interior Painting Contractor Serving Tampa, St. Petersburg,
          Clearwater & Pinellas Park
        </h2>

        <div className="pt-4 sm:pt-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed w-full mx-auto px-2 sm:px-0 font-light">
            Looking for a skilled interior painting contractor in Tampa Bay? I'm
            a licensed professional painter with over 10 years of experience
            transforming homes throughout Tampa, St. Petersburg, Clearwater, and
            Pinellas Park. My journey began in commercial painting, where I
            mastered the precision required for large-scale projects. Today, I
            bring that same professional-grade expertise to your home. My
            professional background taught me to work with every type of
            surface, handle complex color schemes, and deliver flawless results
            on deadline. I've painted everything from luxury high-rises to
            medical facilities, giving me experience with the most demanding
            quality standards in the industry.
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
              titleText="Why Choose My Interior Painting Services in Tampa Bay?"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-center lg:text-left"
            />

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/images/interior/1.png"
                    alt="Professional interior painting in Tampa Bay"
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

        {/* Interior Painting Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="My Signature Interior Painting Process"
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
              title="Frequently Asked Interior Painting Questions"
              subtitle="Have questions before booking your next project? Here's what Tampa homeowners ask us most about interior painting."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default InteriorTemplate;
