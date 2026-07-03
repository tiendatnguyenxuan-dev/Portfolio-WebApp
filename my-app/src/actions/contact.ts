"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(1),
})

type ContactFormValues = z.infer<typeof contactSchema>

export async function submitContactForm(data: ContactFormValues) {
  try {
    const validatedFields = contactSchema.parse(data)

    if (!process.env.RESEND_API_KEY) {
      return {
        success: false,
        message: "Resend API Key is missing. Please add it to your .env file.",
      }
    }

    await resend.emails.send({
      from: "onboarding@resend.dev", 
      to: "tiendatnguyenxuan1607@gmail.com",
      replyTo: validatedFields.email,
      subject: `[Portfolio Contact] ${validatedFields.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedFields.name}</p>
        <p><strong>Email:</strong> ${validatedFields.email}</p>
        <p><strong>Subject:</strong> ${validatedFields.subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
          ${validatedFields.message.replace(/\n/g, "<br>")}
        </blockquote>
      `,
    })

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}
