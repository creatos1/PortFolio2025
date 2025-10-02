import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioGallery />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
