/*
  # Create blog posts table for news and insights

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Post title
      - `slug` (text, unique) - URL-friendly identifier
      - `excerpt` (text) - Brief summary
      - `content` (text) - Full post content
      - `featured_image` (text) - Header image URL
      - `category` (text) - Post category
      - `author` (text) - Author name
      - `meta_description` (text) - SEO description
      - `is_published` (boolean) - Published status
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Creation date
      - `updated_at` (timestamptz) - Last update

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts only
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  category text DEFAULT 'General',
  author text DEFAULT 'MH Makgopolo',
  meta_description text,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published_at DESC) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category) WHERE is_published = true;