import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Users, Star } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 'long-bridge',
      title: 'Long Bridge Adventure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2-3 hours',
      difficulty: 'Easy',
      groupSize: '1-15 people',
      price: 'NPR 500',
      rating: 4.8,
      description: 'Experience the thrill of crossing one of the longest suspension bridges in the region. Enjoy panoramic views of the Kali Gandaki valley and surrounding mountains.',
      highlights: ['Stunning valley views', 'Photography opportunities', 'Cultural insights', 'Safe and guided experience']
    },
    {
      id: 'bungee-jumping',
      title: 'Bungee Jumping',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '1-2 hours',
      difficulty: 'Extreme',
      groupSize: '1-5 people',
      price: 'NPR 12,000',
      rating: 4.9,
      description: 'Take the ultimate leap of faith from one of Nepal\'s highest bungee jumping platforms. Professional safety equipment and certified instructors ensure your safety.',
      highlights: ['160m high platform', 'Professional safety gear', 'Certificate of completion', 'GoPro footage available']
    },
    {
      id: 'swing',
      title: 'Giant Swing',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '1 hour',
      difficulty: 'Moderate',
      groupSize: '1-2 people',
      price: 'NPR 3,500',
      rating: 4.7,
      description: 'Experience the rush of swinging across the gorge with breathtaking views. A perfect activity for thrill-seekers who want an adrenaline rush with spectacular scenery.',
      highlights: ['Breathtaking gorge views', 'Safe tandem swings', 'Multiple swing angles', 'Professional photography']
    },
    {
      id: 'kali-gandaki-river',
      title: 'Kali Gandaki River Rafting',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4-6 hours',
      difficulty: 'Moderate',
      groupSize: '6-12 people',
      price: 'NPR 4,500',
      rating: 4.6,
      description: 'Navigate the pristine waters of the Kali Gandaki River through stunning landscapes. Perfect for both beginners and experienced rafters.',
      highlights: ['Grade III-IV rapids', 'Scenic mountain views', 'Professional guides', 'Safety equipment included']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="section-title fade-in-up">Adventure Activities</h1>
            <div className="heritage-divider mb-6"></div>
            <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
              Discover thrilling adventures in the heart of Nepal's stunning landscape. 
              From extreme sports to scenic explorations, create unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <Card key={activity.id} className={`heritage-card overflow-hidden luxury-hover fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {activity.price}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Star className="h-3 w-3 mr-1 fill-accent text-accent" />
                      {activity.rating}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge 
                      variant={activity.difficulty === 'Extreme' ? 'destructive' : 
                               activity.difficulty === 'Moderate' ? 'default' : 'secondary'}
                    >
                      {activity.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heritage font-semibold mb-3 text-primary">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{activity.description}</p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{activity.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">Kushma</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Highlights</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {activity.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">Learn More</Button>
                    <Button className="btn-heritage flex-1">Book Activity</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heritage font-bold mb-6 text-primary">Safety First</h2>
            <p className="text-lg text-muted-foreground mb-8">
              All our adventure activities are conducted with the highest safety standards. 
              Our certified guides and premium equipment ensure you can focus on enjoying the experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Certified Guides</h3>
                <p className="text-sm text-muted-foreground">Experienced and trained professionals</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Premium Equipment</h3>
                <p className="text-sm text-muted-foreground">International standard safety gear</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-sm text-muted-foreground">Activities scheduled for optimal conditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;