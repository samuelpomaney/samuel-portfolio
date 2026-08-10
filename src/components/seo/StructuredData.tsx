import Script from "next/script";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Samuel Dziedzorm Pomaney Yaw",

    alternateName: [
      "Spy Dee",
      "SPYDEX"
    ],

    url: "https://spydex.vercel.app",

    image: "https://spydex.vercel.app/og-image.png",

    jobTitle:
      "Cybersecurity Specialist, Software Engineer & Digital Growth Strategist",

    description:
      "Official portfolio of Samuel Dziedzorm Pomaney Yaw (Spy Dee), Computer Science graduate specialising in cybersecurity, networking, software engineering, IT support and digital growth.",

    worksFor: {
      "@type": "Organization",
      name: "SPYDEX",
    },

    knowsAbout: [
      "Cybersecurity",
      "Networking",
      "Linux",
      "Software Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "PHP",
      "MySQL",
      "Digital Marketing",
      "SEO",
      "Social Media",
      "IT Support",
      "Brand Strategy",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "SPYDEX",

    url: "https://spydex.vercel.app",

    author: {
      "@type": "Person",
      name: "Samuel Dziedzorm Pomaney Yaw",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "SPYDEX",

    founder: "Samuel Dziedzorm Pomaney Yaw",

    url: "https://spydex.vercel.app",

    logo: "https://spydex.vercel.app/og-image.png",
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}