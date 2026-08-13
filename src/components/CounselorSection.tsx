import React, { useState } from 'react';
import { Users, Sparkles, Calculator } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CounselorSection: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<'job' | 'kid' | 'abroad' | 'enterprise'>('job');
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(20);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'Morning'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-purple-900 via-slate-900 to-brand-purple-950 text-white relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900/90 rounded-3xl border-2 border-amber-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text & Scholarship Estimator */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>1-on-1 Personalized Career Guidance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
                Ready to start your next chapter?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg">
                Talk to a counselor and find the right program for your goals.
              </p>

              {/* Scholarship Interactive Goal Picker */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  <span>Instant Telangana Skill Scholarship Check</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button 
                    type="button"
                    onClick={() => { setSelectedGoal('job'); setScholarshipPercent(25); }}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      selectedGoal === 'job' ? 'bg-brand-purple-600 text-white ring-2 ring-amber-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    🚀 Job & Career Switch (25% Grant)
                  </button>

                  <button 
                    type="button"
                    onClick={() => { setSelectedGoal('kid'); setScholarshipPercent(30); }}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all font-kids ${
                      selectedGoal === 'kid' ? 'bg-pink-600 text-white ring-2 ring-amber-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    ★ Maqsusi Kids & Daycare (30% Grant)
                  </button>

                  <button 
                    type="button"
                    onClick={() => { setSelectedGoal('abroad'); setScholarshipPercent(20); }}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      selectedGoal === 'abroad' ? 'bg-amber-600 text-slate-950 ring-2 ring-amber-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    ✈️ IELTS & Overseas (20% Grant)
                  </button>

                  <button 
                    type="button"
                    onClick={() => { setSelectedGoal('enterprise'); setScholarshipPercent(35); }}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all ${
                      selectedGoal === 'enterprise' ? 'bg-cyan-600 text-white ring-2 ring-amber-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    ⚙️ Enterprise Systems (35% Grant)
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800">
                  <span className="text-slate-400">Estimated Scholarship Grant:</span>
                  <span className="text-base font-extrabold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30">
                    {scholarshipPercent}% Fee Grant Eligible
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column Booking Form */}
            <div className="lg:col-span-6 bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-3xl mx-auto border border-emerald-500/40">
                    ✓
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">Counseling Slot Requested!</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you <strong>{form.name}</strong>. A senior counselor from Maqsusi EduTech will call you at <strong>{form.phone}</strong> within 1 hour.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-amber-400" />
                    <h3 className="text-xl font-extrabold text-white font-heading">Get Free Counseling</h3>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="rahul@gmail.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Preferred Callback Time</label>
                    <select 
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    >
                      <option value="Morning">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon">Afternoon (1 PM - 4 PM)</option>
                      <option value="Evening">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 font-black text-sm hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 cursor-pointer mt-2"
                  >
                    Get Free Counseling & {scholarshipPercent}% Grant
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Zero spam guarantee. Official Telangana Skill Partner support team.
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
