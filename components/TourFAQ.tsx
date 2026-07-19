type TourFAQProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function TourFAQ({ faqs }: TourFAQProps) {
  return (
    <section
      style={{
        marginBottom: "70px",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          color: "#08142d",
          marginBottom: "30px",
        }}
      >
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            background: "#f8f8f8",
            padding: "25px",
            borderRadius: "16px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ color: "#08142d" }}>
            {faq.question}
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "30px",
            }}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  );
}