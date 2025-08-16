import EstimateForm from "@/components/form";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";

function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Service Content */}
      <div>{children}</div>
      
      {/* Gallery Section */}
      <GalleryCarousel />
      
      {/* Contact Form */}
      <EstimateForm />
    </div>
  );
}

export default ServicesLayout;