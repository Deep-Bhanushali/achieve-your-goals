-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$;

-- Trigger to create profile on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);