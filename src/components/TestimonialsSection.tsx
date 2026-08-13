import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/edutechData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-500/20 text-brand-purple-300 border border-brand-purple-500/30 text-xs font-extrabold uppercase tracking-wider">
            ★ Verified Alumni & Parent Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
            What our learners say
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real outcomes from real students across our programs.
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div className="max-w-4xl mx-auto relative bg-slate-800/80 rounded-3xl border border-slate-700/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          
          <Quote className="w-12 h-12 text-amber-400/40 absolute top-6 right-8" />

          <div className="space-y-6">
            
            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-lg sm:text-2xl font-semibold text-slate-100 italic leading-relaxed font-sans">
              "{TESTIMONIALS[activeIndex].quote}"
            </p>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-700">
              <div className="flex items-center gap-4">
                <img 
                  src={TESTIMONIALS[activeIndex].avatar} 
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md" 
                />
                <div>
                  <h3 className="text-lg font-extrabold text-white font-heading">
                    {TESTIMONIALS[activeIndex].name}
                  </h3>
                  <div className="text-xs text-amber-400 font-semibold">
                    {TESTIMONIALS[activeIndex].role}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Program: {TESTIMONIALS[activeIndex].course}
                  </div>
                </div>
              </div>

              {/* Tag Badge */}
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-purple-500/20 text-brand-purple-300 border border-brand-purple-500/30">
                {TESTIMONIALS[activeIndex].categoryTag}
              </span>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-700/60">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={prevTestimonial}
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                idx === activeIndex 
                  ? 'bg-slate-800 border-amber-400/80 shadow-lg' 
                  : 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 line-clamp-3 mb-4 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-700/60">
                <span className="font-extrabold text-white">{item.name}</span>
                <span className="text-[10px] text-amber-400 font-semibold">{item.course}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
