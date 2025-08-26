import { generatePageMetadata, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/metadata";
import { Metadata } from "next";
import FencePaintingTemplate from "@/components/pages/fence-painting";

export const metadata: Metadata = generatePageMetadata({
  title: "Fence Painting & Staining Services Tampa Bay | Wood & Metal Fence Restoration",
  description: "Professional fence painting and staining services in Tampa, St. Petersburg, Clearwater. Wood, metal, and vinyl fence restoration. Weather-resistant finishes.",
  path: "/fence-painting",
  keywords: [
    "fence painting Tampa",
    "fence staining Tampa Bay",
    "wood fence painting St Petersburg",
    "metal fence painting Clearwater",
    "fence restoration Florida",
    "professional fence painters Tampa"
  ]
});

export default function FencePaintingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" },
    { name: "Services", url: "https://diversehomesolution.com/#services" },
    { name: "Fence Painting", url: "https://diversehomesolution.com/fence-painting" }
  ]);

  const serviceSchema = generateServiceSchema({
    name: "Fence Painting & Staining Services",
    description: "Professional fence painting, staining, and restoration services for wood, metal, and vinyl fences",
    url: "https://diversehomesolution.com/fence-painting",
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
      <FencePaintingTemplate />
    </>
  );
}