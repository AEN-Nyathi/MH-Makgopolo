
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { db } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { BlogPost } from '@/lib/types';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const postsCollection = collection(db, 'blog_posts');
  const q = query(postsCollection, where('slug', '==', slug), where('is_published', '==', true));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const post = { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as BlogPost;
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateStaticParams() {
    const postsCollection = collection(db, 'blog_posts');
    const q = query(postsCollection, where('is_published', '==', true));
    const querySnapshot = await getDocs(q);

    const posts = querySnapshot.docs.map(doc => ({ slug: doc.data().slug as string }));
    return posts.filter(post => post.slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | MH Makgopolo',
    };
  }

  return {
    title: `${post.title} | MH Makgopolo Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
            <Link href="/blog">
                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Button>
            </Link>
        </div>

        <article>
          <header className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.published_at ? new Date(post.published_at).toLocaleDateString() : ''}</span>
                </div>
            </div>
          </header>

          {post.featured_image && (
            <div className="mb-8 relative w-full h-96">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill={true}
                objectFit='cover'
                className="rounded-lg"
              />
            </div>
          )}

          <div className="prose lg:prose-xl max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>

        <Separator className="my-12" />

        <div className="text-center">
          <Link href="/courses">
            <Button size="lg">Explore Our Courses <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
