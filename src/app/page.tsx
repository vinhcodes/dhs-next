"use client";

import AboutSection from "@/components/about";
import WhyChooseUsSection from "@/components/choose-us";
import EstimateForm from "@/components/form";
import GallerySection from "@/components/gallery";
import ReviewSection from "@/components/review";
import CarouselSlider from "@/components/ui/carousel";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import InfiniteLinkCarousel from "@/components/ui/infinite-carousel";
import ReviewCarousel from "@/components/ui/review-carousel";
// import { motion, Variants } from "framer-motion"; // Disabled to prevent layout shifts

const heroSlides = [
  {
    id: 1,
    title: "Exterior Painting Service",
    subtitle: "Lasting Color. Expert Finish.",
    description:
      "We use premium materials designed to hold up against Florida's harsh sun, humidity, and storms—so your home stays beautiful and protected for years to come.",
    image: "/images/hero/1.png",
    cta: "Get A Quote",
    onCtaClick: () => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: 2,
    title: "Interior Painting Service",
    subtitle: "Your Home Deserves the Best",
    description:
      "From single rooms to whole house makeovers, we deliver flawless finishes that enhance your home's beauty and value.",
    image: "/images/hero/2.png",
    cta: "View Portfolio",
    onCtaClick: () => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    },
  },
  {
    id: 3,
    title: "Cabinet Refinishing Service",
    subtitle: "Revive, Don't Replace",
    description:
      "Our cabinet refinishing service gives your existing cabinets a fresh, clean look—without the cost of a full remodel.",
    image: "/images/hero/3.png",
    cta: "Learn More",
    onCtaClick: () => {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
];

// Animation variants - DISABLED to prevent layout shifts
// const fadeInUp: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 60
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const fadeInLeft: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -60
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

// const fadeInRight: Variants = {
//   hidden: {
//     opacity: 0,
//     x: 60
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut"
//     }
//   }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const scaleIn: Variants = {
//   hidden: {
//     opacity: 0,
//     scale: 0.8
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// };

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <div>
        <CarouselSlider slides={heroSlides} />
      </div>

      {/* Reviews Section */}
      <section className="bg-white py-8">
        <div>
          <ReviewSection />
        </div>
        <div className="mt-16">
          <ReviewCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 pt-16 lg:pt-24">
        <AboutSection />
      </section>

      {/* Infinite Carousel */}
      <section className="bg-white">
        <InfiniteLinkCarousel />
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-50">
        <GalleryCarousel />
      </section>

      {/* Why Choose Us Section */}
      <section>
        <WhyChooseUsSection />
      </section>

      {/* Contact Form */}
      <div>
        <EstimateForm />
      </div>
    </div>
  );
}