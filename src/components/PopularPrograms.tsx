import React, { useState } from 'react';
import { COURSES } from '../data/edutechData';
import { Course, TrackCategory } from '../types';
import { Star, Clock, ArrowRight, Search, ShieldCheck } from 'lucide-react';

interface PopularProgramsProps {
  selectedTrackFilter: TrackCategory | 'all';
  onSelectTrackFilter: (cat: TrackCategory | 'all') => void;
  onSelectCourse: (course: Course) => void;
  onOpenCounselorModal: (courseTitle?: string) => void;
}

export const PopularPrograms: React.FC<PopularProgramsProps> = ({
  selectedTrackFilter,
  onSelectTrackFilter,
  onSelectCourse,
  onOpenCounselorModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = selectedTrackFilter === 'all' || course.category === selectedTrackFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="programs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
              ★ High Placement Demand
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading">
              Popular programs
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              A snapshot of what learners are enrolling in this month.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search Python, React, IELTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-purple-600 focus:border-transparent bg-slate-50"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => onSelectTrackFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
              selectedTrackFilter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Programs ({COURSES.length})
          </button>
          <button
            onClick={() => onSelectTrackFilter('tech')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
              selectedTrackFilter === 'tech'
                ? 'bg-brand-purple-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tech & Software Dev
          </button>
          <button
            onClick={() => onSelectTrackFilter('enterprise')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
              selectedTrackFilter === 'enterprise'
                ? 'bg-cyan-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Enterprise Systems
          </button>
          <button
            onClick={() => onSelectTrackFilter('business')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
              selectedTrackFilter === 'business'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Business & Data Tools
          </button>
          <button
            onClick={() => onSelectTrackFilter('softskills')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
              selectedTrackFilter === 'softskills'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Soft Skills & Test Prep
          </button>
          <button
            onClick={() => onSelectTrackFilter('kids')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer font-kids ${
              selectedTrackFilter === 'kids'
                ? 'bg-pink-600 text-white shadow-md'
                : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
            }`}
          >
            ★ Maqsusi Kids
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const isKids = course.category === 'kids';

            return (
              <div 
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner with Badges */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Badge Category Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md ${
                        isKids ? 'bg-pink-600' : 'bg-slate-900/90 backdrop-blur-md border border-slate-700'
                      }`}>
                        {course.categoryLabel}
                      </span>
                    </div>

                    {/* Mode Tag */}
                    <div className="absolute top-4 right-4 bg-emerald-500/90 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {course.mode}
                    </div>

                    {/* Price Badge on Banner */}
                    <div className="absolute bottom-3 right-4 bg-slate-900/90 text-amber-400 border border-slate-700 px-3 py-1 rounded-xl text-sm font-black shadow-lg">
                      {course.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Rating & Duration Row */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-amber-500 font-extrabold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{course.rating.toFixed(1)}</span>
                        <span className="text-slate-400 font-normal">({course.ratingCount} reviews)</span>
                      </div>

                      <div className="flex items-center gap-1 text-slate-500 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className={`text-xl font-extrabold leading-snug group-hover:text-brand-purple-600 transition-colors ${
                      isKids ? 'font-kids text-pink-700' : 'text-slate-900 font-heading'
                    }`}>
                      {course.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {course.shortDesc}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {course.skills.slice(0, 4).map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-3">
                  <button 
                    onClick={() => onSelectCourse(course)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-800 text-xs font-bold transition-all text-center hover:bg-slate-50"
                  >
                    View Syllabus
                  </button>

                  <button 
                    onClick={() => onOpenCounselorModal(course.title)}
                    className={`py-2.5 px-4 rounded-xl text-white text-xs font-extrabold shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-1 ${
                      isKids ? 'bg-gradient-to-r from-pink-600 to-purple-600' : 'bg-gradient-to-r from-brand-pink to-brand-purple-700'
                    }`}
                  >
                    <span>Enroll</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner at bottom */}
        <div className="mt-12 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-heading">Need help deciding the right course path?</h4>
              <p className="text-xs text-slate-400">Our senior career counselors conduct free profile evaluation and roadmap guidance.</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenCounselorModal('General Counseling')}
            className="px-6 py-3 rounded-2xl bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm hover:bg-amber-300 transition-colors shrink-0 cursor-pointer shadow-lg"
          >
            Get Free Career Guidance
          </button>
        </div>

      </div>
    </section>
  );
};
