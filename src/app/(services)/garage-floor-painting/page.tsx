import { generatePageMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/metadata";
import { Metadata } from "next";
import GarageFloorPaintingTemplate from "@/components/pages/garage-floor-painting";

export const metadata: Metadata = generatePageMetadata({
  title: "Garage Floor Painting & Coating Services Tampa Bay | Epoxy Floor Solutions",
  description: "Professional garage floor painting and epoxy coating services in Tampa, St. Petersburg, Clearwater. Durable, slip-resistant floor solutions. Free estimates!",
  path: "/garage-floor-painting",
  keywords: [
    "garage floor painting Tampa",
    "epoxy floor coating Tampa Bay",
    "garage floor epoxy St Petersburg",
    "concrete floor painting Clearwater",
    "garage floor refinishing Florida",
    "professional floor coating Tampa"
  ]
});

export default function GarageFloorPaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" },
    { name: "Services", url: "https://diversehomesolution.com/#services" },
    { name: "Garage Floor Painting", url: "https://diversehomesolution.com/garage-floor-painting" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Garage Floor Painting & Coating Services",
    description: "Professional garage floor painting, epoxy coating, and concrete floor refinishing services",
    url: "https://diversehomesolution.com/garage-floor-painting",
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
      <GarageFloorPaintingTemplate />
    </>
  );
}