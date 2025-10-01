import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">MH Makgopolo</span>
                <span className="text-xs">Security Training</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Providing specialized security training and certification programs. Equipping individuals with the skills to excel in the private security industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-500 transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-blue-500 transition-colors">
                  Registration Process
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-500 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/goals-guarding-grade-e" className="hover:text-blue-500 transition-colors">
                  Goals Guarding Grade E
                </Link>
              </li>
              <li>
                <Link href="/courses/goals-guarding-grade-d" className="hover:text-blue-500 transition-colors">
                  Goals Guarding Grade D
                </Link>
              </li>
              <li>
                <Link href="/courses/goals-guarding-grade-c" className="hover:text-blue-500 transition-colors">
                  Goals Guarding Grade C
                </Link>
              </li>
              <li>
                <Link href="/courses/firearm-competency" className="hover:text-blue-500 transition-colors">
                  Firearm Competency
                </Link>
              </li>
              <li>
                <Link href="/courses/first-aid-level-1" className="hover:text-blue-500 transition-colors">
                  First Aid Level 1
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Pretoria, Gauteng, South Africa</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="tel:+27123456789" className="text-sm hover:text-blue-500 transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@mhmakgopolo.co.za" className="text-sm hover:text-blue-500 transition-colors">
                  info@mhmakgopolo.co.za
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">Accreditations</h4>
              <p className="text-xs">PSIRA Registered Training Provider</p>
              <p className="text-xs">Accredited Security Training Academy</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} MH Makgopolo Security Training. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-blue-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-blue-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
