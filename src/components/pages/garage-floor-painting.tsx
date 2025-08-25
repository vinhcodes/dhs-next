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
    title: "Professional Garage Floor Painting",
    subtitle: "Transform Your Garage. Protect Your Investment.",
    description:
      "Expert garage floor coating services using industrial-grade epoxy and polyurethane systems designed to withstand heavy traffic, chemicals, and Florida's demanding climate.",
    image: "/images/hero/6.png",
  },
];

const GarageFloorPaintingTemplate = () => {
  const benefits = [
    "Master-Level Expertise with 7+ Years Experience",
    "Industrial-Grade Epoxy & Polyurethane Coating Systems",
    "Florida Climate & Chemical Resistance Specialists",
    "Complete Surface Preparation & Repair Services",
  ];

  const coatingProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Complete Floor Assessment & Surface Preparation",
      subtitle: "The foundation of long-lasting garage floor transformations",
      label: "What I assess differently",
      items: [
        "Comprehensive concrete condition evaluation and repair assessment",
        "Oil stain removal and chemical contamination treatment",
        "Professional diamond grinding for optimal coating adhesion",
        "Crack repair and joint sealing for structural integrity",
      ],
    },
    {
      id: 2,
      title: "Professional Coating System Application",
      subtitle: "Where 7+ years of experience delivers exceptional results",
      label: "Expert application process",
      items: [
        "Industrial-grade epoxy primers and topcoats for maximum durability",
        "Multiple coating layers applied with professional spray equipment",
        "Decorative flake systems for enhanced appearance and slip resistance",
        "Climate-controlled curing for optimal performance characteristics",
      ],
    },
    {
      id: 3,
      title: "Quality Assurance & Floor Protection",
      subtitle: "Your garage transformation guaranteed to withstand heavy use",
      label: "What's included",
      items: [
        "Complete quality inspection and touch-up of any imperfections",
        "Equipment protection and thorough cleanup",
        "Maintenance guidance for long-term floor care",
        "10-year durability guarantee against peeling and wear",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "garage-cost-tampa",
      question: "HOW MUCH DOES GARAGE FLOOR PAINTING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p>
            Professional garage floor coating in Tampa Bay typically costs $3-8
            per square foot depending on coating type and surface condition.
            Standard 2-car garages (400-600 sq ft) range from $1,500-4,000,
            while 3-car garages can be $2,500-6,000. This investment
            dramatically improves your garage's appearance, durability, and
            property value.
          </p>
          <p>
            We provide detailed estimates including surface preparation,
            industrial-grade coatings, and decorative options. Call{" "}
            <a
              href="tel:7276145087"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              (727) 614-5087
            </a>{" "}
            for your free garage assessment and transformation estimate!
          </p>
        </div>
      ),
    },
    {
      id: "garage-timeline",
      question: "HOW LONG DOES GARAGE FLOOR COATING TAKE?",
      answer:
        "Most garage floor projects take 2-4 days to complete. Day 1 involves surface preparation and primer application, Day 2-3 includes base coat and decorative flakes, and Day 4 applies the protective topcoat. The garage is typically ready for light foot traffic after 24 hours and full vehicle use after 7 days.",
    },
    {
      id: "garage-durability",
      question: "HOW LONG WILL MY GARAGE FLOOR COATING LAST?",
      answer:
        "With proper preparation and industrial-grade coatings, garage floors can last 15-25 years with normal residential use. Our systems resist hot tires, oil spills, chemicals, and Florida's humidity. We offer a 10-year warranty against peeling, chipping, and wear under normal garage conditions.",
    },
    {
      id: "garage-materials",
      question: "WHAT TYPE OF COATINGS DO YOU USE FOR GARAGE FLOORS?",
      answer:
        "We use premium industrial-grade epoxy and polyurethane coating systems specifically designed for garage environments. These include moisture-vapor barriers, chemical-resistant primers, decorative flake systems, and UV-stable topcoats. The specific system depends on your garage's conditions and your performance requirements.",
    },
    {
      id: "garage-preparation",
      question: "WHAT PREPARATION IS REQUIRED FOR GARAGE FLOOR COATING?",
      answer: (
        <div className="space-y-3 text-gray-600">
          <p>Proper garage floor preparation is critical for lasting results:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Complete garage cleanout and item removal
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Professional degreasing and stain removal
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Diamond grinding for optimal surface profile
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Crack repair and concrete patching
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Moisture testing and vapor barrier installation if needed
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">
            Proper preparation ensures maximum coating adhesion and longevity!
          </p>
        </div>
      ),
    },
    {
      id: "garage-maintenance",
      question: "HOW DO I MAINTAIN MY COATED GARAGE FLOOR?",
      answer:
        "Maintenance is simple: sweep regularly, mop with mild detergent as needed, and avoid dragging heavy objects across the surface. Clean up oil spills promptly (though our coatings resist most chemicals), and use furniture pads under workbenches. Annual inspection helps identify any areas needing touch-up to maintain your floor's appearance and protection.",
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
            Professional Garage Floor Painting Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Garage Floor Coating Specialist Serving Tampa, St. Petersburg,
            Clearwater & Pinellas Park
          </p>

          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for professional garage floor coating services in Tampa Bay?
              I'm a professional painter with nearly a decade of experience
              transforming garages throughout Tampa, St. Petersburg, Clearwater,
              and Pinellas Park. My journey began in commercial painting, where
              I mastered working with industrial coatings and demanding floor
              systems. Today, I bring that same professional-grade expertise
              to transform your garage floor into a durable, beautiful surface
              that enhances your home's value and functionality.
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
              Why Choose My Garage Floor Coating Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/garage/1.png"
                  alt="Professional garage floor coating in Tampa Bay"
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
              My Professional Garage Floor Coating Process
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <ProcessCard steps={coatingProcessData} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ
            questions={faqData}
            title="Frequently Asked Garage Floor Coating Questions"
            subtitle="Have questions about transforming your garage floor? Here's what Tampa Bay homeowners ask us most about professional garage floor coating services."
          />
        </div>
      </section>
    </div>
  );
};

export default GarageFloorPaintingTemplate;