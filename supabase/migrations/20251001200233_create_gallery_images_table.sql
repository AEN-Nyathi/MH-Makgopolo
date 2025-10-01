/*
  # Create gallery images table for training photos

  1. New Tables
    - `gallery_images`
      - `id` (uuid, primary key) - Unique identifier
      - `title` (text) - Image title/caption
      - `image_url` (text) - Image URL
      - `category` (text) - Category (training, graduates, facilities)
      - `description` (text) - Image description
      - `order_index` (integer) - Display order
      - `is_active` (boolean) - Display status
      - `created_at` (timestamptz) - Upload date

  2. Security
    - Enable RLS on `gallery_images` table
    - Add policy for public read access to active images
*/

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  category text DEFAULT 'training' CHECK (category IN ('training', 'graduates', 'facilities', 'events')),
  description text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active gallery images"
  ON gallery_images
  FOR SELECT
  USING (is_active = true);

CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON gallery_images(category) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_gallery_images_order ON gallery_images(order_index);