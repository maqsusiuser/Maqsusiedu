import { useState } from 'react';
import { Course, TrackCategory } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerTicker } from './components/PartnerTicker';
import { TracksSection } from './components/TracksSection';
import { PopularPrograms } from './components/PopularPrograms';
import { WonderTouchSection } from './components/WonderTouchSection';
import { MaqsusiKidsSection } from './components/MaqsusiKidsSection';
import { PlayZoneDaycareSection } from './components/PlayZoneDaycareSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CounselorSection } from './components/CounselorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { CounselorModal } from './components/CounselorModal';
import { DemoModal } from './components/DemoModal';
import { CctvModal } from './components/CctvModal';
import { PhoneCall, Sparkles, MessageCircle } from 'lucide-react';

export function App() {
  const [selectedTrack, setSelectedTrack] = useState<TrackCategory>('tech');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<TrackCategory | 'all'>('all');
  
  // Modals state
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCounselorModalOpen, setIsCounselorModalOpen] = useState(false);
  const [counselorTrack, setCounselorTrack] = useState<string | undefined>(undefined);
  
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoPresetTitle, setDemoPresetTitle] = useState<string | undefined>(undefined);
  
  const [isCctvModalOpen, setIsCctvModalOpen] = useState(false);

  const handleOpenCounselorModal = (trackTitle?: string) => {
    setCounselorTrack(trackTitle);
    setIsCounselorModalOpen(true);
  };

  const handleOpenDemoModal = (presetTitle?: string) => {
    setDemoPresetTitle(presetTitle);
    setIsDemoModalOpen(true);
  };

  const handleSelectTrack = (trackId: string) => {
    setSelectedTrack(trackId as TrackCategory);
    setSelectedTrackFilter(trackId as TrackCategory);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Navbar 
        onOpenCounselorModal={handleOpenCounselorModal}
        onOpenDemoModal={() => handleOpenDemoModal()}
        onSelectTrack={handleSelectTrack}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Banner */}
        <Hero 
          onOpenCounselorModal={() => handleOpenCounselorModal()}
          onOpenDemoModal={() => handleOpenDemoModal('Maqsusi Kids Demo')}
        />

        {/* Hiring Partners Ticker */}
        <PartnerTicker />

        {/* Specialized Learning Tracks */}
        <TracksSection 
          selectedTrack={selectedTrack}
          onSelectTrack={handleSelectTrack}
          onOpenCounselorModal={handleOpenCounselorModal}
        />

        {/* Popular Programs & Search */}
        <PopularPrograms 
          selectedTrackFilter={selectedTrackFilter}
          onSelectTrackFilter={setSelectedTrackFilter}
          onSelectCourse={(course) => setSelectedCourse(course)}
          onOpenCounselorModal={handleOpenCounselorModal}
        />

        {/* wonderTouch Interactive Classroom System Showcase */}
        <WonderTouchSection 
          onOpenDemoModal={(tierName) => handleOpenDemoModal(tierName)}
        />

        {/* Maqsusi Kids Vibrant Section */}
        <MaqsusiKidsSection 
          onOpenDemoModal={() => handleOpenDemoModal('Code For Kidz')}
        />

        {/* Play Zone & Daycare Malakpet */}
        <PlayZoneDaycareSection 
          onOpenCctvModal={() => setIsCctvModalOpen(true)}
          onOpenCounselorModal={handleOpenCounselorModal}
        />

        {/* About Telangana Partner Status & Campus */}
        <AboutSection 
          onOpenCounselorModal={() => handleOpenCounselorModal()}
        />

        {/* Testimonials & Success Stories */}
        <TestimonialsSection />

        {/* Counselor & Fee Grant Calculator */}
        <CounselorSection />

        {/* Contact Us & Malakpet Campus */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCounselorModal={() => handleOpenCounselorModal()}
      />

      {/* Floating Call & WhatsApp Quick Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button 
          onClick={() => handleOpenDemoModal('Free Trial Demo')}
          className="w-13 h-13 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white group relative"
          title="Book Free Demo"
        >
          <Sparkles className="w-6 h-6 animate-spin text-yellow-300" style={{ animationDuration: '6s' }} />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold font-kids px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Kids Free Demo!
          </span>
        </button>

        <a 
          href="https://wa.me/919010535867" 
          target="_blank" 
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white group relative"
          title="WhatsApp Counselor"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        <a 
          href="tel:+919010535867" 
          className="w-13 h-13 rounded-full bg-brand-purple-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white group relative"
          title="Call Admission Hotline"
        >
          <PhoneCall className="w-6 h-6 animate-pulse" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call +91 90105 35867
          </span>
        </a>
      </div>

      {/* Interactive Modals */}
      <CourseModal 
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(title) => handleOpenCounselorModal(title)}
      />

      <CounselorModal 
        isOpen={isCounselorModalOpen}
        onClose={() => setIsCounselorModalOpen(false)}
        preselectedTrack={counselorTrack}
      />

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        presetTitle={demoPresetTitle}
      />

      <CctvModal 
        isOpen={isCctvModalOpen}
        onClose={() => setIsCctvModalOpen(false)}
      />

    </div>
  );
}

export default App;
