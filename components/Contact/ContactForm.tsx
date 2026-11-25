
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { trackGAEvent } from "@/lib/analytics";

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  background: "#fff",
  color: "#08142d",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#08142d",
  fontWeight: 600,
  fontSize: "15px",
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        body: JSON.stringify(form),
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
        form_name: "contact_form",
      });

      setSuccess(
        "Thank you for contacting Taj Wonder Heritage Tours! Your inquiry has been received. We will get back to you soon."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        travelers: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        width: "min(900px, calc(100% - 32px))",
        boxSizing: "border-box",
        margin: "0 auto 80px",
        padding: "clamp(20px, 5vw, 45px)",
        background: "#fff",
        borderRadius: "22px",
        boxShadow: "0 20px 45px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#08142d",
          marginBottom: "12px",
          fontSize: "clamp(28px, 4vw, 38px)",
        }}
      >
        Plan Your India Tour With Us
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          lineHeight: 1.7,
          marginBottom: "30px",
        }}
      >
        Tell us a little about your travel plans. Our team will contact you
        with a personalised tour suggestion and quotation.
      </p>

      {success && (
        <div
          role="status"
          style={{
            background: "#d4edda",
            color: "#155724",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            lineHeight: 1.6,
          }}
        >
          {success}
        </div>
      )}

      {error && (
        <div
          role="alert"
          style={{
            background: "#f8d7da",
            color: "#721c24",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
            lineHeight: 1.6,
          }}
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
          gap: "20px",
        }}
      >
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={100}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={254}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="phone" style={labelStyle}>
            WhatsApp / Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Include country code"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            maxLength={30}
            required
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="destination" style={labelStyle}>
            Where Would You Like to Travel?
          </label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select your destination</option>
            <option value="Taj Mahal and Agra Tour">Taj Mahal & Agra Tour</option>
            <option value="Golden Triangle Tour">Golden Triangle Tour</option>
            <option value="Delhi Tour">Delhi Tour</option>
            <option value="Jaipur Tour">Jaipur Tour</option>
            <option value="Ranthambore Safari">Ranthambore Tiger Safari</option>
            <option value="Custom India Tour">Custom India Tour</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="travelDate" style={labelStyle}>
            Expected Travel Date
          </label>
          <input
            id="travelDate"
            type="date"
            name="travelDate"
            value={form.travelDate}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="travelers" style={labelStyle}>
            Number of Travellers
          </label>
          <select
            id="travelers"
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="">Select travellers</option>
            <option value="1">1 Traveller</option>
            <option value="2">2 Travellers</option>
            <option value="3-4">3–4 Travellers</option>
            <option value="5-8">5–8 Travellers</option>
            <option value="9+">9 or more Travellers</option>
          </select>
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="message" style={labelStyle}>
            Tell Us About Your Travel Plans *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Please share your travel requirements, places you want to visit, hotel preferences, or any questions..."
            value={form.message}
            onChange={handleChange}
            maxLength={3000}
            required
            style={{
              ...inputStyle,
              resize: "vertical",
              lineHeight: 1.6,
            }}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              background: loading ? "#999" : "#d4af37",
              color: "#08142d",
              border: "none",
              padding: "18px",
              borderRadius: "40px",
              fontWeight: 700,
              fontSize: "18px",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "0.3s",
            }}
          >
            {loading ? "Sending Your Inquiry..." : "Send My Tour Inquiry"}
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#777",
              fontSize: "13px",
              marginTop: "14px",
              lineHeight: 1.6,
            }}
          >
            Your details will only be used to respond to your travel inquiry.
          </p>
        </div>
      </form>
    </section>
  );
}
