import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("POST /api/contact received body:", body);

    const { name, email, subject, message } = body;
    const sendPayload = {
      from: "CodeBlush <onboarding@resend.dev>",
      to: "anshikanegi.cs19@gmail.com",
      subject: subject || "New contact message from CodeBlush",
      replyTo: email,
      html: `
            <h2>🌸 New CodeBlush Contact</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <hr />

            <p>${message}</p>
        `,
    };

    console.log("Resend send payload:", {
      from: sendPayload.from,
      to: sendPayload.to,
      subject: sendPayload.subject,
      replyTo: sendPayload.replyTo,
    });

    const result = await resend.emails.send(sendPayload);

    console.log("Resend result:", result);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}
