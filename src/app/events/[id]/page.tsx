import {
  techEventData,
  nonTechEventData,
} from "@/components/EventCards/EventCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "@/app/globals.css";

const allEvents = [...techEventData, ...nonTechEventData];

// This function tells Next.js which dynamic paths to pre-render.
// It will be executed at build time.
export async function generateStaticParams() {
  return allEvents.map((event) => ({
    id: event.id,
  }));
}

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Access params.id directly
  const event = allEvents.find((e) => e.id === params.id);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-2xl">
        🚨 Event not found
      </div>
    );
  }

  return (
    <main className="pt-24 px-6 text-white max-w-3xl mx-auto animate-fadeInSlideUp">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-orange">
        {event.id}
      </h1>

      <div className="relative border-2 w-full h-130 mb-6">
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

      <section className="border bg-black border-gray-800 p-6 mb-8 shadow-md">
        <h2 className="text-2xl font-bold mb-4">📜 Rules & Regulations</h2>
        <ul className="space-y-2 text-gray-300">
          {event.rules?.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </section>

      <div className="flex justify-center">
        <a href={event.formLink} target="_blank">
          <div className="relative rounded-lg w-full p-[1px] bg-[conic-gradient(from_var(--angle),#000e00,white,powderblue,orange,#000000)] hover:scale-105 transition-all transform animate-gradient-rotate">
            <Button className="w-full rounded-lg cursor-pointer font-bold bg-black hover:bg-black text-white shadow-md">
              Register Now
            </Button>
          </div>
        </a>
      </div>
    </main>
  );
}
