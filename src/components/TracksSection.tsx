import React from 'react';
import { TRACKS } from '../data/edutechData';
import { TrackCategory } from '../types';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

interface TracksSectionProps {
  selectedTrack: TrackCategory;
  onSelectTrack: (trackId: TrackCategory) => void;
  onOpenCounselorModal: (trackTitle?: string) => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({ 
  selectedTrack, 
  onSelectTrack,
  onOpenCounselorModal 
}) => {
  return (
    <section id="tracks" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple-100 text-brand-purple-700 text-xs font-bold uppercase tracking-wider">
            ★ Specialized Learning Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
            Explore by category
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Five learning tracks covering everything from full-stack development to foundational courses for young learners.
          </p>
        </div>

        {/* 5 Learning Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TRACKS.map((track) => {
            const isKidsTrack = track.id === 'kids';
            const isSelected = selectedTrack === track.id;

            return (
              <div 
                key={track.id}
                onClick={() => onSelectTrack(track.id as TrackCategory)}
                className={`group relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected 
                    ? 'bg-white ring-2 ring-brand-purple-600 shadow-2xl scale-[1.02]' 
                    : 'bg-white hover:bg-white hover:shadow-xl border-slate-200 hover:border-slate-300'
                } ${isKidsTrack ? 'hover:border-pink-400' : ''}`}
              >
                {/* Special Tag for Kids Track */}
                {isKidsTrack && (
                  <div className="absolute -top-3 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-kids text-[10px] font-bold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1 animate-pulse">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    <span>Nursery to 10th</span>
                  </div>
                )}

                <div>
                  {/* Category Symbol Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.color} text-white font-black text-2xl flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {track.iconSymbol}
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {track.subtitle}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${isKidsTrack ? 'font-kids text-pink-700' : 'text-slate-900 font-heading'}`}>
                    {track.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {track.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-1.5 mb-6">
                    {track.programsList.map((prog, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle className={`w-3.5 h-3.5 ${isKidsTrack ? 'text-pink-500' : 'text-brand-purple-600'} shrink-0`} />
                        <span>{prog}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 group-hover:text-brand-purple-600 transition-colors flex items-center gap-1">
                    <span>Explore Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCounselorModal(track.title);
                    }}
                    className="text-[11px] font-semibold text-brand-purple-600 hover:underline"
                  >
                    Enquire
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
