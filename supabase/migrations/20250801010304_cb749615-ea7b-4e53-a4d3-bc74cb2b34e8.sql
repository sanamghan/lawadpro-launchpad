-- Create leads table to store form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  firm_name TEXT,
  email TEXT NOT NULL,
  ad_spend TEXT,
  message TEXT,
  form_source TEXT NOT NULL, -- 'header' or 'footer' to track which form
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (for public form submissions)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent unauthorized reading (only admin can view)
-- For now, no one can read leads via the API - you'll access them via Supabase dashboard
CREATE POLICY "No public read access to leads" 
ON public.leads 
FOR SELECT 
USING (false);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();