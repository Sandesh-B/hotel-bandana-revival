
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Thamel, Kathmandu', 'Nepal - 44600']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+977-1-4700940', '+977-1-4700941']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@hotelbandana.com.np', 'reservation@hotelbandana.com.np']
    },
    {
      icon: Clock,
      title: 'Reception',
      details: ['24 Hours Service', '7 Days a Week']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in-up">Get In Touch</h2>
          <div className="heritage-divider mb-6"></div>
          <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
            We're here to assist you with your reservation and answer any questions 
            about your stay at Hotel Bandana. Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-heritage font-semibold mb-8 text-primary">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="heritage-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Hotel Location</h4>
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up slide-in-right">
            <Card className="heritage-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heritage font-semibold mb-6 text-primary">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+977 XXX XXXX XXX" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Check-in Date
                    </label>
                    <Input type="date" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements, special requests, or any questions you may have..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="btn-gold w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8">
            <h3 className="text-2xl font-heritage font-semibold mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Book your stay at Hotel Bandana today and discover the perfect blend of 
              Nepalese heritage and modern luxury in the heart of Kathmandu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book Direct & Save
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call Now: +977-1-4700940
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
