-- Enable the pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Drop the existing trigger and function
DROP TRIGGER IF EXISTS trigger_notify_new_lead ON public.leads;
DROP FUNCTION IF EXISTS public.notify_new_lead();

-- Create a simpler approach using a webhook-style notification
-- For now, we'll disable the automatic email trigger and you can set up a webhook manually
-- This ensures the form submissions work without errors

-- You can manually call the edge function or set up a webhook in Supabase dashboard