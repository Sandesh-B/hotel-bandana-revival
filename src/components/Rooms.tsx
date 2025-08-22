
import { Wifi, Car, Coffee, Shield, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Rooms = () => {
  const rooms = [
    {
      title: 'Heritage Suite',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$180',
      features: ['Mountain View', 'Traditional Decor', 'Premium Amenities', 'Private Balcony'],
      description: 'Luxurious suite featuring traditional Nepalese architecture with modern comforts and stunning mountain views.'
    },
    {
      title: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$120',
      features: ['City View', 'Modern Design', 'Premium Bedding', 'Work Desk'],
      description: 'Contemporary designed room perfect for business travelers and couples seeking comfort and elegance.'
    },
    {
      title: 'Executive Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: '$250',
      features: ['Panoramic View', 'Separate Living', 'Premium Services', 'Complimentary Breakfast'],
      description: 'Spacious executive suite with separate living area, perfect for extended stays and VIP guests.'
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up">Luxurious Accommodations</h2>
          <div className="heritage-divider mb-6"></div>
          <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
            Each room and suite at Hotel Bandana is thoughtfully designed to offer the perfect 
            blend of traditional Nepalese charm and contemporary luxury amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room, index) => (
            <Card key={room.title} className={`heritage-card luxury-hover fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold">
                  {room.price}/night
                </div>
                <div className="absolute top-4 left-4 flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heritage font-semibold mb-3 text-primary">{room.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{room.description}</p>
                <div className="space-y-2 mb-6">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="btn-heritage w-full" onClick={() => window.location.href = '/accommodation'}>View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Room Features */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 fade-in-up">
          <h3 className="text-2xl font-heritage font-semibold mb-8 text-center text-primary">All Rooms Include</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wifi, label: 'Free WiFi' },
              { icon: Car, label: 'Parking' },
              { icon: Coffee, label: 'Mini Bar' },
              { icon: Shield, label: '24/7 Security' },
              { icon: Eye, label: 'Mountain Views' },
              { icon: Star, label: '5-Star Service' }
            ].map((feature, index) => (
              <div key={feature.label} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
