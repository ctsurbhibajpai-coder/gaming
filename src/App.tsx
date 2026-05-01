import React, { useState } from 'react';
import heroImage from './assets/Hero image.png';
import gameplayVideo from './assets/Futuristic_shooter_gameplay_video_202605011629.mp4';

const PATHS = [
  {
    id: 0,
    title: "Mystic Vanguard",
    subtitle: "STRIKE FIRST, STRIKE FAST",
    description: "Precision. Speed. Dominance. Experience the visceral combat of tomorrow. Strike first, strike fast, and leave no survivors in the ultimate test of aim and reflexes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTMQjrGEBCjL0tINWX0qO-QGD0U3LK8onEQ1URy9vH0mu_bI89TFEz5pceniTwibzzxs-UPCjtaeyngBUElwceNEFt3_Wr_EItsd6Hll57rHhOPmo8IPMIGMkeBO28rmM3V9hjOf7i4tnb-kszhhI-tNZsj4oQBKPFny0ZXqbG-gSG4RGFSKdgLWN9sLXevIoITINzttCHJS1lKg6hOfh26bDg9gUX8wdbRT9wRXxOVoVHcBlx1ZwBcsl2jMUUdL7u_p9N7AFskV40",
    video: gameplayVideo,
    themeColor: "text-primary"
  },
  {
    id: 1,
    title: "Realm Conquerors",
    subtitle: "COMMAND AND CONQUER",
    description: "Outthink your opponents from the comfort of your command center. Real-time tactics meet high-stakes decision making on a global scale.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQQTeTWhU4wn3UWxmcOODDjgsy5VjU3GIh9bBr_TA-rk8afR7i8DS0_uU79fCE-Jogub5EnI0QqQeq9hxjn_LPGcgBVeHQPWajcM0KXpy04z5XvSJwu_d92IuiCt5EFd-yOHHZIxRwaknuac8CwGNeNGQJnP6aINxmNgL16C2toqiBHT-vijo8f5jLS27U5iBnZQz20EeX17z7NXHlPfiDwAkxugTvfSATQHlq426o43y1GoZffqLMrM5ffxulla1VhUayLaUUfxuT",
    video: "https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-video-game-of-strategy-and-34440-large.mp4",
    themeColor: "text-tertiary"
  },
  {
    id: 2,
    title: "Kingsguard Legends",
    subtitle: "WRITE YOUR LEGEND",
    description: "Embark on an epic journey through mystical realms. Every choice you make shapes the world around you in this deeply immersive narrative experience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUfuuuKHmbYJ9EVqcIOY8Misbf7Sr3Z_p8qS521qS49oY7FBkMONRWQfPVYPpkb1uYZPYWnSV3bLBQkpfNO3AOK6G4NpclVz6RsNnUMK5uljVEVpd3hoooFqLELrZhRXaUD8RQdtbitzH4KOqs81NLgQsPx29Y7U4c1ms6E0m5uTLBbHafn55BF2MkYmx0fHuH_Be9hrlQtkjz__MltyNE_xynnV7JpgXJnUzFT-jICVxJe5XKfM01t6gjrTUy4aA1cP0w_eNd00fl",
    video: "https://assets.mixkit.co/videos/preview/mixkit-animation-of-a-futuristic-city-at-night-with-neon-34351-large.mp4",
    themeColor: "text-secondary"
  },
  {
    id: 3,
    title: "The Cursed Legion",
    subtitle: "TEAMWORK. TACTICS. VICTORY.",
    description: "Outplay your rivals in the ultimate tactical battlefield. Coordinate with your team to destroy the enemy nexus in high-intensity 5v5 matches.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO0uYbS0fSvoFsEfhHrUinHWGMEWxgNCzZlYByq7vBR0_VRDwGgbF0RqBpHBQLfjZHmgJq-N82rJKczeIzLPR8H772S9cZPGseL0ituRPFT1bXW6SB_5XZyTEp2TDinFpvjyLLmPNuARsYhly2u0kTkqcYl8U6Vgyfg2Snt6HtecQUx1zeZuQwL69okXsfycU5E22I_zESE6PMo7SL0T2Cr70ytsU0R4XYgErHW9LGvftNO01w8Frh_t3zIV_lYbMroir_7X_ck566",
    video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-person-playing-a-video-game-34444-large.mp4",
    themeColor: "text-primary-container"
  }
];

export default function App() {
  const [activeTheme, setActiveTheme] = useState(0);
  return (
    <div className="bg-background text-on-surface overflow-x-hidden">
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex justify-between items-center py-4 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<div className="text-base font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 font-['Space_Grotesk'] uppercase">
                BATTLE OF THE ANCIENTS
            </div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-['Space_Grotesk'] tracking-tighter uppercase font-bold text-white border-b-2 border-transparent hover:border-white pb-1 transition-all" href="#">LORE</a>
<a className="font-['Space_Grotesk'] tracking-tighter uppercase font-bold text-white border-b-2 border-transparent hover:border-white pb-1 transition-all" href="#">HEROES</a>
<a className="font-['Space_Grotesk'] tracking-tighter uppercase font-bold text-white border-b-2 border-transparent hover:border-white pb-1 transition-all" href="#">GAMEPLAY</a>
<a className="font-['Space_Grotesk'] tracking-tighter uppercase font-bold text-white border-b-2 border-transparent hover:border-white pb-1 transition-all" href="#">COMMUNITY</a>
<a className="font-['Space_Grotesk'] tracking-tighter uppercase font-bold text-white border-b-2 border-transparent hover:border-white pb-1 transition-all" href="#">BATTLE PASS</a>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer transition-all hover:scale-110">language</span>
<span className="material-symbols-outlined text-white cursor-pointer transition-all hover:scale-110">account_circle</span>
<button className="bg-white text-[#B20923] px-6 py-2 rounded-full font-['Space_Grotesk'] font-bold tracking-tighter hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">PLAY NOW</button>
</div>
</div>
</nav>
{/*  Section 1: Hero  */}
<section className="relative h-screen flex flex-col justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="cinematic digital painting of an ancient battle arena with floating floating obsidian pillars and purple energy arcs under a stormy sky" src={heroImage}/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-start text-left pt-20">
  <h1 className="font-['Space_Grotesk'] text-white uppercase font-black leading-[0.85] drop-shadow-2xl tracking-tighter flex flex-col items-start">
    <span className="text-7xl md:text-8xl lg:text-[130px] xl:text-[160px]">BATTLE</span>
    <span className="text-7xl md:text-8xl lg:text-[130px] xl:text-[160px]">OF THE</span>
    <span className="text-7xl md:text-8xl lg:text-[130px] xl:text-[160px]">ANCIENTS</span>
  </h1>
  <button className="mt-12 lg:mt-16 bg-white text-[#B20923] px-12 py-5 lg:px-16 lg:py-6 rounded-full font-['Space_Grotesk'] font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.2)] text-xl lg:text-3xl">
    Play free now
  </button>
</div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
</section>
{/*  Section 2: Featured Games (Carousel Concept)  */}
<section className="py-stack-lg relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<div className="text-center mb-16">
<h2 className="font-h2 text-on-surface uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight">Battle Legends</h2>
<p className="text-on-surface-variant font-body-md">Discover the most iconic characters of the realm.</p>
</div>
<div className="flex items-center justify-center gap-12 lg:gap-16 overflow-visible pt-[180px] pb-24 flex-nowrap overflow-x-auto no-scrollbar snap-x">
  <a href="https://www.mythrillfiction.com/the-dark-rider" target="_blank" rel="noreferrer" className="group">
    <div className="myth-card">
      <div className="myth-wrapper">
        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="myth-cover-image" alt="Dark Rider" />
      </div>
      <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="myth-character" alt="Dark Rider Character" />
    </div>
  </a>

  <a href="https://www.mythrillfiction.com/force-mage" target="_blank" rel="noreferrer" className="group">
    <div className="myth-card">
      <div className="myth-wrapper">
        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className="myth-cover-image" alt="Force Mage" />
      </div>
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" className="myth-character" alt="Force Mage Character" />
    </div>
  </a>

  <a href="https://www.mythrillfiction.com/force-mage" target="_blank" rel="noreferrer" className="group">
    <div className="myth-card">
      <div className="myth-wrapper">
        <img src="https://raw.githubusercontent.com/devsahil2063/Daily-AI-Research/a4f9976cfdf9307e69e77dc3dfdfffd5b9e2726b/download.png" className="myth-cover-image brightness-[0.8]" alt="Force Mage" />
      </div>
      <img src="https://raw.githubusercontent.com/devsahil2063/Daily-AI-Research/a4f9976cfdf9307e69e77dc3dfdfffd5b9e2726b/image%202.png" className="myth-character brightness-[0.8]" alt="Force Mage Character" />
    </div>
  </a>
</div>
</section>
{/*  Section 3: Trending/Live Matches  */}
<section className="py-32 md:py-48 relative overflow-hidden">
  {/* Video Background */}
  <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src={gameplayVideo} type="video/mp4" />
  </video>
  {/* Dull Overlay */}
  <div className="absolute inset-0 bg-black/80 z-0 backdrop-blur-[2px]"></div>

  <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-md items-end">
      <div className="md:col-span-8 lg:col-span-9">
        <h2 className="font-h2 uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight">Live Conquests</h2>
        <p className="text-on-surface-variant font-body-md">Witness the struggle for supremacy in real-time.</p>
      </div>
      <div className="md:col-span-4 lg:col-span-3 flex md:justify-end">
        <button className="text-tertiary flex items-center gap-2 font-label-caps hover:underline cursor-pointer">
          VIEW ALL BATTLES <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pb-12">
{/*  Match Card 1  */}
<div className="md:col-span-4 game-card-container group relative overflow-visible h-[450px]">
  <div className="game-card-inner absolute inset-0 border-2 border-white/10 bg-black/40 backdrop-blur-md group-hover:border-primary/50 group-hover:bg-black/60 shadow-2xl" 
       style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)' }}>
    {/* Scanning line animation */}
    <div className="absolute inset-x-0 h-[1px] bg-primary/40 shadow-[0_0_15px_rgba(178,9,35,0.8)] opacity-0 group-hover:animate-scan z-20"></div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-1">LIVE STREAMING</span>
          <h4 className="font-['Space_Grotesk'] text-2xl uppercase font-black leading-none italic tracking-tighter">TOURNAMENT FINAL</h4>
        </div>
        <div className="bg-error/20 border border-error/50 px-3 py-1 text-[10px] font-black flex items-center gap-1.5 animate-pulse">
          <span className="w-1.5 h-1.5 bg-error rounded-full"></span> LIVE
        </div>
      </div>
      <div className="relative py-10 flex items-center justify-between">
         <div className="flex flex-col items-center gap-4 group/team">
           <div className="w-20 h-20 bg-surface-container-high border-2 border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/team:opacity-100 transition-opacity"></div>
             <span className="material-symbols-outlined text-5xl text-primary -rotate-45 group-hover:rotate-0 transition-all duration-500 relative z-10">shield</span>
           </div>
           <p className="font-['Space_Grotesk'] font-black text-sm uppercase tracking-wider">TEAM APEX</p>
         </div>
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="text-6xl font-black italic text-white/5 uppercase select-none leading-none">VS</div>
            <div className="text-4xl font-black italic text-primary drop-shadow-[0_0_15px_rgba(178,9,35,0.5)] -mt-4 text-center">14 : 12</div>
         </div>
         <div className="flex flex-col items-center gap-4 group/team">
           <div className="w-20 h-20 bg-surface-container-high border-2 border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover/team:opacity-100 transition-opacity"></div>
             <span className="material-symbols-outlined text-5xl text-tertiary -rotate-45 group-hover:rotate-0 transition-all duration-500 relative z-10">bolt</span>
           </div>
           <p className="font-['Space_Grotesk'] font-black text-sm uppercase tracking-wider">STORM BRINGERS</p>
         </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">CURRENT SCORE</span>
          <span className="text-xs font-black uppercase text-white/60 italic">BATTLE FOR THE THRONE</span>
        </div>
        <button className="bg-primary hover:bg-white text-white hover:text-black px-8 py-3 font-black text-xs transition-all uppercase tracking-[0.2em] italic" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}>
          WATCH BROADCAST
        </button>
      </div>
    </div>
  </div>
</div>
{/*  Match Card 2  */}
<div className="md:col-span-4 game-card-container group relative overflow-visible h-[450px]">
  <div className="game-card-inner absolute inset-0 border-2 border-white/10 bg-black/40 backdrop-blur-md group-hover:border-tertiary/50 group-hover:bg-black/60 shadow-2xl" 
       style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)' }}>
    {/* Scanning line animation */}
    <div className="absolute inset-x-0 h-[1px] bg-tertiary/40 shadow-[0_0_15px_rgba(169,236,255,0.8)] opacity-0 group-hover:animate-scan z-20"></div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 blur-3xl rounded-full"></div>
    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.2em] text-tertiary uppercase mb-1">UPCOMING MATCH</span>
          <h4 className="font-['Space_Grotesk'] text-2xl uppercase font-black leading-none italic tracking-tighter">QUALIFIERS</h4>
        </div>
        <div className="bg-tertiary/20 border border-tertiary/50 px-3 py-1 text-[10px] font-black uppercase">
          PRE-MATCH
        </div>
      </div>
      <div className="relative py-10 flex items-center justify-between">
         <div className="flex flex-col items-center gap-4 group/team">
           <div className="w-20 h-20 bg-surface-container-high border-2 border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover/team:opacity-100 transition-opacity"></div>
             <span className="material-symbols-outlined text-5xl text-secondary -rotate-45 group-hover:rotate-0 transition-all duration-500 relative z-10">skull</span>
           </div>
           <p className="font-['Space_Grotesk'] font-black text-sm uppercase tracking-wider">GHOST DIVISION</p>
         </div>
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="text-6xl font-black italic text-white/5 uppercase select-none leading-none">VS</div>
            <div className="text-xl font-black italic text-tertiary -mt-4 text-center">STARTS IN 14:02</div>
         </div>
         <div className="flex flex-col items-center gap-4 group/team">
           <div className="w-20 h-20 bg-surface-container-high border-2 border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-error/20 opacity-0 group-hover/team:opacity-100 transition-opacity"></div>
             <span className="material-symbols-outlined text-5xl text-error -rotate-45 group-hover:rotate-0 transition-all duration-500 relative z-10">local_fire_department</span>
           </div>
           <p className="font-['Space_Grotesk'] font-black text-sm uppercase tracking-wider">FIRE REAPERS</p>
         </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">PREDICTION POOL</span>
          <span className="text-xs font-black uppercase text-white/60 italic">STAKES ARE HIGH</span>
        </div>
        <button className="bg-tertiary hover:bg-white text-black hover:text-black px-8 py-3 font-black text-xs transition-all uppercase tracking-[0.2em] italic" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}>
          PLACE PREDICTION
        </button>
      </div>
    </div>
  </div>
</div>
{/*  Match Card 3  */}
<div className="md:col-span-4 game-card-container group relative overflow-visible h-[450px]">
  <div className="game-card-inner absolute inset-0 border-2 border-white/10 bg-black/40 backdrop-blur-md group-hover:border-primary/50 group-hover:bg-black/60 shadow-2xl" 
       style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)' }}>
    {/* Scanning line animation */}
    <div className="absolute inset-x-0 h-[1px] bg-primary/40 shadow-[0_0_15px_rgba(178,9,35,0.8)] opacity-0 group-hover:animate-scan z-20"></div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase mb-1">PRO LEAGUE</span>
          <h4 className="font-['Space_Grotesk'] text-2xl uppercase font-black leading-none italic tracking-tighter">QUARTER-FINALS</h4>
        </div>
        <div className="bg-error/20 border border-error/50 px-3 py-1 text-[10px] font-black flex items-center gap-1.5 animate-pulse">
          <span className="w-1.5 h-1.5 bg-error rounded-full"></span> LIVE
        </div>
      </div>
      <div className="relative py-10 flex items-center justify-between">
         <div className="flex flex-col items-center gap-4 group/team">
           <div className="w-20 h-20 bg-surface-container-high border-2 border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover/team:opacity-100 transition-opacity"></div>
             <span className="material-symbols-outlined text-5xl text-primary-container -rotate-45 group-hover:rotate-0 transition-all duration-500 relative z-10">diamond</span>
           </div>
           <p className="font-['Space_Grotesk'] font-black text-sm uppercase tracking-wider">NEON SAINTS</p>
         </div>
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="text-6xl font-black italic text-white/5 uppercase select-none leading-none">VS</div>
            <div className="text-4xl font-black italic text-primary drop-shadow-[0_0_15px_rgba(178,9,35,0.5)] -mt-4 text-center">02 : 01</div>
         </div>
         <div className="flex flex-col items-center gap-4 group/team">
           <div className="w-20 h-20 bg-surface-container-high border-2 border-white/10 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500 overflow-hidden relative">
             <div className="absolute inset-0 bg-secondary-fixed/20 opacity-0 group-hover/team:opacity-100 transition-opacity"></div>
             <span className="material-symbols-outlined text-5xl text-secondary-fixed -rotate-45 group-hover:rotate-0 transition-all duration-500 relative z-10">rocket</span>
           </div>
           <p className="font-['Space_Grotesk'] font-black text-sm uppercase tracking-wider">ORBIT ELITE</p>
         </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">CURRENT SCORE</span>
          <span className="text-xs font-black uppercase text-white/60 italic">GLORY AWAITS</span>
        </div>
        <button className="bg-primary hover:bg-white text-white hover:text-black px-8 py-3 font-black text-xs transition-all uppercase tracking-[0.2em] italic" style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}>
          WATCH BROADCAST
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>
{/*  Section 4: Multiple Theme To Play - Interactive Selector  */}
<section className="py-32 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 overflow-hidden relative">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
    {/* Left Content Area */}
    <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
       <div className="flex flex-col items-start text-left mb-12">
         <span className="font-label-caps tracking-[0.4em] text-on-surface-variant mb-4 uppercase text-xs">Explore All</span>
         <h2 className="font-h2 uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight text-white drop-shadow-2xl italic font-black">
           Multiple Theme To Play
         </h2>
       </div>

       <p className="font-body-md text-on-surface-variant max-w-md mb-12 text-lg leading-relaxed">
          Whether you like to dive straight into the fray, support your teammates, or something in between, there's a spot for you on the Rift.
       </p>
       
       <button className="bg-primary text-white px-14 py-5 font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all mb-24 shadow-[0_0_40px_rgba(178,9,35,0.3)]">
          PLAY NOW
       </button>

       {/* Selection Thumbnails */}
       <div className="flex gap-6 items-end">
          {PATHS.map((path) => (
             <div key={path.id} className="flex flex-col items-center gap-3">
               <button 
                  onClick={() => setActiveTheme(path.id)}
                  className={`relative w-28 h-28 overflow-hidden border-2 transition-all duration-500 transform ${activeTheme === path.id ? 'border-primary scale-110 -translate-y-2' : 'border-white/10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105'}`}
               >
                  <img src={path.image} className="w-full h-full object-cover" />
                  {activeTheme === path.id && (
                    <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
                  )}
               </button>
               <span className={`text-sm font-black tracking-widest transition-colors duration-500 uppercase ${activeTheme === path.id ? 'text-primary' : 'text-on-surface-variant/40'}`}>
                 {path.title}
               </span>
             </div>
          ))}
       </div>
    </div>

    {/* Right Visual (Large Circle) */}
    <div className="lg:col-span-7 relative flex justify-center items-center h-[700px]">
       {/* Background Glows and Rings */}
       <div className="absolute w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full"></div>
       <div className="absolute w-[680px] h-[680px] border border-primary/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
       <div className="absolute w-[640px] h-[640px] border border-white/5 rounded-full"></div>
       <div className="absolute w-[640px] h-[640px] border-t-2 border-l-2 border-primary/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
       
       {/* Main Circular Viewport */}
       <div className="w-[600px] h-[600px] rounded-full overflow-hidden border-4 border-primary/40 relative z-10 shadow-[0_0_100px_rgba(178,9,35,0.15)] bg-black">
          <video 
            key={PATHS[activeTheme].id}
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
          >
            <source src={PATHS[activeTheme].video} type="video/mp4" />
          </video>
          {/* Overlay mask for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
       </div>
    </div>
  </div>
</section>
{/*  Section 5: Leaderboard  */}
<section className="py-stack-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
<div className="text-center mb-16">
<h2 className="font-h2 uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight">Hall of Fame</h2>
<p className="text-on-surface-variant font-body-md">The highest ranking seasonal Apex Legends.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
{/*  Rank 2  */}
<div className="lg:col-span-4 order-2 lg:order-1 glass-card p-8 rounded-xl text-center space-y-4 hover:translate-y-[-10px] transition-transform">
<div className="relative w-24 h-24 mx-auto">
<img className="w-full h-full object-cover rounded-full border-2 border-slate-400" data-alt="professional portrait of a man in high-tech street wear with subtle neon accents in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzd9ROrlCxdx3eYTvzQpCD6vsGzPfFMCnJDD1mQnwRcXSb5CXeK1SZbWPcuL0wWKgeS6OqPyc9kpAWhyvU0HCkM-JbIVguiHUxt4Z-Fxn1ZSu0hohDCO6gN3igCK0Xie7PAkvL5y_kAfg2RKpt1uxTKHJKBfzgjdiVB6t6p6Gd2faYAyi1B0epze0wB1Q_auuHp0k8vHK4krmxd1-6-h6LbWnCPsrzehvAJ1AcySpNF5lZTU1givtfthNbMXAlhNjw-WCYlHaiKsCo"/>
<div className="absolute -bottom-2 -right-2 bg-slate-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
</div>
<h3 className="font-h3 text-xl">ShadowViper</h3>
<div className="grid grid-cols-2 gap-4 text-sm font-['Space_Grotesk'] text-on-surface-variant">
<div><p className="text-white font-bold">4.8k</p><p>ELO</p></div>
<div><p className="text-white font-bold">82%</p><p>WIN RATE</p></div>
</div>
</div>
{/*  Rank 1  */}
<div className="lg:col-span-4 order-1 lg:order-2 glass-card p-10 rounded-xl text-center space-y-6 border-t-4 border-t-primary neon-purple-glow hover:translate-y-[-15px] transition-transform bg-white/[0.04]">
<div className="relative w-32 h-32 mx-auto">
<img className="w-full h-full object-cover rounded-full border-4 border-primary" data-alt="professional portrait of a woman with dyed hair in high-tech gaming headset with purple glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATQ0jEDVKmYaw-wxhZar2fatPafFOzqpUVqbxmK5EGLZSZlI2vkgHNfDEkj3bhTiezItY2tYUxdNW6my9qqEOYdkcL5VE7vg7faKlMFhuy7_yFruioBNhFon9iJ8b642ac8YPf7EaX3IS2tr41GOtVMs1OuqQY9PoSmF4yG2fmRpXcj4d2jUnAUzgLxvcZj3scH1aJXrj9v_FHYZy7Rh5GXkite9_3vxtdwJdIdgeoiVPR2PfLIt_s6CI_nRACgTWWk7Lgw0lYhWdr"/>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary-container px-4 py-1 rounded-full font-bold text-xs uppercase shadow-lg shadow-primary/50">CHAMPION</div>
</div>
<h3 className="font-h3 text-3xl">NebulaQueen</h3>
<div className="grid grid-cols-2 gap-4 font-['Space_Grotesk']">
<div><p className="text-primary text-2xl font-black">5.2k</p><p className="text-xs text-on-surface-variant uppercase tracking-widest">ELO Points</p></div>
<div><p className="text-primary text-2xl font-black">1.4k</p><p className="text-xs text-on-surface-variant uppercase tracking-widest">Global Rank</p></div>
</div>
<button className="bg-primary/20 text-primary border border-primary/40 w-full py-3 rounded-lg font-bold hover:bg-primary hover:text-black transition-all">VIEW PROFILE</button>
</div>
{/*  Rank 3  */}
<div className="lg:col-span-4 order-3 lg:order-3 glass-card p-8 rounded-xl text-center space-y-4 hover:translate-y-[-10px] transition-transform">
<div className="relative w-24 h-24 mx-auto">
<img className="w-full h-full object-cover rounded-full border-2 border-orange-400" data-alt="professional portrait of a young man with glasses and serious expression in dark lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByWN393t7MGRdGfbWc0SdKUdvnHM8JV8U9j0TN-BsxG-d0a0qx6d4iP6oeintxNF6OwZyM1y0bRJrygmyxjQUdF9Q4b190AF3XcV63iOInxiRHAhbb6p9btYT6ZsCaIODDpo0I7zT6ONWj0hp6C58tjhHl0n1sq4OUx-LRKfO1V9MaVafeC9l8o40d5BZR8nbYLA__uoTLBl0srvRcwaDItan9CKr4uSuNw1YfS9r4eVLEy4u1bS1u9d7PsmhM4d8igXanC0OWJGma"/>
<div className="absolute -bottom-2 -right-2 bg-orange-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
</div>
<h3 className="font-h3 text-xl">IronForge_88</h3>
<div className="grid grid-cols-2 gap-4 text-sm font-['Space_Grotesk'] text-on-surface-variant">
<div><p className="text-white font-bold">4.5k</p><p>ELO</p></div>
<div><p className="text-white font-bold">78%</p><p>WIN RATE</p></div>
</div>
</div>
</div>
</div>
</section>
{/*  Section 6: Services  */}
<section className="py-stack-lg bg-surface-container-low">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<div className="text-center mb-16">
<h2 className="font-h2 uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight">Premium Services</h2>
<p className="text-on-surface-variant font-body-md">Elevate your game with our exclusive offerings.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Service 1  */}
<div className="md:col-span-6 lg:col-span-3 glass-card p-8 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
<div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary text-3xl">bolt</span>
</div>
<h4 className="font-h3 text-xl mb-3">INSTANT BOOST</h4>
<p className="text-on-surface-variant font-body-md">Connect with top-tier players to escalate your seasonal rank in record time.</p>
</div>
{/*  Service 2  */}
<div className="md:col-span-6 lg:col-span-3 glass-card p-8 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
<div className="w-14 h-14 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-tertiary text-3xl">verified_user</span>
</div>
<h4 className="font-h3 text-xl mb-3">SECURE TRADING</h4>
<p className="text-on-surface-variant font-body-md">Our encrypted marketplace ensures zero-risk item exchanges and skin trades.</p>
</div>
{/*  Service 3  */}
<div className="md:col-span-6 lg:col-span-3 glass-card p-8 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
<div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-secondary text-3xl">trophy</span>
</div>
<h4 className="font-h3 text-xl mb-3">DAILY TOURNAMENTS</h4>
<p className="text-on-surface-variant font-body-md">Enter high-stakes brackets every 24 hours with massive credit pools up for grabs.</p>
</div>
{/*  Service 4  */}
<div className="md:col-span-6 lg:col-span-3 glass-card p-8 rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default group">
<div className="w-14 h-14 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-primary-container text-3xl">monitoring</span>
</div>
<h4 className="font-h3 text-xl mb-3">LIVE ANALYTICS</h4>
<p className="text-on-surface-variant font-body-md">Detailed breakdown of your combat performance with AI-driven strategy coaching.</p>
</div>
</div>
</div>
</section>
{/*  Section 7: Pricing  */}
<section className="py-stack-lg w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<div className="text-center mb-16">
<h2 className="font-h2 uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight">BATTLE PASS TIERS</h2>
<p className="text-on-surface-variant font-body-md">Unlock the full potential of your legendary journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Basic  */}
<div className="md:col-span-4 glass-card p-10 rounded-2xl flex flex-col border border-white/5">
<span className="font-label-caps text-on-surface-variant mb-4">MORTAL</span>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-h1 font-black">$0</span>
<span className="text-on-surface-variant">/month</span>
</div>
<ul className="space-y-4 flex-grow font-body-md text-on-surface-variant mb-12">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">check</span> Basic Matchmaking</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">check</span> Public Chat Access</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">check</span> 5 Saved Loadouts</li>
<li className="flex items-center gap-3 opacity-30"><span className="material-symbols-outlined text-sm">close</span> Priority Queues</li>
</ul>
<button className="w-full py-4 glass-card border-white/20 rounded-lg font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs">START FOR FREE</button>
</div>
{/*  Elite - Highlighted  */}
<div className="md:col-span-4 glass-card p-10 rounded-2xl flex flex-col border-2 border-primary neon-purple-glow relative scale-105 bg-white/[0.03]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary-container px-6 py-1 rounded-full text-xs font-black uppercase">MOST POPULAR</div>
<span className="font-label-caps text-primary mb-4">ELITE ANCIENT</span>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-h1 font-black">$19</span>
<span className="text-on-surface-variant">/month</span>
</div>
<ul className="space-y-4 flex-grow font-body-md mb-12">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> All Mortal Perks</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Priority Queues</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Monthly Skin Drops</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Private Coaching (1hr)</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">verified</span> Beta Feature Access</li>
</ul>
<button className="w-full py-4 bg-gradient-to-r from-primary to-secondary-container text-white rounded-lg font-bold hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">BECOME ANCIENT</button>
</div>
{/*  Pro  */}
<div className="md:col-span-4 glass-card p-10 rounded-2xl flex flex-col border border-white/5">
<span className="font-label-caps text-tertiary mb-4">ASCENDED PRO</span>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl font-h1 font-black">$49</span>
<span className="text-on-surface-variant">/month</span>
</div>
<ul className="space-y-4 flex-grow font-body-md text-on-surface-variant mb-12">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check</span> All Elite Perks</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check</span> Pro Circuit Tournament Entry</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check</span> Dedicated Server Hosting</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary">check</span> Custom Team Branding</li>
</ul>
<button className="w-full py-4 glass-card border-tertiary/40 text-tertiary rounded-lg font-bold hover:bg-tertiary/10 transition-all uppercase tracking-widest text-xs">GO ASCENDED</button>
</div>
</div>
</section>
{/*  Section 8: Testimonials  */}
<section className="py-stack-lg overflow-hidden bg-background relative">
<div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 text-center mb-16">
<h2 className="font-h2 uppercase mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight">War Chronicles</h2>
<p className="text-on-surface-variant font-body-md">Stories and glories from warriors across the realm.</p>
</div>
<div className="flex gap-gutter animate-marquee py-8">
{/*  Testimonial 1  */}
<div className="min-w-[350px] glass-card p-8 rounded-xl border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img data-alt="close up headshot of a gamer with vibrant neon lighting on face" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUxKXuasBEm6KrSOmyOu8vxsSrp7whNnnk_MhLOC4wpFY2m58-aL6dWfmiIEud2fioxnCfTjdSNiRDr7HrpZ1n3d9olGE2-IXPKKUwkkem840TfaSktEXJBK8fTPo7EritSxB0XaNIsw-1L_FGaPzgqWO9OgtUmhDcs55ll3RXU46s18Rglkmf1zy5dbq_LMzePqT1hQNU8fIh9zNephlrcfTBfCAWeZUMDasLPFOdwf1nAybgqMNgrsILtvkUAZ1Bae3OTExok3HK"/>
</div>
<div>
<h5 className="font-bold">XenonBlast</h5>
<p className="text-xs text-on-surface-variant">Rank #142 Global</p>
</div>
</div>
<p className="italic text-on-surface-variant">"The matchmaking latency is non-existent. Battle of the Ancients has completely changed the competitive landscape for me."</p>
</div>
{/*  Testimonial 2  */}
<div className="min-w-[350px] glass-card p-8 rounded-xl border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img data-alt="close up headshot of a smiling female gamer in front of a blue monitor glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD2bWi_IUTRvga_L4rqNtGNxRa2sNs68GNRjUpkM7Xn4zxuPrW6uPYoxGJyDMk70E_TW20aLYMB-Q2VPd_nRZaMlFpCkvGCT0-McgolFsQIFRg2d72KWdZzmbMgDVGq3ZzLZCaDNb62Z90ZEKwO_7ec2blJEZ6EjjxEETlHsatnR8H_U7jxG0I2oAVF2BYquXyU2dqqaKsR4F82px3Mf1yx5YRQGQXXeetKVNIdfPLQzo1ZMlfR3jq7QP_eIfpH42NVRXi1y-vVO_D"/>
</div>
<div>
<h5 className="font-bold">LunaEclipse</h5>
<p className="text-xs text-on-surface-variant">Pro Streamer</p>
</div>
</div>
<p className="italic text-on-surface-variant">"The graphics are breathtaking. Every match feels like I'm playing inside a high-budget cinematic movie."</p>
</div>
{/*  Testimonial 3  */}
<div className="min-w-[350px] glass-card p-8 rounded-xl border border-white/5">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full overflow-hidden">
<img data-alt="professional portrait of a gamer in dark room with subtle purple light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWGEUqxeFzaOokc9-656PE0JvyZTe33HrS78beloLfmim4edgA91z8SNl33AlNbT3zYbCXR6-WPEJNwzWxeJaB8KhZmY3TPuNPJctS2IsTA0ZLa-lUNnbRgajVVDUQpH3e8R3_NOCgkArxh6EywhyiocyhRFojlWr0DSAzHlbTMMkJMbgmdn_-3wpgpTydJ_6cM41FnnX0AIfluiaTaoKzXzNTeFcrTivx5MNnzfY6sSt4CNSQBmSbNoZ434-xC-7WCpDfxMFKTAZ"/>
</div>
<div>
<h5 className="font-bold">Kratos_Prime</h5>
<p className="text-xs text-on-surface-variant">Guild Master</p>
</div>
</div>
<p className="italic text-on-surface-variant">"Community-driven updates and fair play mechanics make this the only MOBA worth playing in 2024."</p>
</div>
</div>
</section>
{/*  Section 9: Final CTA  */}
<section className="relative py-40 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20" data-alt="extreme close up of glowing embers and cosmic energy swirl with high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMey6GUiVX5omukneQT7RwkXS6cizYpzQUGsBWJjO1qy-rY9jMhJvQVAH7hwNpnMdYs66DtgUb22z7LWOmsKKI8rlFKhY3Zi4w1YpGbPnkYC3ffzIhJy0FLOFlVPyfcxqlh_WTZGWopan83oOX_XPtMVP1IdjzcMMtkGcvvJ5pXMqPLxRGp0jB1u86U8H-r4ntGvsOhEKSH7HTYhgUjQz5v4wA3LjAYWgJnfcIciK4_eBDIWZYZlkg4K2ENWrB8nJZQ_ssdkNOTBTO"/>
<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
<div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
</div>
<div className="relative z-10 text-center w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<h2 className="font-h1 text-white uppercase mb-8 tracking-tighter">Ready to Enter <br/> the Arena?</h2>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<button className="bg-gradient-to-r from-primary to-secondary-container text-white px-12 py-6 rounded-xl font-h3 text-2xl hover:scale-110 active:scale-95 transition-all duration-300 neon-purple-glow uppercase tracking-widest shadow-2xl">
                    Start Playing Now
                </button>
</div>
<p className="mt-8 text-on-surface-variant font-label-caps opacity-60">Join 4.2M active warriors today.</p>
</div>
</section>
{/*  Footer  */}
<footer className="w-full border-t border-white/5 bg-black">
<div className="flex flex-col md:flex-row justify-between items-center py-16 gap-8 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<div className="text-slate-700 font-black tracking-widest font-['Space_Grotesk'] uppercase text-lg">
                BATTLE OF THE ANCIENTS
            </div>
<div className="flex flex-wrap justify-center gap-8">
<a className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-600 hover:text-purple-400 transition-colors duration-300" href="#">PRIVACY POLICY</a>
<a className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-600 hover:text-purple-400 transition-colors duration-300" href="#">TERMS OF SERVICE</a>
<a className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-600 hover:text-purple-400 transition-colors duration-300" href="#">SUPPORT</a>
<a className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-600 hover:text-purple-400 transition-colors duration-300" href="#">PRESS KIT</a>
</div>
<div className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-slate-600">
                © 2024 BATTLE OF THE ANCIENTS. ALL RIGHTS RESERVED.
            </div>
</div>
</footer>

    </div>
  );
}
