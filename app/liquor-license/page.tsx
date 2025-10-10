
import { NextPage } from 'next';
import { Shield, FileText, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LiquorLicensePage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Liquor License Services</h1>
        <p className="text-xl text-gray-600">
          Navigate the complexities of liquor licensing with our expert assistance.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-4">
            <FileText className="h-10 w-10 text-blue-600 mr-4" />
            <h3 className="text-2xl font-bold">Our Expertise</h3>
          </div>
          <p className="text-gray-700 mb-4">
            We provide comprehensive services to help you obtain and maintain your liquor license. Our team has in-depth knowledge of the regulations and procedures, ensuring a smooth and efficient process.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>New license applications</li>
            <li>License renewals and transfers</li>
            <li>Compliance consulting</li>
            <li>Representation at hearings</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Get Started Today</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us for a consultation and let us handle the paperwork and legal requirements for you.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiquorLicensePage;
