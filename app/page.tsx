"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Dumbbell, Zap, Target, Instagram, Play, Trophy, Activity, ChevronDown, Rocket } from "lucide-react";

export default function HighEndGymExperience() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#020408] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      {/* Floating Header */}
      <nav className="fixed top-6 inset-x-0 z-50 max-w-5xl mx-auto px-6">
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl h-16 flex justify-between items-center px-8 shadow-2xl">
          <div className="text-2xl font-black italic tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ULTRA</span>
            <span className="text-white">GYM</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Elite Programs</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Philosophy</a>
          </div>
          <button className="bg-white text-black text-xs font-black px-6 py-2 rounded-lg hover:bg-cyan-400 transition-all uppercase">
            Join Club
          </button>
        </div>
      </nav>

      {/* Hero Experience */}
      <header className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <span className="inline-block px-4 py-1.5 border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8 rounded-full">
            The Pinnacle of Performance
          </span>
          
          <h1 className="text-7xl md:text-[12rem] font-black leading-[0.8] mb-8 italic tracking-tighter">
            BREAK<br />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>THE</span> 
            <span className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent"> LIMIT.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            אנחנו לא מחפשים עוד מתאמנים. אנחנו מחפשים את אלו שמוכנים להפוך את הגוף שלהם למכונה משומנת. שילוב של טכנולוגיה, פיזיולוגיה ותוצאות קצה.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="h-16 px-12 bg-cyan-500 text-black font-black text-xl rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(6,182,212,0.3)]">
              התחילי טרנספורמציה
              <Rocket className="w-5 h-5" />
            </button>
            <button className="h-16 px-10 text-white font-bold text-lg border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
              צפי בשיטה
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="text-zinc-600 w-8 h-8" />
        </motion.div>
      </header>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card */}
          <div className="md:col-span-2 relative group p-[1px] rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#0a0c12] p-12 h-full rounded-[2rem] border border-white/5">
              <Activity className="w-12 h-12 text-cyan-400 mb-8" />
              <h3 className="text-4xl font-black italic mb-4">DATA-DRIVEN TRAINING</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                האימון שלך מבוסס על מדדים פיזיולוגיים בזמן אמת. אנחנו עוקבים אחרי כל חזרה, כל דופק וכל שניה של התאוששות.
              </p>
              <div className="mt-12 flex gap-4">
                <div className="h-1 w-20 bg-cyan-500 rounded-full" />
                <div className="h-1 w-8 bg-zinc-800 rounded-full" />
                <div className="h-1 w-8 bg-zinc-800 rounded-full" />
              </div>
            </div>
          </div>

          {/* Small Card */}
          <div className="bg-gradient-to-b from-cyan-500 to-blue-600 p-12 rounded-[2rem] flex flex-col justify-between shadow-2xl shadow-cyan-500/20">
            <Trophy className="text-black w-12 h-12" />
            <div>
              <h3 className="text-3xl font-black text-black leading-tight mb-2 uppercase italic">Elite<br />Level</h3>
              <p className="text-black/70 font-bold">הצטרפי ל-1% שמעזים לדחוף את הקצה.</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-[#0a0c12] border border-white/5 p-12 rounded-[2rem] text-center hover:border-cyan-500/50 transition-colors">
            <div className="text-6xl font-black italic mb-2 text-white">+500</div>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Athletes Built</p>
          </div>
          
          <div className="md:col-span-2 bg-[#0a0c12] border border-white/5 p-12 rounded-[2rem] flex items-center justify-between group overflow-hidden">
            <div>
                <h3 className="text-3xl font-black italic mb-4">READY TO UPGRADE?</h3>
                <p className="text-zinc-400">הצטרפי עכשיו וקבלי תוכנית אסטרטגית מותאמת אישית.</p>
            </div>
            <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-cyan-500/30">
                <ArrowLeft className="text-black w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Cinematic */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-4xl font-black italic mb-8 tracking-tighter">
            ULTRA<span className="text-cyan-500">GYM</span>
          </div>
          <div className="flex justify-center gap-8 mb-12">
            <Instagram className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
            <div className="text-zinc-500 hover:text-white cursor-pointer transition-colors font-bold uppercase text-xs tracking-widest">WhatsApp</div>
          </div>
          <p className="text-zinc-700 text-[10px] uppercase tracking-[0.5em] font-bold">
            Project Engineered by IDAN ROTS / 2026
          </p>
        </div>
      </footer>
    </div>
  );
}