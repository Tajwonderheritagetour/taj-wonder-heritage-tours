import {
  Car,
  UserRound,
  Star,
  BadgeDollarSign,
  Headset,
  ShieldCheck,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Car size={42} color="#d4af37" />,
      title: "Luxury Vehicles",
      text: "Travel in clean, comfortable private cars with experienced drivers.",
    },
    {
      icon: <UserRound size={42} color="#d4af37" />,
      title: "Expert Tour Guides",
      text: "Licensed local guides who bring India's history to life.",
    },
    {
      icon: <Star size={42} color="#d4af37" />,
      title: "5-Star Experience",
      text: "Trusted by travelers from around the world.",
    },
    {
      icon: <BadgeDollarSign size={42} color="#d4af37" />,
      title: "Best Price",
      text: "Transparent pricing with no hidden charges.",
    },
    {
      icon: <Headset size={42} color="#d4af37" />,
      title: "24/7 Support",
      text: "We're available before, during and after your trip.",
    },
    {
      icon: <ShieldCheck size={42} color="#d4af37" />,
      title: "Safe & Reliable",
      text: "Your comfort and safety are always our priority.",
    },
  ];

  return (
    <section
      style={{
        padding: "90px 60px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#08142d",
          marginBottom: "15px",
        }}
      >
        Why Choose Taj Wonder Heritage Tours?
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "60px",
        }}
      >
        Discover India with comfort, safety and personalized service.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {features.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#f8f9fa",
              borderRadius: "18px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                marginBottom: "15px",
                color: "#08142d",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#666",
                lineHeight: "1.7",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}