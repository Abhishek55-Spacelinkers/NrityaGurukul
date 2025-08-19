import "./globals.css";
import dynamic from "next/dynamic";

import { Toaster } from "@/components/ui/toaster";
import { Poppins, Cinzel } from "next/font/google";

import {
  jsonLd,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema";
import { Toast } from "@/components/ui/toast";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Nritya Gurukul | Bharatnatyam Dance Classes in Noida",
  description:
    "Welcome to Nritya Gurukul! Join our Bharatnatyam dance classes in Noida to learn the ancient art of classical Indian dance with expert instructors.",
  openGraph: {
    title: "Nritya Gurukul | Bharatnatyam Dance Classes in Noida",
    description:
      "Welcome to Nritya Gurukul! Join our Bharatnatyam dance classes in Noida to learn the ancient art of classical Indian dance with expert instructors.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body
        className={` ${cinzel.variable} ${poppins.variable} font-normal min-h-screen flex flex-col bharatnatyam-pattern mandala-bg`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
