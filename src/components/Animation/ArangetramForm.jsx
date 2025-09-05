"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import { Details } from "@/lib/data";
import { X } from "lucide-react";

export default function ArangetramForm() {
  const [open, setOpen] = useState(false);

  const steps = ["Student Details", "Event Details", "Add-ons"];
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    subject: "Request Budget & Inclusions",
    name: "",
    age: "",
    email: "",
    yearsTrained: "",
    guruName: "",
    preferredDate: "",
    location: "",
    auditoriumType: "",
    estimatedGuests: "",
    costumeCount: "",
    includeJewelry: false,
    includePhotoVideo: false,
    includeMakeup: false,
    botcheck: "",
  });

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

  const isStepValid = () => {
    if (step === 0) {
      return (
        formData.name.trim() &&
        formData.email.trim() &&
        isValidp && // phone valid
        formData.age &&
        formData.yearsTrained &&
        formData.guruName.trim()
      );
    }
    if (step === 1) {
      return (
        formData.preferredDate &&
        formData.location.trim() &&
        formData.auditoriumType &&
        formData.estimatedGuests
      );
    }
    if (step === 2) {
      return formData.costumeCount;
    }
    return true;
  };

  const handleNext = () => step < steps.length - 1 && setStep(step + 1);
  const handleBack = () => step > 0 && setStep(step - 1);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.costumeCount == "") return;
    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append("phone", phone);
    formDataToSend.append(
      "access_key",
      "cc6ab5ed-7367-495f-9053-3f2b1cc62c7b" || ""
    );
    formDataToSend.append("from_name", formData.name);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (data.success) {
        toast({ title: "✅ Submitted Successfully" });
        setFormData({
          name: "",
          age: "",
          email: "",
          yearsTrained: "",
          guruName: "",
          preferredDate: "",
          location: "",
          auditoriumType: "",
          estimatedGuests: "",
          costumeCount: "",
          includeJewelry: false,
          includePhotoVideo: false,
          includeMakeup: false,
          botcheck: "",
        });
        setPhone("");
        setStep(0);
        setShowPopup(true); // 👈 show your success popup
      } else {
        toast({ title: "⚠️ Something went wrong", variant: "destructive" });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "❌ Failed to submit. Try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button asChild variant="outline" className="rounded-xl cursor-pointer">
        <a onClick={() => setOpen(true)} className="py-10 sm:py-3">Request Budget & Inclusions</a>
      </Button>
      {open && (
        <motion.div
          className="fixed inset-0 flex z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed inset-0 w-full h-full bg-orange-400 opacity-30"
            onClick={() => setOpen(false)}
          ></div>

          <AnimatePresence mode="wait">
            {!showPopup ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className=" py-20 bg-gray-900 mx-auto my-auto rounded-2xl relative backdrop-blur-sm  text-white"
              >
                <div className="">
                  <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h1 className="text-4xl font-bold font-['Cinzel'] mb-4">
                      <span className="dance-ornament">Arangetram</span> Request
                      Form
                    </h1>
                    <p className="text-lg text-white/70">
                      Fill in the details step by step to plan your Arangetram
                      event.
                    </p>
                  </motion.div>
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white duration-200 cursor-pointer"
                  >
                    <X className="h-8 w-8" />
                  </button>
                </div>
                <motion.div
                  className="py-8 px-7 sm:p-8 rounded-2xl shadow-2xl md:w-[800px] bg-white  relative text-gray-600 mx-2 sm:mx-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  key="first"
                >
                  {/* Progress */}
                  <div className="flex justify-between mb-6">
                    {steps.map((label, index) => (
                      <div
                        key={index}
                        className={`flex-1 text-center text-[17px] font-semibold cursor-default rounded-xl  ${
                          index === step
                            ? "text-orange-600 border"
                            : "text-gray-400"
                        } ${index < step && " cursor-pointer"}`}
                        onClick={() => index < step && setStep(index)}
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1 */}
                    {step === 0 && (
                      <div className="space-y-4">
                        <Label className="font-medium">Student Name *</Label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter Student Name"
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />

                        <div className="grid md:grid-cols-2 gap-6">
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
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                              placeholder="Enter your email"
                            />
                          </div>
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
                              className={`border-orange-200 border rounded-md focus:border-orange-500 focus:ring-orange-500 ${
                                active
                                  ? isValidp
                                    ? "!border-orange-200 !text-black"
                                    : "!border-red-600 !text-red-600"
                                  : null
                              }`}
                              id="phone"
                              required
                              onChange={(phone) => setPhone(phone)}
                              onBlur={() => changea(true)}
                              inputProps={{
                                name: "phone",
                                required: true,
                                className: `!font-medium ml-1 !pl-1 !py-1.5 !w-full !text-sm placeholder-white rounded outline-none`,
                              }}
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="font-medium">Age *</Label>
                            <Input
                              type="number"
                              name="age"
                              value={formData.age}
                              onChange={handleChange}
                              required
                              placeholder="Enter Age"
                              className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="font-medium">
                              Years of Training *
                            </Label>
                            <Input
                              type="number"
                              name="yearsTrained"
                              value={formData.yearsTrained}
                              onChange={handleChange}
                              required
                              placeholder="Enter Years of Training"
                              className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                            />
                          </div>
                        </div>

                        <Label className="font-medium">Guru's Name *</Label>
                        <Input
                          name="guruName"
                          value={formData.guruName}
                          onChange={handleChange}
                          required
                          placeholder="Enter Guru's Name"
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 1 && (
                      <div className="space-y-4">
                        <Label className="font-medium">Preferred Date *</Label>
                        <Input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          required
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />

                        <Label className="font-medium">Event Location *</Label>
                        <Input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          placeholder="Enter Event Location"
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />

                        <Label className="font-medium">Auditorium Type *</Label>
                        <select
                          name="auditoriumType"
                          value={formData.auditoriumType}
                          onChange={handleChange}
                          required
                          className="w-full p-2 border rounded-xl border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        >
                          <option value="">Select Auditorium</option>
                          <option value="private">Private</option>
                          <option value="government">Government</option>
                          <option value="openStage">Open Stage</option>
                        </select>

                        <Label className="font-medium">
                          Estimated Guests *
                        </Label>
                        <Input
                          type="number"
                          name="estimatedGuests"
                          value={formData.estimatedGuests}
                          onChange={handleChange}
                          required
                          placeholder="Enter Guest Count"
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 2 && (
                      <div className="space-y-4">
                        {/* ✅ Honeypot Spam Protection */}
                        <input
                          type="checkbox"
                          name="botcheck"
                          className="hidden"
                          style={{ display: "none" }}
                          tabIndex={-1}
                          autoComplete="off"
                          checked={formData.botcheck === "on"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              botcheck: e.target.checked ? "on" : "",
                            })
                          }
                        />

                        <Label className="font-medium">
                          Number of Costumes*
                        </Label>
                        <Input
                          type="number"
                          name="costumeCount"
                          required
                          value={formData.costumeCount}
                          onChange={handleChange}
                          placeholder="Enter Costume Count"
                          className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                        />

                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="includeJewelry"
                            checked={formData.includeJewelry}
                            onChange={handleChange}
                          />
                          <span>Include New Jewelry with Ghungroo</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="includePhotoVideo"
                            checked={formData.includePhotoVideo}
                            onChange={handleChange}
                          />
                          <span>
                            Photo & Videography (Pre-event & Event Day)
                          </span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            name="includeMakeup"
                            checked={formData.includeMakeup}
                            onChange={handleChange}
                          />
                          <span>Makeup Artist for Both Days</span>
                        </label>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between pt-6">
                      {step > 0 ? (
                        <Button
                          type="button"
                          onClick={handleBack}
                          className="bg-gray-900 hover:bg-gray-700 duration-200 text-white px-6 py-2 rounded-full"
                        >
                          Back
                        </Button>
                      ) : (
                        <div></div>
                      )}
                      {step < steps.length - 1 ? (
                        <Button
                          type="button"
                          onClick={handleNext}
                          disabled={!isStepValid()}
                          className={`px-8 py-3 rounded-full font-semibold text-white 
                  ${
                    isStepValid()
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={!isStepValid() || loading}
                          className={`px-8 py-3 rounded-full font-semibold text-white 
                ${
                  isStepValid()
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </Button>
                      )}
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            ) : (          
                <motion.div
                  key="popup-box"
                  className=" p-7 sm:p-10 bg-white mx-5 sm:mx-auto my-auto rounded-2xl relative backdrop-blur-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-2xl font-bold text-orange-600 mb-4">
                    Thank you!
                  </h2>
                  <p className="text-gray-700">
                    Our team will get in touch with you soon. <br />
                    For urgent queries, call us at{" "}
                    <span className="font-semibold">{Details.cphone}</span>
                  </p>
                  <Button
                    onClick={() => {setShowPopup(false);setOpen(false);}}
                    className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full"
                  >
                    Close
                  </Button>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
