import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { db } from '@/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import Link from 'next/link';

// Define the testimonial type for better type-safety
interface Testimonial {
  id: string;
  student_name: string;
  current_position?: string;
  course_completed?: string;
  rating: number;
  testimonial_text: string;
}

async function getTestimonials(): Promise<Testimonial[]> {
  const testimonialsCol = collection(db, 'testimonials');
  // Query for all testimonials that are approved, sorted with the newest first.
  const q = query(testimonialsCol, where('is_approved', '==', true));

  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    // This error might indicate that a Firestore index is required.
    // Check your server console log for a URL to create the index.
    return [];
  }
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
        <p className="text-xl text-gray-600">
          Hear from our graduates who have successfully launched and advanced their careers in the security industry.
        </p>
      </div>

      {testimonials.length > 0 && (
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
      )}
      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Become Our Next Success Story</h3>
        <p className="text-gray-700 mb-6">
          Join hundreds of graduates who have successfully launched their security careers with MH Makgopolo.
        </p>
        <a href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md">
            Start Your Journey
          </button>
        </a>
      </div>
      </div>
  
  );
}
