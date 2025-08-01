-- Create policy to allow anonymous users to insert leads
CREATE POLICY "Allow anonymous lead submissions" 
ON public.leads 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Also allow authenticated users to insert leads
CREATE POLICY "Allow authenticated lead submissions" 
ON public.leads 
FOR INSERT 
TO authenticated 
WITH CHECK (true);