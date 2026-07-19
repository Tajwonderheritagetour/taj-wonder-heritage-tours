"use client";

import { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "80px auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          background: "#08142d",
          borderRadius: "20px",
          padding: "50px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            color: "#d4af37",
            marginBottom: "15px",
          }}
        >
          Request a Free Quote
        </h2>

        <p
          style={{
            marginBottom: "35px",
            color: "#dddddd",
          }}
        >
          Tell us about your trip and we'll send you a personalized quotation.
        </p>

        {submitted ? (
          <div
            style={{
              background: "#1e7e34",
              padding: "20px",
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            ✅ Thank you! Your enquiry has been received. We will contact you shortly.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="WhatsApp Number"
              required
              style={inputStyle}
            />

            <input
              type="date"
              required
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Number of Travelers"
              required
              min="1"
              style={inputStyle}
            />

            <textarea
              placeholder="Tell us about your tour..."
              rows={5}
              style={{
                ...inputStyle,
                gridColumn: "1 / -1",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              style={{
                gridColumn: "1 / -1",
                background: "#d4af37",
                color: "#08142d",
                padding: "18px",
                borderRadius: "999px",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Request Free Quote
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  borderRadius: "10px",
  border: "none",
  fontSize: "16px",
};