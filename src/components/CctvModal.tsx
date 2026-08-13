import React, { useState } from 'react';
import { X, Video, ShieldCheck, Lock, RefreshCw } from 'lucide-react';

interface CctvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CctvModal: React.FC<CctvModalProps> = ({ isOpen, onClose }) => {
  const [activeCam, setActiveCam] = useState<'play' | 'nap' | 'dining' | 'activity'>('play');
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const camDetails = {
    play: {
      name: 'CAM 01: Main Indoor Play Zone',
      image: 'https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      status: 'Live · 1080p 60fps · Verified Caretaker Active'
    },
    nap: {
      name: 'CAM 02: Cozy Sleeping Nursery',
      image: 'https://images.pexels.com/photos/8363565/pexels-photo-8363565.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      status: 'Live · Night Vision Mode · Temp 24°C'
    },
    dining: {
      name: 'CAM 03: Dining & Organic Snack Hall',
      image: 'https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      status: 'Live · Meal Time Supervision · Staff Present'
    },
    activity: {
      name: 'CAM 04: wonderTouch Interactive Corner',
      image: 'https://images.pexels.com/photos/8363040/pexels-photo-8363040.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      status: 'Live · Touch Wall Activity Session'
    }
  };

  const currentCam = camDetails[activeCam];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-teal-500/40 relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-white font-heading">Maqsusi Parent CCTV Access Simulation</h3>
                <span className="bg-red-500 text-white font-black text-[10px] px-2 py-0.5 rounded-full animate-pulse">
                  LIVE STREAM
                </span>
              </div>
              <p className="text-xs text-slate-400">Encrypted 256-bit Secure Stream for Enrolled Parents</p>
            </div>
          </div>

          <button 
            onClick={handleRefresh}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-400 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-bold"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh Feed</span>
          </button>
        </div>

        {/* Camera Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          <button 
            onClick={() => setActiveCam('play')}
            className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCam === 'play' ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-400' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🎥 Play Zone
          </button>
          <button 
            onClick={() => setActiveCam('nap')}
            className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCam === 'nap' ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-400' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🌙 Nap Room
          </button>
          <button 
            onClick={() => setActiveCam('dining')}
            className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCam === 'dining' ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-400' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🍲 Dining Hall
          </button>
          <button 
            onClick={() => setActiveCam('activity')}
            className={`p-2.5 rounded-xl text-xs font-bold transition-all ${
              activeCam === 'activity' ? 'bg-teal-600 text-white shadow-md ring-2 ring-teal-400' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            🧩 wonderTouch
          </button>
        </div>

        {/* Video Screen Box */}
        <div className="relative rounded-2xl overflow-hidden border-2 border-teal-500/50 bg-black h-72 sm:h-80 flex flex-col justify-between p-4">
          
          <img 
            src={currentCam.image} 
            alt={currentCam.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isRefreshing ? 'opacity-40' : 'opacity-90'}`} 
          />

          {/* Top HUD */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 backdrop-blur-sm">
            <span className="text-amber-400 font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>{currentCam.name}</span>
            </span>
            <span className="text-slate-300">
              {new Date().toLocaleTimeString()}
            </span>
          </div>

          {/* Bottom HUD */}
          <div className="relative z-10 flex items-center justify-between text-[11px] bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 backdrop-blur-sm">
            <span className="text-emerald-400 font-semibold">{currentCam.status}</span>
            <span className="text-teal-300 font-extrabold flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Parent Access Only</span>
            </span>
          </div>

        </div>

        {/* Security reassurance banner */}
        <div className="mt-4 p-3 bg-teal-950/80 rounded-2xl border border-teal-800 flex items-center justify-between text-xs text-teal-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Parents get unique password credentials upon daycare enrollment in Malakpet.</span>
          </div>
          <button 
            onClick={onClose}
            className="font-bold text-amber-300 hover:underline shrink-0"
          >
            Enroll Child
          </button>
        </div>

      </div>
    </div>
  );
};
