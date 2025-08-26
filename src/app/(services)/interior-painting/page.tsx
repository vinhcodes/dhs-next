import { generatePageMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/metadata";
import { Metadata } from "next";
import InteriorTemplate from "@/components/pages/interior";

export const metadata: Metadata = generatePageMetadata({
  title: "Interior Painting Services Tampa Bay | Professional House Painters",
  description: "Expert interior painting services in Tampa, St. Petersburg, Clearwater. Transform your home with premium paints and professional finishes. Free estimates. Call (727) 614-5087!",
  path: "/interior-painting",
  keywords: [
    "interior painting Tampa",
    "house painters Tampa Bay",
    "residential interior painting",
    "interior paint contractors St Petersburg",
    "home painting services Clearwater",
    "interior wall painting Tampa",
    "professional interior painters Florida"
  ]
});

export default function InteriorPaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" },
    { name: "Services", url: "https://diversehomesolution.com/#services" },
    { name: "Interior Painting", url: "https://diversehomesolution.com/interior-painting" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Interior Painting Services",
    description: "Professional interior painting services for homes and businesses in Tampa Bay area",
    url: "https://diversehomesolution.com/interior-painting",
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
      <InteriorTemplate />
    </>
  );
}
