import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Poppins, Cinzel } from "next/font/google";

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
  title: "Nritya Gurukul | Bharatanatyam Dance Classes in Noida",
  description:
    "Welcome to Nritya Gurukul! Join our Bharatanatyam dance classes in Noida to learn the ancient art of classical Indian dance with expert instructors.",
  openGraph: {
    title: "Nritya Gurukul | Bharatanatyam Dance Classes in Noida",
    description:
      "Welcome to Nritya Gurukul! Join our Bharatanatyam dance classes in Noida to learn the ancient art of classical Indian dance with expert instructors.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={` ${cinzel.variable} ${poppins.variable} font-normal min-h-screen flex flex-col !w-full bharatnatyam-pattern mandala-bg`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
