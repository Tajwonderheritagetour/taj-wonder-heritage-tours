import ContactHero from "@/components/Contact/ContactHero";
import ContactCards from "@/components/Contact/ContactCards";
import ContactForm from "@/components/Contact/ContactForm";
import WhatsAppCTA from "@/components/Contact/WhatsAppCTA";

export default function ContactPage() {
  return (
    <main
      style={{
        paddingTop: "90px",
        background: "#f8f9fb",
        minHeight: "100vh",
      }}
    >
      <ContactHero />

      <ContactCards />

      <ContactForm />

      <WhatsAppCTA />
    </main>
  );
}