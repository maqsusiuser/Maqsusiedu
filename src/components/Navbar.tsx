import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Sparkles, 
  Baby, 
  Tv, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap,
  UserCheck,
  Building
} from 'lucide-react';
import { TRACKS } from '../data/edutechData';
import logo from '../assets/maqsusi-logo.png';

interface NavbarProps {
  onOpenCounselorModal: (track?: string) => void;
  onOpenDemoModal: () => void;
  onSelectTrack: (trackId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCounselorModal, 
  onOpenDemoModal,
  onSelectTrack 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar for Telangana Partner Status */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-xs sm:text-sm font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 shadow-inner z-50 relative">
        <span className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full font-bold text-[11px] tracking-wide uppercase">
          ★ Telangana Official
        </span>
        <span>Recognized <strong>Telangana Skill Development Partner</strong> — Career Skilling & Early Education</span>
        <a href="#about" className="underline font-semibold ml-2 hover:text-amber-100 hidden md:inline">
          Learn More →
        </a>
      </div>

      {/* Main Navigation Bar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <img
                src={logo}
                alt="MaqsusiEduTech"
                className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-6">
              
              {/* Courses Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  className="flex items-center gap-1 font-semibold text-slate-700 hover:text-brand-purple-600 py-2 text-sm transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-brand-purple-500" />
                  <span>Courses & Tracks</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                {coursesDropdownOpen && (
                  <div 
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  >
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                      5 Specialized Tracks
                    </div>
                    {TRACKS.map((track) => (
                      <button
                        key={track.id}
                        onClick={() => {
                          onSelectTrack(track.id);
                          scrollToSection('tracks');
                          setCoursesDropdownOpen(false);
                        }}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left group/item"
                      >
                        <span className="w-8 h-8 rounded-lg bg-brand-purple-50 text-brand-purple-600 flex items-center justify-center font-bold text-xs shrink-0 group-hover/item:bg-brand-purple-600 group-hover/item:text-white transition-colors">
                          {track.iconSymbol}
                        </span>
                        <div>
                          <div className="font-bold text-xs text-slate-900 group-hover/item:text-brand-purple-600">
                            {track.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {track.description}
                          </div>
                        </div>
                      </button>
                    ))}
                    <div className="pt-2 border-t border-slate-100 mt-1">
                      <button 
                        onClick={() => scrollToSection('programs')}
                        className="w-full text-center text-xs font-bold text-brand-purple-600 hover:text-brand-purple-800 py-1"
                      >
                        View All Programs →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Maqsusi Kids Link (Fun colorful badge) */}
              <button 
                onClick={() => scrollToSection('kids')}
                className="flex items-center gap-1.5 font-bold text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 text-pink-600 hover:bg-pink-500 hover:text-white transition-all duration-300 font-kids shadow-xs hover:shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Maqsusi Kids</span>
                <span className="bg-pink-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-sans font-extrabold uppercase">
                  Fun
                </span>
              </button>

              {/* Play Zone & Daycare */}
              <button 
                onClick={() => scrollToSection('daycare')}
                className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-teal-600 text-sm transition-colors"
              >
                <Baby className="w-4 h-4 text-teal-500" />
                <span>Play Zone & Daycare</span>
              </button>

              {/* wonderTouch */}
              <button 
                onClick={() => scrollToSection('wondertouch')}
                className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-orange-600 text-sm transition-colors"
              >
                <Tv className="w-4 h-4 text-orange-500" />
                <span>wonderTouch</span>
              </button>

              {/* Success Stories */}
              <button 
                onClick={() => scrollToSection('reviews')}
                className="font-semibold text-slate-700 hover:text-brand-purple-600 text-sm transition-colors"
              >
                Success Stories
              </button>

              {/* About */}
              <button 
                onClick={() => scrollToSection('about')}
                className="font-semibold text-slate-700 hover:text-brand-purple-600 text-sm transition-colors"
              >
                About
              </button>

              {/* Contact */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-semibold text-slate-700 hover:text-brand-purple-600 text-sm transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a 
                href="tel:+919010535867"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-purple-600 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
                <span>+91 90105 35867</span>
              </a>

              <button 
                onClick={() => onOpenCounselorModal()}
                className="px-4 py-2 text-xs font-bold rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                Talk to Counselor
              </button>

              <button 
                onClick={() => onOpenCounselorModal()}
                className="px-4 py-2 text-xs font-extrabold rounded-xl text-white bg-gradient-to-r from-brand-pink to-brand-purple-700 hover:from-brand-red hover:to-brand-purple-800 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Enroll Now
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button 
                onClick={() => onOpenCounselorModal()}
                className="text-xs font-bold px-3 py-1.5 bg-brand-purple-600 text-white rounded-lg shadow-xs"
              >
                Enroll
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-purple-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-1 gap-2 pt-2">
              <button 
                onClick={() => scrollToSection('tracks')}
                className="flex items-center gap-2 p-2.5 rounded-xl text-slate-800 font-bold hover:bg-brand-purple-50 text-left text-sm"
              >
                <BookOpen className="w-5 h-5 text-brand-purple-600" />
                <span>Explore Courses & Tracks</span>
              </button>

              <button 
                onClick={() => scrollToSection('kids')}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-pink-50 text-pink-700 font-bold text-left text-sm"
              >
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span>Maqsusi Kids Programs</span>
              </button>

              <button 
                onClick={() => scrollToSection('daycare')}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-teal-50 text-teal-700 font-bold text-left text-sm"
              >
                <Baby className="w-5 h-5 text-teal-500" />
                <span>Play Zone & Daycare</span>
              </button>

              <button 
                onClick={() => scrollToSection('wondertouch')}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50 text-orange-700 font-bold text-left text-sm"
              >
                <Tv className="w-5 h-5 text-orange-500" />
                <span>wonderTouch Smart Wall</span>
              </button>

              <button 
                onClick={() => scrollToSection('reviews')}
                className="flex items-center gap-2 p-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-100 text-left text-sm"
              >
                <UserCheck className="w-5 h-5 text-slate-500" />
                <span>Success Stories</span>
              </button>

              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 p-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-100 text-left text-sm"
              >
                <GraduationCap className="w-5 h-5 text-slate-500" />
                <span>About Us</span>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 p-2.5 rounded-xl text-slate-800 font-semibold hover:bg-slate-100 text-left text-sm"
              >
                <Building className="w-5 h-5 text-slate-500" />
                <span>Contact & Malakpet Campus</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselorModal();
                }}
                className="w-full py-2.5 text-center font-bold text-white bg-brand-purple-600 rounded-xl shadow-md"
              >
                Talk to a Counselor
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-2.5 text-center font-bold text-brand-purple-700 bg-brand-purple-50 rounded-xl border border-brand-purple-200"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
