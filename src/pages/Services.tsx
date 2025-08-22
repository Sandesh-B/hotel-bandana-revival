import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Stethoscope, Users, Zap, Wifi, UtensilsCrossed, 
  PartyPopper, Presentation, Car, Phone, Headphones,
  Shield, Clock
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Medical Treatment',
      description: 'On-site medical assistance and first aid services available 24/7 for guest safety and peace of mind.',
      features: ['24/7 Medical Support', 'First Aid Services', 'Emergency Response', 'Health Consultation']
    },
    {
      icon: Users,
      title: 'Seminar Hall',
      description: 'Modern seminar facilities equipped with audio-visual equipment for business meetings and educational events.',
      features: ['50+ Seating Capacity', 'AV Equipment', 'Wi-Fi Access', 'Catering Services']
    },
    {
      icon: Zap,
      title: 'Generator & Inverter',
      description: 'Uninterrupted power supply with backup generators and inverters ensuring continuous electricity.',
      features: ['24/7 Power Backup', 'Silent Generators', 'UPS Systems', 'Voltage Stabilizers']
    },
    {
      icon: Wifi,
      title: 'Free WiFi Zone',
      description: 'High-speed internet connectivity throughout the hotel premises for staying connected.',
      features: ['High-Speed Internet', 'Full Coverage', 'Secure Connection', 'Tech Support']
    },
    {
      icon: UtensilsCrossed,
      title: 'Hygienic Food',
      description: 'Fresh, hygienic, and delicious Nepalese and international cuisine prepared by expert chefs.',
      features: ['Local & International', 'Fresh Ingredients', 'Dietary Options', 'Room Service']
    },
    {
      icon: PartyPopper,
      title: 'Party Palace',
      description: 'Spacious venue for celebrations, weddings, and special events with complete event management.',
      features: ['Event Planning', 'Decoration Services', 'Sound System', 'Catering Options']
    },
    {
      icon: Presentation,
      title: 'Conference Hall',
      description: 'Professional conference facilities for corporate meetings, seminars, and business events.',
      features: ['Modern Equipment', 'Flexible Seating', 'Technical Support', 'Business Services']
    },
    {
      icon: Car,
      title: 'Parking',
      description: 'Secure and convenient parking facilities for guest vehicles with 24/7 security monitoring.',
      features: ['Secure Parking', '24/7 Security', 'CCTV Monitoring', 'Valet Service']
    }
  ];

  const additionalServices = [
    {
      icon: Phone,
      title: '24/7 Reception',
      description: 'Round-the-clock front desk services for all guest needs and inquiries.'
    },
    {
      icon: Headphones,
      title: 'Concierge Service',
      description: 'Personalized assistance for tour planning, transportation, and local recommendations.'
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Professional security personnel ensuring guest safety and property protection.'
    },
    {
      icon: Clock,
      title: 'Room Service',
      description: 'In-room dining and housekeeping services available at your convenience.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="section-title fade-in-up">Our Services</h1>
            <div className="heritage-divider mb-6"></div>
            <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
              Comprehensive facilities and services designed to make your stay comfortable, 
              productive, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.title} className={`heritage-card luxury-hover fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heritage font-semibold mb-3 text-center text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heritage font-bold mb-4 text-primary">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extra conveniences and personalized services to enhance your experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={service.title} className={`heritage-card text-center fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl font-heritage font-bold mb-6 text-primary">Business Services</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive business services cater to corporate travelers and event organizers. 
                From small meetings to large conferences, we provide the perfect environment for 
                productive business activities.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Meeting Rooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Business Center</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Printing Services</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Video Conferencing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Event Coordination</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Catering Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business Services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;