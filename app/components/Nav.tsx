'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Stories', href: '/#stories' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Partner', href: '/partner' },
  { label: 'Volunteer', href: '/volunteer' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-start gap-2.5"
        >
          <Image
            src="https://res.cloudinary.com/dkuda0je5/image/upload/e_trim:10/v1776514525/horizontal_logo_stmmhz.png"
            alt="Rev. Peter Olaleye Charity Foundation logo"
            width={190}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-stone-600 hover:text-[#1a4731] transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const element = document.getElementById('donate');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 py-2 bg-[#1a4731] text-white text-sm rounded-full font-bold hover:bg-[#2d6a4f] transition-colors"
            >
              Donate Now
            </motion.button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#1a4731] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#1a4731] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#1a4731] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-stone-100 px-5 pb-5 pointer-events-auto"
          >
            {links.map((l, index) => (
              <Link key={l.label} href={l.href} passHref legacyBehavior>
                <motion.a
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ x: 5 }}
                  className="flex w-full text-left py-3.5 text-stone-700 font-medium border-b border-stone-100 last:border-0 hover:text-[#1a4731] transition-colors text-sm items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a4731]/30 flex-shrink-0" />
                  {l.label}
                </motion.a>
              </Link>
            ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: links.length * 0.1 + 0.1 }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('donate');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 350);
                }}
                className="mt-4 w-full py-3.5 bg-[#1a4731] text-white font-bold rounded-xl text-sm block text-center"
              >
                Donate Now
              </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
