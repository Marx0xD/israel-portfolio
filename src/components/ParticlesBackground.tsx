"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles-fullpage"
        options={{
          fullScreen: { enable: false }, // full screen disabled since div handles sizing
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: { enable: true },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 100, density: { enable: true } },
            color: { value: "#67e8f9" },
            shape: { type: ["circle", "triangle", "square"] },
            links: {
              enable: true,
              distance: 150,
              color: "#67e8f9",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 0.3, outModes: { default: "out" } },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.4 },
          },
          detectRetina: true,
        }}
      />

      {/* Gradient mask */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient-mask" />
    </div>
  );
}
