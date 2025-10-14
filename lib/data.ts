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
