"use client";
import React from 'react';
import Image from 'next/image'; // ייבוא רכיב התמונה הממוטב
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Star, 
  Trophy, 
  Users, 
  Zap, 
  Target,
  Activity
} from "lucide-react";

export default function DvirMoskovichOptimized() {
  
  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* Background Glows - Reduced for Mobile Performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 blur-[80px] md:blur-[150px] rounded-full" />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-10 md:pt-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10 text-right order-2 md:order-1"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
              Premium Personal Coaching
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight italic uppercase">
              דביר <br />
              <span className="text-blue-500">מוסקוביץ</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed font-light">
              מאמן כושר ומומחה לשינוי פיזי ומנטלי. אני בונה אנשים חזקים יותר, בטוחים יותר וממוקדים יותר.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a href="https://wa.me/yournumber" className="w-full sm:w-auto h-14 px-10 bg-white text-black font-black rounded-full flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all shadow-lg shadow-white/5">
                בואי נתחיל תהליך
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-zinc-500 underline underline-offset-4 decoration-blue-500">+400 לקוחות מרוצים</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-[3/4] bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl order-1 md:order-2"
          >
            {/* החלף את ה-src לנתיב התמונה שלך בתיקיית public */}
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 italic">
               <span className="text-xs uppercase tracking-widest">Dvir Profile Photo</span>
            </div>
            {/* דוגמה לשימוש נכון: <Image src="/dvir.jpg" alt="Dvir" fill className="object-cover" priority /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </div>
      </header>

      {/* Results Section - ממוטב לנייד */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-right">
          <h2 className="text-4xl md:text-5xl font-black italic mb-16 uppercase">הוכחות <span className="text-blue-500">בשטח</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6 group"
              >
                <div className="aspect-[3/4] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 relative shadow-xl">
                   <div className="absolute bottom-6 inset-x-6 flex justify-between z-10">
                      <span className="px-4 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10">לפני</span>
                      <span className="px-4 py-1 bg-blue-500 rounded-full text-[10px] font-black italic shadow-lg shadow-blue-500/40">אחרי</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="px-2">
                  <div className="flex text-blue-500 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-md font-bold leading-snug text-zinc-200">"התהליך עם דביר שינה לי את התפיסה על מה אני מסוגלת לעשות."</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Socials */}
      <footer id="contact" className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black italic mb-12 uppercase tracking-tighter">הגיע הזמן <span className="text-blue-500">שלך.</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {[
              { label: "WhatsApp", icon: <MessageCircle size={24} />, color: "hover:bg-green-600", link: "#" },
              { label: "Instagram", icon: <Instagram size={24} />, color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600", link: "#" },
              { label: "YouTube", icon: <Youtube size={24} />, color: "hover:bg-red-600", link: "#" },
              { label: "TikTok", icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.77a6.738 6.738 0 01-10.74 5.39 6.74 6.74 0 012.31-11.41c.48-.12.98-.18 1.48-.19v4.1c-.42.02-.85.12-1.23.3-.96.44-1.5 1.54-1.28 2.57.22 1.02 1.18 1.75 2.22 1.73 1.15-.02 2.13-.93 2.17-2.08V0h.24z"/>
                </svg>
              ), color: "hover:bg-[#010101] hover:shadow-[0_0_15px_rgba(255,0,80,0.4),0_0_15px_rgba(0,242,234,0.4)]", link: "#" }
            ].map((soc, i) => (
              <a key={i} href={soc.link} target="_blank" className={`flex flex-col items-center p-6 md:p-8 bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-white/5 ${soc.color} transition-all duration-300 group`}>
                <div className="mb-3 md:mb-4 group-hover:scale-110 transition-transform">{soc.icon}</div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">{soc.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-white/5 space-y-4">
             <div className="text-2xl font-black italic tracking-tighter opacity-80">DVIR MOSKOVICH</div>
             <p className="text-zinc-700 text-[8px] font-bold uppercase tracking-[0.4em]">Engineered by Idan Rots / 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}