'use client';

import Image from 'next/image';
import { FadeIn } from './FadeIn';

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn direction="right">
          <div className="relative">
            <Image
              src="/Founder.jpg"
              alt="Founder Rev. Peter Olaleye"
              width={500}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#1a4731]/8 border border-[#1a4731]/15" />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.15}>
          <div>
            <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f] leading-tight mb-6">
              Rooted in Faith,
              <br />
              Driven by Compassion
            </h2>

            <p className="text-stone-600 leading-relaxed mb-5 text-[15px] md:text-[17px]">
              The Reverend Peter Olaleye Charity Foundation was built on a simple belief: everyone deserves dignity, opportunity, and care, regardless of their circumstances.
            </p>

            <p className="text-stone-600 leading-relaxed mb-5 text-[15px] md:text-[17px]">
              Founded by Reverend Peter Olaleye, Head Pastor of New Estate Baptist Church, Ogbomoso, founder and former President of the Ogbomoso Community Youth Forum (OCYF), and currently Special Assistant on Media and Community Relations to the Soun of Ogbomosoland, the foundation reflects his decades of service to the people of Oyo State.
            </p>

            <p className="text-stone-600 leading-relaxed mb-8 text-[15px] md:text-[17px]">
              Through outreach, education, and youth empowerment, the foundation supports vulnerable communities and creates opportunities for lasting impact, driven by compassion, integrity, and a commitment to meaningful change.
            </p>
        
            <div className="flex flex-wrap gap-6">
              {['Faith-Centered', 'Community-Driven', 'Locally Rooted'].map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm font-semibold text-[#1a4731]">
                  <span className="text-[#2d6a4f] text-xs">✦</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
