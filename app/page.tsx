import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, Award, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { db } from '@/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { Course } from '@/lib/types';
import Slideshow from '@/components/Slideshow';
import '@/components/slideshow.css';
import Terms from '@/components/Terms';
import Team from '@/components/Team';

async function getFeaturedCourses() {
  const coursesCol = collection(db, 'courses');
  const q = query(coursesCol, where('is_featured', '==', true), where('is_active', '==', true), limit(4));

  try {
    const querySnapshot = await getDocs(q);
    const courses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
    return courses.sort((a, b) => a.order_index - b.order_index) ;
  } catch (error) {
    console.error('Error fetching courses:', error);
    // If you see this error, it's likely because you need to create a composite index in Firestore.
    // Check your browser's developer console for a link to create it.
    return [];
  }
}

async function getFeaturedTestimonials() {
  const testimonialsCol = collection(db, 'testimonials');
  const q = query(testimonialsCol, where('is_featured', '==', true), where('is_approved', '==', true), limit(3));

  try {
    const querySnapshot = await getDocs(q);
    const testimonials = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

export default async function Home() {
  const courses = await getFeaturedCourses();
  const testimonials = await getFeaturedTestimonials();

  return (
    <div className="flex flex-col">
      <section className="relative  text-white py-24 lg:py-32">
        <div className="absolute bg-blue-500 inset-0">
          <Image
            src="/securityGuard.jpg"
            alt="Professional security guards"
            layout="fill"
            objectFit="cover"
            className=" opacity-75 object-top"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              PSIRA Accredited Training Provider
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fast-Track Your PSIRA Security Career
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Get certified and job-ready faster. Professional security training with rapid certification processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="btn-vibrant">
                  View Our Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-primary border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </section>

      

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-lg text-gray-700">Successful Graduates</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">95%</p>
              <p className="text-lg text-gray-700">Employment Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">10+</p>
              <p className="text-lg text-gray-700">Years of Experience</p>
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
            {courses.length > 0 ? (
              courses.map((course) => (
                <Card key={course.id} className="card-elevated hover:shadow-lg transition-shadow">
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">
                  No featured courses are available at the moment. Please check back later.
                </p>
              </div>
            )}
          </div>

          <div className="text-center mt-10">
            <Link href="/courses">
              <Button size="lg" className="btn-vibrant">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg card-elevated">
              <Image src="/Psira-Logo-1-1024x538.png" alt="Shield" width={70} height={50}   className="h-12  text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Trusted & Legitimate</h3>
              <p className="text-gray-600">
                Fully accredited by PSIRA with a proven track record of producing qualified security professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg card-elevated">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-2">Rapid Certification</h3>
              <p className="text-gray-600">
                Streamlined course scheduling and fast certification processing minimize wait times significantly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg card-elevated">
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
              {testimonials.map((testimonial: any) => (
                <Card key={testimonial.id} className="card-elevated">
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

      <Team />
      <section className="py-4  bg-blue-700 ">
      <Slideshow />
      </section>
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Security Career?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of successful graduates who have launched their careers with MH Makgopolo Security Training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <Button size="lg" className="btn-vibrant">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10">
                View Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    
    </div>
  );
}
