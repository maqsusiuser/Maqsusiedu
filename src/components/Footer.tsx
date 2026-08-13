import React from 'react';
import { Award, PhoneCall, Mail, MapPin } from 'lucide-react';
import logo from '../assets/maqsusi-logo.png';

interface FooterProps {
  onOpenCounselorModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCounselorModal }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="bg-white rounded-2xl px-3 py-2 shadow-md">
                <img src={logo} alt="MaqsusiEduTech" className="h-10 w-auto" />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              ★ Telangana Skill Development Partner — building career-ready and future-ready learners from early childhood to corporate professionals.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Malakpet, Hyderabad, Telangana 500024</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919010535867" className="hover:text-white transition-colors">+91 90105 35867</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:edu@maqsusi.com" className="hover:text-white transition-colors">edu@maqsusi.com</a>
              </div>
            </div>
          </div>

          {/* Column 1: Explore Tracks */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Explore Tracks
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('tracks')} className="hover:text-amber-400 transition-colors">
                  Tech & Software Dev
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tracks')} className="hover:text-amber-400 transition-colors">
                  Enterprise Systems
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tracks')} className="hover:text-amber-400 transition-colors">
                  Business & Data Tools
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tracks')} className="hover:text-amber-400 transition-colors">
                  Soft Skills & IELTS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('kids')} className="hover:text-pink-400 font-kids text-pink-300 transition-colors">
                  ★ Maqsusi Kids
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('daycare')} className="hover:text-teal-400 transition-colors">
                  Play Zone & Daycare
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-amber-400 transition-colors">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={onOpenCounselorModal} className="hover:text-amber-400 transition-colors">
                  Corporate Training
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('wondertouch')} className="hover:text-orange-400 transition-colors">
                  wonderTouch Product
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Support & Help
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Campus
                </button>
              </li>
              <li>
                <button onClick={onOpenCounselorModal} className="hover:text-amber-400 transition-colors">
                  Fees & Scholarships
                </button>
              </li>
              <li>
                <button onClick={onOpenCounselorModal} className="hover:text-amber-400 transition-colors">
                  Placement Portal
                </button>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">FAQ & Policies</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2026 Maqsusi EduTech. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#about" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <span>·</span>
            <span className="text-amber-400 font-semibold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>Telangana Skill Partner</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
