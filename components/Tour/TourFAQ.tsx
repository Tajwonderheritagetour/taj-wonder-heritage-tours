"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface TourFAQProps {
  faqs: FAQItem[];
}

export default function TourFAQ({
  faqs,
}: TourFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Need Help?
          </span>

          <h2
            style={{
              fontSize: "48px",
              color: "#08142d",
              marginTop: "18px",
              marginBottom: "20px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div
            style={{
              width: "90px",
              height: "5px",
              background: "#d4af37",
              margin: "0 auto",
              borderRadius: "50px",
            }}
          />
        </div>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "20px",
                marginBottom: "20px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,.08)",
              }}
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                style={{
                  width: "100%",
                  background: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "28px 30px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#08142d",
                  textAlign: "left",
                }}
              >
                <span>{faq.question}</span>

                <span
                  style={{
                    color: "#d4af37",
                    fontSize: "28px",
                    fontWeight: "bold",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: "0 30px 30px",
                  }}
                >
                  <p
                    style={{
                      color: "#555",
                      lineHeight: "32px",
                      fontSize: "17px",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}