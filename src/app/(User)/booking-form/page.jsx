"use client";

import BookingFormContent from "@/components/sections/BookingFormContent";
import Head from "next/head";
import { Suspense } from "react";

export default function BookingFormPage() {
  return (
    <>
      <Head>
        <title>Booking Form | Nritya Gurukul</title>
        <meta
          name="description"
          content="Complete your booking for a Bharatanatyam class at Nritya Gurukul. Fill in your details to reserve your spot."
        />
        <meta property="og:title" content="Booking Form | Nritya Gurukul" />
        <meta
          property="og:description"
          content="Complete your booking for a Bharatanatyam class at Nritya Gurukul. Fill in your details to reserve your spot."
        />
      </Head>

      <Suspense fallback={<div>Loading booking form...</div>}>
        <BookingFormContent />
      </Suspense>
    </>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// const classes = [
//   { id: "beginner-foundation", title: "Beginner Foundation Course" },
//   { id: "intermediate-level", title: "Intermediate Level Program" },
//   { id: "advanced-masterclass", title: "Advanced Masterclass" },
// ];

// export default function BookingForm() {
//   const searchParams = useSearchParams();
//   const [selectedClass, setSelectedClass] = useState("");

//   useEffect(() => {
//     const classId = searchParams.get("class");
//     const classTitle =
//       classes.find((c) => c.id === classId)?.title || "General Inquiry";
//     setSelectedClass(classTitle);
//   }, [searchParams]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Head>
//         <title>Booking Form | Nritya Gurukul</title>
//         <meta
//           name="description"
//           content="Complete your booking for a Bharatnatyam class at Nritya Gurukul. Fill in your details to reserve your spot."
//         />
//         <meta property="og:title" content="Booking Form | Nritya Gurukul" />
//         <meta
//           property="og:description"
//           content="Complete your booking for a Bharatnatyam class at Nritya Gurukul. Fill in your details to reserve your spot."
//         />
//       </Head>

//       <section id="booking-form" className="py-20 px-4">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             className="text-center mb-12"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h1 className="text-4xl font-bold font-['Cinzel'] mb-4">
//               <span className="dance-ornament">Complete Your</span> Booking
//             </h1>
//             <p className="text-xl text-gray-600">
//               You're one step away from joining our dance family! Please fill
//               out the details below.
//             </p>
//           </motion.div>

//           <motion.div
//             className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <form
//               action="https://formspree.io/f/xovlrzvq"
//               method="POST"
//               className="space-y-6"
//             >
//               <input
//                 type="hidden"
//                 name="Selected Class"
//                 value={selectedClass}
//               />

//               <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
//                 <Label className="text-gray-700 font-medium">
//                   Selected Class
//                 </Label>
//                 <p className="text-lg font-semibold text-orange-700">
//                   {selectedClass}
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label
//                     htmlFor="name"
//                     className="text-gray-700 font-medium"
//                   >
//                     Full Name *
//                   </Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     required
//                     className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                     placeholder="Enter your full name"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label
//                     htmlFor="email"
//                     className="text-gray-700 font-medium"
//                   >
//                     Email Address *
//                   </Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                     placeholder="Enter your email"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <Label
//                     htmlFor="phone"
//                     className="text-gray-700 font-medium"
//                   >
//                     Phone Number *
//                   </Label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     required
//                     className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label
//                     htmlFor="age"
//                     className="text-gray-700 font-medium"
//                   >
//                     Age
//                   </Label>
//                   <Input
//                     id="age"
//                     name="age"
//                     type="number"
//                     className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                     placeholder="Enter your age"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="experience"
//                   className="text-gray-700 font-medium"
//                 >
//                   Dance Experience
//                 </Label>
//                 <Input
//                   id="experience"
//                   name="experience"
//                   className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
//                   placeholder="e.g., Beginner, 2 years classical dance, etc."
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label
//                   htmlFor="message"
//                   className="text-gray-700 font-medium"
//                 >
//                   Additional Message
//                 </Label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   className="border-orange-200 focus:border-orange-500 focus:ring-orange-500 min-h-[100px]"
//                   placeholder="Tell us about your interest in Bharatnatyam, preferred timings, or any questions..."
//                 />
//               </div>

//               <motion.div
//                 className="text-center"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Button
//                   type="submit"
//                   size="lg"
//                   className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full text-lg font-semibold pulse-glow"
//                 >
//                   🙏 Submit Booking
//                 </Button>
//               </motion.div>
//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }
