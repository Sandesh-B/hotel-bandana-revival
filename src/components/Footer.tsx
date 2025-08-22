
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Rooms & Suites', href: '/accommodation' },
    { name: 'Activities', href: '/activities' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Restaurant', href: '#' },
    { name: 'Spa & Wellness', href: '#' },
    { name: 'Fitness Center', href: '#' },
    { name: 'Room Service', href: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">HB</span>
              </div>
              <div>
                <h3 className="text-xl font-heritage font-bold">Hotel Bandana</h3>
                <p className="text-sm text-primary-foreground/80">Heritage Luxury</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Experience the perfect blend of traditional Nepalese hospitality and modern luxury 
              in the heart of Kathmandu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/90">Thamel, Kathmandu</p>
                  <p className="text-primary-foreground/90">Nepal - 44600</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/90">+977-1-4700940</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-primary-foreground/90">info@hotelbandana.com.np</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © 2024 Hotel Bandana. All rights reserved. | Designed with luxury in mind.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
