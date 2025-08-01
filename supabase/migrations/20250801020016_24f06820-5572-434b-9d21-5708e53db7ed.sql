-- Drop existing conflicting policies
DROP POLICY IF EXISTS "Allow anonymous lead submissions" ON public.leads;
DROP POLICY IF EXISTS "Allow authenticated lead submissions" ON public.leads;
DROP POLICY IF EXISTS "Anyone can submit leads" ON public.leads;
DROP POLICY IF EXISTS "No public read access to leads" ON public.leads;

-- Create a single comprehensive policy for inserting leads
CREATE POLICY "Enable insert for all users" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create a policy for selecting leads (for admin access only)
CREATE POLICY "Enable read for service role only" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'service_role');