import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title:
    "India Destinations | Agra, Delhi, Jaipur & More | Taj Wonder Heritage Tours",
  description:
    "Explore India's most iconic destinations with Taj Wonder Heritage Tours. Discover Agra, Delhi, Jaipur, Ranthambore and more with private tours and local experts.",
};

const destinations = [
  {
    name: "Agra",
    image: "/images/destinations/agra.jpg",
    description:
      "Home to the world-famous Taj Mahal, Agra Fort and the beautiful Mehtab Bagh.",
    tours: "15+ Tours",
    destinationLink: "/destinations/agra",
    tourLink: "/tours",
  },

  {
    name: "Delhi",
    image: "/images/destinations/delhi.jpg",
    description:
      "Explore India's vibrant capital with Mughal monuments, bustling markets and historic landmarks.",
    tours: "12+ Tours",
    destinationLink: "/destinations/delhi",
    tourLink: "/tours",
  },

  {
    name: "Jaipur",
    image: "/images/destinations/jaipur.jpg",
    description:
      "Visit magnificent forts, royal palaces and colorful bazaars in the Pink City.",
    tours: "18+ Tours",
    destinationLink: "/destinations/jaipur",
    tourLink: "/tours",
  },

  {
    name: "Ranthambore",
    image: "/images/destinations/ranthambore.jpg",
    description:
      "Experience exciting tiger safaris inside India's famous national park.",
    tours: "5+ Tours",
    destinationLink: "/destinations/ranthambore",
    tourLink: "/tours",
  },

  {
    name: "Fatehpur Sikri",
    image: "/images/destinations/fatehpur-sikri.jpg",
    description:
      "Explore the magnificent abandoned Mughal capital and UNESCO World Heritage Site.",
    tours: "6+ Tours",
    destinationLink: "/destinations/fatehpur-sikri",
    tourLink: "/tours",
  },

  {
    name: "Rajasthan",
    image: "/images/destinations/rajasthan.jpg",
    description:
      "Royal palaces, colorful cities, majestic forts and unforgettable cultural experiences.",
    tours: "15+ Tours",
    destinationLink: "/destinations/rajasthan",
    tourLink: "/tours",
  },

  {
    name: "Orchha",
    image: "/images/destinations/orchha.jpg",
    description:
      "Discover magnificent Bundela palaces, riverside cenotaphs and ancient temples in one of Madhya Pradesh's hidden heritage gems.",
    tours: "3+ Tours",
    destinationLink: "/destinations/orchha",
    tourLink: "/tours",
  },

  {
    name: "Khajuraho",
    image: "/images/destinations/khajuraho.jpg",
    description:
      "Explore the UNESCO World Heritage temples renowned worldwide for their breathtaking architecture and intricate stone carvings.",
    tours: "3+ Tours",
    destinationLink: "/destinations/khajuraho",
    tourLink: "/tours",
  },

  {
    name: "Bandhavgarh",
    image: "/images/destinations/bandhavgarh.jpg",
    description:
      "One of India's finest tiger reserves offering thrilling jeep safaris and exceptional wildlife photography.",
    tours: "2+ Tours",
    destinationLink: "/destinations/bandhavgarh",
    tourLink: "/tours",
  },

  {
    name: "Kanha National Park",
    image: "/images/destinations/kanha.jpg",
    description:
      "Experience lush forests, rich wildlife and one of India's most famous tiger safari destinations.",
    tours: "2+ Tours",
    destinationLink: "/destinations/kanha-national-park",
    tourLink: "/tours",
  },

  {
    name: "Varanasi",
    image: "/images/destinations/varanasi.jpg",
    description:
      "India's oldest living city, famous for sacred ghats, Ganga Aarti and unforgettable spiritual experiences.",
    tours: "5+ Tours",
    destinationLink: "/destinations/varanasi",
    tourLink: "/tours/golden-triangle-varanasi-tour",
  },

  {
    name: "Rishikesh",
    image: "/images/destinations/rishikesh.jpg",
    description:
      "The Yoga Capital of the World, offering peaceful ghats, Himalayan scenery, yoga and spiritual retreats.",
    tours: "5+ Tours",
    destinationLink: "/destinations/rishikesh",
    tourLink: "/tours/golden-triangle-rishikesh-tour",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "90px" }}>
        {/* Breadcrumb */}

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Destinations" },
          ]}
        />

        {/* Hero Section */}

        <section
          style={{
            background:
              "linear-gradient(rgba(8,20,45,.82), rgba(8,20,45,.82)), url('/images/destinations/destinations-banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            padding: "220px 20px 180px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                display: "inline-block",
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Luxury Private Tours Across India
            </span>

            <h1
              style={{
                fontSize: "76px",
                fontWeight: 800,
                lineHeight: "1.15",
                margin: "0 0 30px",
                color: "#ffffff",
                textShadow: "0 4px 20px rgba(0,0,0,.55)",
              }}
            >
              Discover India's
              <br />
              Most Iconic Destinations
            </h1>

            <p
              style={{
                maxWidth: "850px",
                margin: "0 auto",
                fontSize: "24px",
                lineHeight: "42px",
                color: "#f5f5f5",
              }}
            >
              From the timeless beauty of the Taj Mahal to the royal palaces
              of Rajasthan and thrilling wildlife safaris, discover
              unforgettable destinations with Taj Wonder Heritage Tours.
              Experience India's rich heritage through carefully crafted
              private journeys designed just for you.
            </p>

            {/* Hero Buttons */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginTop: "55px",
              }}
            >
              <Link
                href="/tours"
                style={{
                  background: "#d4af37",
                  color: "#08142d",
                  textDecoration: "none",
                  padding: "18px 42px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                Explore Tours
              </Link>

              <Link
                href="/contact"
                style={{
                  border: "2px solid #ffffff",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "18px 42px",
                  borderRadius: "50px",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                Contact Us
              </Link>
            </div>

            {/* Statistics */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                flexWrap: "wrap",
                marginTop: "70px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              <span>⭐ 500+ Happy Travelers</span>
              <span>🏛 10+ Years Experience</span>
              <span>🚘 Private & Custom Tours</span>
            </div>
          </div>
        </section>

        {/* Destination Cards */}

        <section
          style={{
            padding: "100px 20px",
            background: "#f8f9fb",
          }}
        >
          <div
            style={{
              maxWidth: "1300px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
              gap: "35px",
            }}
          >
            {destinations.map((place) => (
              <article
                key={place.name}
                style={{
                  background: "#fff",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(0,0,0,.08)",
                }}
              >
                {/* Destination Image */}

                <Image
                  src={place.image}
                  alt={`${place.name} destination`}
                  width={800}
                  height={540}
                  style={{
                    width: "100%",
                    height: "270px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "30px" }}>
                  {/* Destination Name */}

                  <h2
                    style={{
                      color: "#08142d",
                      marginBottom: "18px",
                      fontSize: "32px",
                    }}
                  >
                    {place.name}
                  </h2>

                  {/* Description */}

                  <p
                    style={{
                      color: "#666",
                      lineHeight: "30px",
                      fontSize: "17px",
                      marginBottom: "20px",
                    }}
                  >
                    {place.description}
                  </p>

                  {/* Number of Tours */}

                  <p
                    style={{
                      color: "#d4af37",
                      fontWeight: 700,
                      margin: "25px 0",
                      fontSize: "18px",
                    }}
                  >
                    {place.tours}
                  </p>

                  {/* Buttons */}

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    {/* Explore Destination */}

                    <Link
                      href={place.destinationLink}
                      aria-label={`Explore ${place.name} destination`}
                      style={{
                        display: "inline-block",
                        background: "#08142d",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "15px 24px",
                        borderRadius: "50px",
                        fontWeight: 700,
                      }}
                    >
                      Explore {place.name} →
                    </Link>

                    {/* View Tours */}

                    <Link
                      href={place.tourLink}
                      aria-label={`View ${place.name} tours`}
                      style={{
                        display: "inline-block",
                        background: "#d4af37",
                        color: "#08142d",
                        textDecoration: "none",
                        padding: "15px 24px",
                        borderRadius: "50px",
                        fontWeight: 700,
                      }}
                    >
                      View Tours →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}