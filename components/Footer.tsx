import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'galleries', href: '/gallery' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src='/logo.png' alt='MH Makgopolo Logo' width={50} height={50} />
              <div className="flex flex-col">
                <span className="font-bold text-xl">MH Makgopolo</span>
                <span className="text-xs text-gray-400">Security Training</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted partner in professional security training and rapid certification.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400">123 Security Lane, Pretoria, Gauteng, 0002, South Africa</p>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-5 w-5 text-blue-400" />
              <a href="tel:+27123456789" className="text-gray-400 hover:text-white">+27 12 345 6789</a>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-5 w-5 text-blue-400" />
              <a href="mailto:info@makgopolosecurity.co.za" className="text-gray-400 hover:text-white">info@makgopolosecurity.co.za</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-2">Newsletter</h3>
            <p className="text-gray-400 text-sm">Stay updated with our latest courses and news.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="btn-vibrant">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} MH Makgopolo (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            PSIRA Accreditation No: 123456
          </p>
        </div>
      </div>
    </footer>
  );
}
