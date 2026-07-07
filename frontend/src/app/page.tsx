import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { MenuSection } from "@/components/ui/MenuSection";
import { SpecialtiesSection } from "@/components/ui/SpecialtiesSection";
import { GallerySection } from "@/components/ui/GallerySection";
import { ContactSection } from "@/components/ui/ContactSection";
import { BackToTop } from "@/components/ui/BackToTop";

export const metadata = {
  title: "DR Food · Street food premium à Paris 14, smash burger et panuozzo",
  description: "DR Food, la street food qui vous soigne. Smash burgers, panuozzo italien, entrées et desserts maison, Porte de Vanves Paris 14. Ouvert tous les jours jusqu'à 02h.",
};

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <SpecialtiesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
