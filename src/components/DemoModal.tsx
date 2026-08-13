import React, { useState } from 'react';
import { X, Sparkles, Rocket } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetTitle?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, presetTitle }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    phone: '',
    grade: 'Class 3rd',
    program: presetTitle || 'Code For Kidz & Scratch'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-brand-purple-600 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-2 border-yellow-300 relative text-white animate-in zoom-in-95 duration-200 font-kids">
        
        <button 
          onClick={() => { setSubmitted(false); onClose(); }}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 font-sans">
            <div className="w-16 h-16 rounded-full bg-yellow-300 text-slate-950 flex items-center justify-center font-bold text-3xl mx-auto shadow-lg">
              🚀
            </div>
            <h3 className="text-2xl font-extrabold text-white font-kids">Demo Class Booked!</h3>
            <p className="text-pink-100 text-xs leading-relaxed font-medium">
              We are excited to welcome <strong>{form.childName}</strong>! Our Kids Coordinator will call <strong>{form.parentName}</strong> at <strong>{form.phone}</strong> to confirm the weekend slot.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-yellow-400 text-slate-950 font-black text-xs"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" style={{ animationDuration: '5s' }} />
              <div>
                <h3 className="text-2xl font-extrabold text-white font-kids">Book Free Demo Class</h3>
                <p className="text-xs text-pink-200">Hands-on, interactive & outcome-driven!</p>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-pink-100 block mb-1">Parent's Name *</label>
              <input 
                type="text" 
                required
                placeholder="Parent Name"
                value={form.parentName}
                onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-pink-300/30 text-xs font-semibold text-white placeholder-pink-200/60 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-pink-100 block mb-1">Child's Name & Grade *</label>
              <div className="grid grid-cols-2 gap-2">
                <input 
                  type="text" 
                  required
                  placeholder="Child Name"
                  value={form.childName}
                  onChange={(e) => setForm({ ...form, childName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-pink-300/30 text-xs font-semibold text-white placeholder-pink-200/60 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                />
                <select 
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-pink-300/30 text-xs font-semibold text-white focus:ring-2 focus:ring-yellow-300 focus:outline-none"
                >
                  <option value="Nursery - UKG">Nursery – UKG</option>
                  <option value="Class 1st - 5th">Class 1st – 5th</option>
                  <option value="Class 6th - 10th">Class 6th – 10th</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-pink-100 block mb-1">WhatsApp Mobile Number *</label>
              <input 
                type="tel" 
                required
                placeholder="+91 90105 35867"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-pink-300/30 text-xs font-semibold text-white placeholder-pink-200/60 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-pink-100 block mb-1">Program Choice</label>
              <select 
                value={form.program}
                onChange={(e) => setForm({ ...form, program: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-pink-300/30 text-xs font-semibold text-white focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              >
                <option value="Code For Kidz & Scratch">Code For Kidz & Scratch Coding</option>
                <option value="IIT Foundational Science">IIT Foundational Science</option>
                <option value="IAS / IPS Foundational">IAS / IPS Foundational</option>
                <option value="wonderTouch Interactive Demo">wonderTouch School Demo</option>
                <option value="Play Zone & Daycare Tour">Play Zone & Daycare Malakpet Tour</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm shadow-xl font-kids transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <Rocket className="w-5 h-5 text-slate-950" />
              <span>Reserve Free Seat Now</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
