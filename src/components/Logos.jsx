import React from 'react';

const logos = [
  { name: 'Acme', path: 'M4 10h4l2 4 2-8 2 12 2-6h4' },
  { name: 'Nova', path: 'M3 12h6l3-6 3 12 3-6h6' },
  { name: 'Orbit', path: 'M2 12c4-6 16-6 20 0-4 6-16 6-20 0zm6 0a4 4 0 108 0 4 4 0 10-8 0z' },
  { name: 'Pulse', path: 'M3 12h4l2-4 2 8 2-6 2 2h4' },
  { name: 'Vertex', path: 'M4 18l8-14 8 14H4z' }
];

export default function Logos() {
  return (
    <section className="w-full bg-black py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-sm uppercase tracking-widest text-white/50">
          Trusted by fast-moving teams
        </p>
        <div className="grid grid-cols-2 place-items-center gap-8 text-white/60 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.name} className="opacity-80 transition hover:opacity-100">
              <svg width="120" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={logo.path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
