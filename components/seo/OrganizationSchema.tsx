export default function OrganizationSchema() {
  return (
    <script
      id="organization-schema-test"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Test Organization",
        }),
      }}
    />
  );
}