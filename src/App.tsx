import { Icon } from '@iconify/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F7F7] flex flex-col items-center">
      {/* Main Container - Mobile first, responsive expansion */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row lg:gap-8 lg:p-8">
        
        {/* Left Column / Main Content */}
        <main className="flex-1 flex flex-col">
          
          {/* Status Bar (Mobile Only) */}
          <div className="flex justify-between items-center px-5 py-2 lg:hidden">
            <img src="./assets/IMG_1.svg" alt="status-left" className="h-10" />
            <img src="./assets/IMG_2.svg" alt="status-right" className="h-10" />
          </div>

          {/* Header Section */}
          <header className="px-5 py-4 flex items-center justify-between lg:px-0 lg:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1C1F25] rounded-md flex items-center justify-center shadow-sm">
                <img src="./assets/IMG_3.svg" alt="logo" className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-[#1E1F21] font-semibold text-lg leading-none">Poli</span>
                  <span className="text-[#6B6C6F] font-semibold text-lg leading-none">Cynth</span>
                </div>
                <span className="text-[#6B6C6F] font-mono text-[10px] tracking-[1px] uppercase mt-0.5">
                  Civic Stream Intelligence
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#EBECED]/60 border border-[#B4B6B9] rounded-full">
              <div className="w-1.5 h-1.5 bg-[#1C1F25] rounded-full" />
              <span className="text-[#1E1F21] font-mono text-[11px] font-semibold">v1.4 Live</span>
            </div>
          </header>

          {/* Hero Card */}
          <section className="px-5 lg:px-0">
            <div className="bg-[#F5F7F9] rounded-2xl border border-[#B4B6B9] shadow-sm overflow-hidden flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[348/261] bg-[#EBECED]/40">
                <img 
                  src="./assets/IMG_4.webp" 
                  alt="Hero Illustration" 
                  className="w-full h-full object-cover"
                />
                {/* Badges on Image */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-1 bg-[#F6F7F7]/90 border border-[#B4B6B9]/80 rounded-md">
                  <img src="./assets/IMG_5.svg" alt="layers" className="w-3 h-3" />
                  <span className="text-[#1E1F21] font-mono text-[10px] font-medium">3-Stream Model</span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-2 py-1 bg-[#F6F7F7]/90 border border-[#B4B6B9]/80 rounded-md">
                  <img src="./assets/IMG_6.svg" alt="shield" className="w-3 h-3" />
                  <span className="text-[#1E1F21] font-mono text-[10px] font-medium">Non-Partisan</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 border-t border-[#B4B6B9]/70">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#1E1F21] font-mono text-[10px] font-bold tracking-wider uppercase">Kingdon Framework</span>
                  <span className="text-[#6B6C6F] text-xs">•</span>
                  <span className="text-[#6B6C6F] text-xs">Civic Windows</span>
                </div>
                <h1 className="text-[#1E1F21] text-lg font-bold mb-2">Where Problems Meet Policy</h1>
                <p className="text-[#6B6C6F] text-xs leading-relaxed max-w-[320px]">
                  Navigate synchronized feeds connecting community challenges, political discourse, and legislative solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Architecture Section */}
          <section className="px-5 mt-6 lg:px-0">
            <div className="flex justify-between items-end mb-3">
              <h2 className="text-[#6B6C6F] font-mono text-[11px] font-bold tracking-wider uppercase">Tri-Stream Architecture</h2>
              <span className="text-[#6B6C6F] font-mono text-[10px] hidden sm:block">Swipe or Tap to Preview</span>
            </div>

            {/* Stream Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Problems Card */}
              <div className="bg-[#F5F7F9] p-2.5 rounded-xl border border-[#1C1F25] shadow-sm flex flex-col justify-between h-[77px]">
                <div className="flex justify-between items-start">
                  <span className="text-[#6B6C6F] font-mono text-[10px] font-bold">4A</span>
                  <img src="./assets/IMG_7.svg" alt="alert" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[#1E1F21] font-bold text-xs">Problems</div>
                  <div className="text-[#6B6C6F] font-mono text-[9px]">Stream</div>
                </div>
              </div>

              {/* Politics Card */}
              <div className="bg-[#EBECED]/40 p-2.5 rounded-xl border border-[#B4B6B9] flex flex-col justify-between h-[77px]">
                <div className="flex justify-between items-start">
                  <span className="text-[#6B6C6F] font-mono text-[10px] font-bold">4B</span>
                  <img src="./assets/IMG_8.svg" alt="users" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[#1E1F21] font-bold text-xs">Politics</div>
                  <div className="text-[#6B6C6F] font-mono text-[9px]">Stream</div>
                </div>
              </div>

              {/* Policy Card */}
              <div className="bg-[#EBECED]/40 p-2.5 rounded-xl border border-[#B4B6B9] flex flex-col justify-between h-[77px]">
                <div className="flex justify-between items-start">
                  <span className="text-[#6B6C6F] font-mono text-[10px] font-bold">4C</span>
                  <img src="./assets/IMG_9.svg" alt="file" className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[#1E1F21] font-bold text-xs">Policy</div>
                  <div className="text-[#6B6C6F] font-mono text-[9px]">Stream</div>
                </div>
              </div>
            </div>

            {/* Selected Stream Detail */}
            <div className="bg-[#EBECED]/20 p-3 rounded-md border border-[#B4B6B9]/80 shadow-sm flex items-center gap-3 mb-6">
              <div className="w-7.5 h-7.5 bg-[#F6F7F7] rounded-md border border-[#B4B6B9] flex items-center justify-center shrink-0">
                <img src="./assets/IMG_10.svg" alt="check" className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1E1F21] font-semibold text-xs">Problems Stream (4A)</span>
                <span className="text-[#6B6C6F] text-[11px]">Unfiltered civic concerns & voter challenges</span>
              </div>
            </div>

            {/* Tracking List */}
            <div className="space-y-2.5 mb-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1C1F25] rounded-full" />
                  <span className="text-[#1E1F21] font-medium text-xs">Real-time legislative tracking</span>
                </div>
                <span className="text-[#6B6C6F] font-mono text-[10px]">District 7</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#1C1F25] rounded-full" />
                  <span className="text-[#1E1F21] font-medium text-xs">Policy window alignment alerts</span>
                </div>
                <span className="text-[#6B6C6F] font-mono text-[10px]">94.8 Index</span>
              </div>
            </div>
          </section>
        </main>

        {/* Right Column / Actions - Desktop Sidebar / Mobile Bottom Bar */}
        <aside className="w-full lg:w-[380px] bg-[#F6F7F7] border-t border-[#B4B6B9] lg:border-t-0 lg:border-l lg:pl-8 lg:pt-12">
          <div className="px-5 py-4 flex flex-col gap-3 lg:px-0 lg:sticky lg:top-8">
            
            {/* Watch Orientation Button */}
            <button className="w-full h-11 bg-[#1C1F25] rounded-md flex items-center px-4 shadow-sm hover:bg-[#2d323b] transition-colors group">
              <img src="./assets/IMG_11.svg" alt="play" className="w-4 h-4 mr-2.5" />
              <span className="text-[#F6F7F7] font-semibold text-xs flex-1 text-left">Watch Orientation (1 min)</span>
              <img src="./assets/IMG_12.svg" alt="arrow" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Auth Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 h-10 bg-[#F6F7F7] border border-[#B4B6B9] rounded-md flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-colors">
                <img src="./assets/IMG_13.svg" alt="login" className="w-3.5 h-3.5" />
                <span className="text-[#1E1F21] font-medium text-xs">Log In</span>
              </button>
              <button className="flex-1 h-10 bg-[#DFE1E3] rounded-md flex items-center justify-center gap-1 hover:bg-[#d1d4d8] transition-colors">
                <span className="text-[#1E1F21] font-medium text-xs">Direct Feed</span>
                <img src="./assets/IMG_14.svg" alt="chevron" className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Terms Text */}
            <p className="text-[#6B6C6F] font-mono text-[10px] text-center leading-tight mt-2 px-4">
              By continuing, you agree to PoliCynth Civic Terms & Verified Citizen Policy.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}