-- Drop the existing policy and create one specifically for anon role
DROP POLICY IF EXISTS "public_insert_leads" ON public.leads;

-- Create policy specifically for anon role
CREATE POLICY "anon_insert_leads" ON public.leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Also create one for authenticated users just in case
CREATE POLICY "authenticated_insert_leads" ON public.leads
  FOR INSERT TO authenticated
  WITH CHECK (true);