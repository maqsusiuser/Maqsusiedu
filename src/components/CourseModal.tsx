import React, { useState } from 'react';
import { Course } from '../types';
import { X, Star, Clock, Award, Download, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  const [downloadedSyllabus, setDownloadedSyllabus] = useState(false);

  if (!course) return null;

  const handleDownloadSyllabus = () => {
    setDownloadedSyllabus(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Header */}
        <div className="relative h-56 bg-slate-900 text-white overflow-hidden p-6 flex flex-col justify-end">
          <img 
            src={course.image} 
            alt={course.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950">
                {course.categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-500 text-slate-950">
                {course.badgeTag}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {course.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{course.rating.toFixed(1)} ({course.ratingCount} reviews)</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{course.duration}</span>
              </span>
              <span>·</span>
              <span className="font-extrabold text-amber-300 text-sm">{course.price}</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-2">Program Overview</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {course.fullDesc}
            </p>
          </div>

          {/* Curriculum breakdown */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">Module Curriculum</h3>
            <div className="space-y-3">
              {course.curriculum.map((curr, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-extrabold text-xs text-slate-900 mb-1">{curr.module}</div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {curr.topics.map((t, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                        • {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-2xl bg-brand-purple-50 border border-brand-purple-100 flex items-center gap-3">
            <Award className="w-6 h-6 text-brand-purple-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-brand-purple-900">Who is this for?</div>
              <div className="text-xs text-brand-purple-700">{course.targetAudience}</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              onClick={handleDownloadSyllabus}
              className={`w-full sm:w-auto py-3 px-5 rounded-2xl text-xs font-extrabold border transition-all flex items-center justify-center gap-2 ${
                downloadedSyllabus ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{downloadedSyllabus ? 'Syllabus Downloaded! ✓' : 'Download Complete Syllabus PDF'}</span>
            </button>

            <button 
              onClick={() => {
                onClose();
                onEnroll(course.title);
              }}
              className="w-full sm:w-auto py-3 px-6 rounded-2xl bg-brand-purple-600 hover:bg-brand-purple-700 text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Enroll In This Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
