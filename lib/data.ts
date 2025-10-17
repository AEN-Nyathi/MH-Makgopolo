import { Firestore, collection, getDocs, query, where } from 'firebase/firestore';
import { Course, BlogPost, Testimonial, GalleryImage } from './types';
import { db } from '@/firebase';

// Generic function to fetch data from a collection
async function fetchCollection<T>(collectionName: string): Promise<T[]> {
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
}

// Fetch all courses
export  async function getAllCourses(): Promise<Course[]> {
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

export async function getCourseBySlug(slug: string): Promise<Course | null> {
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

// Fetch all blog posts
export const getBlogPosts = (): Promise<BlogPost[]> => {
  return fetchCollection<BlogPost>('blog_posts');
};
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
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
// Fetch all testimonials
export const getTestimonials = (): Promise<Testimonial[]> => {
  return fetchCollection<Testimonial>('testimonials');
};

// Fetch all gallery images
export const getGalleryImages = (): Promise<GalleryImage[]> => {
  return fetchCollection<GalleryImage>('gallery_images');
};
