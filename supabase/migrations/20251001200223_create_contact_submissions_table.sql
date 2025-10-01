/*
  # Create contact submissions table for lead generation

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier
      - `full_name` (text) - Contact's full name
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `course_interest` (text) - Which course they're interested in
      - `message` (text) - Additional message/inquiry
      - `source` (text) - Where they found us
      - `status` (text) - Follow-up status (new, contacted, enrolled, closed)
      - `notes` (text) - Admin notes
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - No public read access (admin only through service role)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  course_interest text,
  message text NOT NULL,
  source text DEFAULT 'Website Contact Form',
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'enrolled', 'closed')),
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);