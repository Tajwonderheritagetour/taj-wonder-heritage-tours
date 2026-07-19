"use client";

import { useState } from "react";

export default function TourInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "2",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Inquiry form submitted! (We'll connect this to your email next.)");
  }

  return (
    <section className="container mx-auto px-4 py-16">

      <div className="max-w-3xl mx-auto rounded-3xl bg-white shadow-xl border p-8">

        <h2 className="text-3xl font-bold text-center">
          Plan Your Private Tour
        </h2>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Tell us your travel plans and receive a personalized quote.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <select
            name="travelers"
            value={form.travelers}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6+</option>
          </select>

          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your travel plans..."
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl py-4 transition"
          >
            Get Free Quote
          </button>

        </form>

      </div>

    </section>
  );
}