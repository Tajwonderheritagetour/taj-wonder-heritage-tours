import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Taj Wonder Heritage Tours",
  description:
    "Read the Terms & Conditions for booking tours with Taj Wonder Heritage Tours.",
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      {/* Hero */}

      <section
        style={{
          background: "#08142d",
          color: "#fff",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <span
            style={{
              color: "#d4af37",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Legal Information
          </span>

          <h1
            style={{
              fontSize: "54px",
              marginTop: "20px",
            }}
          >
            Terms & Conditions
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "20px",
              lineHeight: "34px",
              color: "#ddd",
            }}
          >
            Please read these Terms & Conditions carefully before booking any
            tour or using our services.
          </p>
        </div>
      </section>

      {/* Content */}

      <section
        style={{
          maxWidth: "1000px",
          margin: "70px auto",
          padding: "0 20px",
          lineHeight: "34px",
          color: "#444",
          fontSize: "18px",
        }}
      >
        <p>Last Updated: July 2026</p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          1. Introduction
        </h2>

        <p>
          These Terms & Conditions govern your use of the Taj Wonder Heritage
          Tours website and our travel services. By making a booking or using
          our website, you agree to these Terms & Conditions.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          2. Tour Bookings
        </h2>

        <p>
          All bookings are subject to availability and confirmation. We reserve
          the right to refuse or cancel a booking in exceptional circumstances.
        </p>

        <ul>
          <li>Bookings should be made using accurate personal information.</li>
          <li>Special requests are subject to availability.</li>
          <li>Tour schedules may vary due to weather or local conditions.</li>
        </ul>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          3. Pricing & Payments
        </h2>

        <p>
          Tour prices are quoted in advance and may vary depending on the
          itinerary, vehicle type, guide services and seasonal demand.
        </p>

        <ul>
          <li>Payment methods will be confirmed during booking.</li>
          <li>Taxes and government charges may apply where required.</li>
          <li>
            Any additional services requested by the customer may incur extra
            charges.
          </li>
        </ul>
                <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          4. Cancellation Policy
        </h2>

        <p>
          Customers are requested to notify us as early as possible if they
          need to cancel or modify their booking. Cancellation charges, if
          applicable, will depend on the type of tour, services reserved and
          the notice period provided before the scheduled departure.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          5. Refund Policy
        </h2>

        <p>
          Refunds, where applicable, will be processed after reviewing the
          booking details and the cancellation policy. Certain services such as
          entrance tickets, hotel reservations or third-party bookings may be
          non-refundable.
        </p>

        <p>
          Refund processing time may vary depending on the payment method used
          during booking.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          6. Customer Responsibilities
        </h2>

        <p>
          Guests are responsible for ensuring they possess valid identification,
          passports, visas and any documents required for travel.
        </p>

        <ul>
          <li>Arrive at the pickup location on time.</li>
          <li>Respect local laws, customs and heritage sites.</li>
          <li>Follow safety instructions provided by the driver or guide.</li>
          <li>
            Inform us in advance about medical conditions or special
            requirements.
          </li>
        </ul>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          7. Changes to Tours
        </h2>

        <p>
          Taj Wonder Heritage Tours reserves the right to modify itineraries,
          routes, vehicles or schedules due to weather conditions, government
          regulations, road closures, public holidays or circumstances beyond
          our reasonable control.
        </p>

        <p>
          Whenever possible, suitable alternatives will be arranged without
          affecting the overall travel experience.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          8. Liability
        </h2>

        <p>
          While we make every effort to provide safe and reliable travel
          services, Taj Wonder Heritage Tours shall not be held responsible for
          delays, accidents, natural disasters, political events, flight
          cancellations, strikes or other events beyond our control.
        </p>

        <p>
          Our liability is limited to the value of the services booked directly
          with Taj Wonder Heritage Tours.
        </p>
                <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          9. Governing Law
        </h2>

        <p>
          These Terms & Conditions shall be governed and interpreted in
          accordance with the laws of India. Any disputes arising from the use
          of our services shall be subject to the jurisdiction of the courts in
          Agra, Uttar Pradesh.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          10. Contact Information
        </h2>

        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us:
        </p>

        <ul>
          <li>
            <strong>Taj Wonder Heritage Tours</strong>
          </li>
          <li>Email: info@tajwonderheritagetours.com</li>
          <li>Phone / WhatsApp: +91 78307 16981</li>
          <li>Agra, Uttar Pradesh, India</li>
        </ul>

        <div
          style={{
            textAlign: "center",
            marginTop: "70px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#08142d",
              color: "#fff",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "50px",
              fontWeight: "bold",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}