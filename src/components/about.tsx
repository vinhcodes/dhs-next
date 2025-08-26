import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const slideUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Organic Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large organic blob behind image area */}
        <svg
          className="absolute left-0 top-8 w-[600px] h-[600px]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 200C150 150 220 160 280 200C340 240 380 300 370 360C360 420 320 470 260 490C200 510 130 500 90 450C50 400 60 340 80 290C100 240 120 220 100 200Z"
            fill="url(#aboutGradient1)"
            opacity="0.08"
          />
          <defs>
            <linearGradient id="aboutGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Secondary shape behind image */}
        <svg
          className="absolute left-16 top-32 w-[400px] h-[400px]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 50C250 70 290 110 320 160C350 210 360 270 340 320C320 370 280 400 230 390C180 380 140 350 120 300C100 250 110 190 140 150C170 110 190 80 200 50Z"
            fill="url(#aboutGradient2)"
            opacity="0.06"
          />
          <defs>
            <linearGradient id="aboutGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Small accent shape */}
        <svg
          className="absolute left-10 bottom-32 w-48 h-48"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 20C130 30 150 50 160 80C170 110 170 140 150 160C130 180 100 180 70 160C40 140 20 110 30 80C40 50 70 30 100 20Z"
            fill="url(#aboutGradient3)"
            opacity="0.05"
          />
          <defs>
            <linearGradient id="aboutGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Flowing shape on the right side */}
        <svg
          className="absolute right-0 top-20 w-80 h-96"
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M300 80C280 100 260 120 240 150C220 180 200 220 210 260C220 300 250 330 280 350C290 360 295 370 300 380L300 80Z"
            fill="url(#aboutGradient4)"
            opacity="0.04"
          />
          <defs>
            <linearGradient id="aboutGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Badge */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideUpVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              {/* Main Image */}
              <img
                src="/images/about/1.png"
                alt="DHS Services team member with company truck"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />

              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-blue-600 text-white rounded-xl px-6 py-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">7+</div>
                  <div className="text-sm md:text-base font-medium">
                    Years In The
                  </div>
                  <div className="text-sm md:text-base font-medium">Market</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Header Badge */}
            <motion.div 
              className="text-blue-600 font-semibold text-sm tracking-wider uppercase"
              variants={slideUpVariants}
            >
              Tampa's Trusted Professional
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={slideUpVariants}
            >
              From World-Class Soccer to World-Class Painting
            </motion.h2>

            {/* Content Paragraphs */}
            <motion.div 
              className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed"
              variants={slideUpVariants}
            >
              <p>
                Hi, I'm Eugene — a professional painter with nearly a decade of
                experience in residential and commercial projects across
                Florida.
              </p>
              <p>
                Originally from Belarus, I was a professional soccer player
                until an injury led me to a new path — one that brought me back
                to my roots in painting. What began with helping my grandparents
                remodel their countryside home turned into a lasting passion and
                career.
              </p>

              <p>
                From family homes to commercial spaces like AutoZone, I bring
                the same care, precision, and attention to detail to every
                project. I understand the demands of Florida's climate and use
                the right materials to ensure best results.
              </p>
              <p>Let's make your space look its best — and built to last.</p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div 
              className="pt-4"
              variants={slideUpVariants}
            >
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 hover:shadow-lg">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
