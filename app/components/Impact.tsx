'use client';

import { FadeIn } from './FadeIn';

const stats = [
  { value: '10+', label: 'Scholarships Awarded' },
  { value: '5+', label: 'Healthcare Outreaches' },
  { value: '50+', label: 'Lives Touched' },
  { value: '2+', label: 'Community Partnerships' },
];

export function Impact() {
  return (
    <section id="impact" className="pt-8 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4731 60%, #2d6a4f 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)' }} />
      <div className="relative max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#86c99e] text-xs font-bold tracking-widest uppercase mb-3">Our Impact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Small Steps, Real Change
          </h2>
          <p className="text-white/55 mt-4 max-w-lg mx-auto text-[15px] md:text-[17px] leading-relaxed">
            We believe in honesty. These numbers are modest — but behind each one is a real person whose life was touched.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value, label }, i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div className="text-center bg-white/8 border border-white/12 rounded-2xl p-8">
                <p className="text-5xl font-extrabold text-white mb-2">
                  {value}
                </p>
                <p className="text-white/55 text-sm font-medium leading-tight">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
