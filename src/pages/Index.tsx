import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <Services />
      <Gallery />
      <BeforeAfter />
      <About />
      <Reviews />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
