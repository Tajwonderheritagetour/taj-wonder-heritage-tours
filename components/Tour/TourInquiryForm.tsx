
"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

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

      setSuccess(
        "Thank you! Your tour inquiry has been sent successfully. Our team will contact you soon."
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

  return (
    <section className="container mx-auto px-4 py-16" id="tour-inquiry">

      <div className="mx-auto max-w-3xl rounded-3xl border bg-white p-6 shadow-xl sm:p-8">

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Plan Your Private Tour
        </h2>

        <p className="mb-8 mt-2 text-center text-gray-600">
          Interested in {tourTitle}? Tell us your travel plans and receive
          a personalized quotation.
        </p>

        {success && (
          <div
            role="status"
            className="mb-6 rounded-xl bg-green-50 p-4 text-sm leading-6 text-green-800"
          >
            {success}
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-800"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label htmlFor="tour-name" className="mb-2 block font-medium text-gray-800">
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
              className="w-full rounded-xl border p-4 text-gray-900 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="tour-email" className="mb-2 block font-medium text-gray-800">
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
              className="w-full rounded-xl border p-4 text-gray-900 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="tour-phone" className="mb-2 block font-medium text-gray-800">
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
              className="w-full rounded-xl border p-4 text-gray-900 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="tour-date" className="mb-2 block font-medium text-gray-800">
              Expected Travel Date
            </label>
            <input
              id="tour-date"
              type="date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 text-gray-900 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label htmlFor="tour-travelers" className="mb-2 block font-medium text-gray-800">
              Number of Travellers
            </label>
            <select
              id="tour-travelers"
              name="travelers"
              value={form.travelers}
              onChange={handleChange}
              className="w-full rounded-xl border bg-white p-4 text-gray-900 outline-none focus:border-orange-500"
            >
              <option value="1">1 Traveller</option>
              <option value="2">2 Travellers</option>
              <option value="3">3 Travellers</option>
              <option value="4">4 Travellers</option>
              <option value="5">5 Travellers</option>
              <option value="6+">6 or more Travellers</option>
            </select>
          </div>

          <div>
            <label htmlFor="tour-message" className="mb-2 block font-medium text-gray-800">
              Your Travel Requirements *
            </label>
            <textarea
              id="tour-message"
              name="message"
              rows={5}
              placeholder="Tell us about your travel plans, hotel preferences, pickup location or questions..."
              required
              maxLength={3000}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 text-gray-900 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-orange-600 py-4 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading ? "Sending Your Inquiry..." : "Get My Free Tour Quote"}
          </button>

          <p className="text-center text-xs leading-5 text-gray-500">
            Our team will use your details to respond to your travel inquiry.
          </p>

        </form>
      </div>
    </section>
  );
}
