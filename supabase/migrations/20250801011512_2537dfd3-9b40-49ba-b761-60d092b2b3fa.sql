-- Create function to call edge function for email notifications
CREATE OR REPLACE FUNCTION public.notify_new_lead()
RETURNS trigger AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Call the edge function to send email notification
  SELECT net.http_post(
    url := 'https://lhjajxoghmlkqdsvhojc.supabase.co/functions/v1/send-lead-notification',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'record', json_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'firm_name', NEW.firm_name,
        'email', NEW.email,
        'ad_spend', NEW.ad_spend,
        'message', NEW.message,
        'form_source', NEW.form_source,
        'created_at', NEW.created_at
      )
    )::jsonb
  ) INTO request_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to fire on new lead inserts
CREATE TRIGGER trigger_notify_new_lead
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_lead();