'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {

  return (
    <section
      className="relative overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #0f2d1f 0%, #1a4731 55%, #2d6a4f 100%)' }}
    >
      {/* Radial glow overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 80% 50%, rgba(45,106,79,0.45) 0%, transparent 65%),
                       radial-gradient(ellipse at 10% 80%, rgba(200,169,110,0.08) 0%, transparent 50%)`,
        }}
      />
      {/* Decorative rings */}
      <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-[60px] right-[300px] w-[180px] h-[180px] rounded-full border border-[#86c99e]/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 py-12 w-full grid lg:grid-cols-2 gap-14 items-center">
        {/* ── Left: Text ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white/85 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#86c99e] inline-block" />
            Ogbomoso, Oyo State · Nigeria
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] mb-6"
          >
            Serving Our
            <br />
            Community,{' '}
            <span className="text-[#86c99e]">One Life at a Time</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/75 text-base leading-relaxed mb-10 max-w-lg"
          >
            The Reverend Peter Olaleye Charity Foundation exists to uplift the vulnerable, empower the overlooked, and advocate for a just society — right here in Ogbomoso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(0,0,0,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-[#1a4731] font-extrabold rounded-full text-sm shadow-xl tracking-wide"
            >
              Donate Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('involved')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 border-2 border-white/35 bg-white/12 backdrop-blur-sm text-white font-bold rounded-full text-sm transition-all"
            >
              Get Involved
            </motion.button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {['Faith-Centered', 'Community-Driven', 'Locally Rooted'].map((item, i) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-white/55 text-xs font-semibold flex items-center gap-1.5">
                  <span className="text-[#86c99e] text-xs">✦</span>
                  {item}
                </span>
                {i < 2 && <span className="w-px h-4 bg-white/15" />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Community Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative"
        >
          <Image
            src="/community.jpg"
            alt="Community"
            width={600}
            height={440}
            priority
            className="w-full h-72 lg:h-[440px] object-cover rounded-2xl shadow-2xl"
          />

          {/* Floating stat — top right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-white/60"
          >
            <div className="w-9 h-9 rounded-xl bg-[#e8f5e9] flex items-center justify-center text-base flex-shrink-0">🎓</div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Scholarships awarded</p>
              <p className="text-[#1a4731] font-bold text-sm">10+ Students</p>
            </div>
          </motion.div>

          {/* Floating stat — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-white/60"
          >
            <div className="w-9 h-9 rounded-xl bg-[#fff3cd] flex items-center justify-center text-base flex-shrink-0">❤️</div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Lives touched</p>
              <p className="text-[#1a4731] font-bold text-sm">50+ in Ogbomoso</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
