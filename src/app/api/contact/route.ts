import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields missing" },
        { status: 400 }
      );
    }

    const name = `${firstName} ${lastName}`.trim();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // If no real credentials, use Ethereal (handled by nodemailer automatically if test account created, 
    // but here we assume env vars or fallback to a dummy setup for this task)
    
    const mailOptionsAdmin = {
      from: process.env.FROM_EMAIL || '"Website Contact" <no-reply@localhost>',
      to: process.env.ADMIN_EMAIL || "admin@example.com",
      subject: `[Website Contact] New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    const mailOptionsUser = {
      from: process.env.FROM_EMAIL || '"Vidhi Enterprises" <no-reply@localhost>',
      to: email,
      subject: `Thank you for contacting Vidhi Enterprises!`,
      html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for reaching out! We have received your message and will get back to you soon.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote style="border-left: 4px solid #1c9e1c; padding-left: 15px; font-style: italic;">
          ${message.replace(/\n/g, "<br>")}
        </blockquote>
        <p>Best regards,<br><strong>Vidhi Enterprises Team</strong></p>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
