import React, { useState } from 'react';
import { Sparkles, Gamepad2, Award, Play, CheckCircle2, Rocket, Puzzle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MaqsusiKidsSectionProps {
  onOpenDemoModal: () => void;
}

export const MaqsusiKidsSection: React.FC<MaqsusiKidsSectionProps> = ({ onOpenDemoModal }) => {
  // Mini Scratch/Block Coding Game Simulator for Kids
  const [blocks, setBlocks] = useState<string[]>(['When Flag Clicked 🚩']);
  const [spritePosition, setSpritePosition] = useState<{ x: number; rot: number }>({ x: 0, rot: 0 });
  const [isRunning, setIsRunning] = useState(false);

  const addBlock = (cmd: string) => {
    if (blocks.length < 5) {
      setBlocks([...blocks, cmd]);
    }
  };

  const clearBlocks = () => {
    setBlocks(['When Flag Clicked 🚩']);
    setSpritePosition({ x: 0, rot: 0 });
  };

  const runCode = () => {
    setIsRunning(true);
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });

    let currentX = 0;
    let currentRot = 0;

    blocks.forEach((cmd, idx) => {
      setTimeout(() => {
        if (cmd === 'Move 10 Steps ➡️') currentX += 30;
        if (cmd === 'Turn 90 Degrees 🔄') currentRot += 90;
        if (cmd === 'Say "Hello World!" 💬') {
          // Say action
        }
        setSpritePosition({ x: currentX, rot: currentRot });
        if (idx === blocks.length - 1) {
          setIsRunning(false);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section id="kids" className="py-20 bg-gradient-to-br from-pink-500 via-purple-600 to-brand-purple-600 text-white relative overflow-hidden font-kids">
      
      {/* Floating Animated Background Shapes */}
      <div className="absolute top-10 left-10 text-pink-300/30 text-6xl animate-float pointer-events-none">⭐</div>
      <div className="absolute top-20 right-12 text-yellow-300/40 text-7xl animate-float-slow pointer-events-none">🚀</div>
      <div className="absolute bottom-10 left-1/3 text-cyan-300/30 text-6xl animate-float pointer-events-none">🧩</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-yellow-300 border border-white/30 text-xs sm:text-sm font-bold tracking-wide shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
            <span>★ AGES 6 TO 15 YEARS · PLAYFUL & SAFE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Maqsusi Kids — future-ready from the start
          </h2>

          <p className="text-lg sm:text-xl text-pink-100 max-w-2xl mx-auto font-sans font-medium leading-relaxed">
            Code For Kidz, IIT Foundational, and IAS/IPS Foundational programs designed to make learning playful, safe, and outcome-driven.
          </p>

          <div className="pt-2">
            <button 
              onClick={onOpenDemoModal}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-slate-950 font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all transform cursor-pointer border-2 border-white/50 inline-flex items-center gap-2"
            >
              <Rocket className="w-6 h-6 text-slate-950 animate-bounce" />
              <span>Book a Free Demo Class</span>
            </button>
          </div>
        </div>

        {/* 3 Kids Programs Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: Code For Kidz */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-pink-300/30 shadow-2xl hover:border-yellow-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-pink-500 text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-widest mb-1">
              Classes 1st – 8th
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Code For Kidz & Scratch
            </h3>
            <p className="text-xs text-pink-100 font-sans mb-6 leading-relaxed">
              Block coding, 2D game design, mobile application building, and introduction to Python algorithms.
            </p>
            <ul className="space-y-2 text-xs font-sans text-white mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Build 10+ Original Games</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Logic & Problem Solving</span>
              </li>
            </ul>
            <button 
              onClick={onOpenDemoModal}
              className="w-full py-3 rounded-2xl bg-white text-pink-600 font-extrabold text-xs hover:bg-yellow-300 hover:text-slate-950 transition-colors shadow-md"
            >
              Book Free Trial Session
            </button>
          </div>

          {/* Card 2: IIT Foundational */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-300/30 shadow-2xl hover:border-yellow-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Puzzle className="w-8 h-8" />
            </div>
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-widest mb-1">
              Classes 6th – 10th
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              IIT Foundational Science
            </h3>
            <p className="text-xs text-pink-100 font-sans mb-6 leading-relaxed">
              Analytical physics, speed mathematics, chemistry experiments, and Olympiad competition readiness.
            </p>
            <ul className="space-y-2 text-xs font-sans text-white mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Hands-on Experiment Kits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Vedic Math & Visual Proofs</span>
              </li>
            </ul>
            <button 
              onClick={onOpenDemoModal}
              className="w-full py-3 rounded-2xl bg-white text-purple-700 font-extrabold text-xs hover:bg-yellow-300 hover:text-slate-950 transition-colors shadow-md"
            >
              Book Free Trial Session
            </button>
          </div>

          {/* Card 3: IAS / IPS Foundation */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-cyan-300/30 shadow-2xl hover:border-yellow-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center font-black text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-widest mb-1">
              Classes 6th – 10th
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              IAS / IPS Foundational
            </h3>
            <p className="text-xs text-pink-100 font-sans mb-6 leading-relaxed">
              Civic awareness, current affairs, public speaking, debating, and analytical essay writing skills.
            </p>
            <ul className="space-y-2 text-xs font-sans text-white mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>Mock Debates & Model UN</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-300" />
                <span>General Knowledge Mastery</span>
              </li>
            </ul>
            <button 
              onClick={onOpenDemoModal}
              className="w-full py-3 rounded-2xl bg-white text-cyan-800 font-extrabold text-xs hover:bg-yellow-300 hover:text-slate-950 transition-colors shadow-md"
            >
              Book Free Trial Session
            </button>
          </div>

        </div>

        {/* Interactive Block Coding Simulator Playground for Kids */}
        <div className="bg-slate-950/90 rounded-3xl border-4 border-yellow-400 p-6 sm:p-8 shadow-2xl text-slate-900 font-sans text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-yellow-400 text-slate-950 flex items-center justify-center font-black text-xl">
                🐱
              </div>
              <div>
                <h4 className="text-xl font-bold font-kids">Try Scratch Block Coding Right Now!</h4>
                <p className="text-xs text-slate-400">Click commands to build your code stack, then press Run!</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={clearBlocks}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                Reset
              </button>
              <button 
                onClick={runCode}
                disabled={isRunning}
                className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>RUN CODE</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            
            {/* Command Palette */}
            <div className="md:col-span-4 bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-3">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                1. Click to add blocks
              </div>
              <div className="space-y-2">
                <button 
                  onClick={() => addBlock('Move 10 Steps ➡️')}
                  className="w-full text-left px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs shadow-md"
                >
                  + Move 10 Steps ➡️
                </button>
                <button 
                  onClick={() => addBlock('Turn 90 Degrees 🔄')}
                  className="w-full text-left px-3 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-extrabold text-xs shadow-md"
                >
                  + Turn 90 Degrees 🔄
                </button>
                <button 
                  onClick={() => addBlock('Say "Hello World!" 💬')}
                  className="w-full text-left px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md"
                >
                  + Say "Hello World!" 💬
                </button>
              </div>
            </div>

            {/* Block Stack Canvas */}
            <div className="md:col-span-4 bg-slate-900 rounded-2xl p-4 border border-slate-800 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                2. Your Block Sequence
              </div>
              <div className="space-y-1.5">
                {blocks.map((blk, idx) => (
                  <div key={idx} className="px-3 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md border border-amber-300 flex items-center justify-between">
                    <span>{blk}</span>
                    <span className="text-[10px] bg-slate-950 text-white px-1.5 py-0.5 rounded-full">{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sprite Output Screen */}
            <div className="md:col-span-4 bg-slate-900 rounded-2xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden min-h-[160px]">
              <div className="text-[10px] font-bold text-slate-400 absolute top-2 left-3 uppercase">
                3. Live Output Stage
              </div>

              <div 
                className="transition-all duration-500 text-5xl transform flex flex-col items-center"
                style={{ 
                  transform: `translateX(${spritePosition.x}px) rotate(${spritePosition.rot}deg)` 
                }}
              >
                🤖
              </div>

              {isRunning && (
                <div className="mt-2 text-xs font-bold text-yellow-300 bg-slate-800 px-3 py-1 rounded-full animate-bounce">
                  Executing Robot Commands...
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
