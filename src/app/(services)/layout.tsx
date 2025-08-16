import EstimateForm from "@/components/form";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";

function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100  space-y-11">
      <div>{children}</div>
      <GalleryCarousel />
      <EstimateForm />
    </div>
  );
}

export default ServicesLayout;
