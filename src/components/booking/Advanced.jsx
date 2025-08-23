"use client";

import React from "react";

const Advanced = () => {
  return (
    <div className="w-[80%] mx-auto h-fit pb-5 text-xs">
      {/* Intro Paragraph */}
      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
        Designed for{" "}
        <span className="font-semibold">experienced Bharatanatyam dancers</span>
        , this program delves into{" "}
        <span className="font-semibold">advanced choreography</span>,{" "}
        <span className="font-semibold">Nattuvangam</span>, and preparation for{" "}
        <span className="font-semibold">solo performances (Arangetram)</span>.
        It sharpens technique, stamina, and expressive artistry for stage
        mastery.
      </p>

      {/* Structure */}
      <h3 className="text-base font-semibold text-gray-800 mb-3">
        The Advanced Masterclass is structured in two levels:
      </h3>

      {/* Level 1 */}
      <div className="mb-2">
        <h4 className="text-sm font-semibold text-orange-600">
          Visharad Pratham (Graduate – Part 1)
        </h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            <span className="font-medium">Duration:</span> 1 year
          </li>
          <li>
            <span className="font-medium">Focus:</span> Varnam (central and
            elaborate item), expressive storytelling (Abhinaya), stamina,
            technique
          </li>
          <li>
            <span className="font-medium">Certification:</span> ABGMVM Visharad
            Pratham Certificate
          </li>
        </ul>
      </div>

      {/* Level 2 */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-orange-600">
          Visharad Purna (Graduate – Part 2)
        </h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            <span className="font-medium">Duration:</span> 1 year
          </li>
          <li>
            <span className="font-medium">Focus:</span> Full Margam repertoire,
            choreography, Nattuvangam, deeper Abhinaya, preparation for
            Arangetram (solo debut)
          </li>
          <li>
            <span className="font-medium">Certification:</span> ABGMVM Visharad
            Purna Certificate (Graduate Diploma in Bharatanatyam)
          </li>
        </ul>
      </div>

      {/* Arangetram */}
      <div>
        <h4 className="text-sm font-semibold text-orange-600">
          Arangetram at Nritya Gurukul (Solo Debut)
        </h4>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            <span className="font-medium">What it is:</span> Formal solo debut
            showcasing the complete Bharatanatyam Margam with live musical
            accompaniment.
          </li>
          <li>
            <span className="font-medium">When:</span> Typically between
            Visharad Pratham and Visharad Purna, upon Guru’s approval.
          </li>
          <li>
            <span className="font-medium">Prerequisites:</span> Strong Adavu
            technique, tālam control, stage experience, disciplined practice,
            and attendance.
          </li>
          <li>
            <span className="font-medium">Readiness assessed on:</span> clarity
            of adavus, rhythm & memory, balance in araimandi, expressive depth
            in Abhinaya, and stage confidence.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advanced;
