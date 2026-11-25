
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { trackGAEvent } from "@/lib/analytics";

interface TourInquiryFormProps {
  tourTitle?: string;
}

export default function TourInquiryForm({
  tourTitle = "Private India Tour",
}: TourInquiryFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "2",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          destination: tourTitle,
          travelDate: form.travelDate,
          travelers: form.travelers,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(
          data.message || "Unable to send your inquiry. Please try again."
        );
        return;
      }

      // Track a lead only after successful inquiry submission.
      trackGAEvent("generate_lead", {
        form_name: "tour_inquiry_form",
      });

      setSuccess(
        "Thank you! Your inquiry has been sent successfully. Our team will contact you soon."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        travelDate: "",
        travelers: "2",
        message: "",
      });
    } catch (err) {
      console.error("Tour inquiry error:", err);
      setError(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  }

  const fieldStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #dce1e9",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    color: "#08142d",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "#08142d",
    fontSize: "14px",
    fontWeight: 600,
  };

  return (
    <section
      id="tour-inquiry"
      style={{
        width: "100%",
        padding: "70px 16px",
        backgroundColor: "#f5f6f9",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "36px 24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e8eaf0",
          borderTop: "5px solid #d4af37",
          borderRadius: "22px",
          boxShadow: "0 15px 45px rgba(8, 20, 45, 0.09)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p
            style={{
              color: "#b58b18",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: "12px",
            }}
          >
            PLAN YOUR INDIA JOURNEY
          </p>

          <h2
            style={{
              color: "#08142d",
              fontSize: "clamp(27px, 4vw, 36px)",
              fontWeight: 800,
              lineHeight: 1.25,
              margin: "0 0 14px",
            }}
          >
            Get Your Free Tour Quote
          </h2>

          <p
            style={{
              color: "#647084",
              fontSize: "15px",
              lineHeight: 1.8,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Interested in {tourTitle}? Share your travel plans with us.
            We will help you plan a private journey with a personalized quotation.
          </p>
        </div>

        {success && (
          <div
            role="status"
            aria-live="polite"
            style={{
              padding: "16px",
              marginBottom: "24px",
              borderRadius: "12px",
              backgroundColor: "#ecfdf3",
              color: "#166534",
              border: "1px solid #bbf7d0",
              lineHeight: 1.6,
            }}
          >
            {success}
          </div>
        )}

        {error && (
          <div
            role="alert"
            aria-live="assertive"
            style={{
              padding: "16px",
              marginBottom: "24px",
              borderRadius: "12px",
              backgroundColor: "#fef2f2",
              color: "#b91c1c",
              border: "1px solid #fecaca",
              lineHeight: 1.6,
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label htmlFor="tour-name" style={labelStyle}>
                Full Name *
              </label>
              <input
                id="tour-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                maxLength={100}
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                style={fieldStyle}
              />
            </div>

            <div>
              <label htmlFor="tour-email" style={labelStyle}>
                Email Address *
              </label>
              <input
                id="tour-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                maxLength={254}
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                style={fieldStyle}
              />
            </div>

            <div>
              <label htmlFor="tour-phone" style={labelStyle}>
                WhatsApp / Phone Number *
              </label>
              <input
                id="tour-phone"
                type="tel"
                name="phone"
                placeholder="Include your country code"
                required
                maxLength={30}
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                style={fieldStyle}
              />
            </div>

            <div>
              <label htmlFor="tour-date" style={labelStyle}>
                Expected Travel Date
              </label>
              <input
                id="tour-date"
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={handleChange}
                style={fieldStyle}
              />
            </div>

            <div>
              <label htmlFor="tour-travelers" style={labelStyle}>
                Number of Travellers
              </label>
              <select
                id="tour-travelers"
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                style={fieldStyle}
              >
                <option value="1">1 Traveller</option>
                <option value="2">2 Travellers</option>
                <option value="3">3 Travellers</option>
                <option value="4">4 Travellers</option>
                <option value="5">5 Travellers</option>
                <option value="6+">6 or more Travellers</option>
              </select>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="tour-message" style={labelStyle}>
                Tell Us About Your Travel Plans *
              </label>
              <textarea
                id="tour-message"
                name="message"
                rows={5}
                placeholder="Tell us your travel plans, hotel preferences, pickup location or any special requirements..."
                required
                maxLength={3000}
                value={form.message}
                onChange={handleChange}
                style={{
                  ...fieldStyle,
                  resize: "vertical",
                  minHeight: "130px",
                  fontFamily: "inherit",
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "17px 20px",
              border: "none",
              borderRadius: "12px",
              backgroundColor: loading ? "#aab0bc" : "#d4af37",
              color: "#08142d",
              fontSize: "16px",
              fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.2s ease",
            }}
          >
            {loading ? "Sending Your Inquiry..." : "Get My Free Tour Quote →"}
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#788397",
              fontSize: "12px",
              lineHeight: 1.7,
              marginTop: "15px",
            }}
          >
            No obligation to book. Share your plans and receive a personalized response.
          </p>
        </form>

        <div
          style={{
            marginTop: "25px",
            paddingTop: "22px",
            borderTop: "1px solid #e8eaf0",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#647084", fontSize: "14px", marginBottom: "12px" }}>
            Prefer to chat directly?
          </p>

          <a
            href={`https://wa.me/917830716981?text=${encodeURIComponent(
              `Hello Taj Wonder Heritage Tours, I am interested in ${tourTitle}. Please share details and a quotation.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 22px",
              borderRadius: "30px",
              backgroundColor: "#eaf8ef",
              color: "#168344",
              border: "1px solid #c5ead1",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
