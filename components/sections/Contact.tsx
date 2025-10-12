'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Building, Car, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    inquiryType: 'general'
  });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: "Phone",
      details: ["+91-9810100561", "+91-9810100561"],
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-600" />,
      title: "Email",
      details: ["cashforgolddelhi@gmail.com", "cashforgolddelhi@gmail.com"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: "Office Address",
      details: ["C-159,Roxy chowk, Veer Savarkar Marg, near Chicago-Pizza, near Chicago- Pizza, Lajpat Nagar II, New Delhi, Delhi 110024"],
      action: "Get Directions"
    }
  ];

  const services = [
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      title: "Visit Our Office",
      description: "Come to our secure office location for jewelry evaluation and cash for gold processing.",
      timing: "Mon-Sat: 10:00 AM - 7:00 PM"
    },
    {
      icon: <Car className="h-8 w-8 text-amber-600" />,
      title: "Doorstep Service",
      description: "We come to your location for convenient and secure jewelry evaluation.",
      timing: "Mon-Sat: 11:00 AM - 6:00 PM"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Contact form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email',
          inquiryType: 'general'
        });
      } else {
        toast.error(data.error || 'Failed to submit contact form');
      }
    } catch (error: any) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            Get In <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to get instant cash for your jewelry? Contact us today for a free evaluation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-2 border-amber-200 hover:border-amber-300 transition-colors duration-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
              <CardTitle className="text-2xl font-bold">Get Free Quote</CardTitle>
              <p className="text-amber-100">Fill out the form and we'll contact you within 30 minutes</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Enter subject"
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                    <SelectTrigger className="border-amber-200 focus:border-amber-500">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="gold-check">Gold Check</SelectItem>
                      <SelectItem value="gold-sell">Gold Selling</SelectItem>
                      <SelectItem value="loan">Cash For Gold Application</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific requirements or questions..."
                    className="border-amber-200 focus:border-amber-500 focus:ring-amber-500 min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-bold py-3 rounded-full transform transition-all duration-300 hover:scale-105"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-2 border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold py-3 rounded-full transition-all duration-300"
                    onClick={() => window.open('tel:+919350564449')}
                  >
                    Call for Instant Quote
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="bg-white border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 rounded-full p-3">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        <Button
                          variant="link"
                          className="text-amber-600 hover:text-amber-700 p-0 h-auto font-semibold"
                          onClick={() => {
                            if (info.title === 'Phone') {
                              window.open('tel:+919350564449');
                            } else if (info.title === 'Email') {
                              window.open('mailto:info@virajjewellers.com');
                            } else if (info.title === 'Office Address') {
                              window.open('https://maps.google.com/?q=Lajpat+Nagar+Delhi');
                            }
                          }}
                        >
                          {info.action} →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Options */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Service</h3>
              {services.map((service, index) => (
                <Card key={service.title} className="bg-gradient-to-r from-white to-amber-50 border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-amber-100 group-hover:bg-amber-200 rounded-full p-3 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h4>
                        <p className="text-gray-600 mb-2">{service.description}</p>
                        <div className="flex items-center space-x-2 text-amber-700">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">{service.timing}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-none">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-xl mb-2">Emergency cash for gold Service</h4>
                <p className="text-red-100 mb-4">Need urgent cash? We're available 24/7 for emergency cash for gold sevice</p>
                <Button
                  className="bg-white text-red-600 hover:bg-red-50 font-bold rounded-full"
                  onClick={() => window.open('tel:+919350564449')}
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
