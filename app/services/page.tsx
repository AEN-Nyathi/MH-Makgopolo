
import { NextPage } from 'next';
import { Shield, Briefcase, Users, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';

const services = [
  {
    title: 'Event Management',
    description: 'Comprehensive security solutions for events of all sizes, ensuring a safe and orderly environment.',
    icon: <Shield className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Escorting',
    description: 'Discreet and professional escorting services for individuals and valuable assets.',
    icon: <Users className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Bouncers',
    description: 'Trained and experienced bouncers for clubs, bars, and private parties.',
    icon: <Briefcase className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Unarmed Guard',
    description: 'Professional unarmed guards for static security at residential and commercial properties.',
    icon: <Shield className="h-10 w-10 text-blue-600" />,
  },
  {
    title: 'Construction Site',
    description: 'Specialized security services to protect construction sites from theft and vandalism.',
    icon: <Building className="h-10 w-10 text-blue-600" />,
  },
   {
    title: 'Custom Solutions',
    description: 'Tailored security plans to meet your unique needs and challenges.',
    icon: <Users className="h-10 w-10 text-blue-600" />,
  },
];

const ServicesPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Security Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We provide a comprehensive range of professional security services to protect your assets, people, and property.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow">
            <CardHeader className="items-center">
              {service.icon}
              <CardTitle className="mt-4">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
            <CardFooter className="justify-center">
              <Link target="_blank" rel="noopener noreferrer" href={`https://wa.me/27726489722?text=I'm interested in a quote for ${service.title}`} >
           
                  <Button className='bg-green-500 text-white' variant="outline">
                    Get a Quote <FaWhatsapp className="ml-2 h-4 w-4" />
                  </Button>
            
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Peace of Mind?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your security needs. Contact us today for a free, no-obligation consultation and a personalized quote for your requirements.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">
            Request a Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
