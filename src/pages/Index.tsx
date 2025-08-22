
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { Rooms } from '@/components/Rooms';
import { Amenities } from '@/components/Amenities';
import { Heritage } from '@/components/Heritage';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Rooms />
      <Amenities />
      <Heritage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
