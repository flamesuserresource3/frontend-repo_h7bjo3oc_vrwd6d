import React from 'react';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import CTA from './components/CTA';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 text-white">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-emerald-400 text-emerald-950">AI</span>
          Flux Automation
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#get-started" className="transition hover:text-white">Get a Demo</a>
          <a
            href="#get-started"
            className="rounded-md bg-white/10 px-3 py-1.5 font-medium text-white transition hover:bg-white/20"
          >
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black py-10 text-white">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/60">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Flux Automation. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
