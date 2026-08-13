import React, { useState } from 'react';
import { X, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CounselorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTrack?: string;
}

export const CounselorModal: React.FC<CounselorModalProps> = ({ isOpen, onClose, preselectedTrack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    track: preselectedTrack || 'Tech & Software Dev',
    timing: 'Morning Batch'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-3xl mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Callback Scheduled!</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Thank you <strong>{form.name}</strong>. Our Telangana Skill Counselor will reach you at <strong>{form.phone}</strong> to discuss batch availability and scholarship grants.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">Counseling & Enrollment</h3>
                <p className="text-[11px] text-amber-700 font-semibold">★ Telangana Skill Development Partner</p>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Srikanth Verma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
              <input 
                type="tel" 
                required
                placeholder="+91 90105 35867"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Select Program Track</label>
              <select 
                value={form.track}
                onChange={(e) => setForm({ ...form, track: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none"
              >
                <option value="Tech & Software Dev">Tech & Software Dev (MERN, Java, UI/UX)</option>
                <option value="Enterprise Systems">Enterprise Systems (Polarion, Mendix)</option>
                <option value="Business & Data Tools">Business & Data Tools (Power BI, Excel)</option>
                <option value="Soft Skills & IELTS">Soft Skills & IELTS Coaching</option>
                <option value="Maqsusi Kids">Maqsusi Kids (Code For Kidz, IIT Foundational)</option>
                <option value="wonderTouch Interactive">wonderTouch Smart Classroom System</option>
                <option value="Play Zone & Daycare">Play Zone & Daycare (Malakpet)</option>
              </select>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Eligible for Up to 30% Govt Partner Fee Grant</span>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-brand-purple-600 hover:bg-brand-purple-700 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer mt-2"
            >
              Confirm Counseling Request
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
