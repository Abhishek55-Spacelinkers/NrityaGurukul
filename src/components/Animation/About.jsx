"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
// -----------------------------
// DATA
// -----------------------------
const expertise = [
  {
    title: "Nattuvangam Training",
    description:
      "Learned under Guru Mohana Iyer and has been actively practicing for 4–5 years, incorporating it into her performances and training.",
  },
  {
    title: "Dance Productions",
    description:
      "Conceptualized and choreographed three major productions – Narayan Narayan, Prem Vinod, and The Nine Nights.",
  },
  {
    title: "Research & Scholarship",
    description:
      "Thesis on Guru Shishya Parampara received appreciation for depth and insight.",
  },
];

const achievements = [
  {
    title: "Honors & Awards",
    list: [
      "Guru Samman",
      "Nrityangana Award",
      "Spoorti Vahini",
      "Nritya Shiromani",
    ],
  },
  {
    title: "Performance Highlights",
    description:
      "Performed before legends like Padma Vibhushan Late Pt. Birju Maharaj and Padma Bhushan Dr. Saroja Vaidyanathan.",
  },
  {
    title: "Special Recognitions",
    description:
      "Part of a Guinness World Record for a non-stop Bharatanatyam performance organized by Ganesh Natyalaya.",
  },
  {
    title: "Judging & Examination Panels",
    description:
      "Invited as a judge for various competitions and as an external examiner for university-level dance examinations.",
  },
];

// -----------------------------
// COMPONENTS
// -----------------------------
export function Headabout() {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl font-bold font-['Cinzel'] mb-4">
        <span className="dance-ornament">Our Story</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Nritya Gurukul was founded with a singular vision: to create a sanctuary
        for the timeless art of Bharatanatyam, where tradition meets passion and
        dedication.
      </p>
    </motion.div>
  );
}

export function Front() {
  return (
    <>
      {/* Heart of Gurukul */}
      <section className="grid md:grid-cols-[35%_62%] gap-5 px-5 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center max-w-[250px] mx-auto md:max-w-[320px] bg-black my-auto"
        >
          <img
            src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755688099/Aboutimg_d3z76e.png"
            alt="Founder of Nritya Gurukul in a graceful pose"
            className=" object-cover rounded-2xl"
          />
        </motion.div>

        <motion.div
          className="space-y-2 my-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-amber-700 ring-1 ring-amber-200">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">
              {" "}
              The Heart of the Gurukul
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-bold font-['Cinzel'] w-fit -mb-2">
              Akshatha Pai
            </h2>
            <span className="text-[15px] text-amber-700 font-medium">
              M.A Bharatanatyam, Nritya Visharad
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mt-3 text-justify">
            Akshatha Pai is a distinguished Bharatanatyam artist, teacher, and
            choreographer with over 13 years of experience in professional dance
            training. She began her Bharatanatyam journey at the age of six
            under the tutelage of esteemed gurus such as Guru Mani Kannan,
            Sheela Shridhar, Dr. Chethana Radhakrishna, Dwaipayan Das, Rashmi
            Raut Jaiswal, and Sachidanand Narayakar.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            In 2013, Akshatha founded Nritya Gurukul in Noida, an institution
            dedicated to preserving and promoting Bharatanatyam. Established on
            November 7, 2013, Nritya Gurukul is affiliated with Akhil Bharatiya
            Gandharva Mahavidyalaya, Mumbai, offering structured dance education
            through Certification, Diploma, Graduation, and Master's level
            courses. The school has trained and certified over 150 students,
            many of whom have pursued Bharatanatyam professionally.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Akshatha completed her Arangetram in 2017 under the guidance of Guru
            Smt. Rashmi Raut Jaiswal in New Delhi. Since then, she has performed
            across India at prestigious dance festivals and concerts.
          </p>
        </motion.div>
      </section>

      {/* Specializations & Expertise */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-7 grid md:grid-cols-[3%_30%_34%_30%_3%] mx-auto w-fit"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <div></div>
          <img src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755855389/Untitled_768_x_198_px_yebz35.svg" alt="" className="hidden md:block"/>
          <h2 className="text-3xl font-bold font-['Cinzel']">
            <span className="dance-ornament"> Specializations</span> & Expertise
          </h2>
          <img src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755855389/Untitled_768_x_198_px_yebz35.svg" alt="" className="hidden md:block transform scale-x-[-1]"/>
          <div></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-md transition rounded-2xl border border-orange-200  hover:scale-105 duration-300"
            >
              <h3 className="font-bold font-['Cinzel'] text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

       
      {/* Achievements & Recognitions */}
      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-7 grid md:grid-cols-[3%_30%_34%_30%_3%] mx-auto w-fit"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          <div></div>
          <img src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755855389/Untitled_768_x_198_px_yebz35.svg" alt="" className="hidden md:block"/>
          <h2 className="text-3xl font-bold font-['Cinzel']">
            <span className="dance-ornament">Achievements</span> & Recognitions
          </h2>
          <img src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755855389/Untitled_768_x_198_px_yebz35.svg" alt="" className="hidden md:block transform scale-x-[-1]"/>
          <div></div>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-4">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="bg-white p-5 shadow-md rounded-2xl border border-orange-200  hover:scale-105 duration-300 transition"
            >
              <h3 className="font-['Cinzel'] font-bold text-lg mb-3">{ach.title}</h3>
              {ach.list ? (
                <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm">
                  {ach.list.map((l, idx) => (
                    <li key={idx}>{l}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 text-sm leading-relaxed">
                  {ach.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-amber-50 rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-[0_0_10px_0px_rgba(0,0,0,0.2)]">
            <Quote className="mx-auto mb-3" size={65} strokeWidth={2}/>
          <p className="text-gray-700 leading-relaxed mb-6">

            Apart from her contributions to the field of Bharatanatyam, Akshatha
            holds a <strong>B.Com degree from Mysore University</strong>. She is
            also a homemaker and lives in Noida with her husband and daughter{" "}
            <strong>Anushka</strong>, who follows in her footsteps as a
            Bharatanatyam dancer.
          </p>
          <p className="text-lg font-medium text-amber-800 italic">
            Her vision is to continue propagating Bharatanatyam through
            innovative productions, dedicated training, and cultural exchange,
            keeping the Guru-Shishya Parampara alive for future generations.
          </p>
        </div>
      </motion.section>
    </>
  );
}
