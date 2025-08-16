"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  questions: FAQItem[];
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Interior Painting Questions",
  subtitle = "Have questions before booking your next project? Here's what Tampa Bay homeowners ask us most about interior painting.",
  questions,
  className = "",
}: FAQProps) {
  return (
    <div
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-8 sm:py-12 lg:py-16 ${className}`}
    >
      {/* Header Section */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl">
          {subtitle}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4 sm:space-y-6">
        <Accordion type="multiple" className="space-y-4">
          {questions.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-2 border-orange-400 rounded-lg overflow-hidden bg-white"
            >
              <AccordionTrigger className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 hover:no-underline hover:bg-orange-400 transition-colors group [&>svg]:hidden">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-left text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase text-gray-900 leading-tight pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 transition-transform duration-200 group-data-[state=open]:hidden" />
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 transition-transform duration-200 group-data-[state=closed]:hidden" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed pt-2">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
