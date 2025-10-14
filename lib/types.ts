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
