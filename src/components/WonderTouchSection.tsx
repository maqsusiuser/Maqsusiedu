import React, { useState } from 'react';
import { WONDERTOUCH_TIERS } from '../data/edutechData';
import { Tv, Check, Volume2, Hand, Monitor, Smartphone, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WonderTouchSectionProps {
  onOpenDemoModal: (tierName?: string) => void;
}

export const WonderTouchSection: React.FC<WonderTouchSectionProps> = ({ onOpenDemoModal }) => {
  // Interactive Simulator State
  const [activeTab, setActiveTab] = useState<'phonics' | 'animals' | 'math'>('phonics');
  const [selectedItem, setSelectedItem] = useState<string | null>('A');
  const [soundFeedback, setSoundFeedback] = useState<string>('A is for Apple 🍎!');

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleTouchSim = (item: string, audioText: string) => {
    setSelectedItem(item);
    setSoundFeedback(audioText);
    triggerConfetti();
  };

  return (
    <section id="wondertouch" className="py-20 bg-gradient-to-b from-slate-900 via-brand-purple-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Neon Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 text-orange-300 text-xs font-black uppercase tracking-widest">
            <Tv className="w-4 h-4 text-orange-400" />
            <span>A MAQSUSI EDUTECH PRODUCT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight">
            wonder<span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">Touch</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
            A touch-based interactive learning system for Nursery–UKG — turning any classroom wall into a hands-on learning surface.
          </p>
        </div>

        {/* Interactive Classroom Wall Experience Simulator */}
        <div className="mb-20 bg-slate-950/90 rounded-3xl border-2 border-orange-500/30 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                <Hand className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-heading">Try wonderTouch Live Interactive Board</h3>
                <p className="text-xs text-slate-400">Tap or click any element below to simulate touch-wall response!</p>
              </div>
            </div>

            {/* Sim Category Switches */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
              <button 
                onClick={() => { setActiveTab('phonics'); handleTouchSim('A', 'A is for Apple 🍎!'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'phonics' ? 'bg-orange-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Phonics & Alphabets
              </button>
              <button 
                onClick={() => { setActiveTab('animals'); handleTouchSim('Lion', 'Roar! Lion is the King of the Jungle 🦁!'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'animals' ? 'bg-orange-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Animals & Sounds
              </button>
              <button 
                onClick={() => { setActiveTab('math'); handleTouchSim('5', 'Count 5 Stars ⭐⭐⭐⭐⭐!'); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'math' ? 'bg-orange-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                Math & Shapes
              </button>
            </div>
          </div>

          {/* Interactive Touch Surface Canvas */}
          <div className="relative rounded-2xl bg-gradient-to-br from-brand-purple-950 via-slate-900 to-brand-purple-950 p-6 sm:p-10 border border-slate-800 text-center min-h-[220px] flex flex-col justify-between items-center overflow-hidden">
            
            <div className="absolute top-3 right-4 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/50 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Projector Surface Connected (1080p Touch Active)</span>
            </div>

            {/* Surface Content per activeTab */}
            {activeTab === 'phonics' && (
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4 my-4 w-full max-w-2xl">
                {[
                  { key: 'A', name: 'Apple', icon: '🍎' },
                  { key: 'B', name: 'Ball', icon: '⚽' },
                  { key: 'C', name: 'Cat', icon: '🐱' },
                  { key: 'D', name: 'Dog', icon: '🐶' },
                  { key: 'E', name: 'Elephant', icon: '🐘' },
                  { key: 'F', name: 'Fish', icon: '🐠' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleTouchSim(item.key, `${item.key} is for ${item.name} ${item.icon}!`)}
                    className={`p-4 rounded-2xl border-2 transition-all transform hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-1 ${
                      selectedItem === item.key 
                        ? 'border-orange-400 bg-orange-500/20 shadow-lg shadow-orange-500/20 text-orange-300' 
                        : 'border-slate-700 bg-slate-800/80 text-white hover:border-slate-500'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-extrabold text-sm font-kids">{item.key} - {item.name}</span>
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'animals' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4 w-full max-w-2xl">
                {[
                  { name: 'Lion', sound: 'Roar! Lion is King 🦁', icon: '🦁' },
                  { name: 'Monkey', sound: 'Ooh ooh aah aah 🐵', icon: '🐒' },
                  { name: 'Dolphin', sound: 'Splash! Dolphin Jump 🐬', icon: '🐬' },
                  { name: 'Parrot', sound: 'Squawk! Hello Friends 🦜', icon: '🦜' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleTouchSim(item.name, item.sound)}
                    className={`p-4 rounded-2xl border-2 transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-2 ${
                      selectedItem === item.name 
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300' 
                        : 'border-slate-700 bg-slate-800/80 text-white'
                    }`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="font-bold text-sm font-kids">{item.name}</span>
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'math' && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 my-4 w-full max-w-xl">
                {['1', '2', '3', '4', '5'].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleTouchSim(num, `You tapped Number ${num}! Great Job ⭐!`)}
                    className={`p-4 rounded-2xl border-2 transition-all text-2xl font-black font-kids ${
                      selectedItem === num 
                        ? 'border-teal-400 bg-teal-500/20 text-teal-300' 
                        : 'border-slate-700 bg-slate-800/80 text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            )}

            {/* Audio Response Output Indicator */}
            <div className="w-full bg-slate-900/90 rounded-xl p-3 border border-orange-500/40 flex items-center justify-center gap-3">
              <Volume2 className="w-5 h-5 text-orange-400 animate-bounce" />
              <span className="font-extrabold text-sm sm:text-base text-amber-300 font-kids">
                {soundFeedback}
              </span>
            </div>

          </div>
        </div>

        {/* 3 Tier Product Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WONDERTOUCH_TIERS.map((tier) => (
            <div 
              key={tier.id}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                tier.isPopular 
                  ? 'bg-slate-900 border-orange-500 shadow-2xl shadow-orange-500/20 ring-2 ring-orange-500/50 scale-[1.02]' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Badge Tag */}
              {tier.badge && (
                <div className={`absolute -top-3.5 right-6 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-lg ${
                  tier.isPopular ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-slate-700 text-white'
                }`}>
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Hardware Icon */}
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                  {tier.id === 'lite' ? <Smartphone className="w-6 h-6" /> :
                   tier.id === 'standard' ? <Monitor className="w-6 h-6" /> :
                   <Layers className="w-6 h-6" />}
                </div>

                <h3 className="text-2xl font-black text-white font-heading mb-2">
                  {tier.name}
                </h3>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {tier.tagline}
                </p>

                <div className="text-sm font-extrabold text-amber-400 mb-6 pb-4 border-b border-slate-800">
                  {tier.priceNote}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Key Features:</div>
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <button 
                onClick={() => onOpenDemoModal(tier.name)}
                className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                  tier.isPopular 
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-orange-500/30' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                {tier.buttonText}
              </button>

            </div>
          ))}
        </div>

        {/* Demo Request Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/10 border border-orange-500/30 rounded-3xl p-8 text-center sm:flex items-center justify-between gap-6">
          <div className="text-left space-y-1 mb-4 sm:mb-0">
            <h4 className="text-xl font-extrabold text-white font-heading">Want an in-person school demo at your campus?</h4>
            <p className="text-xs text-slate-300">Our engineering team visits schools across Hyderabad and Telangana for live hardware setup demonstrations.</p>
          </div>
          <button 
            onClick={() => onOpenDemoModal('wonderTouch On-Site School Demo')}
            className="px-6 py-3.5 rounded-2xl bg-orange-500 text-slate-950 font-extrabold text-xs sm:text-sm hover:bg-orange-400 transition-colors shrink-0 shadow-lg cursor-pointer"
          >
            Request School Demo
          </button>
        </div>

      </div>
    </section>
  );
};
