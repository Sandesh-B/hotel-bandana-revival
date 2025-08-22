
import { Utensils, Dumbbell, Waves, Car, Wifi, Shield, Coffee, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: 'Fine Dining Restaurant',
      description: 'Experience authentic Nepalese cuisine and international dishes prepared by our expert chefs.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art fitness equipment with panoramic views of the Kathmandu valley.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Waves,
      title: 'Spa & Wellness',
      description: 'Traditional Ayurvedic treatments and modern spa therapies for complete relaxation.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Coffee,
      title: 'Rooftop Lounge',
      description: 'Enjoy panoramic mountain views while sipping premium beverages and light snacks.',
      image: 'https://images.unsplash.com/photo-1559329007-40df8c6db006?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const services = [
    { icon: Car, title: 'Valet Parking', description: 'Complimentary valet service for all guests' },
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Unlimited internet access throughout the property' },
    { icon: Shield, title: '24/7 Security', description: 'Round-the-clock security and concierge service' },
    { icon: Headphones, title: 'Room Service', description: 'Premium room service available 24 hours' }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up">World-Class Amenities</h2>
          <div className="heritage-divider mb-6"></div>
          <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
            Indulge in our comprehensive range of luxury amenities and services, 
            designed to make your stay at Hotel Bandana truly exceptional.
          </p>
        </div>

        {/* Main Amenities */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={amenity.title} className={`heritage-card luxury-hover overflow-hidden fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title}
                    className="w-full h-48 md:h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="md:w-3/5 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                      <amenity.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heritage font-semibold text-primary">{amenity.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{amenity.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-luxury-gradient rounded-2xl p-8 fade-in-up">
          <h3 className="text-2xl font-heritage font-semibold mb-8 text-center text-primary">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 fade-in-up">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-heritage font-semibold text-xl mb-2">Restaurant</h4>
              <p className="text-primary-foreground/90">6:00 AM - 11:00 PM</p>
            </div>
            <div>
              <h4 className="font-heritage font-semibold text-xl mb-2">Fitness Center</h4>
              <p className="text-primary-foreground/90">5:00 AM - 11:00 PM</p>
            </div>
            <div>
              <h4 className="font-heritage font-semibold text-xl mb-2">Spa & Wellness</h4>
              <p className="text-primary-foreground/90">9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
