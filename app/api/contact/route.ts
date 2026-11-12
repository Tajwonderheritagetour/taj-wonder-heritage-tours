
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const destination = String(body.destination || "").trim();
    const travelDate = String(body.travelDate || "").trim();
    const travelers = String(body.travelers || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      phone.length > 30 ||
      destination.length > 150 ||
      travelDate.length > 30 ||
      travelers.length > 30 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Some information is too long. Please check your entries.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeDestination = escapeHtml(destination || "Not specified");
    const safeTravelDate = escapeHtml(travelDate || "Flexible");
    const safeTravelers = escapeHtml(travelers || "Not specified");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const safeSubjectName = name.replace(/[\r\n]/g, " ");

    const { error } = await resend.emails.send({
      from: "Taj Wonder Heritage Tours <info@tajwonderheritagetours.com>",
      to: ["info@tajwonderheritagetours.com"],
      replyTo: email,
      subject: `New Travel Inquiry from ${safeSubjectName}`,
      html: `
        <h2>New Travel Inquiry</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone / WhatsApp:</strong> ${safePhone}</p>
        <p><strong>Destination / Tour:</strong> ${safeDestination}</p>
        <p><strong>Travel Date:</strong> ${safeTravelDate}</p>
        <p><strong>Number of Travellers:</strong> ${safeTravelers}</p>

        <hr/>

        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We could not send your inquiry. Please try again later.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully!",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
