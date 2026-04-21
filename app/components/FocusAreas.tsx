'use client';

import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const focusAreas = [
  {
    title: 'Scholarships',
    desc: 'Supporting bright, hardworking students who lack the financial means to pursue their education.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Free Healthcare',
    desc: 'Providing medical outreaches and health support to families who cannot afford basic care.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path d="M12 21s-8-5.5-8-11a8 8 0 0116 0c0 5.5-8 11-8 11z" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 10v4M10 12h4" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Empowerment',
    desc: 'Equipping youth and market women with skills, resources, and opportunities to build sustainable livelihoods.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="#1a4731" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M17 11l2 2 4-4" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Rights & Governance',
    desc: 'Advocating for the rights of ordinary citizens and promoting accountability in local governance.',
    icon: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 3l9 4.5v5c0 5-3.5 9.5-9 11C6.5 21.5 3 17 3 12V7.5L12 3z"
          stroke="#1a4731"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="#1a4731" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="py-16 bg-[#f4f8f5]">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            Four Areas of Focus
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map(({ title, desc, icon }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 40px #1a473114' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-7 border border-stone-100 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f5e9] flex items-center justify-center mb-5">{icon}</div>
                <h3 className="font-bold text-[#0f2d1f] text-base mb-3">{title}</h3>
                <p className="text-stone-500 text-[15px] md:text-[17px] leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
