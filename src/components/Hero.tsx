import React, { useState, useEffect } from 'react';
import { 
  Award, 
  ArrowRight, 
  Users, 
  Briefcase, 
  BookMarked, 
  Star, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { INSTITUTION_STATS } from '../data/edutechData';

interface HeroProps {
  onOpenCounselorModal: () => void;
  onOpenDemoModal: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Students collaborating in a Maqsusi EduTech classroom',
    tag: 'Tech & Career Skilling'
  },
  {
    image: 'https://images.pexels.com/photos/30858451/pexels-photo-30858451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Kids learning logic and Scratch coding at Maqsusi Kids',
    tag: 'Maqsusi Kids Track'
  },
  {
    image: 'https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    title: 'Safe, playful & structured Daycare in Malakpet, Hyderabad',
    tag: 'Daycare & Play Zone'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenCounselorModal, onOpenDemoModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-slate-900 text-white pt-10 pb-20 overflow-hidden">
      
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple-600/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Telangana Skill Partner Official Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/10 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide mb-6 backdrop-blur-md animate-bounce" style={{ animationDuration: '3s' }}>
          <Award className="w-4 h-4 text-amber-400" />
          <span>★ Telangana Skill Development Partner</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white font-heading">
              Skill up. <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">Stand out.</span> <br />
              <span className="text-brand-purple-400 underline decoration-brand-purple-500/50 decoration-wavy">Get hired.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Industry-aligned programs in tech, enterprise systems, business tools, test prep, and courses for young learners — built with placement outcomes in mind.
            </p>

            {/* Core Value Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Job Placement Guarantee Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Nursery to Professional Tracks</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hands-on Live Capstones</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => scrollToSection('tracks')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-1 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={onOpenCounselorModal}
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Talk to a Counselor</span>
              </button>

              <button 
                onClick={onOpenDemoModal}
                className="px-5 py-3 rounded-2xl bg-pink-600/90 hover:bg-pink-600 text-white font-bold text-xs sm:text-sm font-kids flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-pink-500/30 transition-all border border-pink-400/30"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Kids Free Demo Class</span>
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Govt-Recognized Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Live Interactive Projects</span>
              </div>
            </div>

          </div>

          {/* Right Column Visual Showcase & Slide Carousel */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing Accent Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-800">
              
              {/* Image Carousel */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                        {slide.tag}
                      </span>
                      <p className="text-xs font-semibold text-slate-100">
                        {slide.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-700 backdrop-blur-sm z-20">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Live Badge */}
              <div className="absolute top-4 left-4 bg-emerald-500/90 text-slate-950 font-extrabold text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                <span>Active Classroom Batches</span>
              </div>

            </div>

            {/* Floating Counter Card (Bottom Corner) */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-brand-purple-900 to-slate-900 border border-brand-purple-500/30 rounded-2xl p-4 shadow-2xl hidden sm:flex items-center gap-3 backdrop-blur-lg z-20 max-w-xs animate-float">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                ★
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium">Placement Outcome Record</div>
                <div className="text-sm font-extrabold text-white">12,000+ Career Milestones</div>
              </div>
            </div>

          </div>

        </div>

        {/* Four Core Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800">
          {INSTITUTION_STATS.map((stat, idx) => {
            const IconComponent = stat.icon === 'GraduationCap' ? GraduationCap :
                                stat.icon === 'Building2' ? Briefcase :
                                stat.icon === 'BookMarked' ? BookMarked : Star;
            return (
              <div 
                key={idx}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 hover:border-amber-500/40 transition-all hover:bg-slate-800 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl sm:text-4xl font-black font-heading text-amber-400 group-hover:scale-110 transition-transform origin-left">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-700/60 text-brand-purple-400 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:text-amber-400 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
