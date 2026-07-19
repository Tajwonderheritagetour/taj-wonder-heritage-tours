"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the Taj Mahal closed on Friday?",
    answer:
      "Yes. The Taj Mahal is closed every Friday. It remains open from Saturday to Thursday.",
  },
  {
    question: "Do you provide hotel and airport pickup?",
    answer:
      "Yes. We provide complimentary pickup and drop-off from hotels, airports and railway stations according to your selected tour.",
  },
  {
    question: "Can I customize my tour itinerary?",
    answer:
      "Absolutely. All of our tours can be customized based on your travel dates, destinations, hotel category and interests.",
  },
  {
    question: "Which vehicles do you provide?",
    answer:
      "We offer Maruti Dzire, Toyota Innova, Kia Carens, Toyota Taisor, Force Urbania and Tempo Traveller depending on your group size.",
  },
  {
    question: "Are your tours private?",
    answer:
      "Yes. We specialize in private tours with experienced chauffeurs and licensed local guides for a comfortable travel experience.",
  },
  {
    question: "How can I book a tour?",
    answer:
      "You can contact us through WhatsApp, phone or the contact form on our website. We usually respond within a few minutes.",
  },
  {
    question: "Do you provide professional tour guides?",
    answer:
      "Yes. Professional English-speaking guides are available, and guides in other languages can also be arranged upon request.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfer and online payments. Payment details are shared after booking confirmation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#f8f9fb",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#d4af37",
            fontWeight: "bold",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "44px",
            marginBottom: "20px",
            color: "#08142d",
          }}
        >
          Have Questions?
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "50px",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Here are answers to some of the most common questions about our
          private tours and travel services.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "14px",
              marginBottom: "18px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              style={{
                width: "100%",
                padding: "22px 25px",
                background: "white",
                textAlign: "left",
                fontSize: "19px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "none",
              }}
            >
              {faq.question}

              <span
                style={{
                  fontSize: "28px",
                  color: "#d4af37",
                }}
              >
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <div
                style={{
                  padding: "0 25px 22px",
                  color: "#555",
                  lineHeight: "30px",
                  fontSize: "17px",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}