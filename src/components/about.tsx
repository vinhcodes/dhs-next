import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Badge */}
          <div className="relative">
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
                  <div className="text-2xl md:text-3xl font-bold">10+</div>
                  <div className="text-sm md:text-base font-medium">
                    Years In The
                  </div>
                  <div className="text-sm md:text-base font-medium">Market</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Header Badge */}
            <div className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
              Tampa's Trusted Professional
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              From World-Class Soccer to World-Class Painting
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Hi, I'm Eugene — a professional painter with over 10 years of
                experience working on both residential and commercial projects
                across Florida.
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
                the right materials to ensure long-lasting results.
              </p>
              <p>
                Let's make your space look its best — and built to last.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 hover:shadow-lg">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;