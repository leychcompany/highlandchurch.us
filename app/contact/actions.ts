"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot field — bots fill this, humans don't see it.
  const honeypot = String(formData.get("company") ?? "").trim();

  if (honeypot) {
    return { status: "success", message: "Thanks! We'll be in touch soon." };
  }

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill out your name, email, and message.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message:
        "Email is not configured yet. Please email us directly at " +
        siteConfig.email +
        ".",
    };
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Highland Church <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please try again or email us directly.",
      };
    }

    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again or email us directly.",
    };
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
