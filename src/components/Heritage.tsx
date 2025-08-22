
import { Crown, Building, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Heritage = () => {
  const achievements = [
    { icon: Crown, number: '25+', label: 'Years of Excellence' },
    { icon: Building, number: '50+', label: 'Luxury Rooms' },
    { icon: Users, number: '10K+', label: 'Happy Guests' },
    { icon: Award, number: '15+', label: 'Awards Won' }
  ];

  return (
    <section id="heritage" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 parallax-bg opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up">Our Heritage Story</h2>
          <div className="heritage-divider mb-6"></div>
          <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
            Discover the rich history and cultural significance of Hotel Bandana, 
            where tradition meets modern luxury in the heart of Kathmandu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="fade-in-up">
            <h3 className="text-3xl font-heritage font-semibold mb-6 text-primary">
              A Legacy of Hospitality
            </h3>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                For over two decades, Hotel Bandana has been synonymous with exceptional 
                hospitality in Kathmandu. Our story began with a vision to create a sanctuary 
                that celebrates Nepal's rich cultural heritage while offering world-class amenities.
              </p>
              <p>
                Located in the heart of Kathmandu, our hotel serves as a gateway to Nepal's 
                most treasured experiences. From the ancient temples of Durbar Square to the 
                majestic peaks of the Himalayas, we provide our guests with authentic connections 
                to this extraordinary land.
              </p>
              <p>
                Our commitment to preserving Nepalese traditions while embracing modern luxury 
                has earned us recognition from travelers worldwide and numerous industry awards.
              </p>
            </div>
          </div>

          {/* Heritage Image */}
          <div className="fade-in-up slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hotel Heritage"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-heritage font-semibold mb-2">Traditional Architecture</h4>
                <p className="text-white/90">Authentic Nepalese design elements throughout</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={achievement.label} className={`heritage-card text-center luxury-hover fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-heritage font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {achievement.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cultural Elements */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 fade-in-up">
          <h3 className="text-2xl font-heritage font-semibold mb-8 text-center">
            Experience Nepal's Rich Culture
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-semibold text-xl mb-2">Ancient Temples</h4>
              <p className="text-primary-foreground/90">
                Minutes away from UNESCO World Heritage sites including Durbar Square and Swayambhunath
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏔️</div>
              <h4 className="font-semibold text-xl mb-2">Mountain Adventures</h4>
              <p className="text-primary-foreground/90">
                Gateway to Everest region and Annapurna circuit trekking experiences
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-semibold text-xl mb-2">Local Artisans</h4>
              <p className="text-primary-foreground/90">
                Handcrafted decor and artwork by local Nepalese artists throughout the hotel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
