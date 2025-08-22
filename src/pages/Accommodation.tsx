import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Car, Coffee, Shield, Tv, Wind, Bath, Bed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Accommodation = () => {
  const navigate = useNavigate();

  const rooms = [
    {
      id: 'standard',
      title: 'Standard Room',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 3500,
      currency: 'NPR',
      size: '25 sqm',
      capacity: '2 Adults',
      features: ['Free WiFi', 'AC', 'TV', 'Attached Bathroom', 'Room Service'],
      amenities: [Wifi, Wind, Tv, Bath, Coffee],
      description: 'Comfortable and well-appointed standard rooms with all essential amenities for a pleasant stay.'
    },
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 5500,
      currency: 'NPR',
      size: '35 sqm',
      capacity: '2-3 Adults',
      features: ['Premium WiFi', 'Premium AC', 'Smart TV', 'Premium Bathroom', 'Mini Bar', 'Mountain View'],
      amenities: [Wifi, Wind, Tv, Bath, Coffee, Car],
      description: 'Spacious deluxe rooms featuring enhanced amenities and stunning views of the surrounding landscape.'
    },
    {
      id: 'super-deluxe',
      title: 'Super Deluxe Room',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      price: 8500,
      currency: 'NPR',
      size: '45 sqm',
      capacity: '3-4 Adults',
      features: ['Premium WiFi', 'Central AC', 'Smart TV', 'Luxury Bathroom', 'Mini Bar', 'Balcony', 'Room Service', 'Complimentary Breakfast'],
      amenities: [Wifi, Wind, Tv, Bath, Coffee, Car, Bed, Shield],
      description: 'Our most luxurious accommodation featuring premium amenities, spacious layout, and exceptional comfort.'
    }
  ];

  const handleBooking = (roomId: string) => {
    navigate(`/booking?room=${roomId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="section-title fade-in-up">Our Accommodations</h1>
            <div className="heritage-divider mb-6"></div>
            <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
              Choose from our carefully designed rooms, each offering comfort, style, and authentic Nepalese hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <Card key={room.id} className={`heritage-card overflow-hidden fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={room.image} 
                      alt={room.title}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        {room.currency} {room.price}/night
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-heritage font-bold mb-4 text-primary">{room.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <span className="font-semibold text-primary">Size:</span>
                          <p className="text-muted-foreground">{room.size}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Capacity:</span>
                          <p className="text-muted-foreground">{room.capacity}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Amenities</h4>
                        <div className="grid grid-cols-4 gap-3">
                          {room.amenities.map((Icon, idx) => (
                            <div key={idx} className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-accent" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {room.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => navigate(`/room-details/${room.id}`)}
                      >
                        View Details
                      </Button>
                      <Button 
                        className="btn-heritage flex-1"
                        onClick={() => handleBooking(room.id)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;