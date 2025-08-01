import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadNotificationRequest {
  record: {
    id: string;
    name: string;
    firm_name: string;
    email: string;
    ad_spend: string;
    message: string;
    form_source: string;
    created_at: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record }: LeadNotificationRequest = await req.json();
    
    console.log("Processing new lead notification:", record);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2d5016; border-bottom: 2px solid #2d5016; padding-bottom: 10px;">
          🎯 New Lead Submission - LawAdPro
        </h1>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #2d5016; margin-top: 0;">Lead Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px;">${record.name}</td>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Firm Name:</td>
              <td style="padding: 8px;">${record.firm_name || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${record.email}" style="color: #2d5016;">${record.email}</a></td>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Ad Spend:</td>
              <td style="padding: 8px;">${record.ad_spend || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Form Source:</td>
              <td style="padding: 8px; text-transform: capitalize;">${record.form_source}</td>
            </tr>
            <tr style="background-color: #fff;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Submitted:</td>
              <td style="padding: 8px;">${new Date(record.created_at).toLocaleString()}</td>
            </tr>
          </table>
        </div>

        ${record.message ? `
        <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2d5016; margin: 20px 0;">
          <h3 style="color: #2d5016; margin-top: 0;">Message:</h3>
          <p style="margin: 0; line-height: 1.6;">${record.message}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #2d5016; color: white; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            📧 Reply directly to <strong>${record.email}</strong> to follow up with this lead
          </p>
        </div>

        <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
          <p>This notification was sent automatically by LawAdPro Lead Management System</p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "LawAdPro Leads <onboarding@resend.dev>",
      to: ["hello@lawadpro.com"], // Change this to your actual email
      subject: `🎯 New Lead: ${record.name}${record.firm_name ? ` from ${record.firm_name}` : ''}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailId: emailResponse.data?.id 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-lead-notification function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);