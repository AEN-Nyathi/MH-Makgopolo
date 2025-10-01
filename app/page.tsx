import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, Users, CircleCheck as CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/lib/supabase';

async function getFeaturedCourses() {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('is_featured', true)
    .eq('is_active', true)
    .order('order_index')
    .limit(4);

  if (error) {
    console.error('Error fetching courses:', error);
    return [];
  }

  return data || [];
}

async function getFeaturedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_featured', true)
    .eq('is_approved', true)
    .limit(3);

  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }

  return data || [];
}

export const revalidate = 3600;

export default async function Home() {
  const courses = await getFeaturedCourses();
  const testimonials = await getFeaturedTestimonials();

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              PSIRA Accredited Training Provider
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fast-Track Your Security Career with MH Makgopolo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get certified and job-ready faster than competitors. Professional security training with rapid certification processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  View Our Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Fast-Tracked Processing</h3>
              <p className="text-gray-600">Get certified faster with our streamlined administration and rapid processing.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">PSIRA Accredited</h3>
              <p className="text-gray-600">Fully accredited training provider with recognized certifications.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from experienced security professionals with real-world expertise.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">Job-Ready Training</h3>
              <p className="text-gray-600">Practical skills training that prepares you for immediate employment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional security training courses designed to get you certified and employed quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{course.grade_level}</Badge>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.short_description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-bold text-blue-600">R{course.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <Link href={`/courses/${course.slug}`}>
                    <Button className="w-full" variant="outline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MH Makgopolo?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that time is critical. Our efficient processes get you certified and into the workforce faster than our competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Trusted & Legitimate</h3>
              <p className="text-gray-600">
                Fully accredited by PSIRA with a proven track record of producing qualified security professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Rapid Certification</h3>
              <p className="text-gray-600">
                Streamlined course scheduling and fast certification processing minimize wait times significantly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Industry Connections</h3>
              <p className="text-gray-600">
                Strong partnerships with security companies looking to hire our certified graduates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from our graduates who have successfully launched their security careers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {testimonial.student_name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.student_name}</CardTitle>
                        {testimonial.current_position && (
                          <CardDescription>{testimonial.current_position}</CardDescription>
                        )}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{testimonial.testimonial_text}"</p>
                    {testimonial.course_completed && (
                      <p className="text-sm text-gray-500 mt-4">Course: {testimonial.course_completed}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/testimonials">
                <Button variant="outline" size="lg">
                  Read More Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Security Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of successful graduates who have launched their careers with MH Makgopolo Security Training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/registration">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Registration Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
