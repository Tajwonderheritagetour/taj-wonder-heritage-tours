import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Taj Wonder Heritage Tours",
  description:
    "Read the Privacy Policy of Taj Wonder Heritage Tours to understand how we collect, use and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "20px",
              lineHeight: "34px",
              color: "#ddd",
            }}
          >
            Your privacy is important to us. This Privacy Policy explains
            how Taj Wonder Heritage Tours collects, uses and protects
            your information.
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
        <p>
          Last Updated: July 2026
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          1. Introduction
        </h2>

        <p>
          Taj Wonder Heritage Tours ("we", "our", or "us") respects your
          privacy and is committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, disclose and
          safeguard your information when you visit our website or use our
          travel services.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          2. Information We Collect
        </h2>

        <p>
          We may collect the following information:
        </p>

        <ul>
          <li>Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Country of Residence</li>
          <li>Travel Preferences</li>
          <li>Booking Details</li>
          <li>Messages sent through our contact form or WhatsApp</li>
        </ul>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          3. How We Use Your Information
        </h2>

        <p>
          Your information is used to:
        </p>

        <ul>
          <li>Respond to inquiries.</li>
          <li>Provide tour quotations.</li>
          <li>Manage bookings.</li>
          <li>Improve customer service.</li>
          <li>Improve our website.</li>
          <li>Communicate important travel information.</li>
        </ul>
                <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          4. Cookies
        </h2>

        <p>
          Our website may use cookies to improve your browsing experience.
          Cookies help us understand how visitors use our website and allow us
          to improve our services. You may disable cookies in your browser
          settings at any time.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          5. Third-Party Services
        </h2>

        <p>
          We may use trusted third-party services such as Google Maps,
          Google Analytics, WhatsApp and email providers to improve our
          services. These services have their own privacy policies and are
          responsible for the information they collect.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          6. Data Security
        </h2>

        <p>
          We take reasonable measures to protect your personal information
          against unauthorized access, misuse or disclosure. While no internet
          transmission is completely secure, we continuously work to safeguard
          your data.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          7. Your Rights
        </h2>

        <p>
          You have the right to request access to, correction of or deletion of
          your personal information. If you wish to update or remove your
          information, please contact us using the details below.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          8. Changes to This Privacy Policy
        </h2>

        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services or legal requirements. Any updates will be
          published on this page with a revised "Last Updated" date.
        </p>

        <h2 style={{ marginTop: "50px", color: "#08142d" }}>
          9. Contact Us
        </h2>

        <p>
          If you have any questions regarding this Privacy Policy, please
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