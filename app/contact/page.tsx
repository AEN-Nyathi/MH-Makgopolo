'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      course_interest: formData.get('course_interest'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent Successfully!',
          description: 'We\'ll get back to you within 24 hours.',
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to learn more about our courses or to start your enrollment process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="card-elevated">
            <CardHeader>
              <Phone className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Phone</CardTitle>
              <CardDescription>Call us during business hours</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="tel:+27665664326" className="text-lg font-semibold text-blue-600 hover:underline">
                 +276 656 64326
              </a>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <Mail className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Email</CardTitle>
              <CardDescription>Send us a message anytime</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:info@mhmakgopolo.co.za" className="text-lg font-semibold text-blue-600 hover:underline">
                info@mhmakgopolo.co.za
              </a>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <MapPin className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Location</CardTitle>
              <CardDescription>Visit our training facility</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Pretoria, Gauteng<br />South Africa</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      required
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+27 12 345 6789"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="course_interest">Course Interest</Label>
                    <Select name="course_interest">
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Goals Guarding Grade E">Goals Guarding Grade E</SelectItem>
                        <SelectItem value="Goals Guarding Grade D">Goals Guarding Grade D</SelectItem>
                        <SelectItem value="Goals Guarding Grade C">Goals Guarding Grade C</SelectItem>
                        <SelectItem value="Basic Security Training">Basic Security Training</SelectItem>
                        <SelectItem value="Firearm Competency">Firearm Competency</SelectItem>
                        <SelectItem value="First Aid Level 1">First Aid Level 1</SelectItem>
                        <SelectItem value="Combo Package">Combo Package</SelectItem>
                        <SelectItem value="Not Sure">Not Sure Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your training needs or ask us any questions..."
                      className="mt-1 min-h-32"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-vibrant" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-semibold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 card-elevated">
              <CardHeader>
                <CardTitle>WhatsApp Us</CardTitle>
                <CardDescription>Get instant responses via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For quick inquiries and immediate assistance, chat with us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/27123456789?text=Hi! I would like to inquire about your security training courses."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200 card-elevated">
              <CardHeader>
                <CardTitle>Ready to Enroll?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you're ready to start your security training journey, check out our registration process.
                </p>
                <a href="/registration">
                  <Button variant="outline" className="w-full">
                    View Registration Process
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
