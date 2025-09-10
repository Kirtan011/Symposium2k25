"use client"; // required if you want to use React.use

import * as React from "react";
import {
  techEventData,
  nonTechEventData,
} from "@/components/EventCards/EventCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const allEvents = [...techEventData, ...nonTechEventData];

type Props = {
  params: { id: string } | Promise<{ id: string }>;
};

export default function EventDetailPage({ params }: Props) {
  const { id } = React.use(params);

  const event = allEvents.find((e) => e.id.toLowerCase() === id.toLowerCase());

  if (!event) {
    return (
      <div className="text-white text-center mt-20">🚨 Event not found</div>
    );
  }

  return (
    <main className="pt-24 px-6 text-white max-w-3xl mx-auto animate-fadeInSlideUp">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-orange">
        {event.id}
      </h1>

      <div className="relative border-2 w-full h-[32rem] mb-6">
        <Image
          src={event.img}
          alt={`Poster for ${event.id}`}
          fill
          className="object-contain rounded-xl shadow-lg"
        />
      </div>

      {event.tagline && (
        <p className="border-2 text-2xl font-semibold text-gray-300 mb-8 text-center">
          {event.tagline}
        </p>
      )}

      <section className="border bg-black border-gray-800 p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">📜 Rules & Regulations</h2>
        <ul className="space-y-2 text-gray-300">
          {event.rules?.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </section>

      <div className="flex justify-center">
        <a href={event.formLink} target="_blank" rel="noopener noreferrer">
          <div className="w-full p-[1px] rounded-lg bg-[conic-gradient(from_var(--angle),#000e00,white,powderblue,orange,#000000)] hover:scale-105 transition-all transform animate-gradient-rotate">
            <Button className="w-full rounded-lg cursor-pointer font-bold bg-black hover:bg-black text-white shadow-md">
              Register Now
            </Button>
          </div>
        </a>
      </div>
    </main>
  );
}
