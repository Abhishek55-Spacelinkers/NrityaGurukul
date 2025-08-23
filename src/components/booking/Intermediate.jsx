"use client";

import React from "react";

const Intermediate = () => {
  return (
    <div className="w-[80%] mx-auto h-fit pb-5 text-xs">
      {/* Intro Paragraph */}
      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
        Perfect for students with a{" "}
        <span className="font-semibold">basic knowledge of Bharatanatyam</span>.
        This program helps refine their skills through{" "}
        <span className="font-semibold">complex compositions</span>,{" "}
        <span className="font-semibold">Abhinaya (expressions)</span>, and{" "}
        <span className="font-semibold">performance techniques</span>, gradually
        preparing them for advanced stage presentations.
      </p>

      {/* Structure */}
      <h3 className="text-base font-semibold text-gray-800 mb-3">
        The Intermediate Program is structured in two levels:
      </h3>

      {/* Level 1 */}
      <div className="mb-2">
        <h4 className="text-sm font-semibold text-orange-600">
          Madhyama Pratham (Intermediate – Part 1)
        </h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            <span className="font-medium">Duration:</span> 1 year
          </li>
          <li>
            <span className="font-medium">Focus:</span> Shabdam, Jatiswaram,
            Alarippu in varied jatis (rhythmic cycles)
          </li>
          <li>
            <span className="font-medium">Certification:</span> ABGMVM Madhyama
            Pratham Certificate
          </li>
        </ul>
      </div>

      {/* Level 2 */}
      <div>
        <h4 className="text-sm font-semibold text-orange-600">
          Madhyama Purna (Intermediate – Part 2)
        </h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            <span className="font-medium">Duration:</span> 1 year
          </li>
          <li>
            <span className="font-medium">Focus:</span> Tillana, advanced rhythm
            mastery, stage command, and grace
          </li>
          <li>
            <span className="font-medium">Certification:</span> ABGMVM Madhyama
            Purna Certificate
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intermediate;
