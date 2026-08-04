import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await resend.emails.send({
      from: "Taj Wonder Heritage Tours <onboarding@resend.dev>",
      to: ["info@tajwonderheritagetours.com"],
      replyTo: email,
      subject: `New Travel Inquiry from ${name}`,
      html: `
        <h2>New Travel Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <hr/>

        <p><strong>Message:</strong></p>

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });
if (error) {
  console.error("RESEND ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      message: JSON.stringify(error),
    },
    {
      status: 500,
    }
  );
}

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully!",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}