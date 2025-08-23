"use client";

import React from "react";

const Beginner = () => {
  return (
      <div className="w-[80%] mx-auto h-fit pb-5 text-xs">
        
        {/* Intro Paragraph */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm">
          Perfect for <span className="font-semibold">absolute beginners</span>,
          this course is designed to build a strong foundation in Bharatanatyam.
          Students will start with the{" "}
          <span className="font-semibold">fundamental Adavus (steps)</span>,{" "}
          <span className="font-semibold">Hastas (hand gestures)</span>, and{" "}
          <span className="font-semibold">basic theory</span>, gradually
          progressing towards stage-ready performance skills.
        </p>

        {/* Structure */}
        <h3 className="text-base font-semibold text-gray-800 mb-3">
          The Beginner Course is structured in three levels:
        </h3>

        {/* Level 1 */}
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-orange-600">
            Prarambhik (Foundation Level)
          </h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              <span className="font-medium">Eligibility:</span> Minimum 7 years
              of age
            </li>
            <li>
              <span className="font-medium">Duration:</span> 1 year
            </li>
            <li>
              <span className="font-medium">Focus:</span> Posture, rhythm
              awareness, basic Adavus
            </li>
            <li>
              <span className="font-medium">Certification:</span> ABGMVM
              Prarambhik Certificate
            </li>
          </ul>
        </div>

        {/* Level 2 */}
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-orange-600">
            Praveshika Pratham (Preliminary – Part 1)
          </h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              <span className="font-medium">Duration:</span> 1 year
            </li>
            <li>
              <span className="font-medium">Focus:</span> Advanced Adavus,
              footwork, stamina & rhythm precision
            </li>
            <li>
              <span className="font-medium">Certification:</span> ABGMVM
              Praveshika Pratham Certificate
            </li>
          </ul>
        </div>

        {/* Level 3 */}
        <div>
          <h4 className="text-sm font-semibold text-orange-600">
            Praveshika Purna (Preliminary – Part 2)
          </h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              <span className="font-medium">Duration:</span> 1 year
            </li>
            <li>
              <span className="font-medium">Focus:</span> First Nṛtta items –
              Alarippu, Pushpanjali. Development of stage skills
            </li>
            <li>
              <span className="font-medium">Certification:</span> ABGMVM
              Praveshika Purna Certificate
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Beginner;
