import React from 'react';
import { Award, BookOpen, ShieldCheck, Users, GraduationCap, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenCounselorModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCounselorModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple-100 text-brand-purple-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-brand-purple-600" />
              <span>Official Telangana Skill Development Partner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading leading-tight">
              About Maqsusi EduTech
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Maqsusi EduTech is a Telangana Skill Development Partner building career-ready and future-ready learners — from students and job seekers to working professionals and young kids just starting out.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our programs span software development, enterprise systems, business and data tools, communication and test prep, and dedicated tracks for young learners — each built around real curriculum, hands-on practice, and outcomes, not just certificates.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-purple-50 text-brand-purple-600 flex items-center justify-center font-bold shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 font-heading">Industry-aligned curriculum</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Built with hiring outcomes in mind.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 font-heading">Official skilling partner</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Recognized Telangana Skill Development Partner.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 font-heading">End-to-end support</h3>
                  <p className="text-xs text-slate-500 mt-0.5">From enrollment to placement assistance.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 font-heading">For every age</h3>
                  <p className="text-xs text-slate-500 mt-0.5">From Nursery foundations to working professionals.</p>
                </div>
              </div>

            </div>

            <div className="pt-4 flex items-center gap-4">
              <button 
                onClick={onOpenCounselorModal}
                className="px-6 py-3.5 rounded-2xl bg-brand-purple-600 hover:bg-brand-purple-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>More About Us & Campus Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column Visual Gallery */}
          <div className="lg:col-span-5 relative space-y-4">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img 
                src="https://images.pexels.com/photos/35745339/pexels-photo-35745339.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Maqsusi EduTech team and campus" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-3.5 rounded-2xl">
                <div className="text-xs font-bold text-amber-400">Maqsusi EduTech Team & Campus</div>
                <div className="text-[11px] text-slate-300">Hyderabad Malakpet Learning Center</div>
              </div>
            </div>

            {/* Badge Overlay */}
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Telangana Govt Partner</div>
                  <div className="text-[10px] text-slate-500">Skill Development Partner #2026</div>
                </div>
              </div>
              <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                Active
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
