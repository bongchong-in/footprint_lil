import React, { useState, useEffect } from 'react';
import { 
  Star, ChevronDown, Mail
} from 'lucide-react';
import RevealOnScroll from './components/RevealOnScroll';

// Import Data
import { 
  GLOBAL, NAV, HERO, SKILLS, GALLERY, CONTACT, FOOTER 
} from './data';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Typewriter effect
    let i = 0;
    const fullText = GLOBAL.statusText;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(typing);
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleItems(prev => Math.min(prev + 2, GALLERY.items.length));
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D3436] font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden relative">
      
      {/* --- Global CSS for specific animations --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float 8s ease-in-out infinite 2s; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        
        .cubic-bezier { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>

      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#CBD5E0 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4 }}></div>

      {/* Floating Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-3 shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a href={GLOBAL.homeLink} className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold transform transition-transform group-hover:rotate-12">
              {NAV.logoChar}
            </div>
            <span className="font-bold tracking-tight text-lg group-hover:text-teal-600 transition-colors">{NAV.logoText}</span>
          </a>
          <a 
            href={NAV.ctaBtn.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-200"
          >
            {NAV.ctaBtn.text}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 z-10 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-delay"></div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="md:col-span-7 space-y-8 order-2 md:order-1 relative">
            <RevealOnScroll>
              <div className="inline-block bg-white/80 backdrop-blur border border-teal-200 text-teal-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-2 shadow-sm">
                {typedText}<span className="animate-pulse">|</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-black">
                {HERO.titlePrefix} <span className="inline-block hover:animate-spin-slow origin-center cursor-default text-orange-500">{HERO.level}</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-gray-500">{HERO.titleSuffix}</span>
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl text-gray-500 max-w-md font-medium leading-relaxed">
                {HERO.description}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="flex flex-wrap gap-4">
                 {HERO.stats.map((stat, idx) => (
                   <div key={idx} className="flex items-center gap-3 bg-white px-5 py-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-default">
                     <div className={`p-2 rounded-lg ${stat.bgClass} ${stat.textClass}`}>{stat.icon}</div>
                     <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
                       <p className="font-bold text-lg leading-none">{stat.value}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Image / Avatar */}
          <div className="md:col-span-5 order-1 md:order-2 relative group perspective-1000">
             <div className="relative z-10 transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 preserve-3d">
               {/* Parallax Effect via Translate */}
               <div 
                 className="absolute inset-0 bg-black rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"
               ></div>
               
               <div className="relative bg-white p-3 rounded-[2rem] border-2 border-black overflow-hidden shadow-2xl">
                  {/* Aspect Ratio 4:5 for Hero */}
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 relative">
                      <img 
                        src={HERO.avatar.src}
                        alt={HERO.avatar.alt}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        style={{ transform: `translateY(${scrollY * 0.05}px)` }} // Subtle Parallax
                      />
                      
                      {/* Sticker Overlay */}
                      <div className="absolute top-4 right-4 animate-spin-slow">
                        <Star size={48} className="text-yellow-400 fill-yellow-400 drop-shadow-md"/>
                      </div>
                  </div>
                  
                  {/* Floating 'Sticker' */}
                  <div className="absolute bottom-6 -left-2 bg-white px-4 py-2 rounded-lg text-sm font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                    {HERO.avatar.stickerText}
                  </div>
               </div>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-20 z-10 relative">
        
        {/* Attributes Section */}
        <section className="mb-32">
          <RevealOnScroll>
            <div className="flex items-end justify-between mb-12 border-b-2 border-black pb-4">
               <h2 className="text-4xl font-black uppercase italic tracking-tighter">{SKILLS.title}</h2>
               <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                 {SKILLS.subtitleIcon} {SKILLS.subtitle}
               </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.attributes.map((attr, idx) => {
              return (
                <RevealOnScroll key={idx} delay={idx * 100}>
                  <div 
                    className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default`}
                  >
                    <div className="flex justify-between mb-4">
                       <div className="flex items-center gap-2">
                         <span className={`p-1 bg-gray-50 rounded-md group-hover:scale-110 transition-transform`}>{attr.icon}</span>
                         <h3 className="font-bold text-lg">{attr.label}</h3>
                       </div>
                       <span className="font-mono text-gray-400 text-xs">{attr.value}/100</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                       <div 
                         className={`h-full ${attr.color} relative`} 
                         style={{ width: `${attr.value}%` }}
                       >
                         <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                       </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

        {/* The Quest Log (Gallery) - Vertical Cards */}
        <section className="mb-32">
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-16 justify-center">
              <div className="h-px bg-gray-300 flex-1"></div>
              <div className="px-8 py-3 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-lg transform hover:scale-110 transition-transform">
                {GALLERY.title}
              </div>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-24">
            {GALLERY.items.slice(0, visibleItems).map((item, index) => (
              <RevealOnScroll key={item.id} delay={index * 100} className={index % 2 !== 0 ? 'md:translate-y-20' : ''}>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  {/* Tape Effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/90 rotate-1 z-20 shadow-sm backdrop-blur-sm opacity-90 group-hover:rotate-0 transition-transform duration-500"></div>
                  
                  <div className="relative bg-white p-4 pb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-1 rounded-sm">
                    {/* Vertical Aspect Ratio 3:4 */}
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-5 relative group-hover:rounded-lg transition-all duration-500">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full tracking-widest uppercase text-sm">{GALLERY.viewText}</span>
                      </div>

                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {item.type}
                      </div>
                    </div>
                    
                    <div className="px-2">
                        <h3 className="font-black text-2xl mb-2 tracking-tight group-hover:text-teal-600 transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-sm mb-4 font-medium leading-relaxed">{item.desc}</p>
                        
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded border border-teal-100">
                                {tag}
                            </span>
                            ))}
                        </div>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
          
          {visibleItems < GALLERY.items.length && (
            <div className="mt-32 text-center">
                <RevealOnScroll>
                    <button 
                        onClick={handleLoadMore}
                        className="group inline-flex items-center gap-2 text-lg font-bold hover:text-teal-600 transition-colors"
                    >
                    {GALLERY.loadMoreText}
                    <ChevronDown className="group-hover:translate-y-1 transition-transform"/>
                    </button>
                </RevealOnScroll>
            </div>
          )}
        </section>

        {/* Contact Section: The Air Mail Envelope */}
        <section id="contact" className="max-w-3xl mx-auto relative group mb-20">
            <RevealOnScroll>
                {/* Abstract Background Shapes */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delay"></div>

                <div className="bg-white border-2 border-dashed border-gray-300 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden z-10 transform hover:scale-[1.01] transition-transform duration-500">
                    {/* Air Mail Stripes */}
                    <div className="absolute top-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(45deg,#ff6b6b,#ff6b6b_20px,#feca57_20px,#feca57_40px,#48dbfb_40px,#48dbfb_60px)] opacity-80"></div>
                    
                    <div className="text-center space-y-6 mt-4">
                    <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform shadow-lg shadow-gray-300">
                        {CONTACT.icon}
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">{CONTACT.title}</h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-lg">
                        {CONTACT.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        {CONTACT.buttons.map((btn, index) => (
                          <a 
                            key={index}
                            href={btn.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${btn.primary ? 'bg-black text-white hover:bg-teal-600' : 'bg-white border-2 border-black text-black hover:bg-gray-50'} px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2`}
                          >
                          {btn.icon} {btn.text}
                          </a>
                        ))}
                    </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-[repeating-linear-gradient(45deg,#48dbfb,#48dbfb_20px,#feca57_20px,#feca57_40px,#ff6b6b_40px,#ff6b6b_60px)] opacity-80"></div>
                </div>
           </RevealOnScroll>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-24 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Dot Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #808080 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Diamond Icon */}
          <a href={GLOBAL.homeLink} className="flex flex-col items-center cursor-pointer group">
            <div className="w-20 h-20 bg-[#1A1A1A] rounded-lg transform rotate-45 flex items-center justify-center mb-10 shadow-lg border border-white/5 group-hover:border-white/20 transition-all">
               <span className="transform -rotate-45 text-3xl font-black text-white">{FOOTER.logoChar}</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white group-hover:text-gray-200 transition-colors">
              {FOOTER.title}
            </h2>
          </a>

          {/* Copyright Info */}
          <div className="text-gray-500 font-mono text-sm md:text-base space-y-2 text-center">
            <p>{FOOTER.copyright}</p>
            <p>Managed by <a href={FOOTER.managedBy.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{FOOTER.managedBy.text}</a></p>
            <p className="pt-4 text-xs opacity-70">
              {FOOTER.credits.prefix} <a href={FOOTER.credits.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">{FOOTER.credits.name}</a> {FOOTER.credits.suffix}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;