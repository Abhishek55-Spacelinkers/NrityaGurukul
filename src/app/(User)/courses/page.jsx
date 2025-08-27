import {
  Arangetram,
  Comparison,
  FaqBlock,
  Fees,
  Headcourse,
  LevelsBlock,
  Specification,
  TheoryProgression,
} from "@/components/Animation/Course";

export const metadata = {
  title: 'Courses | Nritya Gurukul',
  description:
    'Explore the courses of Nritya Gurukul. ',
  // openGraph: {
  //   title: 'Gallery | Nritya Gurukul',
  //   description:
  //     'Explore the vibrant gallery of Nritya Gurukul. Watch captivating Bharatanatyam performances and witness the talent of our students.',
  // },
};

export default function NrityaGurukulCoursesPage() {
  return (
    <main className="min-h-screen ">

      {/* HERO */}
      <Headcourse />

      {/* Specification */}
      <Specification />

      {/* CLASS FORMAT */}
      <TheoryProgression />

      {/* LEVELS GRID */}
      <LevelsBlock />

      {/* COMPARISON TABLE */}
      <Comparison />

      {/* ARANGETRAM */}
      <Arangetram />

      {/* FEES/CTA */}
      <Fees />

      {/* FAQ */}
      <FaqBlock />

    </main>
  );
}
