import React, { useState, useEffect, useLayoutEffect, useRef } from "react";


import mysticVanguardVideo from "./assets/Extend_this_video_upto_15_202605041042.mp4";
import realmConquerorsVideo from "./assets/Extend_upto_15_seconds_extended_202605041130.mp4";
import kingsguardLegendsVideo from "./assets/Extend_video_upto_15_seconds_extended_202605041200.mp4";
import cursedLegionVideo from "./assets/Extend_this_video_upto_15_202605041239.mp4";
import mysticThumb from "./assets/Saved_Frame_from_Mystic_Vanguard_202605041305.jpeg";
import shatteredThumb from "./assets/Saved_Frame_from_Shattered_Realms_202605041309.jpeg";
import royalThumb from "./assets/Saved_Frame_from_Royal_stronghold_202605041308.jpeg";
import cursedThumb from "./assets/Saved_Frame_from_Cursed_Region_202605041308.jpeg";
import heroImageNew from "./assets/hero image 1.jpeg";
import brandLogo from "./assets/logo.png";
import ctaImage from "./assets/CTA image.png";

import mapSerpent from "./assets/map_serpent.jpg";
import mapKraken from "./assets/map_kraken.jpg";
import mapChimera from "./assets/map_chimera.jpg";
import endlessBattleImg from "./assets/Endless Battle.png";
import survivalModeImg from "./assets/Survival Mode.jpeg";
import themeCyber from "./assets/Remove_both_characters_202605080401.jpeg";
import themeIron from "./assets/Remove_this_selected_text_202605080400.jpeg";
import themeNova from "./assets/Desert_Dust_game_mode_theme_202605080311.jpeg";
import blogRealTime from "./assets/Real-time.jpg";
import blogAI from "./assets/AI image.avif";
import blogVR from "./assets/VR Image 2.jpg";

const PATHS = [
  {
    id: 0,
    title: "Arctic",
    subtitle: "HIGH-TECH SPEC-OPS",
    description: "Dominating the digital battlefield. Utilize cutting-edge cybernetics and pulse weaponry to neutralize high-priority targets in dense urban environments.",
    image: themeCyber,
    video: mysticVanguardVideo,
    themeColor: "text-blue-500",
    accentColor: "#3b82f6",
    colorClass: "blue"
  },
  {
    id: 1,
    title: "Valley",
    subtitle: "GUERILLA TACTICAL FORCE",
    description: "Master the art of endurance. Deploy into scorched-earth warzones with rugged hardware and heavy-duty ballistics designed for extreme survival.",
    image: themeIron,
    video: realmConquerorsVideo,
    themeColor: "text-orange-500",
    accentColor: "#f97316",
    colorClass: "orange"
  },
  {
    id: 2,
    title: "Dustveil",
    subtitle: "ORBITAL ASSAULT SQUAD",
    description: "Shattering the heavens. Launch devastating orbital strikes and command powerful power-armored infantry in the final frontier of combat.",
    image: themeNova,
    video: kingsguardLegendsVideo,
    themeColor: "text-purple-500",
    accentColor: "#a855f7",
    colorClass: "purple"
  }
];

const GAME_MODES = [
  {
    title: "Endless Battle",
    type: "Global Conflict",
    image: endlessBattleImg,
    level: 45,
    rank: "Master",
    difficulty: "Insane",
    icon: "swords",
    progress: 75,
    isLocked: false,
    medal: "Gold"
  },
  {
    title: "Survival Mode",
    type: "Battle Royale",
    image: survivalModeImg,
    level: 12,
    rank: "Recruit",
    difficulty: "Hard",
    icon: "skull",
    progress: 30,
    isLocked: false,
    medal: "Bronze"
  },
  {
    title: "Squad Clash",
    type: "Team Tactics",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1930",
    level: 88,
    rank: "Legendary",
    difficulty: "Extreme",
    icon: "groups",
    progress: 90,
    isLocked: true
  },
  {
    title: "Territory War",
    type: "Objective Control",
    image: "https://images.unsplash.com/photo-1614027164847-1b2809eb7b9c?auto=format&fit=crop&q=80&w=1935",
    level: 30,
    rank: "Elite",
    difficulty: "Medium",
    icon: "flag",
    progress: 60,
    isLocked: true
  }
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Unreal Engine 5: The New Frontier of Real-Time Combat",
    category: "Intelligence",
    date: "May 15, 2024",
    author: "Commander Jax",
    excerpt: "Discover how the latest Nanite and Lumen updates are transforming the way we experience competitive battlefields in hyper-realistic environments.",
    image: blogRealTime
  },
  {
    id: 2,
    title: "AI & Procedural Worlds: Beyond the Horizon",
    category: "Development",
    date: "May 12, 2024",
    author: "Marcus Thorne",
    excerpt: "Exploring the neural networks that are now capable of generating entire mystical realms in milliseconds with photographic accuracy.",
    image: blogAI
  },
  {
    id: 3,
    title: "VR Arenas: The Next Evolution of Esports",
    category: "Hardware",
    date: "May 10, 2024",
    author: "Sarah Jenkins",
    excerpt: "Physicality meets digital mastery. We dive into the upcoming global VR championship standards and immersive feedback loops.",
    image: blogVR
  },
  {
    id: 4,
    title: "Haptic Warfare: The Physicality of Virtual Combat",
    category: "Gadgets",
    date: "May 08, 2024",
    author: "Leo Vance",
    excerpt: "New haptic feedback technology is blurring the lines between virtual damage and physical sensation, creating true tactical immersion.",
    image: "C:\\Users\\vraj\\.gemini\\antigravity\\brain\\3352abc9-ca4a-4b71-a05a-1726d0b22f2b\\haptic_suit_blog_1778619350748.png"
  }
];

const CHARACTERS = [
  { id: 0, name: "Geralt", bgName: "GERALT_R", role: "Witcher", description: "Geralt of Rivia is a legendary Witcher of the School of the Wolf. A seasoned monster slayer who navigates a world of moral ambiguity.", image: "/image1.png", skills: [{name: "Pulse Scan", icon: "radar"}, {name: "Suppressive Fire", icon: "whatshot"}, {name: "Combat Roll", icon: "change_circle"}, {name: "Frag Storm", icon: "rocket_launch"}] },
  { id: 1, name: "Ciri", bgName: "CIRILLA_", role: "Child of Destiny", description: "Cirilla Fiona Elen Riannon is the princess of Cintra and Geralt's adopted daughter, possessing immense power over space and time.", image: "/image2.png", skills: [{name: "Shadow Blink", icon: "bolt"}, {name: "Silent Reaper", icon: "visibility_off"}, {name: "Smoke Shroud", icon: "cloud"}, {name: "Ghost Protocol", icon: "security"}] },
  { id: 2, name: "Yennefer", bgName: "YENNEFER", role: "Sorceress", description: "Yennefer of Vengerberg is a sorceress of unfathomable power and acts like it — unless in the company of her adopted daughter Ciri or once-love Geralt, of course.", image: "/image3.png", skills: [{name: "Titan Barrage", icon: "swords"}, {name: "Kinetic Shield", icon: "shield"}, {name: "Groundbreaker", icon: "volcano"}, {name: "Overclock Mode", icon: "speed"}] },
  { id: 3, name: "Triss", bgName: "TRISS_M_", role: "Mage", description: "Triss Merigold of Maribor is a legendary sorceress and a close friend to Geralt, known for her mastery of fire and healing magic.", image: "/image4.png", skills: [{name: "Crimson Veil", icon: "bloodtype"}, {name: "Mind Fracture", icon: "psychology"}, {name: "Royal Execution", icon: "gavel"}, {name: "Domination Field", icon: "wifi_tethering"}] },
  { id: 4, name: "Dandelion", bgName: "DANDELIO", role: "Bard", description: "Julian Alfred Pankratz, Viscount de Lettenhove, better known as Dandelion, is a famous bard, poet, and Geralt's best friend.", image: "/image5.png", skills: [{name: "Deadeye Lock", icon: "track_changes"}, {name: "Phase Step", icon: "double_arrow"}, {name: "Neuro Shot", icon: "colorize"}, {name: "Night Hunt", icon: "dark_mode"}] },
  { id: 5, name: "Eredin", bgName: "EREDIN_B", role: "King of Wild Hunt", description: "Eredin Bréacc Glas is the commander of the Wild Hunt, a terrifying force of spectral riders seeking to capture Ciri for her blood.", image: "/image6.png", skills: [{name: "Restoration Pulse", icon: "health_and_safety"}, {name: "Toxic Bloom", icon: "coronavirus"}, {name: "Nano Surge", icon: "memory"}, {name: "Revival Beacon", icon: "cell_tower"}] }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "XenonBlast",
    role: "Rank #142 Global",
    quote: "The matchmaking latency is non-existent. Battle of the Ancients has completely changed the landscape.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUxKXuasBEm6KrSOmyOu8vxsSrp7whNnnk_MhLOC4wpFY2m58-aL6dWfmiIEud2fioxnCfTjdSNiRDr7HrpZ1n3d9olGE2-IXPKKUwkkem840TfaSktEXJBK8fTPo7EritSxB0XaNIsw-1L_FGaPzgqWO9OgtUmhDcs55ll3RXU46s18Rglkmf1zy5dbq_WO9OgtUmhDcs55ll3RXU46s18Rglkmf1zy5dbq_LMzePqT1hQNU8fIh9zNephlrcfTBfCAWeZUMDasLPFOdwf1nAybgqMNgrsILtvkUAZ1Bae3OTExok3HK"
  },
  {
    id: 2,
    name: "LunaEclipse",
    role: "Pro Streamer",
    quote: "EVERY MATCH FEELS LIKE I'M PLAYING INSIDE A HIGH-BUDGET CINEMATIC MOVIE.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD2bWi_IUTRvga_L4rqNtGNxRa2sNs68GNRjUpkM7Xn4zxuPrW6uPYoxGJyDMk70E_TW20aLYMB-Q2VPd_nRZaMlFpCkvGCT0-McgolFsQIFRg2d72KWdZzmbMgDVGq3ZzLZCaDNb62Z90ZEKwO_7ec2blJEZ6EjjxEETlHsatnR8H_U7jxG0I2oAVF2BYquXyU2dqqaKsR4F82px3Mf1yx5YRQGQXXeetKVNIdfPLQzo1ZMlfR3jq7QP_eIfpH42NVRXi1y-vVO_D"
  },
  {
    id: 3,
    name: "Kratos_Prime",
    role: "Guild Master",
    quote: "Community-driven updates and fair play mechanics make this the only MOBA worth playing in 2024.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoWGEUqxeFzaOokc9-656PE0JvyZTe33HrS78beloLfmim4edgA91z8SNl33AlNbT3zYbCXR6-WPEJNwzWxeJaB8KhZmY3TPuNPJctS2IsTA0ZLa-lUNnbRgajVVDUQpH3e8R3_NOCgkArxh6EywhyiocyhRFojlWr0DSAzHlbTMMkJMbgmdn_-3wpgpTydJ_6cM41FnnX0AIfluiaTaoKzXzNTeFcrTivx5MNnzfY6sSt4CNSQBmSbNoZ434-xC-7WCpDfxMFKTAZ"
  }
];

const MAPS = [
  {
    id: 1,
    name: "Serpent's Point",
    location: "Kalahari Warzone",
    image: mapSerpent,
    accent: "#FF4D00",
    pois: [
      { id: 1, name: "Caldera Extractor", x: 55, y: 30 },
      { id: 2, name: "Sulfur Mining Pit", x: 42, y: 35 },
      { id: 3, name: "Lighthouse Fort", x: 48, y: 90 }
    ]
  },
  {
    id: 2,
    name: "Kraken's Reach",
    location: "Siberian Base",
    image: mapKraken,
    accent: "#00A3FF",
    pois: [
      { id: 1, name: "Submarine Docks", x: 52, y: 38 },
      { id: 2, name: "Marine Biology Lab", x: 50, y: 55 },
      { id: 3, name: "Sentinel Lighthouse", x: 32, y: 82 }
    ]
  },
  {
    id: 3,
    name: "Chimera's Crag",
    location: "Neo-Tokyo Sector",
    image: mapChimera,
    accent: "#8B5CF6",
    pois: [
      { id: 1, name: "Project Hydra", x: 58, y: 20 },
      { id: 2, name: "Triton's Naval Yard", x: 55, y: 40 },
      { id: 3, name: "Cerberus Fortress", x: 62, y: 88 }
    ]
  }
];

interface CTAProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const PrimaryCTA = ({ children, className = "", onClick }: CTAProps) => (
  <button 
    onClick={onClick}
    className={`relative group overflow-hidden bg-[#ff2a4a] font-black text-white uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,42,74,0.4)] hover:scale-105 active:scale-95 ${className}`} 
    style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
  >
    <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    <span className="relative z-10 group-hover:text-black transition-colors italic flex items-center justify-center gap-2 whitespace-nowrap">
      {children}
    </span>
    {/* Scanning Light Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_2s_infinite]"></div>
  </button>
);

const SecondaryCTA = ({ children, className = "", onClick }: CTAProps) => (
  <button 
    onClick={onClick}
    className={`relative group overflow-hidden bg-white font-black text-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 ${className}`} 
    style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
  >
    <div className="absolute inset-0 bg-[#ff2a4a] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    <span className="relative z-10 group-hover:text-white transition-colors italic flex items-center justify-center gap-2 whitespace-nowrap">
      {children}
    </span>
  </button>
);

const SectionHeading = ({ title, className = "" }: { title: string; className?: string }) => (
  <div className={`flex flex-col items-center text-center px-4 ${className}`}>
    <h2 className="text-white font-['Space_Grotesk'] text-4xl md:text-6xl font-black uppercase tracking-[0.2em] mb-6 text-center">
      {title}
    </h2>
    <div className="flex items-center gap-4 w-64">
       <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/40"></div>
       <div className="rotate-45 w-2 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
       <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/40"></div>
    </div>
  </div>
);

export default function App() {
  const [activeTheme, setActiveTheme] = useState(0);
  const [activeGameMode, setActiveGameMode] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [activeLegend, setActiveLegend] = useState(2); // Default to Yennefer like image
  const [activeCharAbility, setActiveCharAbility] = useState(0);
  const [currentMapIndex, setCurrentMapIndex] = useState(0);
  
  useLayoutEffect(() => {
    // Access GSAP, ScrollTrigger, and Lenis from window (CDN)
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    const Lenis = (window as any).Lenis;

    if (!gsap || !ScrollTrigger || !Lenis) return;
    
    // Smooth Scroll (Lenis) Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".ability-section");

    sections.forEach((section: any, i: number) => {
      // Set initial state
      gsap.set(section, { scale: i === 0 ? 1 : 0.7 });

      // Create a single timeline for the entire journey of the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // Starts when top enters bottom
          end: "bottom top",    // Ends when bottom leaves top
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      // Journey phase 1: Bottom of screen to Top of screen (Expansion)
      tl.to(section, { 
        scale: 1, 
        ease: "power1.inOut" 
      });

      // Journey phase 2: Top of screen to disappearing above (Shrinking)
      tl.to(section, { 
        scale: 0.7, 
        ease: "power1.inOut" 
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
      lenis.destroy();
    };
  }, []);

  const [mapScale, setMapScale] = useState(1);
  const [mapPosition, setMapPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMapDragStart = (e: React.MouseEvent) => {
    if (mapScale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - mapPosition.x, y: e.clientY - mapPosition.y });
    }
  };

  const handleMapDrag = (e: React.MouseEvent) => {
    if (isDragging && mapScale > 1) {
      setMapPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMapDragEnd = () => setIsDragging(false);
  return (
    <div className="bg-background text-on-surface overflow-x-hidden">
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
<div className="flex justify-between items-center py-4 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
<div className="flex items-center gap-5 group cursor-pointer select-none">
  {/* Brand Logo */}
  <img src={brandLogo} alt="Battle of the Arena Logo" className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
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
<PrimaryCTA className="px-8 py-2.5 text-xs tracking-[0.2em]">
  PLAY NOW
</PrimaryCTA>
</div>
</div>
</nav>
{/*  Section 1: Hero  */}
<section className="relative h-screen flex flex-col justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover hero-image-sharp" data-alt="high resolution cinematic hero image" src={heroImageNew}/>

{/* Wind/Air Blowing Effects */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  <div className="wind-sweep" style={{ animationDelay: '0s', top: '10%' }}></div>
  <div className="wind-sweep" style={{ animationDelay: '2s', top: '40%' }}></div>
  <div className="wind-sweep" style={{ animationDelay: '4s', top: '70%' }}></div>
</div>

{/* Fire Particles */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  {[...Array(30)].map((_, i) => (
    <div 
      key={i}
      className="fire-particle"
      style={{ 
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        left: `${Math.random() * 100}%`,
        bottom: '-20px',
        animationDuration: `${Math.random() * 3 + 4}s`,
        animationDelay: `${Math.random() * 5}s`
      }}
    ></div>
  ))}
</div>
</div>

<div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-start text-left pt-32 lg:pt-40">
  <h1 className="font-['Saira Extra Condensed'] text-white uppercase font-black leading-[0.85] drop-shadow-2xl tracking-tighter flex flex-col items-start">
    <span className="text-5xl md:text-6xl lg:text-7xl xl:text-[140px]">BATTLE</span>
    <span className="text-5xl md:text-6xl lg:text-7xl xl:text-[140px]">OF THE</span>
    <span className="text-5xl md:text-6xl lg:text-7xl xl:text-[140px]">ARENA</span>
  </h1>
  <div className="mt-12 lg:mt-16 flex flex-col md:flex-row gap-6 items-center">
    <PrimaryCTA className="px-16 py-6 text-xl lg:text-2xl tracking-[0.1em]">
  DEPLOY FOR FREE
</PrimaryCTA>
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[1,2,3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-800 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="player" />
            </div>
          ))}
        </div>
        <span className="text-white font-black text-lg italic uppercase tracking-tighter">14,203 Active</span>
      </div>
      <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-1">Currently in battle</span>
    </div>
  </div>
</div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
</section>
{/*  Section 2: Battle Legends (Interactive Characters)  */}
<section className="py-32 bg-[#050505] relative overflow-hidden border-b border-white/5">
  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_#B2092322_0%,_transparent_70%)]"></div>
  
  <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
    {/* Decorative Heading */}
    <SectionHeading title="THE LEGENDS" className="pb-16 z-20" />

    <div className="relative flex flex-col items-center justify-center min-h-[700px]">
       {/* All Characters Row */}
       <div className="relative z-20 flex items-center justify-center gap-4 md:gap-6 lg:gap-10 w-full max-w-[1500px] mx-auto h-[500px]">
          {CHARACTERS.map((char, idx) => (
             <div 
               key={char.id}
               className={`group relative transition-all duration-700 ease-in-out flex flex-col items-center justify-center cursor-pointer w-[14%] h-full ${
                 activeLegend === idx ? 'z-30 opacity-100' : 'opacity-40 hover:opacity-100 z-10'
               }`}
               onClick={() => setActiveLegend(idx)}
             >
                {/* Individual Alchemy Graphic Background */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none transition-all duration-700 ${
                  activeLegend === idx ? 'opacity-10 scale-100' : 'opacity-0 scale-75 group-hover:opacity-5 group-hover:scale-100'
                }`}>
                   <svg viewBox="0 0 100 100" className="w-full h-full stroke-primary fill-none">
                      <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="35" strokeWidth="0.3" />
                      <path d="M50 5 L90 75 L10 75 Z" strokeWidth="0.3" />
                      <path d="M50 95 L10 25 L90 25 Z" strokeWidth="0.3" />
                      <circle cx="50" cy="50" r="10" strokeWidth="0.2" />
                   </svg>
                </div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   {activeLegend === idx && (
                     <div className="absolute inset-0 blur-3xl bg-primary/10 rounded-full animate-pulse"></div>
                   )}
                   <img 
                     src={char.image} 
                     alt={char.name} 
                     className={`max-h-[85%] w-auto object-contain transition-all duration-700 ${
                       activeLegend === idx ? 'drop-shadow-[0_0_30px_rgba(178,9,35,0.3)] scale-125' : 'grayscale group-hover:grayscale-0'
                     }`}
                   />
                </div>
             </div>
          ))}
       </div>

       {/* Centered Active Character Info */}
       <div className="relative z-20 mt-4 text-center max-w-2xl flex flex-col items-center justify-center">
          <div className="animate-in fade-in slide-in-from-top-4 duration-700 flex flex-col items-center relative">
             {/* Background Decorative Text */}
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/5 text-8xl font-black uppercase tracking-[0.2em] select-none pointer-events-none italic whitespace-nowrap">
               THE LEGEND
             </div>
             
             <div className="flex items-center gap-6">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary"></div>
                <h3 className="text-primary text-4xl md:text-7xl font-black uppercase tracking-[0.1em] drop-shadow-[0_0_15px_rgba(178,9,35,0.5)] italic">
                  {CHARACTERS[activeLegend].name}
                </h3>
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary"></div>
             </div>

             {/* Bottom Decorative Element */}
             <div className="flex items-center gap-2 mt-4">
                <div className="w-1 h-1 bg-primary rotate-45"></div>
                <div className="w-32 h-[1px] bg-primary/20"></div>
                <div className="w-1 h-1 bg-primary rotate-45"></div>
             </div>
          </div>
       </div>
    </div>
  </div>
</section>
{/*  Section 4: Operational Theaters - Full Screen Cinematic Selector  */}
<section className="relative h-[90vh] min-h-[750px] w-full overflow-hidden bg-black group border-t border-white/5">
  {/* Full Screen Background Transitions */}
  {PATHS.map((path, idx) => (
    <div 
      key={path.id}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeTheme === idx ? 'opacity-100 z-0' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10"></div>
      <img 
        src={path.image} 
        className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${activeTheme === idx ? 'scale-110' : 'scale-100'}`}
        alt={path.title}
      />
    </div>
  ))}

  {/* Header Overlay removed */}

  {/* Content Overlay */}
      {/* Theme text overlay removed */}
  <div className="absolute top-56 left-4 md:left-8 lg:left-12 z-20 pointer-events-none">
    <div className="flex items-center gap-3">
      <div className="w-8 h-[1px] bg-primary"></div>
      <span className="text-white/60 font-['Space_Grotesk'] text-sm md:text-base font-bold uppercase tracking-[0.3em] drop-shadow-md">{PATHS[activeTheme].title}</span>
    </div>
  </div>

  {/* Navigation Arrows */}
  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 px-8 flex justify-between pointer-events-none">
    <button 
      onClick={() => setActiveTheme((prev) => (prev > 0 ? prev - 1 : PATHS.length - 1))}
      className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-md bg-black/20 group pointer-events-auto"
    >
      <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chevron_left</span>
    </button>
    <button 
      onClick={() => setActiveTheme((prev) => (prev < PATHS.length - 1 ? prev + 1 : 0))}
      className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-md bg-black/20 group pointer-events-auto"
    >
      <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chevron_right</span>
    </button>
  </div>

  {/* Bottom Thumbnails */}
  <div className="absolute bottom-12 inset-x-0 z-30 flex justify-center items-center gap-6">
    {PATHS.map((path, idx) => (
      <button 
        key={path.id}
        onClick={() => setActiveTheme(idx)}
        className={`relative w-48 h-28 overflow-hidden border-2 transition-all duration-500 transform group ${
          activeTheme === idx 
          ? 'scale-110 border-primary shadow-[0_0_30px_rgba(178,9,35,0.4)]' 
          : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-105'
        }`}
      >
        <img src={path.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className={`absolute inset-0 transition-opacity duration-500 ${activeTheme === idx ? 'opacity-0' : 'bg-black/40 group-hover:opacity-0'}`}></div>
        
        {/* Active Indicator Ornament */}
        {activeTheme === idx && (
          <>
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
          </>
        )}
      </button>
    ))}
  </div>

  {/* Decorative Grid Overlay */}
  <div className="absolute inset-0 pointer-events-none opacity-20 z-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
</section>


{/*  Section 2: Hero  */}
<section className="py-48 bg-[#020202] relative overflow-hidden">
  {/* Cybernetic Background Elements */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#B2092315_0%,transparent_50%)]"></div>
  <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
  
  <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
    {/* Header with System UI Feel */}
    <SectionHeading title="TACTICAL OPERATIONS" className="pb-24 z-20" />

    {/* Advanced Mode Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px]">
      
      {/* Featured Mode Column */}
      <div className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-none3xl border border-white/10">
        <div className="absolute inset-0">
          <img src={GAME_MODES[activeGameMode].image} 
               className="w-full h-full object-cover transition-all duration-1000 opacity-60 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none"></div>
        </div>
        
        <div className="absolute top-10 left-10 flex flex-col gap-4">
          <span className="px-4 py-1 bg-primary/20 border border-primary/40 text-primary text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md">Active Operation</span>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-none bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              <span className="material-symbols-outlined text-white text-3xl">{GAME_MODES[activeGameMode].icon}</span>
            </div>
            <div>
              <h3 className="text-white font-black text-4xl italic uppercase tracking-tighter leading-tight">{GAME_MODES[activeGameMode].title}</h3>
              <p className="text-primary text-xs font-bold uppercase tracking-widest">{GAME_MODES[activeGameMode].type}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 right-10">
          <div className="flex justify-between items-end mb-8">
            <div className="flex flex-col">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">Progression Status</p>
              
              <div className="flex items-center gap-8 md:gap-12">
                {/* Level Block */}
                <div className="flex flex-col font-black italic leading-none text-white tracking-tighter">
                  <span className="text-4xl md:text-5xl">LVL</span>
                  <span className="text-6xl md:text-7xl">{GAME_MODES[activeGameMode].level}</span>
                </div>
              </div>
            </div>

            {/* Button Block */}
            <SecondaryCTA className="px-10 py-5 md:px-14 md:py-6 ml-4 text-[10px] md:text-xs tracking-[0.3em]">
  <div className="flex flex-col items-center leading-tight gap-0">
    <span>Deploy Now</span>
  </div>
</SecondaryCTA>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-[3px] bg-white/10 overflow-hidden flex relative">
             <div className="h-full bg-primary shadow-[0_0_15px_rgba(178,9,35,0.8)] transition-all duration-1000 relative" style={{ width: `${GAME_MODES[activeGameMode].progress}%` }}>
                 <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-white/50"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Sidebar Column (All 4 Modes) */}
      <div className="lg:col-span-5 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        {GAME_MODES.map((mode, idx) => (
          <div 
            key={idx}
            onClick={() => !mode.isLocked && setActiveGameMode(idx)}
            className={`relative group cursor-pointer overflow-hidden rounded-none border transition-all duration-300 p-6 flex flex-col justify-between min-h-[180px] ${
              mode.isLocked ? 'opacity-40 grayscale cursor-not-allowed border-white/5 bg-black/20' :
              activeGameMode === idx 
                ? 'border-primary ring-1 ring-primary/50 bg-primary/5' 
                : 'border-white/10 hover:border-white/30'
            }`}
          >
            <div className="absolute inset-0">
               <img src={mode.image} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeGameMode === idx ? 'opacity-30 grayscale-0 scale-105' : 'opacity-10 grayscale group-hover:opacity-20'
                    }`} />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
               
               {/* Lock Overlay */}
               {mode.isLocked && (
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                   <div className="flex flex-col items-center gap-2">
                     <span className="material-symbols-outlined text-white/40 text-4xl">lock</span>
                     <span className="text-[10px] text-white/40 font-black tracking-[0.3em] uppercase">LOCKED</span>
                   </div>
                 </div>
               )}
            </div>
            
            <div className="relative z-10 flex justify-between items-start">
               <div className="flex items-center gap-3">
                 <div className={`w-10 h-10 rounded-none bg-white/5 border flex items-center justify-center backdrop-blur-xl transition-all ${
                   mode.isLocked ? 'border-white/5 text-white/20' :
                   activeGameMode === idx ? 'border-primary/50 text-primary' : 'border-white/10 text-white/40'
                 }`}>
                   <span className="material-symbols-outlined text-xl">{mode.icon}</span>
                 </div>
                 <div>
                   <h4 className={`font-black text-lg italic uppercase tracking-tighter leading-none mb-1 transition-colors ${
                     mode.isLocked ? 'text-white/20' :
                     activeGameMode === idx ? 'text-primary' : 'text-white'
                   }`}>
                     {mode.title}
                   </h4>
                   <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold">{mode.type}</p>
                 </div>
               </div>
               {!mode.isLocked && activeGameMode === idx && (
                 <span className="px-2 py-0.5 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded animate-pulse">Active</span>
               )}
               {mode.isLocked && (
                 <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/20 text-[8px] font-black uppercase tracking-widest rounded">Season 5</span>
               )}
            </div>

            <div className="relative z-10">
               <div className="flex justify-between items-center mb-2">
                 <div className="flex items-center gap-2">
                   <span className={`font-black italic text-xl leading-none ${mode.isLocked ? 'text-white/20' : activeGameMode === idx ? 'text-primary' : 'text-white'}`}>
                     LVL {mode.level}
                   </span>
                   {!mode.isLocked && mode.medal === "Gold" && (
                     <span className="material-symbols-outlined text-[#FFD700] text-sm drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] shine-effect rounded-full">military_tech</span>
                   )}
                   {!mode.isLocked && mode.medal === "Bronze" && (
                     <span className="material-symbols-outlined text-[#CD7F32] text-sm drop-shadow-[0_0_5px_rgba(205,127,50,0.5)] shine-effect rounded-full">workspace_premium</span>
                   )}
                 </div>
                 <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">{mode.rank}</span>
               </div>
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className={`h-full transition-all duration-1000 ${
                   mode.isLocked ? 'bg-white/5' :
                   activeGameMode === idx ? 'bg-primary shadow-[0_0_10px_rgba(178,9,35,0.5)]' : 'bg-white/20'
                 }`} style={{ width: `${mode.progress}%` }}></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/*  Section 3: Character Abilities (New Scroll Animation)  */}
<section className="relative w-full bg-black py-24">
  <SectionHeading title="CHARACTER ABILITIES" className="mb-32" />

  <div className="flex flex-col gap-[100px] w-full">
    {CHARACTERS.map((char, idx) => {
      const bgs = Array(6).fill("bg-[#1a0505]");
      const accents = Array(6).fill("#b20923");
      
      return (
        <div 
          key={char.id} 
          className={`ability-section w-screen h-[80vh] md:h-screen overflow-hidden relative flex flex-col md:flex-row items-center ${bgs[idx]}`}
          style={{ transformOrigin: 'center center' }}
        >


          {/* Left Side: Character Image with Atmospheric Aura */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center z-10 pt-10">
             <div className="absolute w-[100%] h-[100%] opacity-20 blur-[150px] animate-pulse pointer-events-none" 
                  style={{ background: `radial-gradient(circle, ${accents[idx]} 0%, transparent 70%)` }}></div>
             
             <div className="relative group/portrait h-full flex items-center justify-center">
                <img src={char.image} 
                     className="h-[75vh] w-auto object-contain relative z-10 transition-all duration-700 group-hover/portrait:scale-105" 
                     alt={char.name} />
             </div>
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start justify-center p-8 md:p-16 md:pl-10 lg:pl-20 h-full text-left">
            
            {/* Background branding text (subtle) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white/[0.01] text-[40vw] font-black pointer-events-none select-none uppercase italic tracking-tighter -z-10">
              {char.name.charAt(0)}
            </div>

            {/* Role Badge */}
            <div className="mb-6 animate-fade-in">
              <span className="bg-[#2c3139] text-white text-[11px] font-black px-4 py-1.5 uppercase tracking-widest rounded-sm border border-white/5">
                {char.role}
              </span>
            </div>

            {/* Name & Stats Row */}
            <div className="flex items-baseline gap-6 mb-8 flex-wrap">
              <div className="relative">
                <span className="absolute -top-4 -left-6 text-[10px] font-black text-white/20 rotate-90 origin-bottom-left">0{idx + 1}</span>
                <h3 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none font-['Space_Grotesk'] drop-shadow-2xl">
                  {char.name}
                </h3>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-white text-2xl font-black tracking-widest leading-none mb-1">13.8 / 14.9 / 6.9</span>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">AVG KDA</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 max-w-xl font-medium">
              {char.description}
            </p>

            {/* Ability Icons Row */}
            <div className="flex gap-4 mb-10">
              {char.skills.map((skill: any, sIdx: number) => (
                <div key={sIdx} className={`w-16 h-16 border transition-all duration-300 cursor-pointer flex items-center justify-center group/skill-icon ${sIdx === 0 ? 'border-white bg-white/10' : 'border-white/10 bg-black/40 hover:border-white/40 hover:bg-white/5'}`}>
                   <span className={`material-symbols-outlined text-3xl transition-colors ${sIdx === 0 ? 'text-white' : 'text-white/40 group-hover/skill-icon:text-white/80'}`}>
                     {skill.icon}
                   </span>
                   {sIdx === 0 && <div className="absolute -bottom-2 w-1.5 h-1.5 bg-white rotate-45"></div>}
                </div>
              ))}
            </div>

            {/* Ability Details */}
            <div className="mb-14 border-t border-white/5 pt-8 max-w-xl">
               <h4 className="text-white font-black text-lg uppercase tracking-widest mb-4 flex items-center gap-3">
                  <span className="text-primary font-black">Q</span>
                  <span className="w-4 h-[1px] bg-white/20"></span>
                  {char.skills[0].name}
               </h4>
               <p className="text-white/40 text-sm md:text-base leading-relaxed">
                 EQUIP a tactical advantage. ACTIVATE to deploy a specialized {char.role.toLowerCase()} field that neutralizes incoming threats and provides area denial for the squad in high-stakes combat scenarios.
               </p>
            </div>

            {/* Equip Button */}
            <button className="group relative bg-[#ff4655] text-white font-black text-4xl px-16 py-5 uppercase tracking-tighter transition-all hover:bg-[#ff4655]/90 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,70,85,0.3)]">
               <span className="relative z-10">EQUIP</span>
               <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            
          </div>

          {/* HUD Frame Decorative elements */}
          <div className="absolute inset-6 md:inset-12 border border-primary/10 pointer-events-none rounded-none shadow-[0_0_30px_rgba(178,9,35,0.1)]">
             {/* Moving Border Effect */}
             <div className="absolute inset-0 overflow-hidden rounded-none">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent animate-border-top shadow-[0_0_10px_#b20923]"></div>
                <div className="absolute top-0 right-0 h-full w-[3px] bg-gradient-to-b from-transparent via-primary to-transparent animate-border-right shadow-[0_0_10px_#b20923]"></div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent animate-border-bottom shadow-[0_0_10px_#b20923]"></div>
                <div className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-transparent via-primary to-transparent animate-border-left shadow-[0_0_10px_#b20923]"></div>
             </div>
          </div>
        </div>
      );
    })}
  </div>
</section>

        {/*  Tactical Map Section  */}
        <div className="pt-48 pb-16 w-full relative group/maps overflow-hidden bg-black border-b border-white/5">
           <SectionHeading title="ENGAGEMENT MAPS" />

           <div 
             className={`relative h-[850px] w-full overflow-hidden group perspective-[2000px] mt-8 ${mapScale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}`}
             onMouseDown={handleMapDragStart}
             onMouseMove={handleMapDrag}
             onMouseUp={handleMapDragEnd}
             onMouseLeave={handleMapDragEnd}
           >
              {MAPS.map((map, idx) => (
                <div 
                  key={map.id}
                  className={`absolute inset-0 transition-all duration-[800ms] ease-out flex items-center justify-center ${
                    currentMapIndex === idx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: mapScale > 1.8 ? 'rotateX(25deg) translateY(50px)' : 'rotateX(0deg) translateY(0px)'
                  }}
                >
                  {/* Map Grid Layer */}
                  <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                  
                  {/* Map Image with Zoom/Pan */}
                  <div className="relative w-full h-full flex items-center justify-center overflow-visible pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
                    <img 
                      src={map.image} 
                      className="transition-transform duration-300 ease-out max-w-none select-none shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                      style={{ 
                        transform: `scale(${mapScale}) translate(${mapPosition.x / mapScale}px, ${mapPosition.y / mapScale}px)`,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      alt={map.name}
                    />

                    {/* 3D POI Markers */}
                    {map.pois.map((poi) => (
                      <div 
                        key={poi.id}
                        className="absolute z-30 transition-all duration-500"
                        style={{ 
                          left: `${poi.x}%`, 
                          top: `${poi.y}%`,
                          transform: `scale(${mapScale}) translate(${mapPosition.x / mapScale}px, ${mapPosition.y / mapScale}px) translateZ(0px)`,
                          opacity: mapScale > 1.5 ? 1 : 0
                        }}
                      >
                         <div 
                           className="relative flex flex-col items-center group/poi"
                           style={{ 
                             transform: mapScale > 1.8 ? 'rotateX(-25deg) translateZ(50px)' : 'rotateX(0deg) translateZ(10px)',
                             transformStyle: 'preserve-3d'
                           }}
                         >
                            {/* Marker Pin */}
                            <div className="w-1 h-16 bg-gradient-to-t from-primary via-primary/50 to-transparent shadow-[0_0_15px_rgba(178,9,35,0.8)]"></div>
                            <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(178,9,35,1)] border border-white/50 -mt-1"></div>
                            
                            {/* POI Label Label */}
                            <div className="absolute bottom-full mb-2 whitespace-nowrap bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 scale-0 group-hover/poi:scale-100 transition-transform origin-bottom">
                               <span className="text-[10px] font-black uppercase tracking-widest text-white">{poi.name}</span>
                            </div>

                            {/* Holographic Height Ring */}
                            <div className="absolute bottom-0 w-8 h-8 border border-primary/40 rounded-full animate-ping opacity-20" style={{ transform: 'rotateX(90deg)' }}></div>
                            <div className="absolute bottom-0 w-12 h-12 border border-primary/20 rounded-full animate-[pulse_3s_infinite] opacity-10" style={{ transform: 'rotateX(90deg)' }}></div>
                         </div>
                      </div>
                    ))}
                  </div>

                  {/* Corner Coordinates Removed */}


                </div>
              ))}

              {/* Navigation Controls (Right Side) */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-10">
                 <button 
                   onClick={() => {
                     setCurrentMapIndex((prev) => (prev > 0 ? prev - 1 : MAPS.length - 1));
                     setMapScale(1);
                     setMapPosition({ x: 0, y: 0 });
                   }}
                   className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group/nav backdrop-blur-md bg-black/20"
                 >
                   <span className="material-symbols-outlined text-white/40 text-lg group-hover:text-primary transition-colors">north</span>
                 </button>

                 <div className="flex flex-col gap-4">
                    {MAPS.map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => {
                          setCurrentMapIndex(i);
                          setMapScale(1);
                          setMapPosition({ x: 0, y: 0 });
                        }}
                        className="group relative flex items-center justify-end h-8"
                      >
                         <div className={`h-full w-[2px] transition-all duration-500 ${currentMapIndex === i ? 'bg-primary shadow-[0_0_10px_rgba(178,9,35,1)] h-12' : 'bg-white/10 group-hover:bg-white/30'}`}></div>
                      </button>
                    ))}
                 </div>

                 <button 
                   onClick={() => {
                     setCurrentMapIndex((prev) => (prev < MAPS.length - 1 ? prev + 1 : 0));
                     setMapScale(1);
                     setMapPosition({ x: 0, y: 0 });
                   }}
                   className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 group/nav backdrop-blur-md bg-black/20"
                 >
                   <span className="material-symbols-outlined text-white/40 text-lg group-hover:text-primary transition-colors">south</span>
                 </button>
              </div>

              {/* Zoom Controls (Bottom Left) */}
              <div className="absolute bottom-12 left-12 z-50 flex flex-col gap-3">
                 <button 
                   onClick={() => setMapScale(prev => Math.min(prev + 0.4, 4))}
                   className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-xl group/zoom"
                 >
                    <span className="material-symbols-outlined text-white group-hover:scale-125 transition-transform">zoom_in</span>
                 </button>
                 <button 
                   onClick={() => setMapScale(prev => {
                     const newScale = Math.max(prev - 0.4, 1);
                     if (newScale === 1) setMapPosition({ x: 0, y: 0 });
                     return newScale;
                   })}
                   className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 shadow-xl group/zoom"
                 >
                    <span className="material-symbols-outlined text-white group-hover:scale-125 transition-transform">zoom_out</span>
                 </button>
                 <button 
                   onClick={() => {
                     setMapScale(1);
                     setMapPosition({ x: 0, y: 0 });
                   }}
                   className="w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-xl group/zoom"
                 >
                    <span className="material-symbols-outlined text-sm font-black group-hover:rotate-180 transition-transform">restart_alt</span>
                 </button>
              </div>

              {/* Scanning Line Animation */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/40 shadow-[0_0_15px_rgba(178,9,35,0.8)] z-20 animate-scan-line pointer-events-none opacity-40"></div>
           </div>
        </div>
{/*  Section 7: Battle Briefings (Blog)  */}
<section className="py-24 bg-[#050505] relative overflow-hidden">
  <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
    <div className="flex flex-col items-center mb-16">
      <SectionHeading title="BATTLE BRIEFINGS" className="mb-0" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {BLOG_POSTS.slice(0, 3).map((post) => (
        <div key={post.id} className="group relative h-[500px] overflow-hidden border-r border-white/5 last:border-r-0 cursor-pointer">
          {/* Main Image */}
          <img 
            src={post.image} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            alt={post.title} 
          />
          
          {/* Expanding Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/80" />
          
          {/* Content Container - Animates upwards */}
          <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500 h-[180px] group-hover:h-full flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent group-hover:from-black group-hover:via-black group-hover:to-black/60">
            {/* Category Tag */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest skew-x-[-12deg]">
                <span className="inline-block skew-x-[12deg]">{post.category}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
              {post.title}
            </h3>

            {/* Meta Data */}
            <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span className="text-[11px] font-bold uppercase tracking-widest">{post.date}</span>
            </div>

            {/* Excerpt - visible on hover only or always if space permits */}
            <p className="text-white/40 text-sm mt-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
              {post.excerpt}
            </p>
            
            {/* Read More link - visible on hover */}
            <div className="mt-8 flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              <span>READ ARTICLE</span>
              <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>

          {/* Top Scanline effect */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      ))}
    </div>
  </div>
</section>
{/*  Section 8: Cinematic Testimonials (War Chronicles)  */}
<section className="py-48 bg-[#020202] relative overflow-hidden flex items-center justify-center min-h-[900px]">
  {/* Background Particle Stars */}
  <div className="absolute inset-0 pointer-events-none">
     {[...Array(50)].map((_, i) => (
       <div 
         key={i}
         className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
         style={{ 
           top: `${Math.random() * 100}%`, 
           left: `${Math.random() * 100}%`,
           animationDelay: `${Math.random() * 5}s`,
           opacity: Math.random()
         }}
       ></div>
     ))}
  </div>

  <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
    {/* SectionHeading for WAR CHRONICLES removed */}
    <div className="relative h-[600px] flex items-center justify-center">
      
      {/* Background/Faded Testimonials for Depth */}
      <div className="absolute top-0 left-0 w-80 opacity-10 blur-[2px] transition-all duration-1000 animate-float-slow hidden lg:block">
        <p className="text-white text-sm italic mb-4">"{TESTIMONIALS[0].quote}"</p>
        <div className="flex items-center gap-3">
          <img src={TESTIMONIALS[0].image} className="w-8 h-8 rounded-full border border-white/10" />
          <span className="text-[10px] font-black uppercase text-white/40">{TESTIMONIALS[0].name}</span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-80 opacity-10 blur-[2px] transition-all duration-1000 animate-float-slow delay-1000 hidden lg:block">
        <p className="text-white text-sm italic mb-4 text-right">"{TESTIMONIALS[2].quote}"</p>
        <div className="flex items-center gap-3 justify-end">
          <span className="text-[10px] font-black uppercase text-white/40">{TESTIMONIALS[2].name}</span>
          <img src={TESTIMONIALS[2].image} className="w-8 h-8 rounded-full border border-white/10" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
        className="absolute left-[-20px] md:left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-md bg-black/20 group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chevron_left</span>
      </button>

      <button 
        onClick={() => setActiveTestimonial((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
        className="absolute right-[-20px] md:right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 backdrop-blur-md bg-black/20 group"
      >
        <span className="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">chevron_right</span>
      </button>

      {/* Main Active Testimonial */}
      <div className="flex flex-col items-center text-center max-w-4xl transition-all duration-700 animate-in fade-in zoom-in-95">
        <span className="material-symbols-outlined text-white/10 text-6xl mb-8">format_quote</span>
        
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl lg:text-7xl font-black italic text-white uppercase tracking-tighter leading-[1.1] mb-16 testimonial-text-glow">
          "{TESTIMONIALS[activeTestimonial].quote}"
        </h2>

        <div className="flex flex-col items-center">
           <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full border-2 border-primary/50 p-1 testimonial-avatar-glow">
                 <img src={TESTIMONIALS[activeTestimonial].image} className="w-full h-full object-cover rounded-full" alt={TESTIMONIALS[activeTestimonial].name} />
              </div>
              <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
           </div>
           
           <h4 className="font-['Space_Grotesk'] text-2xl font-black italic text-white uppercase tracking-widest mb-1">
             {TESTIMONIALS[activeTestimonial].name}
           </h4>
           <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] opacity-80">
             {TESTIMONIALS[activeTestimonial].role}
           </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-4">
        {TESTIMONIALS.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveTestimonial(idx)}
            className={`w-12 h-1 transition-all duration-500 ${activeTestimonial === idx ? 'bg-primary w-20' : 'bg-white/10 hover:bg-white/30'}`}
          ></button>
        ))}
      </div>
    </div>
  </div>
</section>
{/*  Section 9: Final CTA (The Journey)  */}
<section className="relative py-24 md:py-32 bg-black overflow-hidden flex items-center border-t border-white/5">
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Optional background styling to match the dark theme */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
  </div>
  
  <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    
    {/* Left Side: Graphic with Characters */}
    <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">
      <div className="relative w-full max-w-[850px] flex items-center justify-center transform -translate-x-4 lg:-translate-x-12 scale-110 lg:scale-125">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/30 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <img src={ctaImage} className="w-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] z-10 relative" alt="CTA Graphic" />
      </div>
    </div>

    {/* Right Side: Content */}
    <div className="flex flex-col text-left lg:pl-12 xl:pl-20">

      <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6">
        THE JOURNEY OF THE NFT SITES
      </h2>

      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl font-medium">
        I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. Board team-building results after premium web-readiness value web enabled e-business engage web enabled strategic...
      </p>

      {/* Stats */}
      <div className="flex gap-8 md:gap-12 mb-12">
        <div className="flex flex-col">
          <span className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black text-white mb-1">50K</span>
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">MEMBER</span>
        </div>
        <div className="flex flex-col">
          <span className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black text-white mb-1">17K</span>
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">NFT</span>
        </div>
        <div className="flex flex-col">
          <span className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black text-white mb-1">40K</span>
          <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">ARTIST</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-8">
        <SecondaryCTA className="px-12 py-4 text-xs tracking-widest">
  WATCH OUR VIDEO
  <span className="material-symbols-outlined text-xl ml-2">play_circle</span>
</SecondaryCTA>
      </div>

    </div>
  </div>
</section>
{/*  Footer  */}
<footer className="w-full bg-black pt-64 pb-24 relative overflow-hidden">
  {/* Massive Background Text */}
  <div className="absolute top-0 left-0 w-full select-none pointer-events-none px-4">
    <h2 className="text-[8vw] md:text-[9vw] font-black text-white/[0.03] uppercase tracking-tighter leading-none text-center">
      BATTLE OF THE ARENA
    </h2>
  </div>

  <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
    <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 pt-12">
      <div className="flex flex-col gap-4">
        <div className="text-white font-black tracking-widest font-['Space_Grotesk'] uppercase text-2xl">
          BATTLE OF THE ARENA
        </div>
        <div className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-white/40">
          © 2024 BATTLE OF THE ARENA. ALL RIGHTS RESERVED.
        </div>
      </div>

      <div className="flex flex-wrap gap-8 md:gap-12">
        <a className="font-['Space_Grotesk'] text-[11px] tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">PRIVACY POLICY</a>
        <a className="font-['Space_Grotesk'] text-[11px] tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">TERMS OF SERVICE</a>
        <a className="font-['Space_Grotesk'] text-[11px] tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">SUPPORT</a>
        <a className="font-['Space_Grotesk'] text-[11px] tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">PRESS KIT</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
