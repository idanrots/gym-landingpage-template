import React from 'react';
import { ArrowLeft, Dumbbell, Zap, Target, Instagram, Play, Trophy, Activity, Cpu } from "lucide-react";

export default function FitnessTechDarkTemplate() {
  return (
    <div dir="rtl" className="min-h-screen font-sans bg-[#05070a] text-white selection:bg-cyan-400 selection:text-black">
      
      {/* Navbar - Cyber Glassmorphism */}
      <nav className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-xl border-b border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <Activity className="text-black w-6 h-6" />
            </div>
            <span className="tracking-widest">CYBER<span className="text-cyan-500">FIT</span></span>
          </div>
          
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">
            <a href="#training" className="hover:text-cyan-400 transition-colors">Programs</a>
            <a href="#method" className="hover:text-cyan-400 transition-colors">Methodology</a>
            <a href="#results" className="hover:text-cyan-400 transition-colors">Results</a>
          </div>
          
          <button className="relative group overflow-hidden bg-transparent border border-cyan-500 text-cyan-500 font-black px-8 py-3 rounded-md transition-all hover:bg-cyan-500 hover:text-black">
            <span className="relative z-10 uppercase tracking-tighter">Start Mission</span>
            <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section - High-Tech Performance */}
      <header className="relative pt-32 pb-48 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8 rounded-sm">
            <Cpu className="w-3 h-3" />
            Next-Gen Personal Training
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] mb-12 italic uppercase tracking-tighter">
            UPGRADE<br />
            <span className="text-transparent stroke-cyan-500 stroke-1" style={{ WebkitTextStroke: '1px #06b6d4' }}>YOUR</span> <span className="text-cyan-500">SYSTEM.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-16 font-light leading-relaxed">
            לא עוד אימונים גנריים. אנחנו משלבים מדע, דאטה וליווי אישי חסר פשרות כדי להביא את הביצועים שלך לקצה. 
          </p>
          
          <div className="flex flex-wrap gap-8 justify-start items-center">
            <a 
              href="https://wa.me/yournumber"
              className="group h-18 px-14 bg-cyan-500 text-black font-black text-xl flex items-center gap-4 hover:bg-white transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              בואי נתחיל
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </a>
            
            <button className="flex items-center gap-4 font-bold text-lg text-zinc-300 hover:text-cyan-400 transition-colors group">
              <div className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              צפי בשיטה
            </button>
          </div>
        </div>
      </header>

      {/* Stats - Tech Bar */}
      <section className="border-y border-white/5 bg-white/5 py-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
                <div className="text-cyan-500 text-4xl font-black italic">98%</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-bold">Success Rate</div>
            </div>
            <div className="text-center">
                <div className="text-white text-4xl font-black italic">+400</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-bold">Active Members</div>
            </div>
            <div className="text-center border-x border-white/5">
                <div className="text-white text-4xl font-black italic">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-bold">Data Tracking</div>
            </div>
            <div className="text-center">
                <div className="text-cyan-500 text-4xl font-black italic">PRO</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-bold">Certified Coaches</div>
            </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="training" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative p-1 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl overflow-hidden hover:from-cyan-500 transition-all duration-500">
                <div className="bg-[#0a0c10] p-10 rounded-2xl h-full transition-colors group-hover:bg-[#0a0c10]/90">
                    <Trophy className="w-10 h-10 mb-6 text-cyan-500" />
                    <h3 className="text-2xl font-black mb-4 italic uppercase">Performance</h3>
                    <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">בניית מסת שריר וכוח מתפרץ בשיטה מדעית מוכחת.</p>
                </div>
            </div>

            <div className="group relative p-1 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl overflow-hidden hover:from-cyan-500 transition-all duration-500">
                <div className="bg-[#0a0c10] p-10 rounded-2xl h-full transition-colors group-hover:bg-[#0a0c10]/90">
                    <Target className="w-10 h-10 mb-6 text-cyan-500" />
                    <h3 className="text-2xl font-black mb-4 italic uppercase">Precision</h3>
                    <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">דיוק תזונתי מותאם אישית לפי קצב חילוף החומרים שלך.</p>
                </div>
            </div>

            <div className="group relative p-1 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl overflow-hidden hover:from-cyan-500 transition-all duration-500">
                <div className="bg-[#0a0c10] p-10 rounded-2xl h-full transition-colors group-hover:bg-[#0a0c10]/90">
                    <Zap className="w-10 h-10 mb-6 text-cyan-500" />
                    <h3 className="text-2xl font-black mb-4 italic uppercase">Energy</h3>
                    <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">שיפור סיבולת ורמות אנרגיה לאורך כל היום, לא רק באימון.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Tech */}
      <footer className="py-20 bg-[#05070a] border-t border-cyan-900/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-10 md:mb-0 text-center md:text-right">
             <div className="text-3xl font-black italic text-white tracking-tighter">CYBER<span className="text-cyan-500">FIT</span></div>
             <p className="text-zinc-600 tracking-[0.4em] text-[10px] uppercase font-bold mt-2">Engineered by Idan Rots</p>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-all transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-all transform hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}