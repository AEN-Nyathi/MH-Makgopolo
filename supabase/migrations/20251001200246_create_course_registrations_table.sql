/*
  # Create course registrations table for enrollment tracking

  1. New Tables
    - `course_registrations`
      - `id` (uuid, primary key) - Unique identifier
      - `course_id` (uuid, foreign key) - Reference to courses table
      - `full_name` (text) - Student's full name
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `id_number` (text) - South African ID number
      - `address` (text) - Physical address
      - `emergency_contact_name` (text) - Emergency contact person
      - `emergency_contact_phone` (text) - Emergency contact number
      - `payment_status` (text) - Payment status
      - `registration_status` (text) - Registration status
      - `preferred_start_date` (date) - When they want to start
      - `notes` (text) - Additional notes
      - `created_at` (timestamptz) - Registration timestamp
      - `updated_at` (timestamptz) - Last update

  2. Security
    - Enable RLS on `course_registrations` table
    - No public read access (admin only through service role)
*/

CREATE TABLE IF NOT EXISTS course_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  id_number text NOT NULL,
  address text NOT NULL,
  emergency_contact_name text NOT NULL,
  emergency_contact_phone text NOT NULL,
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'paid', 'refunded')),
  registration_status text DEFAULT 'new' CHECK (registration_status IN ('new', 'approved', 'in_progress', 'completed', 'cancelled')),
  preferred_start_date date,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE course_registrations ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS idx_registrations_course ON course_registrations(course_id);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON course_registrations(registration_status);
CREATE INDEX IF NOT EXISTS idx_registrations_payment ON course_registrations(payment_status);
CREATE INDEX IF NOT EXISTS idx_registrations_created ON course_registrations(created_at DESC);