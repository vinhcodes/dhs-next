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
        <div className="space-y-4 text-gray-600">
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
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
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
        <div className="space-y-3 text-gray-600">
          <p>Yes, screen cleaning is included in our complete window service:</p>
          <ul className="grid grid-cols-1 gap-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Careful screen removal and individual cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Thorough washing to remove dirt, pollen, and salt buildup
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Screen frame cleaning and inspection for damage
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Professional reinstallation with proper fitting
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></span>
              Window track cleaning while screens are removed
            </li>
          </ul>
          <p className="text-sm font-medium mt-4">Clean screens dramatically improve airflow and visibility!</p>
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
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <CarouselSlider slides={heroSlides} />
      
      {/* Hero Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight uppercase">
            Professional Window Washing Services
            <span className="text-blue-600 block mt-2">Tampa Bay</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert Window Cleaning Specialist Serving Tampa, St. Petersburg, Clearwater & Pinellas Park
          </p>
          
          <div className="pt-8">
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Looking for professional window washing services in Tampa Bay? I'm a licensed specialist with over 10 years of experience delivering crystal-clear results throughout Tampa, St. Petersburg, Clearwater, and Pinellas Park. My journey began in commercial building maintenance, where I mastered advanced window cleaning techniques on high-rise buildings, office complexes, and retail facilities. Today, I bring that same professional-grade expertise to make your home's windows brilliantly clear and beautiful.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button 
              size="xl"
              variant="outline"
              className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Get Free Estimate
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
              Why Choose My Window Washing Services?
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/window/1.png"
                  alt="Professional window washing in Tampa Bay"
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
              My Professional Window Cleaning Process
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <ProcessCard steps={cleaningProcessData} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <FAQ 
            questions={faqData}
            title="Frequently Asked Window Washing Questions"
            subtitle="Have questions about professional window cleaning? Here's what Tampa Bay homeowners ask us most about window washing services."
          />
        </div>
      </section>
    </div>
  );
};

export default WindowWashingTemplate;