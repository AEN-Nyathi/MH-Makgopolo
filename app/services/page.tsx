
import { NextPage } from 'next';
import { Shield, Briefcase, Users, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Event Management',
    description: 'Comprehensive security solutions for events of all sizes, ensuring a safe and orderly environment.',
    icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Escorting',
    description: 'Discreet and professional escorting services for individuals and valuable assets.',
    icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Bouncers',
    description: 'Trained and experienced bouncers for clubs, bars, and private parties.',
    icon: <Briefcase className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Unarmed Guard',
    description: 'Professional unarmed guards for static security at residential and commercial properties.',
    icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Construction Site',
    description: 'Specialized security services to protect construction sites from theft and vandalism.',
    icon: <Building className="h-12 w-12 text-blue-600 mb-4" />,
  },
];

const ServicesPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Providing a wide range of security services to meet your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
            {service.icon}
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Need a Custom Security Solution?</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your specific security requirements and get a personalized quote.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
