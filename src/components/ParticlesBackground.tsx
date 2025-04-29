"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


export default function ParticlesBackground() {
  // initialize once on mount
  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      await loadSlim(engine);
    });
  }, []);

  // gets called when the particles are ready
  const particlesLoaded = async (container?: any): Promise<void> => {
    console.log("tsparticles loaded:", container);
    return Promise.resolve();
  };

  return (
    <Particles
      id="tsparticles-fullpage"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: {enable: true },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: { value: 80, density: { enable: true } },
          color: { value: "#61dafb" },
          shape: { type: ["circle", "triangle", "square"] },
          links: {
            enable: true,
            distance: 150,
            color: "#61dafb",
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
  );
}
