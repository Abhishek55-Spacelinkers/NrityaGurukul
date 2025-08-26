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
