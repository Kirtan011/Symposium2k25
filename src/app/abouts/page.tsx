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
      <section className="grid sm:grid-cols-3 gap-1 sm:pt-30 pt-30">
        {/* Hero Section */}
        <div className="relative px-4 sm:px-8 py-8 ">
          <div className="bg-gradient-to-r from-orange-50 via-white rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-5 sm:p-3 text-center sm:text-left max-w-2xl ">
            <h1 className=" fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-950 leading-tight">
              Meet The{" "}
              <span className="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 bg-clip-text text-transparent">
                Team
              </span>
              <br /> Behind Symposium 2K25
            </h1>
          </div>
        </div>

        {/* Team Section */}
        <div className="p-6 sm:col-span-2 top-32 h-[85vh]  scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 max-w-3xl mx-auto">
            {symposiumHeads.slice(0, 4).map((contact, id) => (
              <SymposiumHeadCard key={id} {...contact} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-1 sm:pt-10 pt-30">
        {/* Team Section */}
        <div className="p-6 sm:col-span-2 top-32 h-[85vh] scrollbar-hide order-2 sm:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-6 max-w-3xl mx-auto">
            {facultyHeads.slice(0, 4).map((contact, id) => (
              <FacultyHeadCard key={id} {...contact} />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative px-4 sm:px-8 py-8 order-1 sm:order-2">
          <div className="bg-gradient-to-r from-white to-orange-50 rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-5 sm:p-3 text-center sm:text-left max-w-2xl ">
            <h1 className=" fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-950 leading-tight">
              <span className="bg-gradient-to-r from-amber-900 via-amber-700 to-amber-500 bg-clip-text text-transparent">
                Faculty Coordinators
              </span>
              <br /> for Symposium 2K25
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
