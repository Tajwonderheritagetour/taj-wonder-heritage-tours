import Image from "next/image";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata = {
  title:
    "7 Days Golden Triangle Tour with Varanasi | Taj Wonder Heritage Tours",
  description:
    "Explore Delhi, Agra, Jaipur and Varanasi on this 7-day private Golden Triangle Tour with Taj Mahal, Ganga Aarti, luxury transport and expert local guides.",
};

export default function GoldenTriangleVaranasiTour() {
  return (
    <main>

      {/* Hero Section */}

      <section
        style={{
          position: "relative",
          height: "78vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Image
          src="/images/tours/golden-triangle-varanasi.jpg"
          alt="Golden Triangle Tour with Varanasi"
          fill
          priority
          style={{
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,.55)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            padding: "20px",
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
            Private India Tour
          </span>

          <h1
            style={{
              fontSize: "58px",
              marginTop: "18px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            7 Days Golden Triangle Tour with Varanasi
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "36px",
              color: "#eee",
            }}
          >
            Discover Delhi, Agra, Jaipur and the sacred city of Varanasi
            on an unforgettable private journey through India's history,
            culture and spirituality.
          </p>

          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/917830716981"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                padding: "16px 34px",
                borderRadius: "40px",
                fontWeight: 700,
              }}
            >
              WhatsApp Now
            </a>

            <Link
              href="/contact"
              style={{
                background: "#d4af37",
                color: "#08142d",
                textDecoration: "none",
                padding: "16px 34px",
                borderRadius: "40px",
                fontWeight: 700,
              }}
            >
              Book This Tour
            </Link>
          </div>
        </div>
      </section>
            {/* Tour Overview */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "50px",
          }}
        >
          <div>
            <span
              style={{
                color: "#d4af37",
                letterSpacing: "3px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Tour Overview
            </span>

            <h2
              style={{
                fontSize: "42px",
                color: "#08142d",
                marginTop: "20px",
                marginBottom: "25px",
              }}
            >
              Experience India's Heritage & Spiritual Soul
            </h2>

            <p
              style={{
                color: "#555",
                lineHeight: "34px",
                fontSize: "18px",
                marginBottom: "25px",
              }}
            >
              This 7 Days Golden Triangle Tour with Varanasi combines
              India's most famous cultural destinations with its holiest
              spiritual city. Visit the bustling capital Delhi, witness the
              breathtaking Taj Mahal in Agra, explore the royal palaces of
              Jaipur, and conclude your journey in Varanasi, one of the
              world's oldest living cities.
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "34px",
                fontSize: "18px",
              }}
            >
              Enjoy private transportation, experienced local guides,
              comfortable accommodation, and unforgettable experiences
              including the mesmerizing Ganga Aarti ceremony on the banks of
              the River Ganges.
            </p>
          </div>

          {/* Quick Information */}

          <div
            style={{
              background: "#f8f8f8",
              padding: "30px",
              borderRadius: "18px",
              boxShadow: "0 10px 30px rgba(0,0,0,.05)",
            }}
          >
            <h3
              style={{
                color: "#08142d",
                marginBottom: "25px",
              }}
            >
              Tour Information
            </h3>

            <p><strong>Duration:</strong> 7 Days / 6 Nights</p>
            <p><strong>Starting Point:</strong> Delhi</p>
            <p><strong>Ending Point:</strong> Varanasi</p>
            <p><strong>Tour Type:</strong> Private Tour</p>
            <p><strong>Language:</strong> English</p>
            <p><strong>Pickup:</strong> Airport / Hotel</p>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}

      <section
        style={{
          background: "#08142d",
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Tour Highlights
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "25px",
            }}
          >
            {[
              "🏛 Explore Old & New Delhi",
              "🌅 Visit the Taj Mahal",
              "🏰 Discover Agra Fort",
              "🐘 Explore Amber Fort Jaipur",
              "💗 Photo Stop at Hawa Mahal",
              "🛕 Evening Ganga Aarti in Varanasi",
              "🚣 Sunrise Boat Ride on the Ganges",
              "🚘 Private Air-Conditioned Vehicle",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,.08)",
                  padding: "28px",
                  borderRadius: "16px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Detailed Itinerary */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "90px auto",
          padding: "0 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Day by Day Tour
          </span>

          <h2
            style={{
              fontSize: "46px",
              color: "#08142d",
              marginTop: "20px",
            }}
          >
            7-Day Golden Triangle with Varanasi Itinerary
          </h2>
        </div>

        {[
          {
            day: "Day 1",
            title: "Arrival in Delhi",
            text:
              "Meet your private chauffeur at Delhi Airport or your hotel. Begin sightseeing of New Delhi including India Gate, Rashtrapati Bhavan (drive past), Qutub Minar, Humayun's Tomb and Lotus Temple. Overnight stay in Delhi.",
          },
          {
            day: "Day 2",
            title: "Delhi – Agra",
            text:
              "After breakfast drive to Agra via Yamuna Expressway. Visit the magnificent Agra Fort followed by Mehtab Bagh for a beautiful sunset view of the Taj Mahal across the Yamuna River. Overnight stay in Agra.",
          },
          {
            day: "Day 3",
            title: "Taj Mahal Sunrise – Fatehpur Sikri – Jaipur",
            text:
              "Visit the Taj Mahal at sunrise, one of the Seven Wonders of the World. Return to the hotel for breakfast before driving towards Jaipur. En route explore the UNESCO World Heritage Site of Fatehpur Sikri. Continue to Jaipur for overnight stay.",
          },
          {
            day: "Day 4",
            title: "Explore Jaipur",
            text:
              "Visit Amber Fort, enjoy a photo stop at Jal Mahal, admire the iconic Hawa Mahal, explore City Palace and Jantar Mantar before returning to your hotel. Overnight stay in Jaipur.",
          },
          {
            day: "Day 5",
            title: "Jaipur – Delhi – Flight to Varanasi",
            text:
              "Drive back to Delhi and transfer to the airport for your evening flight to Varanasi. Upon arrival meet our representative and transfer to your hotel. Overnight stay in Varanasi.",
          },
          {
            day: "Day 6",
            title: "Varanasi Sightseeing",
            text:
              "Early morning boat ride on the River Ganges to witness sunrise and daily rituals along the ghats. Later visit Kashi Vishwanath Temple, Banaras Hindu University and Sarnath. In the evening experience the unforgettable Ganga Aarti ceremony at Dashashwamedh Ghat. Overnight stay in Varanasi.",
          },
          {
            day: "Day 7",
            title: "Departure",
            text:
              "After breakfast transfer to Varanasi Airport for your onward flight. Your memorable Golden Triangle with Varanasi Tour concludes with wonderful memories of India's heritage and spirituality.",
          },
        ].map((item) => (
          <div
            key={item.day}
            style={{
              marginBottom: "30px",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,.08)",
              padding: "35px",
            }}
          >
            <div
              style={{
                color: "#d4af37",
                fontWeight: 700,
                fontSize: "15px",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              {item.day}
            </div>

            <h3
              style={{
                color: "#08142d",
                fontSize: "30px",
                marginBottom: "18px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>
      {/* Inclusions & Exclusions */}

<section
  style={{
    maxWidth: "1200px",
    margin: "90px auto",
    padding: "0 20px",
  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
    }}
  >
    <div
      style={{
        background: "#f8f8f8",
        padding: "35px",
        borderRadius: "16px",
      }}
    >
      <h2 style={{ color: "#08142d", marginBottom: "25px" }}>
        ✅ Tour Includes
      </h2>

      <ul style={{ lineHeight: "38px", color: "#555" }}>
        <li>Private Air-Conditioned Vehicle</li>
        <li>Professional English Speaking Driver</li>
        <li>Hotel Pickup & Drop-off</li>
        <li>6 Nights Accommodation (if selected)</li>
        <li>Daily Breakfast</li>
        <li>Local Tour Guides</li>
        <li>Monument Sightseeing</li>
        <li>Boat Ride in Varanasi</li>
        <li>Evening Ganga Aarti Experience</li>
        <li>All Parking & Toll Taxes</li>
      </ul>
    </div>

    <div
      style={{
        background: "#fff8f8",
        padding: "35px",
        borderRadius: "16px",
      }}
    >
      <h2 style={{ color: "#08142d", marginBottom: "25px" }}>
        ❌ Tour Excludes
      </h2>

      <ul style={{ lineHeight: "38px", color: "#555" }}>
        <li>Monument Entrance Tickets</li>
        <li>Lunch & Dinner</li>
        <li>Personal Expenses</li>
        <li>Camera Charges</li>
        <li>Flight Tickets</li>
        <li>Travel Insurance</li>
        <li>Tips & Gratuities</li>
        <li>Anything Not Mentioned Above</li>
      </ul>
    </div>
  </div>
</section>
<section
  style={{
    background: "#08142d",
    color: "#fff",
    padding: "80px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <h2
      style={{
        fontSize: "42px",
        marginBottom: "30px",
      }}
    >
      Know Before You Go
    </h2>

    <ul
      style={{
        lineHeight: "40px",
        fontSize: "18px",
      }}
    >
      <li>Carry a valid passport or ID.</li>
      <li>Comfortable walking shoes are recommended.</li>
      <li>Dress modestly while visiting temples.</li>
      <li>The Taj Mahal remains closed every Friday.</li>
      <li>Varanasi Boat Ride depends on weather conditions.</li>
      <li>Respect local customs during Ganga Aarti.</li>
      <li>Summer temperatures may exceed 40°C.</li>
    </ul>
  </div>
</section>
{/* FAQ Section */}

<section
  style={{
    maxWidth: "1200px",
    margin: "90px auto",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      color: "#08142d",
      marginBottom: "40px",
      textAlign: "center",
    }}
  >
    Frequently Asked Questions
  </h2>

  <div
    style={{
      display: "grid",
      gap: "20px",
    }}
  >

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        Is this a private tour?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        Yes. This is a completely private tour with your own vehicle, professional driver and optional local guides.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        Does this tour include hotel accommodation?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        Yes, accommodation can be included depending on the package you select.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        Can I customize this itinerary?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        Absolutely. Every tour offered by Taj Wonder Heritage Tours can be customized according to your travel preferences.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        Are monument entrance tickets included?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        Monument entrance fees are generally not included unless specifically mentioned in your booking confirmation.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        When is the best time to visit Varanasi?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        October to March offers pleasant weather and is considered the best time to experience the Ganga Aarti and explore the city comfortably.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        Is the Taj Mahal open every day?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        No. The Taj Mahal remains closed every Friday.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        Can airport pickup be arranged?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        Yes. Airport pickup and drop-off from Delhi or Varanasi can be arranged upon request.
      </p>
    </details>

    <details style={{background:"#f8f8f8",padding:"20px",borderRadius:"12px"}}>
      <summary style={{fontWeight:"700",cursor:"pointer"}}>
        How do I book this tour?
      </summary>
      <p style={{marginTop:"15px",lineHeight:"30px"}}>
        You can book directly through our website or contact us via WhatsApp for instant assistance and customized itineraries.
      </p>
    </details>

  </div>
</section>

<section
  style={{
    padding: "90px 20px",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "44px",
      color: "#08142d",
      marginBottom: "20px",
    }}
  >
    Ready to Explore India?
  </h2>

  <p
    style={{
      color: "#555",
      fontSize: "20px",
      maxWidth: "700px",
      margin: "0 auto 40px",
      lineHeight: "34px",
    }}
  >
    Let Taj Wonder Heritage Tours create a memorable private journey
    through India's most iconic destinations.
  </p>

  <a
    href="https://wa.me/917830716981"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#25D366",
      color: "#fff",
      padding: "18px 40px",
      borderRadius: "40px",
      textDecoration: "none",
      fontWeight: "700",
      fontSize: "18px",
    }}
  >
    Book on WhatsApp
  </a>
</section>

</main>
);
}