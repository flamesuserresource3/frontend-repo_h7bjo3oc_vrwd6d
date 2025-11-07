import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="w-full bg-gradient-to-b from-black to-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl font-semibold md:text-3xl">Bring AI into your operations</h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Book a 30‑minute session. Well map your workflows and design a pilot that ships in days, not months.
            </p>
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = form.email.value;
                const company = form.company.value;
                alert(`Thanks! We'll reach out to ${email} at ${company}.`);
                form.reset();
              }}
            >
              <input
                required
                type="email"
                name="email"
                placeholder="Work email"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/40 transition focus:ring-2"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/40 transition focus:ring-2"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/30 transition hover:translate-y-0.5 hover:bg-emerald-300 sm:w-auto"
              >
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
