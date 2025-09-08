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
    // FIX 1: Use min-h-screen to ensure the div covers the full viewport height.
    // FIX 2: Change the gradient start color from 'gray-600' to a pure black like 'black' or a near-black like 'gray-950' to avoid any bluish tint.
    <div>
      {/* Particles on top */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: "#000000" } }, // transparent so gradient shows
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: {
                distance: 200,
                links: { opacity: 1 },
              },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0.8,
            },
            move: {
              enable: true,
              speed: 0.8,
              outModes: { default: "bounce" },
            },
            number: { density: { enable: true }, value: 100 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
