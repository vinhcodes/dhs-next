import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata";
import { Metadata } from "next";
import ContactTemplate from "@/components/pages/contact";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us - Free Painting Estimates | DHS Painting Tampa Bay",
  description: "Contact Tampa Bay's trusted painting professionals for your free estimate. Licensed, insured, and serving Tampa, St. Petersburg, Clearwater & Pinellas Park. Call (727) 614-5087!",
  path: "/contact",
  keywords: [
    "contact painter tampa",
    "free painting estimate tampa bay", 
    "professional painter contact",
    "tampa painting company quote",
    "painting consultation Tampa",
    "licensed painter contact Florida"
  ]
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://diversehomesolution.com" },
    { name: "Contact", url: "https://diversehomesolution.com/contact" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <ContactTemplate />
    </>
  );
}