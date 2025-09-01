"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "#000000" } }, // dark gray bg
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 1,
                },
              },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: "#e0e0e0" }, // light gray dots
            links: {
              color: "#a0a0a0", // soft light gray connection lines
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0.8,
            },
            move: {
              enable: true,
              speed: 0.8,
              outModes: { default: "out" },
            },
            number: {
              density: { enable: true },
              value: 60,
            },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
            shadow: {
              enable: false,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
