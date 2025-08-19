import InquiryForm from "@/components/sections/InquiryForm";
import { Front, WhyJoinUs } from "@/components/Animation/Contact";

export const metadata = {
  title: "Contact Us | Nritya Gurukul",
  description:
    "Get in touch with Nritya Gurukul. Find our address, phone number, email, and a map to our location in Noida. We look forward to hearing from you!",
};

export default function ContactPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Front />
        <WhyJoinUs />
        <InquiryForm />
      </div>
    </div>
  );
}
