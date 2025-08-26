import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { Metadata } from "next";
import HomePage from "@/components/pages/home";

export const metadata: Metadata = generatePageMetadata({
  title: "Professional Painting Services in Tampa Bay | DHS Painting",
  description: "Expert exterior & interior painting services in Tampa, St. Petersburg, Clearwater. Licensed & insured painting contractor. Free estimates. Call (727) 614-5087 today!",
  keywords: [
    "Tampa painting contractor",
    "exterior painting Tampa",
    "interior painting Tampa Bay", 
    "house painter St Petersburg",
    "commercial painting Clearwater",
    "residential painter Florida",
    "cabinet refinishing Tampa",
    "professional painter Tampa Bay"
  ]
});

export default function Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <HomePage />
    </>
  );
}