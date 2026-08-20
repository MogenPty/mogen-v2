import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  sendCopy?: boolean;
}

interface NewsletterFormData {
  email: string;
}

function buildContactEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">From MOGEN Website</p>
      </div>

      <div style="background: #f9fafb; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 120px;">Name</td>
            <td style="padding: 8px 0;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #7c3aed;">${data.email}</a></td>
          </tr>
          ${
            data.phone
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone</td>
            <td style="padding: 8px 0;">${data.phone}</td>
          </tr>`
              : ""
          }
          ${
            data.service
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Service</td>
            <td style="padding: 8px 0;">${data.service}</td>
          </tr>`
              : ""
          }
          ${
            data.budget
              ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Budget</td>
            <td style="padding: 8px 0;">${data.budget}</td>
          </tr>`
              : ""
          }
        </table>

        <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
          <p style="font-weight: bold; color: #6b7280; margin: 0 0 8px 0;">Project Details</p>
          <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>

      <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
        Sent from mogen.co.za contact form
      </p>
    </body>
    </html>
  `;
}

function buildContactEmailText(data: ContactFormData): string {
  return `
NEW CONTACT FORM SUBMISSION
===========================

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.service ? `Service: ${data.service}` : ""}
${data.budget ? `Budget: ${data.budget}` : ""}

Project Details:
${data.message}

---
Sent from mogen.co.za contact form
  `.trim();
}

function buildCopyEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #7c3aed, #ec4899); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for reaching out!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">Here's a copy of your message</p>
      </div>

      <div style="background: #f9fafb; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 16px 0;">Hi ${data.name},</p>
        <p style="margin: 0 0 16px 0;">Thank you for contacting MOGEN. We've received your message and will get back to you within 24 hours.</p>

        <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; margin: 16px 0;">
          <p style="font-weight: bold; color: #6b7280; margin: 0 0 8px 0;">Your Message</p>
          ${data.service ? `<p style="margin: 0 0 4px 0;"><strong>Service:</strong> ${data.service}</p>` : ""}
          ${data.budget ? `<p style="margin: 0 0 4px 0;"><strong>Budget:</strong> ${data.budget}</p>` : ""}
          <p style="margin: 8px 0 0 0; white-space: pre-wrap;">${data.message}</p>
        </div>

        <p style="margin: 16px 0 0 0;">Best regards,<br><strong>The MOGEN Team</strong></p>
      </div>
    </body>
    </html>
  `;
}

function buildCopyEmailText(data: ContactFormData): string {
  return `
Thanks for reaching out!
=======================

Hi ${data.name},

Thank you for contacting MOGEN. We've received your message and will get back to you within 24 hours.

Your Message:
${data.service ? `Service: ${data.service}` : ""}
${data.budget ? `Budget: ${data.budget}` : ""}
${data.message}

Best regards,
The MOGEN Team
  `.trim();
}

function buildNewsletterEmailHtml(): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #2563eb, #ec4899); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to MOGEN!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0;">You're now subscribed to our newsletter</p>
      </div>

      <div style="background: #f9fafb; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
        <p style="margin: 0 0 16px 0;">Hey there! 👋</p>
        <p style="margin: 0 0 16px 0;">Thanks for subscribing to the MOGEN newsletter. You'll receive occasional updates with:</p>
        <ul style="margin: 0 0 16px 0; padding-left: 20px;">
          <li>Digital marketing tips for local businesses</li>
          <li>Web development best practices</li>
          <li>Brand identity insights</li>
          <li>Exclusive offers and case studies</li>
        </ul>
        <p style="margin: 0;">Stay tuned!<br><strong>The MOGEN Team</strong></p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type } = body;

    if (type === "contact") {
      const { name, email, phone, service, budget, message, sendCopy } =
        body as ContactFormData;

      if (!name || !email || !message) {
        return NextResponse.json(
          { error: "Name, email, and message are required" },
          { status: 400 },
        );
      }

      const serviceLabels: Record<string, string> = {
        website: "Website Development",
        branding: "Brand Identity",
        marketing: "Digital Marketing",
        all: "All of the Above",
      };

      const budgetLabels: Record<string, string> = {
        "5000-10000": "R5,000 - R10,000",
        "10000-20000": "R10,000 - R20,000",
        "20000-50000": "R20,000 - R50,000",
        "50000+": "R50,000+",
      };

      const formData: ContactFormData = {
        name,
        email,
        phone,
        service: service ? serviceLabels[service] || service : undefined,
        budget: budget ? budgetLabels[budget] || budget : undefined,
        message,
      };

      // Send email to MOGEN
      await resend.emails.send({
        from: `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
        to: "info@mogen.co.za",
        replyTo: email,
        subject: `New Inquiry from ${name} - ${formData.service || "General"}`,
        html: buildContactEmailHtml(formData),
        text: buildContactEmailText(formData),
      });

      // Send copy to user if requested
      if (sendCopy) {
        await resend.emails.send({
          from: `MOGEN <${process.env.RESEND_FROM_EMAIL}>`,
          to: email,
          subject: `Thanks for reaching out, ${name}!`,
          html: buildCopyEmailHtml(formData),
          text: buildCopyEmailText(formData),
        });
      }

      return NextResponse.json({ success: true });
    }

    if (type === "newsletter") {
      const { email } = body as NewsletterFormData;

      if (!email) {
        return NextResponse.json(
          { error: "Email is required" },
          { status: 400 },
        );
      }

      await resend.emails.send({
        from: `MOGEN <${process.env.RESEND_FROM_EMAIL}>`,
        to: email,
        subject: "Welcome to the MOGEN Newsletter!",
        html: buildNewsletterEmailHtml(),
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
