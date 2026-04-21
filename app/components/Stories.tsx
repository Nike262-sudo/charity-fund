'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

const stories = [
  {
    tag: 'Healthcare',
    title: 'A Mother of Four — Against All Odds',
    body: `When a financially struggling mother discovered she was expecting quadruplets, fear and uncertainty consumed her family. Without resources to monitor such a high-risk pregnancy, the odds were daunting. The foundation stepped in, partnering with Genesis Medical Diagnostic Center to provide free monitoring and care throughout her pregnancy. When the day came, she delivered all four babies safely. Today, that family of six is a testament to what community care looks like.`,
    image: 'Healthcare.jpg',
    bg: '#e8f5e9',
    accent: '#1a4731',
  },
  {
    tag: 'Scholarship',
    title: 'A Champion Who Needed a Champion',
    body: `Master Oladunni Success Eniayo earned something extraordinary — first place in a national mathematics competition. His brilliance was undeniable. But academic prizes rarely pay school fees. Partnering with the Ogbomoso Community Youth Forum (OCYF), the foundation awarded him a scholarship, ensuring that his talent would not be wasted by circumstance. Success is now living up to his name.`,
    image: 'Scholarship.jpg',
    bg: '#f0f4ff',
    accent: '#1a3a6b',
  },
];

export function Stories() {
  return (
    <section id="stories" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Stories of Impact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            Real People. Real Change.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map(({ tag, title, body, image, bg, accent }, i) => (
            <FadeIn key={title} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl overflow-hidden border border-stone-100 shadow-sm h-full flex flex-col"
              >
                <Image
                  src={`/${image}`}
                  alt={title}
                  width={500}
                  height={224}
                  className="w-full h-56 object-cover rounded-none rounded-t-3xl"
                />
                <div className="p-5 sm:p-8 flex-1" style={{ backgroundColor: bg }}>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4" style={{ backgroundColor: `${accent}18`, color: accent }}>
                    {tag}
                  </span>
                  <h3 className="text-xl font-extrabold mb-4 leading-snug" style={{ color: accent }}>
                    {title}
                  </h3>
                  <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed">{body}</p>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
