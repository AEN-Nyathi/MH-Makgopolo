import Link from 'next/link';
import { CircleCheck as CheckCircle, FileText, CreditCard, Award, ArrowRight, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import RegistrationForm from '@/components/RegistrationForm';

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
      description: 'Fill out the registration form below. We\'ll verify your documents and confirm your eligibility.',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Registration</h1>
          <p className="text-xl text-gray-600">
            Our streamlined registration process gets you from application to certification faster than competitors.
          </p>
        </div>

        <Card className="mb-12">
            <CardHeader>
                <CardTitle className="text-2xl">Submit Your Application</CardTitle>
                <CardDescription>Fill out the form below to get started.</CardDescription>
            </CardHeader>
            <CardContent>
                <RegistrationForm />
            </CardContent>
        </Card>

        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Registration Process</h2>
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
                href="https://wa.me/27665664326?text=Hi! I'd like to inquire about payment options."
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
      </div>
    </div>
  );
}
