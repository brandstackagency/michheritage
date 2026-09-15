import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import WhatsAppButton from '@/components/feature/WhatsAppButton';
import useScrollReveal from '@/hooks/useScrollReveal';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import About from './components/About';
import BrandPillars from './components/BrandPillars';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CtaBanner from './components/CtaBanner';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <BrandPillars />
        <Services />
        <Gallery />
        <CtaBanner />
        <Testimonials />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}