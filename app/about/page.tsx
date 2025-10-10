import Link from 'next/link';
import { Shield, Target, Award, Users, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'About Us | MH Makgopolo Security Training',
  description: 'Learn about MH Makgopolo, a PSIRA-accredited security training provider dedicated to fast-tracked certification and professional development in the security industry.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in security training, ensuring our graduates are industry-ready.',
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'Fast-tracked processing and streamlined administration get you certified quickly without compromising quality.',
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'We equip individuals with skills and confidence to excel in the private security industry.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Committed to continuous improvement and staying current with industry standards and best practices.',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Graduates Trained' },
    { number: '15+', label: 'Years Experience' },
    { number: '95%', label: 'Employment Rate' },
    { number: '50+', label: 'Hiring Partners' },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MH Makgopolo</h1>
            <p className="text-xl text-blue-100">
              Building careers in security through professional training, rapid certification, and industry connections.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  MH Makgopolo was founded with a clear mission: to provide high-quality security training that gets people certified and employed quickly. We recognized that many aspiring security professionals faced long wait times for certification, delaying their ability to start earning.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our founder, understanding the challenges in the industry, established a training academy that combines professional excellence with efficient administration. This unique approach has helped hundreds of students launch successful careers in security.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, MH Makgopolo is recognized as a trusted PSIRA-accredited training provider with strong connections to security companies actively seeking our graduates.
                </p>
              </div>
              <div>
                {/* [Image Placeholder: Engagement/Learning. A focused classroom scene with an instructor teaching security protocols.] */}
                <Card className="bg-blue-50 border-blue-200 card-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-6 w-6 text-blue-600 mr-2" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      To equip individuals with the skills and knowledge required to excel in the private security industry through professional training, rapid certification processing, and ongoing support.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at MH Makgopolo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center card-elevated">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to student success.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center p-4 rounded-lg card-elevated">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Accreditations & Certifications</h2>
            <Card className="card-elevated">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">PSIRA Registered Training Provider</h3>
                      <p className="text-gray-600">
                        Fully accredited by the Private Security Industry Regulatory Authority to provide security training and certification.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Accredited Security Training Academy</h3>
                      <p className="text-gray-600">
                        Recognized for maintaining high standards in security education and professional development.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the hundreds of successful graduates who have launched their security careers with MH Makgopolo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses">
              <Button size="lg" className="btn-vibrant">
                View Our Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
