import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Phone, Mail, CreditCard, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const selectedRoom = searchParams.get('room');
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    roomType: selectedRoom || 'standard',
    specialRequests: ''
  });

  const rooms = {
    'standard': { name: 'Standard Room', price: 3500, currency: 'NPR' },
    'deluxe': { name: 'Deluxe Room', price: 5500, currency: 'NPR' },
    'super-deluxe': { name: 'Super Deluxe Room', price: 8500, currency: 'NPR' }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return nights > 0 ? nights : 1;
    }
    return 1;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const roomPrice = rooms[formData.roomType as keyof typeof rooms]?.price || 0;
    const subtotal = roomPrice * nights;
    const tax = subtotal * 0.13; // 13% VAT
    const serviceCharge = subtotal * 0.10; // 10% service charge
    return {
      subtotal,
      tax,
      serviceCharge,
      total: subtotal + tax + serviceCharge,
      nights
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process booking
      toast({
        title: "Booking Submitted!",
        description: "We'll confirm your reservation within 24 hours.",
      });
    }
  };

  const costs = calculateTotal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="section-title fade-in-up">Book Your Stay</h1>
            <div className="heritage-divider mb-6"></div>
            <p className="heritage-subtitle max-w-3xl mx-auto fade-in-up">
              Complete your reservation in just a few simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step < currentStep ? <Check className="h-5 w-5" /> : step}
                  </div>
                  <div className="ml-3">
                    <p className={`font-medium ${step <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
                      {step === 1 ? 'Guest Details' : step === 2 ? 'Review & Confirm' : 'Payment'}
                    </p>
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-0.5 mx-8 ${
                      step < currentStep ? 'bg-accent' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="heritage-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-heritage">
                    {currentStep === 1 ? 'Guest Information' : 
                     currentStep === 2 ? 'Review Your Booking' : 'Payment Details'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {currentStep === 1 && (
                      <>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="checkIn">Check-in Date *</Label>
                            <Input
                              id="checkIn"
                              type="date"
                              value={formData.checkIn}
                              onChange={(e) => handleInputChange('checkIn', e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="checkOut">Check-out Date *</Label>
                            <Input
                              id="checkOut"
                              type="date"
                              value={formData.checkOut}
                              onChange={(e) => handleInputChange('checkOut', e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="adults">Adults</Label>
                            <Select value={formData.adults} onValueChange={(value) => handleInputChange('adults', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="children">Children</Label>
                            <Select value={formData.children} onValueChange={(value) => handleInputChange('children', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {[0, 1, 2, 3, 4].map(num => (
                                  <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="roomType">Room Type</Label>
                            <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="standard">Standard Room</SelectItem>
                                <SelectItem value="deluxe">Deluxe Room</SelectItem>
                                <SelectItem value="super-deluxe">Super Deluxe Room</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="specialRequests">Special Requests</Label>
                          <Textarea
                            id="specialRequests"
                            placeholder="Any special requirements or requests..."
                            value={formData.specialRequests}
                            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                          />
                        </div>
                      </>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="bg-accent/5 p-6 rounded-lg">
                          <h3 className="font-semibold mb-4 text-primary">Booking Summary</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span>Guest:</span>
                              <span>{formData.firstName} {formData.lastName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Email:</span>
                              <span>{formData.email}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Phone:</span>
                              <span>{formData.phone}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Check-in:</span>
                              <span>{formData.checkIn}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Check-out:</span>
                              <span>{formData.checkOut}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Guests:</span>
                              <span>{formData.adults} Adults, {formData.children} Children</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Room:</span>
                              <span>{rooms[formData.roomType as keyof typeof rooms]?.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <Check className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="font-semibold text-green-700 dark:text-green-300">Booking Confirmed!</h3>
                          </div>
                          <p className="text-green-600 dark:text-green-400 mb-4">
                            Thank you for choosing Hotel Bandana. Your booking has been submitted successfully.
                          </p>
                          <div className="space-y-2 text-sm text-green-600 dark:text-green-400">
                            <p>• Confirmation email will be sent within 24 hours</p>
                            <p>• You can pay at the hotel during check-in</p>
                            <p>• Cancellation is free up to 48 hours before arrival</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between pt-6">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(currentStep - 1)}
                        >
                          Previous
                        </Button>
                      )}
                      <Button
                        type="submit"
                        className="btn-heritage ml-auto"
                      >
                        {currentStep === 1 ? 'Continue' : 
                         currentStep === 2 ? 'Confirm Booking' : 'Download Confirmation'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div>
              <Card className="heritage-card sticky top-32">
                <CardHeader>
                  <CardTitle className="text-xl font-heritage">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Stay Duration</p>
                      <p className="text-sm text-muted-foreground">{costs.nights} night(s)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Guests</p>
                      <p className="text-sm text-muted-foreground">
                        {formData.adults} Adults, {formData.children} Children
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Room Rate × {costs.nights} nights</span>
                        <span>NPR {costs.subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Service Charge (10%)</span>
                        <span>NPR {costs.serviceCharge.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>VAT (13%)</span>
                        <span>NPR {costs.tax.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>NPR {costs.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm text-center">
                      <strong>Free Cancellation</strong><br />
                      Cancel up to 48 hours before check-in
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;