This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.idx/
  dev.nix
app/
  about/
    page.tsx
  api/
    contact/
      route.ts
  blog/
    page.tsx
  contact/
    page.tsx
  courses/
    [slug]/
      page.tsx
    page.tsx
  gallery/
    page.tsx
  liquor-license/
    page.tsx
  registration/
    page.tsx
  services/
    page.tsx
  testimonials/
    page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    alert.tsx
    badge.tsx
    button.tsx
    card.tsx
    separator.tsx
    tabs.tsx
  ContactForm.tsx
  Footer.tsx
  form.tsx
  Header.tsx
  input.tsx
  textarea.tsx
  toast.tsx
  toaster.tsx
lib/
  data.ts
  types.ts
  use-toast.ts
  utils.ts
.eslintrc.json
.gitignore
components.json
firebase.ts
next.config.js
package.json
postcss.config.js
README.md
tailwind.config.ts
tsconfig.json
```

# Files

## File: .idx/dev.nix
```
{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
```

## File: app/about/page.tsx
```typescript
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
```

## File: app/api/contact/route.ts
```typescript
'use server'

import { NextResponse } from "next/server";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, course_interest, message } = body;

    if (!full_name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const submission = {
      full_name,
      email,
      phone,
      course_interest: course_interest || null,
      message,
      source: 'Website Contact Form',
      status: 'new',
      created_at: serverTimestamp(),
    };

    await addDoc(collection(db, 'contact_submissions'), submission);

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## File: app/blog/page.tsx
```typescript
'use client'

import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/types';
import { db } from '@/firebase';
import { getBlogPosts } from '@/lib/data';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getBlogPosts(db);
      const publishedPosts = allPosts.filter(post => post.is_published).sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
      setPosts(publishedPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a proper skeleton loader
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & News</h1>
        <p className="text-xl text-gray-600">
          Stay updated with the latest insights, news, and tips about security training and career development.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.published_at).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">
            Blog posts coming soon! Check back later for industry insights, training tips, and company news.
          </p>
          <Link href="/courses">
            <Button>Explore Our Courses</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
```

## File: app/contact/page.tsx
```typescript
'use client'

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}
```

## File: app/courses/[slug]/page.tsx
```typescript
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, DollarSign, Award, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { db } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Course } from '@/lib/types';

async function getCourseBySlug(slug: string): Promise<Course | null> {
  const coursesCol = collection(db, 'courses');
  const q = query(coursesCol, where('slug', '==', slug), where('is_active', '==', true));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const course = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as Course;
    return course;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
}

export async function generateStaticParams() {
  const coursesCol = collection(db, 'courses');
  const q = query(coursesCol, where('is_active', '==', true));
  const querySnapshot = await getDocs(q);

  const courses = querySnapshot.docs.map(doc => ({ slug: doc.data().slug }));
  return courses;
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
              <p className="text-2xl font-bold">{course.grade_level}</p>
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
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10">
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
```

## File: app/courses/page.tsx
```typescript
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
```

## File: app/gallery/page.tsx
```typescript
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { GalleryImage } from '@/lib/types';
import { db } from '@/firebase';
import { getGalleryImages } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

export default async function GalleryPage() {
  const allImages = await getGalleryImages(db);
  const images = allImages.filter(img => img.is_active).sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

  const filterImages = (category: string) => {
    if (category === 'all') return images;
    return images.filter(image => image.category === category);
  };

  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'training', label: 'Training Sessions' },
    { value: 'graduates', label: 'Our Graduates' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'events', label: 'Events' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
        <p className="text-xl text-gray-600">
          A glimpse into our training environment, our successful graduates, and our state-of-the-art facilities.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full text-center">
        <TabsList className="mb-8 p-2 h-auto">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-md px-4 py-2">{tab.label}</TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filterImages(tab.value).map(image => (
                <Card key={image.id} className="overflow-hidden card-elevated hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={image.image_url}
                      alt={image.title || 'Gallery image'}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full aspect-[4/3]"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
            {filterImages(tab.value).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No images found in this category. Check back soon!
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>

      {images.length === 0 && (
         <div className="text-center py-12">
           <p className="text-gray-600 text-lg mb-6">
             Our gallery is currently empty. We'll be adding photos soon!
           </p>
         </div>
      )}
    </div>
  );
}
```

## File: app/liquor-license/page.tsx
```typescript
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
```

## File: app/registration/page.tsx
```typescript
import Link from 'next/link';
import { CircleCheck as CheckCircle, FileText, CreditCard, Award, ArrowRight, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const metadata = {
  title: 'Registration Process | MH Makgopolo',
  description: 'Learn about our simple, fast-tracked registration process for security training courses. Get started on your certification journey today.',
};

export default function RegistrationPage() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Choose Your Course',
      description: 'Browse our courses and select the training program that matches your career goals.',
      action: 'View Courses',
      actionLink: '/courses',
    },
    {
      number: 2,
      icon: FileText,
      title: 'Submit Application',
      description: 'Contact us to submit your application. We\'ll verify your documents and confirm your eligibility.',
      action: 'Contact Us',
      actionLink: '/contact',
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Secure your spot by completing the course payment. We offer flexible payment options.',
      details: 'Payment methods accepted: Bank transfer, cash, or payment plans available.',
    },
    {
      number: 4,
      icon: Award,
      title: 'Start Training',
      description: 'Attend your scheduled training sessions and complete all course requirements for certification.',
      details: 'Training duration varies by course. Most courses run 3-10 days.',
    },
  ];

  const requirements = [
    'Valid South African ID document',
    'Minimum age: 18 years (21 for firearm courses)',
    'Clean criminal record',
    'Grade 10 or higher (Grade 11 for Grade D, Grade 12 for Grade C)',
    'Proof of residence',
    'Passport-sized photos (2)',
    'For firearm training: Psychometric assessment',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration Process</h1>
          <p className="text-xl text-gray-600">
            Our streamlined registration process gets you from application to certification faster than competitors.
          </p>
        </div>

        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Fast-Track Advantage:</strong> Our efficient administration means shorter wait times and quicker certification compared to other training providers.
          </AlertDescription>
        </Alert>

        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <Card key={step.number} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="flex items-center text-xl">
                      <step.icon className="h-5 w-5 mr-2" />
                      {step.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {step.details && (
                  <p className="text-sm text-gray-600 mb-4">{step.details}</p>
                )}
                {step.action && step.actionLink && (
                  <Link href={step.actionLink}>
                    <Button variant="outline">
                      {step.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">General Requirements</CardTitle>
            <CardDescription>
              Basic documents and qualifications needed for most courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 italic">
              Note: Specific requirements may vary by course. Contact us for detailed requirements for your chosen training program.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle>Course Schedules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We offer multiple start dates throughout the month to accommodate your schedule. Contact us to find the next available session for your course.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  View Available Dates
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle>Payment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We understand financial constraints. Ask about our flexible payment plans to make training more accessible.
              </p>
              <a
                href="https://wa.me/27123456789?text=Hi! I'd like to inquire about payment options."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  Inquire About Payment Plans
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Contact us today to begin your registration or ask any questions about the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Registration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a
              href="https://wa.me/27123456789?text=Hi! I'd like to register for a course."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## File: app/services/page.tsx
```typescript
import { NextPage } from 'next';
import { Shield, Briefcase, Users, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Event Management',
    description: 'Comprehensive security solutions for events of all sizes, ensuring a safe and orderly environment.',
    icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Escorting',
    description: 'Discreet and professional escorting services for individuals and valuable assets.',
    icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Bouncers',
    description: 'Trained and experienced bouncers for clubs, bars, and private parties.',
    icon: <Briefcase className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Unarmed Guard',
    description: 'Professional unarmed guards for static security at residential and commercial properties.',
    icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
  },
  {
    title: 'Construction Site',
    description: 'Specialized security services to protect construction sites from theft and vandalism.',
    icon: <Building className="h-12 w-12 text-blue-600 mb-4" />,
  },
];

const ServicesPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">
          Providing a wide range of security services to meet your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
            {service.icon}
            <h3 className="font-bold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Need a Custom Security Solution?</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Contact us today to discuss your specific security requirements and get a personalized quote.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
```

## File: app/testimonials/page.tsx
```typescript
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
```

## File: app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .btn-vibrant {
    @apply bg-green-600 text-white shadow-md-light hover:bg-green-600/90;
  }

  .card-elevated {
    @apply shadow-md-light;
  }
}
```

## File: app/layout.tsx
```typescript
'use client'

import { Toaster } from "@/components/toaster"
import { ThemeProvider } from "next-themes"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## File: app/page.tsx
```typescript
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Shield, Clock, Award, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { db } from '@/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

async function getFeaturedCourses() {
  const coursesCol = collection(db, 'courses');
  const q = query(coursesCol, where('is_featured', '==', true), where('is_active', '==', true), limit(4));

  try {
    const querySnapshot = await getDocs(q);
    const courses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return courses;
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
      <section className="relative bg-primary/75 text-white py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/securityGuard.jpg"
            alt="Professional security guards"
            layout="fill"
            objectFit="cover"
            className="opacity-20 object-top"
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
              courses.map((course: any) => (
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
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
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
```

## File: components/ui/alert.tsx
```typescript
'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
```

## File: components/ui/badge.tsx
```typescript
'use client'

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

## File: components/ui/button.tsx
```typescript
'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## File: components/ui/card.tsx
```typescript
'use client'

import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

## File: components/ui/separator.tsx
```typescript
'use client'

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>((
  { className, orientation = "horizontal", decorative = true, ...props },
  ref
) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
```

## File: components/ui/tabs.tsx
```typescript
'use client'

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

## File: components/ContactForm.tsx
```typescript
'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form"
import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { useToast } from "@/lib/use-toast"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactForm() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for contacting us. We will get back to you shortly.",
                })
                form.reset()
            } else {
                throw new Error('Something went wrong')
            }
        } catch (error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request. Please try again.",
                variant: "destructive",
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Course Inquiry" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Your message here..."
                                    className="resize-none"
                                    rows={6}
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                Please provide as much detail as possible.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
        </Form>
    )
}
```

## File: components/Footer.tsx
```typescript
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
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image src='/logo-white.png' alt='MH Makgopolo Logo' width={50} height={50} />
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
```

## File: components/form.tsx
```typescript
'use client'

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Form = FormProvider

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = LabelPrimitive.Root.displayName

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
```

## File: components/Header.tsx
```typescript
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src='/logo.png' alt='MH Makgopolo Logo' width={40} height={40} />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">MH Makgopolo</span>
              <span className="text-xs text-gray-600">Security Training</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+27123456789" className="flex items-center text-gray-700 hover:text-blue-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">Call Us</span>
            </a>
            <Link href="/registration">
              <Button className="btn-vibrant">Register</Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+27123456789"
                  className="flex items-center text-gray-700 hover:text-blue-600 py-2"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">Call Us</span>
                </a>
                <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full btn-vibrant">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
```

## File: components/input.tsx
```typescript
'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

## File: components/textarea.tsx
```typescript
'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
```

## File: components/toast.tsx
```typescript
'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default:
          'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

## File: components/toaster.tsx
```typescript
'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/toast"
import { useToast } from "@/lib/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

## File: lib/data.ts
```typescript
import { Firestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Course, BlogPost, Testimonial, GalleryImage } from './types';

// Generic function to fetch data from a collection
async function fetchCollection<T>(db: Firestore, collectionName: string): Promise<T[]> {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
}

// Fetch all courses
export const getCourses = (db: Firestore): Promise<Course[]> => {
  return fetchCollection<Course>(db, 'courses');
};

// Fetch all blog posts
export const getBlogPosts = (db: Firestore): Promise<BlogPost[]> => {
  return fetchCollection<BlogPost>(db, 'blog_posts');
};

// Fetch all testimonials
export const getTestimonials = (db: Firestore): Promise<Testimonial[]> => {
  return fetchCollection<Testimonial>(db, 'testimonials');
};

// Fetch all gallery images
export const getGalleryImages = (db: Firestore): Promise<GalleryImage[]> => {
  return fetchCollection<GalleryImage>(db, 'gallery_images');
};
```

## File: lib/types.ts
```typescript
export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  short_description: string;
  grade_level: string;
  duration: string;
  price: number;
  requirements: string;
  certification: string;
  job_prospects: string;
  image_url?: string;
  is_featured: boolean;
  is_active: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
};

export type Testimonial = {
  id: string;
  student_name: string;
  student_photo?: string;
  course_completed?: string;
  testimonial_text: string;
  current_position?: string;
  rating: number;
  is_featured: boolean;
  is_approved: boolean;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image?: string;
  category: string;
  author: string;
  meta_description?: string;
  is_published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  image_url: string;
  category: 'training' | 'graduates' | 'facilities' | 'events';
  description?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
};

export type ContactSubmission = {
  full_name: string;
  email: string;
  phone: string;
  course_interest?: string;
  message: string;
  source?: string;
};

export type CourseRegistration = {
  course_id: string;
  full_name: string;
  email: string;
  phone: string;
  id_number: string;
  address: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  preferred_start_date?: string;
  notes?: string;
};
```

## File: lib/use-toast.ts
```typescript
'use client'

import * as React from "react"

import { type ToastProps } from "@/components/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % 100
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast(props: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```

## File: lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## File: .eslintrc.json
```json
{
  "extends": "next/core-web-vitals"
}
```

## File: .gitignore
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## File: components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## File: firebase.ts
```typescript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2k3sAWeI1_r8LzVIXFwKuOXnPin7rfdw",
  authDomain: "mh-makgopolo.firebaseapp.com",
  projectId: "mh-makgopolo",
  storageBucket: "mh-makgopolo.firebasestorage.app",
  messagingSenderId: "484219119839",
  appId: "1:484219119839:web:228e4d0cc551bb86d2e16a",
  measurementId: "G-GJRG6NH524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

## File: next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
```

## File: package.json
```json
{
  "name": "nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@next/swc-wasm-nodejs": "13.5.1",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2",
    "@supabase/supabase-js": "^2.58.0",
    "@types/node": "20.6.2",
    "@types/react": "19.2.2",
    "@types/react-dom": "19.2.1",
    "autoprefixer": "10.4.15",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "eslint": "8.49.0",
    "eslint-config-next": "15.5.4",
    "firebase": "^12.4.0",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.446.0",
    "next": "15.5.4",
    "next-themes": "^0.3.0",
    "postcss": "8.4.30",
    "react": "19.2.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "19.2.0",
    "react-hook-form": "^7.53.0",
    "react-icons": "^5.5.0",
    "react-resizable-panels": "^2.1.3",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "5.2.2",
    "vaul": "^0.9.9",
    "zod": "^3.23.8"
  },
  "overrides": {
    "@types/react": "19.2.2",
    "@types/react-dom": "19.2.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3"
  }
}
```

## File: postcss.config.js
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## File: README.md
```markdown
MH-Makgopolo
```

## File: tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        green: {
          '600': '#16a34a', // Example Vibrant Green
        },
      },
      boxShadow: {
        'md-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
