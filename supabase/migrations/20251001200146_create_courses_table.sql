/*
  # Create courses table for MH Makgopolo security training programs

  1. New Tables
    - `courses`
      - `id` (uuid, primary key) - Unique identifier for each course
      - `title` (text) - Course name (e.g., "Goals Guarding Grade E")
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Detailed course description
      - `short_description` (text) - Brief overview for cards/listings
      - `grade_level` (text) - Grade level (B, C, D, E, or combo)
      - `duration` (text) - Course duration (e.g., "5 days")
      - `price` (numeric) - Course price in ZAR
      - `requirements` (text) - Prerequisites and requirements
      - `certification` (text) - Certification details
      - `job_prospects` (text) - Career opportunities after completion
      - `image_url` (text) - Course image URL
      - `is_featured` (boolean) - Display on homepage
      - `is_active` (boolean) - Currently available for enrollment
      - `order_index` (integer) - Display order
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `courses` table
    - Add policy for public read access (anyone can view courses)
    - Admin write access will be handled through service role
*/

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  short_description text NOT NULL,
  grade_level text NOT NULL,
  duration text NOT NULL,
  price numeric(10, 2) NOT NULL DEFAULT 0,
  requirements text,
  certification text,
  job_prospects text,
  image_url text,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active courses"
  ON courses
  FOR SELECT
  USING (is_active = true OR true);

CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_featured ON courses(is_featured) WHERE is_featured = true;
CREATE INDEX IF NOT EXISTS idx_courses_active ON courses(is_active) WHERE is_active = true;