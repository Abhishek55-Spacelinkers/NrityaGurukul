"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  School,
  CalendarClock,
  ScrollText,
  Sparkles,
  Music,
  BadgeCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Faqs } from "@/lib/data";
import ArangetramForm from "@/components/Animation/ArangetramForm";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Levels = [
  {
    id: "prarambhik",
    order: 1,
    title: "Prarambhik",
    subtitle: "Foundation Level",
    duration: "1 Year",
    eligibility: "Minimum 7 years of age",
    focus: [
      "Posture & araimandi basics",
      "Rhythm awareness",
      "Foundational Adavus",
    ],
    certificate: "ABGMVM Prarambhik Certificate",
    ctaHref: "booking-form?class=prarambhik",
  },
  {
    id: "praveshika-pratham",
    order: 2,
    eligibility: "Minimum 7 years of age",
    title: "Praveshika Pratham",
    subtitle: "Preliminary – Part 1",
    duration: "1 Year",
    focus: ["Advanced Adavus", "Footwork & stamina", "Rhythm precision"],
    certificate: "ABGMVM Praveshika Pratham Certificate",
    ctaHref: "booking-form?class=praveshika-pratham",
  },
  {
    id: "praveshika-purna",
    order: 3,
    title: "Praveshika Purna",
    eligibility: "Praveshika-pratham from ABGMVM or Minimum 17 years of age",
    subtitle: "Preliminary – Part 2",

    duration: "1 Year",
    focus: ["Alarippu", "Pushpanjali", "Stage skills & confidence"],
    certificate: "ABGMVM Praveshika Purna Certificate",
    ctaHref: "booking-form?class=praveshika-purna",
  },
  {
    id: "madhyama-pratham",
    order: 4,
    eligibility:
      "Praveshika poorna from ABGMVM or 18yrs age for certification done from other institutions.",
    title: "Madhyama Pratham",
    subtitle: "Intermediate – Part 1",
    duration: "1 Year",
    focus: ["Shabdam", "Jatiswaram", "Alarippu in varied jatis"],
    certificate: "ABGMVM Madhyama Pratham Certificate",
    ctaHref: "booking-form?class=madhyama-pratham",
  },
  {
    id: "madhyama-purna",
    order: 5,
    title: "Madhyama Purna",
    eligibility:
      "Madhyama pratam from ABGMVM , the student should be minimum age 14yrs Or 18yrs for certification done from other institutions",
    subtitle: "Intermediate – Part 2",
    duration: "1 Year",
    focus: ["Tillana", "Advanced rhythm", "Stage command & grace"],
    certificate: "ABGMVM Madhyama Purna Certificate",
    ctaHref: "booking-form?class=madhyama-purna",
  },
  {
    id: "visharad-pratham",
    order: 6,
    title: "Visharad Pratham",
    subtitle: "Graduate – Part 1",
    eligibility:
      "Madhyama Purna from ABGVM or minimum age 18 years for direct entry",
    duration: "1 Year",
    focus: [
      "Varnam (central item)",
      "Expressive storytelling (Abhinaya)",
      "Stamina & technique",
    ],
    certificate: "ABGMVM Visharad Pratham Certificate",
    ctaHref: "booking-form?class=visharad-pratham",
  },
  {
    id: "visharad-purna",
    order: 7,
    eligibility:
      "Visharad Pratham from ABGVM or minimum age 20 years for direct entry",
    title: "Visharad Purna",
    subtitle: "Graduate – Part 2",
    duration: "1 Year",
    focus: [
      "Full Margam repertoire",
      "Choreography & Nattuvangam",
      "Arangetram preparation",
    ],
    certificate:
      "ABGMVM Visharad Purna Certificate (Graduate Diploma in Bharatanatyam)",
    ctaHref: "booking-form?class=visharad-purna",
  },
];

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

export function Headcourse() {
  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[65%_35%] items-center">
          <motion.div
            className="space-y-3 "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-1 sm:px-3 py-1 text-amber-700 ring-amber-200">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">
                  Preparation Based on Akhil Bharatiya Gandharva Mahavidyalaya
                  Mandal, Mumbai (ABGMVM)
                </span>
              </div>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold font-cinzel">
              <span className="text-gray-800">Courses at</span>
              <br />
              <span className="dance-ornament">Nritya Gurukul</span>
            </h1>
            <p className="mt-4 max-w-3xl text-slate-600 text-base md:text-lg">
              A step-by-step journey from foundation to mastery in
              Bharatanatyam— with nationally recognized certification, annual
              stage exposure, and guided preparation for Arangetram.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 mt-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="booking-form?class=trial">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full pulse-glow"
                >
                  Book a Free Trial
                </Button>
              </Link>

              <Link href="#levels">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-full"
                >
                  Explore Course Levels
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755688099/front_bxhrv5.png"
            alt=""
            className="-mt-12 hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}

export function Specification() {
  const Specifications = [
    "7-year structured course following ABGMVM certification",
    "Separate batches for each exam level (Prarambhik to Visharad Purna)",
    "Preparation for Nationally recognized certification at every stage",
    "Opportuinity for 2–3 stage performances annually for all students",
    "Training offered in both Online & Offline modes",
    "Google Classrooms for notes, references & video access",
    "Personalized attention in limited batch sizes",
    "Guidance for Arangetram & advanced stage presentations",
  ];
  return (
    <section className="py-10 md:py-14">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold font-['Cinzel'] mb-4">
          <span className="dance-ornament">Key Highlights </span>at Nritya
          Gurukul
        </h2>
      </motion.div>
      <div className={container}>
        <div className="grid md:grid-cols-2 md:gap-8 gap-4">
          {Specifications.map((h, i) => {
            const pairIndex = Math.floor(i / 2);
            const mdColors = ["md:bg-orange-400/20", "md:bg-amber-500/30"];
            const mdColor = mdColors[pairIndex % mdColors.length];

            const mobileColors = ["bg-orange-400/20", "bg-amber-500/30"];
            const mobileColor = mobileColors[i % mobileColors.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex w-full md:w-[90%]"
              >
                <div className="flex-shrink-0 my-auto pr-3 ">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r to-[#ff6b35]  from-red-500  text-white font-bold text-lg shadow-md relative">
                    {i + 1}
                  </div>
                </div>
                <div
                  className={`rounded-2xl flex items-center px-2.5 py-3.5 w-full ${mobileColor} ${mdColor}`}
                >
                  <p className="text-slate-700 text-sm md:text-base">{h}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TheoryProgression() {
  const classFormat = [
    { title: "Exercises & warm-up", minutes: 15 },
    {
      title: "Practical dance",
      minutes: 30,
      note: "Adavus, items, choreography",
    },
    { title: "Theory", minutes: 15, note: "Oral + written knowledge" },
  ];

  const theoryProgression = [
    {
      year: "Year 1",
      details:
        "Intro to Asamyukta Hastas, Pāda Bhedas, leg postures, head movements, basic theory.",
    },
    {
      year: "Year 2",
      details: "Samyukta Hastas, eye & neck movements, expanded theory.",
    },
    {
      year: "Year 3",
      details:
        "Apply hand gestures in Shlokas; intro to written theory (fill blanks, MCQ, match, short notes).",
    },
    {
      year: "Year 4 onwards",
      details:
        "Formal written exams; long & medium questions; deeper study (Natya Shastra, Abhinaya Darpanam).",
    },
  ];
  return (
    <section className="py-10 md:py-16 scroll-mt-20" id="format">
      <div className={container}>
        <div className="grid md:grid-cols-[28%_70%] gap-10 items-center">
          <img
            src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755586892/ab2_gkljyb.jpg"
            alt=""
            className=" rounded-2xl f-fit"
          />
          <div className="">
            <div className="rounded-2xl">
              <div className="flex items-center gap-2 text-2xl text-slate-700 font-bold font-['Cinzel'] mt-2 mb-5 mx-3">
                <ScrollText className="h-6 w-6 " />
                Theory Progression
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mx-1">
                {theoryProgression.map((t, i) => (
                  <div
                    key={i}
                    className="rounded-xl border p-4 border-orange-200 bg-white/90  hover:bg-orange-400/70 group hover:scale-105 duration-300 "
                  >
                    <div className="text-sm font-semibold text-amber-700 group-hover:text-white">
                      {t.year}
                    </div>
                    <p className="group-hover:text-white text-slate-600 mt-1 text-sm">
                      {t.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className=" mx-3">
              <div className="flex items-center gap-2 font-['Cinzel'] text-2xl text-slate-700 font-bold mt-6 mb-5">
                <CalendarClock className="h-6 w-6" />
                Class Structure
              </div>
              <p>
                Each class runs for <strong>1 hour</strong>:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                {classFormat.map((c) => (
                  <li key={c.title}>
                    <span className="font-medium">{c.minutes} min</span> –{" "}
                    {c.title}
                    {c.note ? (
                      <span className="text-slate-500"> ({c.note})</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-sm">
                Notes & videos via <strong>Google Classroom</strong>; every step
                is recorded for practice.
              </div>
              <p className="text-sm mt-0.5">
                *Other university certification are also available on demand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LevelsBlock() {
  return (
    <section className="py-10 md:py-20 scroll-mt-20" id="levels">
      <div className={container}>
        <div className="flex items-center flex-col md:flex-row justify-center md:justify-between mb-6">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-['Cinzel'] mb-4">
              <span className="dance-ornament"> Course Levels & Syllabus</span>
            </h2>
          </motion.div>

          <Badge variant="secondary" className="rounded-full">
            Separate Batches per Level
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Levels.map((lvl) => (
            <motion.div
              key={lvl.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full rounded-2xl border border-orange-200  hover:scale-105 duration-300 relative pb-7">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge className="rounded-full bg-orange-400/80">
                      Level {lvl.order}
                    </Badge>
                    <span className="text-xs text-slate-500">
                      {lvl.duration}
                    </span>
                  </div>
                  <CardTitle className="mt-2">
                    <div className="text-lg md:text-xl">{lvl.title}</div>
                    <div className="text-slate-500 text-sm">{lvl.subtitle}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  {lvl.eligibility && (
                    <div className="text-xs text-slate-600">
                      <span className="font-medium">Eligibility:</span>{" "}
                      {lvl.eligibility}
                    </div>
                  )}
                  <ul className="space-y-2 text-sm text-slate-700">
                    {lvl.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <BadgeCheck className="h-4 w-4 mt-0.5 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs text-slate-500 pt-2">
                    <strong>Certification:</strong> {lvl.certificate}
                  </div>
                  <div className="pt-2 flex gap-3  absolute bottom-5">
                    <Button
                      asChild
                      className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    >
                      <Link href={lvl.ctaHref}>Enroll Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl border border-orange-200 duration-300"
                    >
                      <Link href={`booking-form?class=trial-${lvl.id}`}>
                        Book Trial
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  return (
    <section className="pb-12 md:pb-16 md:flex hidden">
      <div className={container}>
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-['Cinzel'] ">
            <span className="dance-ornament"> Quick Comparison</span>
          </h2>
        </motion.div>
        <div className=" overflow-x-auto bg-white px-1 rounded-xl">
          <table className="min-w-full text-sm border-collapse ">
            <thead>
              <tr className="bg-orange-600/50 text-slate-700">
                <th className="p-3 text-left">Level</th>
                <th className="p-3 text-left">Duration</th>
                <th className="p-3 text-left">Focus Highlights</th>
                <th className="p-3 text-left">Certificate</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {Levels.map((lvl, i) => (
                <tr
                  key={lvl.id}
                  className={`${
                    i % 2 != 0 ? "bg-slate-200/90" : "bg-white"
                  } hover:bg-orange-400/40 duration-300`}
                >
                  <td className="p-3 font-medium">{lvl.title}</td>
                  <td className="p-3">{lvl.duration}</td>
                  <td className="p-3">
                    {lvl.focus.slice(0, 2).join(" • ")}
                    {lvl.focus.length > 2 ? "…" : ""}
                  </td>
                  <td className="p-3">
                    {lvl.certificate.replace("Certificate", "").trim()}
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Link
                        href={lvl.ctaHref}
                        className="px-3 py-1 rounded-md bg-amber-600 text-white hover:bg-amber-700"
                      >
                        Enroll
                      </Link>
                      <Link
                        href={`booking-form?class=trial-${lvl.id}`}
                        className="px-3 py-1 rounded-md border"
                      >
                        Trial
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function Arangetram() {
  const arangetramPoints = {
    eligibility: [
      "Between Visharad Pratham & Visharad Purna, or when Guru certifies readiness.",
    ],
    Prerequisites: [
      "Strong Adavu technique, consistent tālam control, performance experience, disciplined practice, and attendance.",
    ],
    rubric: [
      "Technique: clarity of adavus, araimandi, balance",
      "Rhythm & memory: jatis, korvais, teermanams",
      "Abhinaya: expressive depth, lyric understanding",
      "Stamina & stage presence: 45–90 min solo",
      "Rehearsal discipline & professionalism",
    ],
    repertoire: [
      "Pushpanjali / Alarippu",
      "Jatiswaram",
      "Shabdam / Padam / Javali / Keerthanam",
      "Varnam (core)",
      "Tillana & Mangalam",
    ],
    pathway: [
      "Curation & planning (items, theme, costumes)",
      "Technique polishing with weekly/fortnightly reviews",
      "Mock arangetrams (1–2 run-throughs)",
      "Stagecraft workshops: entries, cues, audience connect",
      "Orchestra rehearsals / track production",
    ],
  };

  return (
    <>
      <section className="py-10 md:py-16 scroll-mt-20" id="arangetram">
        <div className={container}>
          <div className="grid lg:grid-cols-3 gap-6 text-gray-600">
            <div className="rounded-2xl lg:col-span-2 px-3  border border-orange-200 py-5">
              <div className="flex items-center gap-2 text-2xl font-bold font-['Cinzel'] mb-5 mx-1">
                <Music className="h-6 w-6" />
                Arangetram at Nritya Gurukul
              </div>

              <div className="space-y-4 text-slate-700 mx-2">
                <p>
                  The formal solo debut presenting the full Bharatanatyam Margam
                  with live or track-based accompaniment. A 9–12 month guided
                  pathway from curation to stage.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl border p-4 bg-white">
                    <div className="font-medium">Eligibility</div>
                    <p className="text-sm text-slate-600 mt-0.5">
                      {arangetramPoints.eligibility}
                    </p>
                    <div className="font-medium mt-2.5">Prerequisites</div>
                    <p className="text-sm text-slate-600 mt-0.5">
                      {arangetramPoints.Prerequisites}
                    </p>
                  </div>
                  <div className="rounded-xl border p-4 bg-white">
                    <div className="font-medium">Readiness Rubric</div>
                    <ul className="text-sm text-slate-600 mt-1 list-disc ml-5">
                      {arangetramPoints.rubric.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4 bg-white">
                    <div className="font-medium">Typical Repertoire</div>
                    <ul className="text-sm text-slate-600 mt-1 list-disc ml-5">
                      {arangetramPoints.repertoire.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border p-4 bg-white">
                    <div className="font-medium">Training Pathway</div>
                    <ul className="text-sm text-slate-600 mt-1 list-disc ml-5">
                      {arangetramPoints.pathway.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-2 text-xs text-slate-500">
                  Includes: cue sheets for sound/lights, venue tech-run,
                  aesthetics guidance (costume, jewellery, makeup), program
                  notes, and professional photo-video options.
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    className="rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                  >
                    <Link href="booking-form?class=arangetram" className="py-10 sm:py-3">
                      Apply for Arangetram Training
                    </Link>
                  </Button>

                  <ArangetramForm />
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 h-full rounded-2xl mx-2 px-3 border border-orange-200 py-5">
              <div className="flex items-center font-['Cinzel'] gap-2 text-2xl font-bold mb-5 mx-1">
                <School className="h-6 w-6" />
                Academics & Support
              </div>

              <div className="space-y-3 text-sm text-slate-600 mx-2">
                <p>
                  <strong>Program Notes:</strong> raga–tāla, lyric meaning for
                  each item
                </p>
                <p>
                  <strong>Documentation:</strong> professional photography &
                  video archiving
                </p>
                <p>
                  <strong>Certificates:</strong> Nritya Gurukul felicitation
                  (ABGMVM exams continue separately)
                </p>
                <p>
                  <strong>Logistics:</strong> personalized timetable, Google
                  Classroom, sahitya notations, practice videos
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dg8mtv2kz/image/upload/v1755666072/g2_cw2bvs.jpg"
                alt=""
                className=" rounded-2xl p-2  mt-5"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Fees() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-orange-500 to-orange-500/70 text-white">
      <div className={`${container} grid md:grid-cols-3 gap-6 items-center`}>
        <div className="md:col-span-2">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Ready to begin your Bharatanatyam journey?
          </h3>
          <p className="mt-2">
            Fees vary by level and batch. Get the latest schedule and fee
            structure instantly.
          </p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-2xl text-black hover:font-semibold duration-200"
          >
            <Link href="/booking-form?class=trial">Book a Free Trial</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-2xl  hover:font-semibold duration-200"
          >
            <Link href="/requestfees">Request Fees</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function FaqBlock() {
  return (
    <section className="py-12 md:py-20 scroll-mt-20" id="faqs">
      <div className={container}>
        <h3 className="text-xl md:text-2xl font-semibold">FAQs</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {Faqs.map((faq, id) => (
            <Card
              className="rounded-2xl hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-orange-500/70 hover:to-orange-600/60 group hover:text-white"
              key={id + "faq"}
            >
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 group-hover:text-white text-sm duration-300">
                {faq.answer}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
