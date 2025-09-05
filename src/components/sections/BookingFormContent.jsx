"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";


const classes = [
  { id: "beginner-foundation", title: "Beginner Foundation Course" },
  { id: "intermediate-level", title: "Intermediate Level Program" },
  { id: "advanced-masterclass", title: "Advanced Masterclass" },
  { id: "trial", title: "Trial class" },
  { id: "trial-prarambhik", title: "Trial-Prarambhik class" },
  { id: "trial-praveshika-pratham", title: "Trial-Praveshika Pratham class" },
  { id: "trial-praveshika-purna", title: "Trial-Praveshika Purna class" },
  { id: "trial-madhyama-pratham", title: "Trial-Madhyama Pratham class" },
  { id: "trial-madhyama-purna", title: "Trial-Madhyama Purna class" },
  { id: "trial-visharad-pratham", title: "Trial-Visharad Pratham class" },
  { id: "trial-visharad-purna", title: "Trial-Visharad Purna class" },
  { id: "prarambhik", title: "Prarambhik" },
  { id: "praveshika-pratham", title: "Praveshika Pratham" },
  { id: "praveshika-purna", title: "Praveshika Purna" },
  { id: "madhyama-pratham", title: "Madhyama Pratham" },
  { id: "madhyama-purna", title: "Madhyama Purna" },
  { id: "visharad-pratham", title: "Visharad Pratham" },
  { id: "visharad-purna", title: "Visharad Purna" },
  { id: "arangetram", title: "Arangetram Training" },
];

export default function BookingFormContent() {
  const searchParams = useSearchParams();
  const [selectedClass, setSelectedClass] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [active, changea] = useState(false);
  const { toast } = useToast();
  const phoneUtil = PhoneNumberUtil.getInstance();
  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
  const isValidp = isPhoneValid(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidp) return;
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "cc6ab5ed-7367-495f-9053-3f2b1cc62c7b");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast({ title: "Submitted Successful" });
        router.push("/")
        e.target.reset();
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Failed to submit. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const classId = searchParams.get("class");
    const classTitle =
      classes.find((c) => c.id === classId)?.title || "General Inquiry";
    setSelectedClass(classTitle);
  }, [searchParams]);

  return (
    <Suspense fallback={<div>Loading booking form...</div>}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section id="booking-form" className="py-10 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold font-['Cinzel'] mb-4">
                <span className="dance-ornament">Complete Your</span> Booking
              </h1>
              <p className="text-xl text-gray-600">
                You're one step away from joining our dance family! Please fill
                out the details below.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="space-y-6"
              >
                
                
                <input
                  type="hidden"
                  name="subject"
                  value={"Inquery - " + selectedClass}
                />
                {/* ✅ Hidden Fields */}
                <input type="hidden" name="name" value={name} />
                <input type="hidden" name="from_name" value={name} />
                {/* ✅ Honeypot Spam Protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                  <Label className="text-gray-700 font-medium">
                    Selected Class
                  </Label>
                  <p className="text-lg font-semibold text-orange-700">
                    {selectedClass}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 font-medium"
                    >
                      Phone Number *
                    </Label>
                    <PhoneInput
                      defaultCountry="in"
                      value={phone}
                      id="phone"
                      required
                      onChange={(phone) => setPhone(phone)}
                      inputProps={{
                        name: "phone",
                        required: true,
                        className: `!font-medium border-b-2 ml-1 !pl-1 !py-1.5 !w-full !text-sm placeholder-white  border border-gray-300 rounded ${
                          active
                            ? isValidp
                              ? "!border-gray-300 !text-black"
                              : "!border-red-600 !text-red-600"
                            : null
                        }`,
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-gray-700 font-medium">
                      Age
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="experience"
                    className="text-gray-700 font-medium"
                  >
                    Dance Experience
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="e.g., Beginner, 2 years classical dance, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-gray-700 font-medium"
                  >
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 min-h-[100px]"
                    placeholder="Tell us about your interest in Bharatnatyam, preferred timings, or any questions..."
                  />
                </div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    onClick={() => changea(true)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold pulse-glow"
                  >
                    {loading ? "Submitting..." : "Submit Booking"} 
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </Suspense>
  );
}
