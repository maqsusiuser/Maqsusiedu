import React, { useState } from 'react';
import { MapPin, Phone, Mail, Camera, Send, CheckCircle, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'General Enquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-extrabold uppercase tracking-wider">
            ★ Malakpet Campus & Admissions Office
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900">
            Contact us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a question about a program? Reach out — we usually respond within a day.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</div>
                <h3 className="font-extrabold text-sm text-slate-900 font-heading">Hyderabad Malakpet Campus</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  16-2-664/1, Yonus Plaza, 2nd Floor, Government Printing Press Rd, above Khurana's, Judges Colony, Malakpet, Hyderabad, Telangana 500024
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                <a href="tel:+919010535867" className="font-extrabold text-base text-slate-900 hover:text-brand-purple-600 block">
                  +91 90105 35867
                </a>
                <p className="text-xs text-slate-500">Mon - Sat: 9:00 AM to 7:00 PM</p>
              </div>
            </div>

            {/* Email & Instagram */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center font-bold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Email</div>
                  <a href="mailto:edu@maqsusi.com" className="text-xs font-bold text-slate-900 hover:text-brand-purple-600 block">
                    edu@maqsusi.com
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-600 flex items-center justify-center font-bold shrink-0">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Instagram</div>
                  <a href="https://instagram.com/maqsusi_edutech" target="_blank" rel="noreferrer" className="text-xs font-bold text-slate-900 hover:text-brand-purple-600 block">
                    @maqsusi_edutech
                  </a>
                </div>
              </div>

            </div>

            {/* Map Embed Simulation Card */}
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-md bg-slate-900 text-white p-5 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Campus Open Today</span>
                </span>
                <span className="text-[10px] text-slate-400">Judges Colony, Malakpet</span>
              </div>
              <div className="h-36 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-amber-400 animate-bounce mb-1" />
                <div className="text-xs font-bold text-white">Above Khurana's, Govt Printing Press Rd</div>
                <div className="text-[11px] text-slate-400">Near Government Printing Press, Malakpet</div>
              </div>
            </div>

          </div>

          {/* Right Column: Send Us a Message Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-3xl mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">Message Received!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out to Maqsusi EduTech. Our academic counselor will review your inquiry and get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-brand-purple-600 text-white text-xs font-bold hover:bg-brand-purple-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading mb-1">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500">Fill in your details and we will answer all program questions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setForm({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 90105 35867"
                      value={formData.phone}
                      onChange={(e) => setForm({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setForm({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Program of Interest</label>
                  <select 
                    value={formData.program}
                    onChange={(e) => setForm({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-white"
                  >
                    <option value="Tech & Software Dev">Tech & Software Dev (Java, MERN, MEAN, UI/UX)</option>
                    <option value="Enterprise Systems">Enterprise Systems (Polarion, Teamcenter, Mendix)</option>
                    <option value="Business & Data Tools">Business & Data Tools (Power BI, Excel, Marketing)</option>
                    <option value="Soft Skills & Test Prep">Soft Skills & IELTS Coaching</option>
                    <option value="Maqsusi Kids">Maqsusi Kids (Code For Kidz, IIT Foundational)</option>
                    <option value="wonderTouch Interactive">wonderTouch Touch Classroom System</option>
                    <option value="Play Zone & Daycare">Play Zone & Daycare (Malakpet)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Ask about batch timings, fee structures, or campus visits..."
                    value={formData.message}
                    onChange={(e) => setForm({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-brand-purple-600 focus:outline-none bg-white"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-brand-purple-600 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Now</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
