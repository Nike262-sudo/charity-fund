'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export function LivesTouched() {
  return (
    <section id="lives" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image (mobile first) */}
        <FadeIn direction="right">
          <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
            <Image
              src="https://res.cloudinary.com/dkuda0je5/image/upload/q_auto/f_auto/v1779000000/helen_omobola_alabi.jpg"
              alt="Helen Omobola Alabi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn direction="left" delay={0.15}>
          <div>
            <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Lives We&apos;ve Touched</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f] leading-tight">
              Helen Omobola Alabi
            </h2>

            <p className="text-stone-500 text-[15px] md:text-[17px] leading-relaxed mt-3 mb-6">
              2023 Scholarship Beneficiary
            </p>

            <div className="inline-flex items-center gap-2 border border-stone-200 bg-white text-[#1a4731] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86c99e] inline-block" />
              328 UTME Score
            </div>

            <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed mb-5">
              Helen Omobola Alabi, who scored 328 in the 2023 Unified Tertiary Matriculation Examination and emerged among the top-performing students in Ogbomoso, received sponsorship for coding training at SQI Institute through Rev Peter Olaleye Charity Foundation.
            </p>
            <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed mb-8">
              The initiative recognized academic excellence while equipping Helen with valuable digital skills to support future opportunities and growth.
            </p>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-flex items-center justify-center px-7 py-3 border-2 border-[#1a4731] text-[#1a4731] font-bold rounded-full text-sm transition-all"
            >
              Read More
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
