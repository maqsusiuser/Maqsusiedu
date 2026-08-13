import React from 'react';
import { HIRING_PARTNERS } from '../data/edutechData';
import { Building2 } from 'lucide-react';

export const PartnerTicker: React.FC = () => {
  return (
    <section className="bg-slate-950 border-y border-slate-800 py-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 flex items-center justify-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          <span>TRUSTED BY LEARNERS & HIRING PARTNERS AT</span>
        </span>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {HIRING_PARTNERS.concat(HIRING_PARTNERS).map((partner, index) => (
            <div 
              key={index}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-purple-500/50 transition-all hover:bg-slate-900 group"
            >
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${partner.color} flex items-center justify-center text-white font-extrabold text-xs shadow-md`}>
                {partner.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold text-slate-200 group-hover:text-amber-400 transition-colors">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {partner.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
