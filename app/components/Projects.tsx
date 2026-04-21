'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export function Projects() {
  
  return (
    <section id="projects" className="py-16 bg-[#f4f8f5]">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">What We&apos;re Working On</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            Our Project
          </h2>
          <p className="text-stone-500 mt-4 max-w-lg mx-auto text-[15px] md:text-[17px] leading-relaxed">
            A small step we&apos;re taking right now — one family, one home at a time.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 20px 50px #1a473110' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm w-full"
          >
            {/* Card content */}
            <div className="p-5 sm:p-10">
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5 bg-[#e8f5e9] text-[#1a4731]">
                Housing & Family Support
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f2d1f] mb-4 leading-snug">
                Building a Home for the Quadruplets
              </h3>
              {/* Images: stacked on mobile, side-by-side on desktop */}
              <div className="mt-2 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                  <Image
                    src="https://res.cloudinary.com/dkuda0je5/image/upload/q_auto/f_auto/v1776622612/WhatsApp_Image_2026-04-18_at_11.13.34_AM_cc6uz3.jpg"
                    alt="Project photo 1"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50">
                  <Image
                    src="https://res.cloudinary.com/dkuda0je5/image/upload/q_auto/f_auto/v1776622799/WhatsApp_Image_2026-04-18_at_11.13.34_AM_1_v1hwbe.jpg"
                    alt="Project photo 2"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              {/* Story paragraphs */}
              <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed mb-6">
                A mother we supported through a high-risk pregnancy gave birth to quadruplets, four fragile lives brought safely into the world against the odds.
              </p>
              <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed mb-6">
                What should have been a time of relief and joy quickly met a harsh reality. The family does not have a safe or adequate home to care for four newborns and is currently living in difficult conditions. In moments like this, the difference between struggle and stability often comes down to community.
              </p>
              <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed mb-6">
                This is our current mission: to help provide a simple, safe, and dignified home where these children can grow, and where their mother can care for them without fear or uncertainty.
              </p>
              <p className="text-stone-600 text-[15px] md:text-[17px] leading-relaxed mb-8">
                We are just at the beginning and every contribution, no matter how small, brings this family one step closer to a better future.
              </p>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 28px #1a473130' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-2.5 bg-[#1a4731] text-white font-bold rounded-full text-sm shadow-md hover:bg-[#2d6a4f] transition-colors"
              >
                Help Us Build Their Home
              </motion.button>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
