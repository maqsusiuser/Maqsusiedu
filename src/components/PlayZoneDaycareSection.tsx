import React from 'react';
import { DAYCARE_SCHEDULE } from '../data/edutechData';
import { Baby, Video, ShieldCheck, Utensils, Heart, Clock, MapPin } from 'lucide-react';

interface PlayZoneDaycareSectionProps {
  onOpenCctvModal: () => void;
  onOpenCounselorModal: (subject?: string) => void;
}

export const PlayZoneDaycareSection: React.FC<PlayZoneDaycareSectionProps> = ({
  onOpenCctvModal,
  onOpenCounselorModal
}) => {
  return (
    <section id="daycare" className="py-20 bg-teal-900 text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-700/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-800 border border-teal-600 text-teal-200 text-xs font-bold uppercase tracking-widest">
            <Baby className="w-4 h-4 text-teal-300" />
            <span>DAYCARE & AFTER-SCHOOL CARE IN MALAKPET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
            Maqsusi Kidz Play Zone — Daycare & After-School Care
          </h2>

          <p className="text-base sm:text-lg text-teal-100 leading-relaxed font-normal">
            Live CCTV access, trained & verified caretakers, structured play, and nutritious meals — a safe home away from home in Malakpet.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: CCTV */}
          <div 
            onClick={onOpenCctvModal}
            className="bg-teal-950/80 rounded-3xl p-6 border border-teal-700/60 shadow-xl hover:border-amber-400 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white font-heading">Live CCTV Access</h3>
              <span className="text-[10px] bg-red-500 text-white font-black px-2 py-0.5 rounded-full animate-pulse">LIVE</span>
            </div>
            <p className="text-xs text-teal-200 leading-relaxed mb-4">
              HD live camera streaming straight to your smartphone app so parents can watch their little ones anytime.
            </p>
            <button className="text-xs font-bold text-amber-300 group-hover:underline flex items-center gap-1">
              <span>Test CCTV App Demo</span> →
            </button>
          </div>

          {/* Card 2: Verified Caretakers */}
          <div className="bg-teal-950/80 rounded-3xl p-6 border border-teal-700/60 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Trained & Verified Staff</h3>
            <p className="text-xs text-teal-200 leading-relaxed">
              Background-checked, ECCE-certified female staff with pediatric CPR and first-aid training.
            </p>
          </div>

          {/* Card 3: Nutritious Meals */}
          <div className="bg-teal-950/80 rounded-3xl p-6 border border-teal-700/60 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Nutritious Fresh Meals</h3>
            <p className="text-xs text-teal-200 leading-relaxed">
              Hygienic, freshly cooked, balanced meals, fruits, and organic snacks tailored for growing kids.
            </p>
          </div>

          {/* Card 4: Structured Play */}
          <div className="bg-teal-950/80 rounded-3xl p-6 border border-teal-700/60 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-heading mb-2">Structured Play & Tuition</h3>
            <p className="text-xs text-teal-200 leading-relaxed">
              Ball pits, wonderTouch interaction, homework assistance, reading corners, and creative crafts.
            </p>
          </div>

        </div>

        {/* Daycare Photo Gallery & Daily Schedule Split */}
        <div className="grid lg:grid-cols-12 gap-12 items-center bg-teal-950/60 rounded-3xl p-6 sm:p-10 border border-teal-800">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-700/80 h-64 sm:h-72">
              <img 
                src="https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                alt="Children in daycare play zone" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white bg-slate-900/80 p-2.5 rounded-xl border border-slate-700 backdrop-blur-sm">
                Children enjoying safe interactive playtime at Malakpet Play Zone
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-32 border border-teal-700">
                <img 
                  src="https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Kids activities" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-32 border border-teal-700">
                <img 
                  src="https://images.pexels.com/photos/8363040/pexels-photo-8363040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                  alt="Preschool learning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-900 border border-teal-700 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Location: Yonus Plaza, Govt Printing Press Rd, Malakpet, Hyderabad</span>
              </div>
              <div className="flex items-center justify-between text-xs text-teal-200">
                <span>Timing: 8:30 AM – 6:30 PM (Mon to Sat)</span>
                <a href="tel:+919010535867" className="font-bold text-amber-300 underline">Call Direct</a>
              </div>
            </div>

          </div>

          {/* Right Column: Daily Schedule Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
                <Clock className="w-6 h-6 text-amber-400" />
                <span>A Typical Day at Maqsusi Daycare</span>
              </h3>
              <span className="text-xs bg-teal-800 text-teal-200 px-3 py-1 rounded-full font-semibold">
                Flexible Timings Available
              </span>
            </div>

            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
              {DAYCARE_SCHEDULE.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-teal-900/90 border border-teal-800 hover:border-amber-400/50 transition-colors flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-300 font-mono">{item.time}</span>
                      <span className="text-xs font-bold text-white">— {item.activity}</span>
                    </div>
                    <p className="text-[11px] text-teal-200 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button 
                onClick={onOpenCctvModal}
                className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm hover:bg-amber-300 transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Video className="w-4 h-4 text-slate-950" />
                <span>Access Live CCTV Parent Demo</span>
              </button>

              <button 
                onClick={() => onOpenCounselorModal('Daycare Admissions')}
                className="px-6 py-3 rounded-2xl bg-teal-800 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm border border-teal-600 transition-colors cursor-pointer"
              >
                Schedule Daycare Tour
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
