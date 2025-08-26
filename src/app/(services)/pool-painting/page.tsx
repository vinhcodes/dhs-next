import { generatePageMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/metadata";
import { Metadata } from "next";
import PoolPaintingTemplate from "@/components/pages/pool-painting";

export const metadata: Metadata = generatePageMetadata({
  title: "Pool Painting Services Tampa Bay | Swimming Pool Resurfacing & Repair",
  description: "Professional pool painting and resurfacing services in Tampa, St. Petersburg, Clearwater. Waterproof coatings, repairs, and full pool renovations.",
  path: "/pool-painting",
  keywords: [
    "pool painting Tampa",
    "swimming pool resurfacing Tampa Bay",
    "pool renovation St Petersburg", 
    "pool repair services Clearwater",
    "pool coating Florida",
    "professional pool painters Tampa"
  ]
});

export default function PoolPaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" },
    { name: "Services", url: "https://diversehomesolution.com/#services" },
    { name: "Pool Painting", url: "https://diversehomesolution.com/pool-painting" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Pool Painting & Resurfacing Services",
    description: "Professional swimming pool painting, resurfacing, and renovation services",
    url: "https://diversehomesolution.com/pool-painting",
    priceRange: "$$$"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, serviceSchema]),
        }}
      />
      <PoolPaintingTemplate />
    </>
  );
}