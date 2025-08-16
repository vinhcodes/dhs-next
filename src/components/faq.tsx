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
    <div className={`max-w-4xl mx-auto px-6 py-16 lg:py-24 ${className}`}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        <Accordion type="multiple" className="space-y-4">
          {questions.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-gray-50 transition-colors [&>svg]:hidden">
                <div className="flex items-center justify-between w-full">
                  {/* Question Number and Text */}
                  <div className="flex items-start gap-4 text-left flex-1 pr-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-gray-900 leading-tight text-base lg:text-lg">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Plus className="w-4 h-4 text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-45 group-hover:text-blue-600" />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6">
                <div className="pl-12 text-gray-700 leading-relaxed">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Give us a call and we'll be happy to answer any questions about your painting project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:7272564467"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Call (727) 256-4467
          </a>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
}