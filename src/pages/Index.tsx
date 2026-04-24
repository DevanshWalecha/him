
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ContactFormDialogProvider } from "@/components/ContactFormDialogContext";
import WorkshopConferences from "@/components/WorkshopConferences.tsx";

const Index = () => {
  return (
    <ContactFormDialogProvider>
      <div className="min-h-screen bg-white overflow-hidden">
        <Navbar />
        <Hero />
        <AboutUs />
        <WorkshopConferences/>
        <Services />
        <Benefits />
        <Testimonials />
        <CallToAction />
        <Contact />
        <Footer />
      </div>
    </ContactFormDialogProvider>
  );
};

export default Index;
