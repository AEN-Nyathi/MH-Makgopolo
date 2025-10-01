import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';

async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_approved', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }

  return data || [];
}

export const revalidate = 3600;

export const metadata = {
  title: 'Student Success Stories | MH Makgopolo',
  description: 'Read testimonials from our successful graduates who have launched their security careers with MH Makgopolo training.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
        <p className="text-xl text-gray-600">
          Hear from our graduates who have successfully launched their security careers with MH Makgopolo training.
        </p>
      </div>

      {testimonials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl">
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
                <p className="text-gray-600 italic mb-4">"{testimonial.testimonial_text}"</p>
                {testimonial.course_completed && (
                  <div className="text-sm text-gray-500 pt-4 border-t">
                    <span className="font-semibold">Course Completed:</span> {testimonial.course_completed}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Testimonials will be available soon. Check back later to read success stories from our graduates!
          </p>
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
