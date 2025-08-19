export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Spacelinkers Infotech",
  url: "https://www.spacelinkers.com",
  logo: "https://www.spacelinkers.com/image/logo/logo_b.png",
  description:
    "Spacelinkers Infotech is a leading digital transformation company in India, offering AI-powered solutions, custom software development, website and mobile app development, and tech staffing services. We help startups and enterprises innovate, scale, and grow their digital presence globally.",
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Rahul Rathor",
    jobTitle: "Founder & CEO",
    sameAs: ["https://www.linkedin.com/in/ceorahulrathor/"],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Registered Office Address",
      addressLocality: "Tundla",
      addressRegion: "UP",
      postalCode: "283204",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Corporate Office Address",
      addressLocality: "Noida",
      addressRegion: "UP",
      postalCode: "201301",
      addressCountry: "IN",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9266579793",
      contactType: "Customer Service",
      areaServed: ["IN", "US", "UK", "CA", "DE"],
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9266579793",
      contactType: "Sales",
      areaServed: ["IN", "US", "UK", "CA", "DE"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
  department: [
    {
      "@type": "Organization",
      name: "Software Development",
      description: "Custom software solutions tailored to business needs.",
    },
    {
      "@type": "Organization",
      name: "Web Development",
      description: "Stunning, responsive, and SEO-optimized websites.",
    },
    {
      "@type": "Organization",
      name: "AI and Machine Learning",
      description: "Advanced AI solutions to transform businesses.",
    },
    {
      "@type": "Organization",
      name: "Staff Augmentation",
      description: "Reliable tech hiring and team extension services.",
    },
  ],
  sameAs: [
    "https://www.facebook.com/spacelinkers",
    "https://www.linkedin.com/company/spacelinkers",
    "https://x.com/spacelinkers1",
    "https://wa.me/919266579793",
    "https://www.instagram.com/_spacelinkers",
  ],
  potentialAction: {
    "@type": "ContactAction",
    target: "https://www.spacelinkers.com/contact-us",
    name: "Book a Free Consultation",
    description:
      "Reach out to our experts for a free consultation on your project.",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Spacelinkers offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spacelinkers offers software development, web development, AI & machine learning solutions, staff augmentation, and digital transformation services.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Spacelinkers for a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can visit our Contact Us page at https://www.spacelinkers.com/contact-us or call us at +91-9266579793.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we serve clients globally including the US, UK, Canada, and Germany.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.spacelinkers.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.spacelinkers.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Careers",
      item: "https://www.spacelinkers.com/careers",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "About Us",
      item: "https://www.spacelinkers.com/about-us",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact Us",
      item: "https://www.spacelinkers.com/contact-us",
    },
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development",
  provider: {
    "@type": "Organization",
    name: "Spacelinkers Infotech",
    url: "https://www.spacelinkers.com",
  },
  areaServed: ["IN", "US", "UK", "CA", "DE"],
  description:
    "We create responsive, SEO-friendly, and modern websites tailored to your business goals.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "CMS Integration (WordPress, etc.)",
        },
      },
    ],
  },
};
