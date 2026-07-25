"use client";

import { useState } from "react";

const inputStyle = {
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box" as const,
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
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

      if (data.success) {
        setSuccess("✅ Your inquiry has been sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      style={{
        maxWidth: "900px",
        margin: "0 auto 80px",
        padding: "45px",
        background: "#fff",
        borderRadius: "22px",
        boxShadow: "0 20px 45px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#08142d",
          marginBottom: "35px",
          fontSize: "38px",
        }}
      >
        Send Us Your Travel Inquiry
      </h2>

      {success && (
        <div
          style={{
            background: "#d4edda",
            color: "#155724",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          {success}
        </div>
      )}

      {error && (
        <div
          style={{
            background: "#f8d7da",
            color: "#721c24",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
                <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about your travel plans..."
          value={form.message}
          onChange={handleChange}
          required
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
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
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </section>
  );
}