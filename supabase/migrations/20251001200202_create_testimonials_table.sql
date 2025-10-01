/*
  # Create testimonials table for student success stories

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key) - Unique identifier
      - `student_name` (text) - Name of the graduate
      - `student_photo` (text) - Photo URL
      - `course_completed` (text) - Course they completed
      - `testimonial_text` (text) - Their success story
      - `current_position` (text) - Where they work now
      - `rating` (integer) - Rating out of 5
      - `is_featured` (boolean) - Display on homepage
      - `is_approved` (boolean) - Approved for public display
      - `created_at` (timestamptz) - Submission date

  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access to approved testimonials only
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  student_photo text,
  course_completed text,
  testimonial_text text NOT NULL,
  current_position text,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured boolean DEFAULT false,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials
  FOR SELECT
  USING (is_approved = true);

CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured) WHERE is_featured = true AND is_approved = true;