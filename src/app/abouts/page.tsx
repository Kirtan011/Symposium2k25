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
import { HeadofDepartmentCard } from "@/components/TeamCards/HeadofDepartment";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="animate-fadeInSlideUp">
      <section className="sm:ml-50 mb-8 sm:mb-24 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:pt-32 pt-24">
        <div className="relative  px-4 sm:px-8 py-6 flex justify-center sm:block">
          <div className="bg-gradient-to-r from-gray-500 via-gray-900/70  rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-6 text-center sm:text-left max-w-lg w-full">
            <h1 className="fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Head
              </span>{" "}
              of E&C Department
            </h1>
          </div>
        </div>

        <div className="px-4 left-1/2 sm:pr-16 sm:col-span-1 sm:mt-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <HeadofDepartmentCard />
          </div>
        </div>
      </section>

      <hr className="my-12 border-t-2 border-gray-600 opacity-50" />

      <section className="sm:ml-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:pt-8 pt-8">
        <div className="relative px-4 sm:px-8 py-6 flex justify-center sm:block">
          <div className="bg-gradient-to-tr from-gray-500 via-gray-900/70  rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-6 text-center sm:text-left max-w-lg w-full">
            <h1 className="fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Meet The{" "}
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Team
              </span>
              <br /> Behind Symposium 2K25
            </h1>
          </div>
        </div>

        <div className="px-4 sm:pr-16 sm:col-span-2 sm:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {symposiumHeads.slice(0, 4).map((contact, id) => (
              <SymposiumHeadCard key={id} {...contact} />
            ))}
          </div>
        </div>
      </section>

      <hr className="my-12 border-t-2 border-gray-600 opacity-50" />

      <section className="sm:ml-4  grid grid-cols-1 sm:grid-cols-3 gap-6 sm:pt-16 pt-0">
        <div className="relative px-4 sm:px-8 py-6 flex justify-center sm:block sm:order-2 order-1">
          <div className="bg-gradient-to-r  via-gray-900/70 to-gray-500 rounded-[35%_100%_85%_100%_/_100%_78%_100%_90%] shadow-xl sm:shadow-2xl p-6 text-center sm:text-left max-w-lg w-full">
            <h1 className="fira-sans-semibold-italic text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Faculty Coordinators
              </span>
              <br /> for Symposium 2K25
            </h1>
          </div>
        </div>

        <div className="px-4 sm:mb-24 sm:pr-16 sm:col-span-2 sm:mt-8 sm:order-1 order-2">
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
