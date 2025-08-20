// app/courses/page.tsx (or use as a standalone component)
// TailwindCSS + shadcn/ui + Framer Motion + lucide-react

'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, School, CalendarClock, ScrollText, Sparkles, Music, PlayCircle, BadgeCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


const LEVELS = [
  {
    id: 'prarambhik',
    order: 1,
    title: 'Prarambhik',
    subtitle: 'Foundation Level',
    duration: '1 Year',
    eligibility: 'Minimum 7 years of age',
    focus: ['Posture & araimandi basics', 'Rhythm awareness', 'Foundational Adavus'],
    certificate: 'ABGMVM Prarambhik Certificate',
    ctaHref: '/enroll?level=prarambhik'
  },
  {
    id: 'praveshika-pratham',
    order: 2,
    title: 'Praveshika Pratham',
    subtitle: 'Preliminary – Part 1',
    duration: '1 Year',
    focus: ['Advanced Adavus', 'Footwork & stamina', 'Rhythm precision'],
    certificate: 'ABGMVM Praveshika Pratham Certificate',
    ctaHref: '/enroll?level=praveshika-pratham'
  },
  {
    id: 'praveshika-purna',
    order: 3,
    title: 'Praveshika Purna',
    subtitle: 'Preliminary – Part 2',
    duration: '1 Year',
    focus: ['Alarippu', 'Pushpanjali', 'Stage skills & confidence'],
    certificate: 'ABGMVM Praveshika Purna Certificate',
    ctaHref: '/enroll?level=praveshika-purna'
  },
  {
    id: 'madhyama-pratham',
    order: 4,
    title: 'Madhyama Pratham',
    subtitle: 'Intermediate – Part 1',
    duration: '1 Year',
    focus: ['Shabdam', 'Jatiswaram', 'Alarippu in varied jatis'],
    certificate: 'ABGMVM Madhyama Pratham Certificate',
    ctaHref: '/enroll?level=madhyama-pratham'
  },
  {
    id: 'madhyama-purna',
    order: 5,
    title: 'Madhyama Purna',
    subtitle: 'Intermediate – Part 2',
    duration: '1 Year',
    focus: ['Tillana', 'Advanced rhythm', 'Stage command & grace'],
    certificate: 'ABGMVM Madhyama Purna Certificate',
    ctaHref: '/enroll?level=madhyama-purna'
  },
  {
    id: 'visharad-pratham',
    order: 6,
    title: 'Visharad Pratham',
    subtitle: 'Graduate – Part 1',
    duration: '1 Year',
    focus: ['Varnam (central item)', 'Expressive storytelling (Abhinaya)', 'Stamina & technique'],
    certificate: 'ABGMVM Visharad Pratham Certificate',
    ctaHref: '/enroll?level=visharad-pratham'
  },
  {
    id: 'visharad-purna',
    order: 7,
    title: 'Visharad Purna',
    subtitle: 'Graduate – Part 2',
    duration: '1 Year',
    focus: ['Full Margam repertoire', 'Choreography & Nattuvangam', 'Arangetram preparation'],
    certificate: 'ABGMVM Visharad Purna Certificate (Graduate Diploma in Bharatanatyam)',
    ctaHref: '/enroll?level=visharad-purna'
  }
]

const highlights = [
  '7-year structured course with ABGMVM certification',
  'Separate batches for each exam level (Prarambhik to Visharad Purna)',
  'Nationally recognized certification at every stage',
  '2–3 stage performances annually for all students',
  'Training offered in both Online & Offline modes',
  'Google Classrooms for notes, references & video access',
  'Personalized attention in limited batch sizes',
  'Guidance for Arangetram & advanced stage presentations'
]

const theoryProgression = [
  {
    year: 'Year 1',
    details:
      'Intro to Asamyukta Hastas, Pāda Bhedas, leg postures, head movements, basic theory.'
  },
  {
    year: 'Year 2',
    details:
      'Samyukta Hastas, eye & neck movements, expanded theory.'
  },
  {
    year: 'Year 3',
    details:
      'Apply hand gestures in Shlokas; intro to written theory (fill blanks, MCQ, match, short notes).'
  },
  {
    year: 'Year 4 onwards',
    details:
      'Formal written exams; long & medium questions; deeper study (Natya Shastra, Abhinaya Darpanam).'
  }
]

const classFormat = [
  { title: 'Exercises & warm-up', minutes: 15 },
  { title: 'Practical dance', minutes: 30, note: 'Adavus, items, choreography' },
  { title: 'Theory', minutes: 15, note: 'Oral + written knowledge' }
]

const arangetramPoints = {
  eligibility:
    'Between Visharad Pratham & Visharad Purna, or when Guru certifies readiness.',
  rubric: [
    'Technique: clarity of adavus, araimandi, balance',
    'Rhythm & memory: jatis, korvais, teermanams',
    'Abhinaya: expressive depth, lyric understanding',
    'Stamina & stage presence: 45–90 min solo',
    'Rehearsal discipline & professionalism'
  ],
  repertoire: ['Pushpanjali / Alarippu', 'Jatiswaram', 'Shabdam / Padam / Javali / Keerthanam', 'Varnam (core)', 'Tillana & Mangalam'],
  pathway: [
    'Curation & planning (items, theme, costumes)',
    'Technique polishing with weekly/fortnightly reviews',
    'Mock arangetrams (1–2 run-throughs)',
    'Stagecraft workshops: entries, cues, audience connect',
    'Orchestra rehearsals / track production'
  ]
}

// -----------------------------
// UI HELPERS
// -----------------------------

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// -----------------------------
// PAGE
// -----------------------------

export default function NrityaGurukulCoursesPage() {
  return (
    <main className="min-h-screen ">
      {/* HERO */}
      <section className="border-b">
        <div className={`${container} py-12 md:py-20`}>
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-amber-700 ring-1 ring-amber-200">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Follow the 7-year certified course structure of Akhil Bharatiya Gandharva Mahavidyalaya Mandal, Mumbai (ABGMVM)</span>
            </div>
            <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
              Courses at <span className="text-amber-600">Nritya Gurukul</span>
            </h1>
            <p className="mt-4 max-w-3xl text-slate-600 text-base md:text-lg">
              A step-by-step journey from foundation to mastery in Bharatanatyam—
              with nationally recognized certification, annual stage exposure, and
              guided preparation for Arangetram.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <Link href="/trial">Book a Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl shadow-2xl border">
                <Link href="#levels">Explore Course Levels</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-10 md:py-14">
        <div className={container}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="h-full rounded-2xl shadow-sm">
                  <CardContent className="p-4 md:p-6 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <p className="text-slate-700 text-sm md:text-base">{h}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASS FORMAT */}
      <section className="py-10 md:py-16 border-y" id="format">
        <div className={container}>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <div className="md:col-span-1">
              <Card className="h-full rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5" />
                    Class Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>Each class runs for <strong>1 hour</strong>:</p>
                  <ul className="list-disc ml-5 space-y-2">
                    {classFormat.map((c) => (
                      <li key={c.title}>
                        <span className="font-medium">{c.minutes} min</span> – {c.title}
                        {c.note ? <span className="text-slate-500"> ({c.note})</span> : null}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-sm">
                    Notes & videos via <strong>Google Classroom</strong>; every step is recorded for practice.
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Card className="h-full rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ScrollText className="h-5 w-5" />
                    Theory Progression
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  {theoryProgression.map((t, i) => (
                    <div key={i} className="rounded-xl border p-4">
                      <div className="text-sm font-semibold text-amber-700">{t.year}</div>
                      <p className="text-slate-600 mt-1 text-sm">{t.details}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* LEVELS GRID */}
      <section className="py-12 md:py-20" id="levels">
        <div className={container}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Course Levels & Syllabus</h2>
            <Badge variant="secondary" className="rounded-full">Separate Batches per Level</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEVELS.map((lvl) => (
              <motion.div
                key={lvl.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full rounded-2xl shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge className="rounded-full">Level {lvl.order}</Badge>
                      <span className="text-xs text-slate-500">{lvl.duration}</span>
                    </div>
                    <CardTitle className="mt-2">
                      <div className="text-lg md:text-xl">{lvl.title}</div>
                      <div className="text-slate-500 text-sm">{lvl.subtitle}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {lvl.eligibility && (
                      <div className="text-xs text-slate-600">
                        <span className="font-medium">Eligibility:</span> {lvl.eligibility}
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
                    <div className="pt-2 flex gap-3">
                      <Button asChild className="rounded-xl">
                        <Link href={lvl.ctaHref}>Enroll Now</Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-xl">
                        <Link href={`/trial?level=${lvl.id}`}>Book Trial</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-12 md:py-16  border-y">
        <div className={container}>
          <h3 className="text-xl md:text-2xl font-semibold">Quick Comparison</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full text-sm border-collapse ">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Focus Highlights</th>
                  <th className="p-3 text-left">Certificate</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {LEVELS.map((lvl, i) => (
                  <tr key={lvl.id}>
                    <td className="p-3 font-medium">{lvl.title}</td>
                    <td className="p-3">{lvl.duration}</td>
                    <td className="p-3">{lvl.focus.slice(0, 2).join(' • ')}{lvl.focus.length > 2 ? '…' : ''}</td>
                    <td className="p-3">{lvl.certificate.replace('Certificate', '').trim()}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Link href={lvl.ctaHref} className="px-3 py-1 rounded-md bg-amber-600 text-white hover:bg-amber-700">Enroll</Link>
                        <Link href={`/trial?level=${lvl.id}`} className="px-3 py-1 rounded-md border">Trial</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ARANGETRAM */}
      <section className="py-12 md:py-20" id="arangetram">
        <div className={container}>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5" />
                    Arangetram at Nritya Gurukul
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-700">
                  <p>
                    The formal solo debut presenting the full Bharatanatyam Margam with live or track-based accompaniment. A 9–12 month guided pathway from curation to stage.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="rounded-xl border p-4">
                      <div className="font-medium">Eligibility</div>
                      <p className="text-sm text-slate-600 mt-1">{arangetramPoints.eligibility}</p>
                    </div>
                    <div className="rounded-xl border p-4">
                      <div className="font-medium">Readiness Rubric</div>
                      <ul className="text-sm text-slate-600 mt-1 list-disc ml-5">
                        {arangetramPoints.rubric.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border p-4">
                      <div className="font-medium">Typical Repertoire</div>
                      <ul className="text-sm text-slate-600 mt-1 list-disc ml-5">
                        {arangetramPoints.repertoire.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border p-4">
                      <div className="font-medium">Training Pathway</div>
                      <ul className="text-sm text-slate-600 mt-1 list-disc ml-5">
                        {arangetramPoints.pathway.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-2 text-xs text-slate-500">
                    Includes: cue sheets for sound/lights, venue tech-run, aesthetics guidance (costume, jewellery, makeup), program notes, and professional photo-video options.
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button asChild className="rounded-xl">
                      <Link href="/apply/arangetram">Apply for Arangetram Training</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-xl">
                      <Link href="/contact?topic=arangetram">Request Budget & Inclusions</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <Card className="h-full rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5" />
                    Academics & Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <p><strong>Program Notes:</strong> raga–tāla, lyric meaning for each item</p>
                  <p><strong>Documentation:</strong> professional photography & video archiving</p>
                  <p><strong>Certificates:</strong> Nritya Gurukul felicitation (ABGMVM exams continue separately)</p>
                  <p><strong>Logistics:</strong> personalized timetable, Google Classroom, sahitya notations, practice videos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FEES/CTA */}
      <section className="py-12 md:py-20 bg-amber-50 border-t">
        <div className={`${container} grid md:grid-cols-3 gap-6 items-center`}>
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to begin your Bharatanatyam journey?</h3>
            <p className="mt-2 text-slate-700">Fees vary by level and batch. Get the latest schedule and fee structure instantly.</p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <Button asChild size="lg" className="rounded-2xl">
              <Link href="/trial">Book a Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl">
              <Link href="/contact?topic=fees">Request Fees</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20">
        <div className={container}>
          <h3 className="text-xl md:text-2xl font-semibold">FAQs</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Online or Offline—what should I choose?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                Both modes follow the same syllabus and assessments. Choose based on commute, schedule, and comfort. Stage opportunities are provided to all students.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Can I switch batches or levels mid-year?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                Batch changes are subject to availability. Level promotion is based on Guru’s assessment and ABGMVM exam clearance.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Do you provide notes and recordings?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                Yes—Google Classroom access includes theory notes, sahitya meanings, and practice videos for every step taught.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>What is the exam structure?</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                From Year 4 onwards, written exams include one long question (20 marks) and 5 medium questions, alongside practical assessments per level.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

// -----------------------------
// OPTIONAL: SEO (use in app/courses/metadata.ts or page.tsx in Next 13+)
// -----------------------------
// export const metadata = {
//   title: 'Courses at Nritya Gurukul | ABGMVM Certified Bharatanatyam Levels',
//   description:
//     'Explore Prarambhik to Visharad Purna: a 7-year, ABGMVM-certified Bharatanatyam journey with stage exposure, Google Classroom support, and Arangetram guidance.'
// }
