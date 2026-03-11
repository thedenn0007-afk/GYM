import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Facilities from "@/components/Facilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Trainers />
      <Membership />
      <Testimonials />
      <Gallery />
      <Facilities />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
