
import { ArrowDown, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 parallax-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Kathmandu, Nepal</span>
            <div className="flex items-center space-x-1 ml-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heritage font-bold leading-tight">
            Hotel
            <span className="block text-accent">Bandana</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            Where Heritage Meets Luxury in the Heart of Kathmandu
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of traditional Nepalese hospitality and modern luxury 
            at our premier heritage hotel, nestled in the cultural capital of Nepal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="btn-gold text-lg px-8 py-4" onClick={() => window.location.href = '/booking'}>
              Reserve Your Stay
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-heritage text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary" onClick={() => window.location.href = '/accommodation'}>
              Explore Hotel
            </Button>
          </div>

          {/* Awards & Recognition */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>TripAdvisor Excellence Award</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Nepal Tourism Board Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Heritage Conservation Society Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-3 text-white/80 animate-bounce">
          <span className="text-sm font-medium">Discover More</span>
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/30 rounded-full float-animation hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/30 rounded-full float-animation hidden lg:block" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};
