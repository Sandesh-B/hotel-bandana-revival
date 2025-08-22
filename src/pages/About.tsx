import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: "Since", value: "1994" },
    { icon: Users, label: "Happy Guests", value: "10,000+" },
    { icon: Award, label: "Awards", value: "25+" },
    { icon: MapPin, label: "Prime Location", value: "Kushma" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="section-title fade-in-up">About Hotel Bandana</h1>
            <div className="heritage-divider mb-6"></div>
            <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
              Established in 1994, we have been providing warm Nepalese hospitality 
              and luxury accommodations for over three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h2 className="text-4xl font-heritage font-bold mb-6 text-primary">Since 1994</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are located at Kushma Town, district headquarter of Parbat district, Nepal; 
                which is set along the way of Pokhara-Baglung-Beni-Mustang highway. This site 
                gives a good idea of the standards you can expect as a guest at the Bandana.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To experience the sub-tropical climate, the spectacular natural surroundings, 
                and the relaxed and tranquil atmosphere - not to mention the cuisine - you'll 
                have to come for a stay.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We have very good hospitality staff with special abilities like singing and dancing. 
                Our commitment to excellence has made us a preferred destination for travelers 
                seeking authentic Nepalese hospitality.
              </p>
              <Button className="btn-heritage">Contact Us</Button>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hotel Bandana Building"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heritage font-bold mb-8 text-primary fade-in-up">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-up">
              To provide exceptional hospitality experiences that showcase the rich cultural heritage 
              of Nepal while offering modern comfort and luxury. We strive to be the gateway for 
              travelers exploring the natural beauty and adventure opportunities of the Parbat district.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;