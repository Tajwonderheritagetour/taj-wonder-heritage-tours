export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this a private tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This is a completely private tour with your own vehicle, professional driver and optional local guides."
        }
      },
      {
        "@type": "Question",
        "name": "Does this tour include hotel accommodation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Accommodation can be included depending on the package selected."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize this itinerary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Taj Wonder Heritage Tours offers fully customizable private tours."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Taj Mahal open every day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Taj Mahal is closed every Friday."
        }
      },
      {
        "@type": "Question",
        "name": "Can airport pickup be arranged?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Airport pickup and drop-off are available from Delhi and Varanasi."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}