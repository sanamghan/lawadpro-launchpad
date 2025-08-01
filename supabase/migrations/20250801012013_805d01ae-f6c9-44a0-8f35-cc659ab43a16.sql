-- Temporarily disable the email trigger so form submissions work
DROP TRIGGER IF EXISTS trigger_notify_new_lead ON public.leads;