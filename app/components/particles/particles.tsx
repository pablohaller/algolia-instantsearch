"use client";
import Script from "next/script";

// Better use library from ts-particles.
// https://cssgradient.io/
const Particles = () => {
  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@tsparticles/preset-fire@3/tsparticles.preset.fire.bundle.min.js"
      onReady={() => {
        // @ts-ignore
        window?.tsParticles?.load({
          id: "mybody",
          options: {
            preset: "fire",
            particles: {
              color: {
                value: "#ffffff",
              },
              move: {
                speed: 1,
              },
            },
            background: {
              image:
                "radial-gradient(circle, rgba(57,122,227,1) 22%, rgba(0,62,149,1) 100%)",
            },
          },
        });
      }}
    />
  );
};

export default Particles;
