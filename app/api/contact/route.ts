import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = contactFormSchema.parse(body);

        // TODO: Implement email sending logic here
        // Example using Resend, SendGrid, or Nodemailer:
        // 
        // await resend.emails.send({
        //   from: 'noreply@yourwebsite.com',
        //   to: 'author@example.com',
        //   subject: `Contact Form: ${validatedData.subject}`,
        //   html: `
        //     <h2>New Contact Form Submission</h2>
        //     <p><strong>Name:</strong> ${validatedData.name}</p>
        //     <p><strong>Email:</strong> ${validatedData.email}</p>
        //     <p><strong>Subject:</strong> ${validatedData.subject}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${validatedData.message}</p>
        //   `,
        // });

        // For now, just log the data (remove this in production)
        console.log("Contact form submission:", validatedData);

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
