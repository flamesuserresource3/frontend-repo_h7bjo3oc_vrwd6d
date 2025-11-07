import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          aria-label="Colorful 3D automation assembly line"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Automate workflows • Ship faster • Scale effortlessly
        </span>
        <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
          AI Automation for Modern Teams
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/90 md:text-lg">
          Orchestrate your stack with intelligent agents that connect apps, optimize operations,
          and run complex processes—so your team can focus on impact.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/30 transition hover:translate-y-0.5 hover:bg-emerald-300"
          >
            Get a Demo
          </a>
          <a
            href="#features"
            className="rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
