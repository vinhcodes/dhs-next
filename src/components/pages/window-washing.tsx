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
        title: "Professional Window Washing",
        subtitle: "Crystal Clear Views. Brilliant Results.",
        description:
          "Expert window cleaning using commercial-grade equipment and techniques. Streak-free, spotless windows that enhance your home's beauty and natural light.",
        image: "/images/hero/5.png",
    },
  ];

const WindowWashingTemplate = () => {
  const benefits = [
    "Master-Level Expertise with 10+ Years Experience",
    "Commercial-Grade Equipment & Professional Techniques",
    "Florida Climate & Salt Air Cleaning Specialists",
    "Interior & Exterior Window Cleaning Services",
    "Licensed, Insured & Streak-Free Guarantee",
  ];

  const cleaningProcessData: ProcessStep[] = [
    {
      id: 1,
      title: "Complete Window Assessment & Preparation",
      subtitle: "The foundation of streak-free, crystal clear results",
      label: "What I assess differently",
      items: [
        "Full window condition evaluation and cleaning needs assessment",
        "Screen removal and individual cleaning for maximum clarity",
        "Window frame and sill inspection for proper cleaning approach",
        "Safety planning for multi-story and difficult-access windows",
      ],
    },
    {
      id: 2,
      title: "Professional Cleaning & Squeegee Technique",
      subtitle: "Where 10+ years of experience delivers perfect results",
      label: "Expert cleaning process",
      items: [
        "Commercial-grade cleaning solutions designed for Florida conditions",
        "Professional squeegee technique for completely streak-free finish",
        "Detail cleaning of window frames, sills, and tracks",
        "Commercial-grade safety equipment for all window heights",
      ],
    },
    {
      id: 3,
      title: "Quality Inspection & Finishing Details",
      subtitle: "Your satisfaction guaranteed with every window sparkling",
      label: "What's included",
      items: [
        "Complete quality inspection and touch-up of any missed spots",
        "Professional screen reinstallation and final positioning",
        "Window frame and sill detailing for complete finished look",
        "Satisfaction guarantee with before/after quality verification",
      ],
    },
  ];

  const faqData: FAQItem[] = [
    {
      id: "window-cost-tampa",
      question: "HOW MUCH DOES WINDOW WASHING COST IN TAMPA BAY?",
      answer: (
        <div className="space-y-4">
          <p>
            Professional window washing in Tampa Bay typically costs $8-15 per 
            window (inside and outside), depending on window size, accessibility, 
            and condition. Most homes range from $150-400 for complete service. 
            Multi-story homes or homes with difficult-access windows may cost more.
          </p>
          <p>
            We provide upfront pricing with no hidden fees, including screen cleaning 
            and frame detailing. Call{" "}
            <a
              href="tel:7272564467"
              className="text-orange-600 font-semibold hover:text-orange-700"
            >
              (727) 256-4467
            </a>{" "}
            for your free estimate and crystal clear window transformation!
          </p>
        </div>
      ),
    },
    {
      id: "window-frequency",
      question: "HOW OFTEN SHOULD WINDOWS BE CLEANED IN FLORIDA?",
      answer:
        "Florida windows should be cleaned every 2-3 months due to our humid climate, salt air (near the coast), and frequent storms that leave residue. Homes near the water may need monthly cleaning. Regular professional cleaning prevents permanent staining from salt buildup and maintains maximum natural light in your home.",
    },
    {
      id: "window-weather",
      question: "CAN YOU CLEAN WINDOWS IN FLORIDA'S WEATHER CONDITIONS?",
      answer:
        "Yes, I work around Florida's challenging weather patterns. I avoid cleaning during rain or high winds, but can work safely in light humidity and overcast conditions - which often provide ideal cleaning weather. I monitor weather forecasts and will reschedule if conditions aren't optimal for streak-free results.",
    },
    {
      id: "window-interior-exterior",
      question: "DO YOU CLEAN BOTH INTERIOR AND EXTERIOR WINDOWS?",
      answer:
        "Absolutely! Complete window cleaning includes both interior and exterior surfaces, plus screens and frames. Interior cleaning removes fingerprints, dust, and humidity spots, while exterior cleaning handles salt air, pollen, and weather residue. This comprehensive approach ensures maximum clarity and natural light.",
    },
    {
      id: "window-screens",
      question: "DO YOU CLEAN WINDOW SCREENS TOO?",
      answer: (
        <div className="space-y-3">
          <p>Yes, screen cleaning is included in our complete window service:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Careful screen removal and individual cleaning</li>
            <li>Thorough washing to remove dirt, pollen, and salt buildup</li>
            <li>Screen frame cleaning and inspection for damage</li>
            <li>Professional reinstallation with proper fitting</li>
            <li>Window track cleaning while screens are removed</li>
          </ul>
          <p>Clean screens dramatically improve airflow and visibility!</p>
        </div>
      ),
    },
    {
      id: "window-safety",
      question: "HOW DO YOU SAFELY CLEAN HIGH OR HARD-TO-REACH WINDOWS?",
      answer:
        "Safety is my top priority. I use professional-grade ladders, safety harnesses, and commercial window cleaning equipment designed for multi-story work. With 10+ years of commercial building experience, I'm trained in advanced safety protocols. I'm fully insured and never take unnecessary risks - some extremely difficult windows may require specialized equipment with adjusted pricing.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
        <CarouselSlider slides={heroSlides} />
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center space-y-6 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide sm:tracking-wider uppercase text-zinc-700">
          Professional Window Washing Services Tampa Bay
        </h1>

        <h2 className="max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl font-bold text-orange-500/80 tracking-wide sm:tracking-wider px-2 sm:px-0">
          Expert Window Cleaning Specialist Serving Tampa, St. Petersburg,
          Clearwater & Pinellas Park
        </h2>

        <div className="pt-4 sm:pt-6">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed w-full mx-auto px-2 sm:px-0 font-light">
            Looking for professional window washing services in Tampa Bay? I'm
            a licensed specialist with over 10 years of experience delivering
            crystal-clear results throughout Tampa, St. Petersburg, Clearwater, and
            Pinellas Park. My journey began in commercial building maintenance,
            where I mastered advanced window cleaning techniques on high-rise
            buildings, office complexes, and retail facilities. My commercial
            background taught me the importance of proper equipment, safety protocols,
            and streak-free techniques that work in Florida's challenging humidity
            and salt air conditions. Today, I bring that same professional-grade
            expertise to make your home's windows brilliantly clear and beautiful.
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
              titleText="Why Choose My Window Washing Services in Tampa Bay?"
               className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 leading-tight text-start"
            />

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/images/window/1.png"
                    alt="Professional window washing in Tampa Bay"
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

        {/* Window Washing Process Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <TitleWithLine
              titleText="My Professional Window Cleaning Process"
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
              title="Frequently Asked Window Washing Questions"
              subtitle="Have questions about professional window cleaning? Here's what Tampa Bay homeowners ask us most about window washing services."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WindowWashingTemplate;