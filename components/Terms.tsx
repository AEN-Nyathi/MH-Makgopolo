import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Terms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
          Please review our terms and conditions before enrolling in any of our courses.
        </p>
        <Link href="/terms">
          <Button size="lg" variant="outline">
            Read Terms and Conditions
          </Button>
        </Link>
      </div>
    </section>
  );
}
