import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, DollarSign, Award, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { supabase } from '@/lib/supabase';

async function getCourseBySlug(slug: string) {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching course:', error);
    return null;
  }

  return data;
}

export async function generateStaticParams() {
  const { data: courses } = await supabase
    .from('courses')
    .select('slug')
    .eq('is_active', true);

  return courses?.map((course) => ({
    slug: course.slug,
  })) || [];
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    return {
      title: 'Course Not Found | MH Makgopolo',
    };
  }

  return {
    title: `${course.title} | MH Makgopolo Security Training`,
    description: course.short_description,
  };
}

export const revalidate = 3600;

export default async function CourseDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Badge className="mb-4">{course.grade_level}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl text-gray-600">{course.short_description}</p>
        </div>

        {/* [Image Placeholder: Action-oriented. A security professional in a real-world scenario relevant to the course.] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{course.duration}</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <DollarSign className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">R{course.price.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-3">
              <Award className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Level</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">Grade {course.grade_level}</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-700 text-white rounded-lg p-8 mb-8 text-center card-elevated">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Certified?</h2>
          <p className="mb-6 text-blue-100">
            Fast-tracked processing means you'll be job-ready sooner than you think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <Button size="lg" className="btn-vibrant">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{course.description}</p>
          </div>

          {course.requirements && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <Card className="card-elevated">
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {course.requirements.split(',').map((req: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req.trim()}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}

          {course.certification && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Certification</h2>
              <Card className="bg-blue-50 border-blue-200 card-elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{course.certification}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {course.job_prospects && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <Card className="bg-green-50 border-green-200 card-elevated">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <Briefcase className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{course.job_prospects}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <Separator className="my-12" />

        <div className="bg-gray-50 rounded-lg p-8 card-elevated">
          <h3 className="text-xl font-bold mb-4">Why Choose MH Makgopolo?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Fast-tracked certification processing</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">PSIRA accredited training provider</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Experienced instructors</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Strong industry connections</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/courses">
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
