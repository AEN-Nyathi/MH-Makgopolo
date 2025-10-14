import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { db } from '@/firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

// Define the Course type for better type-safety
interface Course {
  id: string;
  slug: string;
  title: string;
  grade_level: string;
  short_description: string;
  duration: string;
  price: number;
  certification: string;
  is_active: boolean;
  order_index: number;
}

async function getAllCourses(): Promise<Course[]> {
  const coursesCol = collection(db, 'courses');
  const q = query(coursesCol, where('is_active', '==', true));

  try {
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
  } catch (error) {
    console.error('Error fetching courses:', error);
    // This error likely means you need to create a new composite index in Firestore.
    // Please check your server's terminal output for a link to create the index.
    return [];
  }
}

export const revalidate = 3600; // Re-fetch data every hour

export const metadata = {
  title: 'Security Training Courses | MH Makgopolo',
  description: 'Browse our comprehensive range of PSIRA-accredited security training courses including Goals Guarding, Firearm Competency, and First Aid certifications.',
};

export default async function CoursesPage() {
  const courses = await getAllCourses();

  const gradeCategories = [
    { name: 'Goals Guarding Certifications', filter: ['Grade E', 'Grade D', 'Grade C', 'Grade B', 'Grade A'] },
    { name: 'Specialized Training', filter: ['Specialized'] },
    { name: 'Combo Packages', filter: ['Combo'] },
    { name: 'Other Courses', filter: ['Entry'] },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Training Courses</h1>
        <p className="text-xl text-gray-600">
          Professional security training programs designed to get you certified and job-ready fast. All courses are PSIRA-accredited.
        </p>
      </div>

      {gradeCategories.map((category) => {
        const categoryCourses = courses.filter((course) =>
          category.filter.includes(course.grade_level)
        );

        if (categoryCourses.length === 0) return null;

        return (
          <div key={category.name} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => (
                <Card key={course.id} className="card-elevated hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="w-fit">{course.grade_level}</Badge>
                      <span className="font-bold text-lg text-blue-600">
                        R{course.price.toLocaleString()}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.short_description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{course.certification}</p>
                    </div>
                    <Link href={`/courses/${course.slug}`}>
                      <Button className="w-full" variant="outline">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center card-elevated">
        <h3 className="text-2xl font-bold mb-4">Not Sure Which Course to Choose?</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our team is here to help you select the right training program for your career goals. Contact us for personalized guidance.
        </p>
        <Link href="/contact">
          <Button size="lg" className="btn-vibrant">
            Contact Us for Guidance
          </Button>
        </Link>
      </div>
    </div>
  );
}
