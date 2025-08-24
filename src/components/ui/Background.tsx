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
          background: { color: { value: "#0d0d0d" } }, // dark bg looks nice
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" }, // 👈 grab instead of repulse
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: {
                distance: 150, // how far the grab effect works
                links: {
                  opacity: 0.5, // line opacity when cursor is near
                },
              },
              push: { quantity: 2 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 140,
              enable: true,
              opacity: 0.2,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "out" }, // smoother than bounce
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 50,
            },
            opacity: { value: 0.8 },
            shape: { type: "circle" },
            size: { value: { min: 0.5, max: 1 } },
            shadow: {
              enable: true,
              blur: 5,
              color: "#ffffff",
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
