'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export function Donation() {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText('0949462000').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      alert('Could not copy automatically. Please copy the account number manually: 0949462000');
    });
  };

  return (
    <section id="donate" className="py-16 bg-[#f4f8f5]">
      <div className="max-w-2xl mx-auto px-5">
        <FadeIn className="text-center mb-10">
          <p className="text-[#2d6a4f] text-xs font-bold tracking-widest uppercase mb-3">Give Today</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d1f] mb-4">
            Support This Project
          </h2>
          <p className="text-stone-500 text-[15px] md:text-[17px] leading-relaxed max-w-lg mx-auto">
            You can support this project by making a direct bank transfer using the details below. Every contribution helps provide a safe home for this family.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* Bank details card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 mb-6">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-5">Bank Transfer Details</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Account Name</span>
                <span className="text-sm font-semibold text-[#0f2d1f]">Olaleye Olawuyi Peter</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Bank Name</span>
                <span className="text-sm font-semibold text-[#0f2d1f]">Guaranty Trust Bank (GTB)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-3">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Account Number</span>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-lg font-extrabold text-[#1a4731] tracking-widest">0949462000</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={copyAccountNumber}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg border-2 border-[#1a4731] text-[#1a4731] hover:bg-[#1a4731] hover:text-white transition-colors flex-shrink-0"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </motion.button>
                </div>
              </div>
            </div>
            {copied && (
              <p className="mt-4 text-center text-xs font-semibold text-[#2d6a4f] bg-[#e8f5e9] rounded-xl py-2">
                Account number copied ✓
              </p>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* How to Donate steps */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 mb-6">
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-5">How to Donate</p>
            <ol className="space-y-4">
              {[
                'Copy the account details above',
                'Make a transfer from your bank or mobile app',
                'Send your transaction receipt via WhatsApp',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#e8f5e9] text-[#1a4731] text-xs font-extrabold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-[15px] md:text-[17px] text-stone-600 leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/2348160579977?text=Hello%2C%20I%20just%20made%20a%20donation%20to%20the%20foundation.%20Please%20find%20my%20receipt%20attached"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 28px #25d36630' }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-2.5 bg-[#25d366] text-white font-bold rounded-2xl text-sm shadow-md hover:bg-[#1ebe5a] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Receipt on WhatsApp
          </motion.a>

          <p className="text-center text-xs text-stone-400 mt-5 leading-relaxed">
            All donations are acknowledged and tracked to ensure transparency and accountability.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
