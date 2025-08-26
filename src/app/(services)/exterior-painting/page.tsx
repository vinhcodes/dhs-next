import { generatePageMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/metadata";
import { Metadata } from "next";
import ExteriorTemplate from "@/components/pages/exterior";
import React from "react";

export const metadata: Metadata = generatePageMetadata({
  title: "Exterior Painting Services Tampa Bay | Weather-Resistant House Painting",
  description: "Professional exterior painting services in Tampa, St. Petersburg, Clearwater. Weather-resistant paints for Florida climate. Licensed & insured. Free estimates!",
  path: "/exterior-painting",
  keywords: [
    "exterior painting Tampa",
    "house painting Tampa Bay", 
    "exterior paint contractors St Petersburg",
    "home exterior painting Clearwater",
    "weather resistant paint Florida",
    "exterior house painters Tampa",
    "professional exterior painting services"
  ]
});

export default function ExteriorPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" },
    { name: "Services", url: "https://diversehomesolution.com/#services" },
    { name: "Exterior Painting", url: "https://diversehomesolution.com/exterior-painting" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Exterior Painting Services",
    description: "Professional exterior painting services with weather-resistant paints for Florida homes and businesses",
    url: "https://diversehomesolution.com/exterior-painting",
    priceRange: "$$"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema]),
        }}
      />
      <ExteriorTemplate />
    </>
  );
}
