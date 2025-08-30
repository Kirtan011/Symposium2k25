"use client";

import React, { useState } from "react";
import "../globals.css";
import {
  SymposiumHeadCard,
  symposiumHeads,
} from "@/components/TeamCards/SymposiumHeadCard";
import {
  FacultyHeadCard,
  facultyHeads,
} from "@/components/TeamCards/FacultyHeadCard";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      {/* Symposium Heads Section */}
      <section className="sm:ml-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:pt-35 pt-16">
        {/* Hero Section */}
        <div className="relative px-4 sm:px-8 py-6 flex justify-center sm:block">
          <div className="bg-gradient-to-r from-orange-50 via-white rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-6 text-center sm:text-left max-w-lg w-full">
            <h1 className="fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-950 leading-tight">
              Meet The{" "}
              <span className="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 bg-clip-text text-transparent">
                Team
              </span>
              <br /> Behind Symposium 2K25
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="px-4 sm:pr-16 sm:col-span-2 sm:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {symposiumHeads.slice(0, 4).map((contact, id) => (
              <SymposiumHeadCard key={id} {...contact} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="sm:ml-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:pt-35 pt-16 ">
        {/* Hero Section */}
        <div className="relative px-4 sm:px-8 py-6 flex justify-center sm:block sm:order-2 order-1  ">
          <div className="bg-gradient-to-r from-white to-orange-50 rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-6 text-center sm:text-left max-w-lg w-full">
            <h1 className="fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-950 leading-tight">
              <span className="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 bg-clip-text text-transparent">
                Faculty Coordinators
              </span>
              <br /> for Symposium 2K25
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="px-4 sm:pr-16 sm:col-span-2 sm:mt-8 sm:order-1 order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {facultyHeads.slice(0, 4).map((contact, id) => (
              <FacultyHeadCard key={id} {...contact} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
