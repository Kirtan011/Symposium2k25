"use client";

import { nonTechEventData } from "@/components/EventCards/EventCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const event = nonTechEventData.find((e) => e.id === "MastiManch");

export default function CodeVedaPage() {
  if (!event)
    return (
      <div className="text-white text-center mt-20">🚨 Event not found</div>
    );

  return (
    <main className="pt-24 px-6 text-white max-w-3xl mx-auto animate-fadeInSlideUp">
      <h1 className="text-3xl border-2 md:text-4xl font-extrabold text-center mb-6 text-orange">
        {event.id}
      </h1>

      <div className="relative border-2 w-full h-[32rem] mb-6">
        <Image
          src={event.img}
          alt={event.id}
          fill
          className="object-contain rounded-xl shadow-lg"
        />
      </div>

      {event.tagline && (
        <p className="border-2 text-2xl font-semibold text-gray-300 mb-8 text-center">
          {event.tagline}
        </p>
      )}

      <section className="border border-gray-800 bg-black/65 backdrop-blur-2xl p-6 mb-8 shadow-md ">
        <h2 className="text-2xl font-bold mb-4">📜 Rules & Regulations</h2>
        <ul className="space-y-2 text-gray-300">
          {event.rules?.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </section>

      <div className="flex justify-center mb-6">
        <a href={event.formLink} target="_blank">
          <div className="w-full p-[1px] rounded-lg bg-[conic-gradient(from_var(--angle),#000e00,white,powderblue,orange,#000000)] hover:scale-105 transition-all transform animate-gradient-rotate">
            <Button className="w-full rounded-lg cursor-pointer font-bold bg-black hover:bg-black text-white shadow-md">
              Register Now
            </Button>
          </div>
        </a>
      </div>

      <div className="flex justify-center">
        <Link href="/events">
          <button className="bg-black border-2 p-1 cursor-pointer text-white  w-full sm:w-64">
            Back to Events
          </button>
        </Link>
      </div>
    </main>
  );
}
