import React from 'react';
import { Brain, Workflow, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Intelligent Orchestration',
    desc: 'Agents learn your processes and adapt to changing conditions—no brittle flows.'
  },
  {
    icon: Workflow,
    title: '100+ Integrations',
    desc: 'Connect CRMs, support desks, data warehouses, and internal tools in minutes.'
  },
  {
    icon: Zap,
    title: 'Real-time Automations',
    desc: 'Trigger actions from webhooks, events, or schedules with millisecond latency.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'Roles, audit trails, and encryption by default—built for compliance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">What you can automate</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              From lead routing to incident response, our platform assembles the perfect set of tools for
              every job—then runs them flawlessly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-lg bg-emerald-400/20 p-3 text-emerald-300 ring-1 ring-emerald-400/40">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
