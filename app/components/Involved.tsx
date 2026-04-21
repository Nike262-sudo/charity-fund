'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

interface InvolvementOption {
  title: string;
  desc: string;
  icon: string;
  cta: string;
  type: 'route' | 'whatsapp';
  to?: string;
}

const involvementOptions: InvolvementOption[] = [
  {
    title: 'Volunteer',
    desc: 'Join our team on the ground. From outreaches to events, your time and skills make a real difference.',
    icon: '🤝',
    cta: 'Volunteer With Us',
    type: 'route',
    to: '/volunteer',
  },
  {
    title: 'Partner With Us',
    desc: 'Are you an organisation, business, or institution that shares our values? Let\'s work together.',
    icon: '🏛️',
    cta: 'Become a Partner',
    type: 'route',
    to: '/partner',
  },
  {
    title: 'Spread the Word',
    desc: 'Follow us, share our work, and help us reach more people who need our support or want to give.',
    icon: '📢',
    cta: 'Share Our Mission',
    type: 'whatsapp',
  },
];

export function Involved() {
  const handleShare = () => {
    const text = encodeURIComponent('Check out the Rev. Peter Olaleye Charity Foundation — serving Ogbomoso through scholarships, healthcare, and empowerment. ' + window.location.origin);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="involved" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Get Involved</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f]">
            There&apos;s a Place for You Here
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {involvementOptions.map((option, i) => (
            <FadeIn key={option.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-stone-100 rounded-2xl p-8 text-center hover:border-[#1a4731]/25 transition-colors h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-extrabold text-[#0f2d1f] text-xl mb-3">
                  {option.title}
                </h3>
                <p className="text-stone-500 text-[15px] md:text-[17px] leading-relaxed mb-6 flex-1">{option.desc}</p>

                {option.type === 'route' && option.to ? (
                  <Link href={option.to}>
                    <motion.span
                      whileHover={{ backgroundColor: '#1a4731', color: '#fff', scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-block w-full px-6 py-3 border-2 border-[#1a4731] text-[#1a4731] font-bold rounded-full text-sm transition-all"
                    >
                      {option.cta}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    whileHover={{ backgroundColor: '#1a4731', color: '#fff', scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleShare}
                    className="px-6 py-3 border-2 border-[#1a4731] text-[#1a4731] font-bold rounded-full text-sm transition-all"
                  >
                    {option.cta}
                  </motion.button>
                )}
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
