import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Gallery from '@/components/landing/Gallery';
import Testimonials from '@/components/landing/Testimonials';
import Booking from '@/components/landing/Booking';
import { Section } from '@/components/shared/Section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Section id="services">
          <Services />
        </Section>
        <Section id="gallery" className="bg-muted/50">
          <Gallery />
        </Section>
        <Section id="testimonials" className="bg-muted/50">
          <Testimonials />
        </Section>
        <Section id="book">
          <Booking />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
