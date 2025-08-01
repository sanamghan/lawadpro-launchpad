-- Temporarily disable RLS on leads table
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for all users" ON public.leads;
DROP POLICY IF EXISTS "Enable read for service role only" ON public.leads;

-- Create a simple policy that allows public inserts
CREATE POLICY "public_insert_leads" ON public.leads
  FOR INSERT TO public
  WITH CHECK (true);

-- Create a policy that allows service role to read
CREATE POLICY "service_role_select_leads" ON public.leads
  FOR SELECT TO service_role
  USING (true);