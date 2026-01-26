"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Trophy, 
  Users, 
  Zap, 
  Play, 
  Activity, 
  TrendingUp,
  Target
} from "lucide-react";

export default function DvirMoskovichLandingPage() {
  
  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-slate-500/10 blur-[130px] rounded-full" />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="z-10 text-right"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
              מאמן כושר אישי
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight italic uppercase">
              דביר <br />
              <span className="text-blue-500">מוסקוביץ</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed font-light">
              מאמן כושר ומומחה לשינוי פיזי ומנטלי. אני לא רק בונה תוכניות אימון, אני בונה אנשים חזקים יותר, בטוחים יותר וממוקדים יותר.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="https://wa.me/yournumber" target="_blank" className="h-14 px-10 bg-white text-black font-black rounded-full flex items-center gap-3 hover:bg-blue-500 hover:text-white transition-all">
                בואי נתחיל תהליך
                <ArrowLeft className="w-5 h-5" />
              </a>
              <div className="flex -space-x-3 space-x-reverse items-center mr-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[8px]">Img</div>
                ))}
                <span className="mr-6 text-sm font-bold text-zinc-500">+400 לקוחות מרוצים</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 italic font-bold">
              [כאן תעלה תמונה של דביר]
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </div>
      </header>

      {/* Process Section */}
      <section className="py-32 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center italic uppercase">איך נראה <span className="text-blue-500">התהליך?</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "אבחון ודאטה", desc: "ניתוח פיזיולוגי מלא ובניית אסטרטגיה מותאמת אישית.", icon: <Target className="w-8 h-8" /> },
              { title: "ביצוע ודיוק", desc: "תוכנית אימונים ותזונה שמתעדכנת לפי ההתקדמות שלך.", icon: <Activity className="w-8 h-8" /> },
              { title: "ליווי צמוד", desc: "זמינות מלאה בוואטסאפ לכל שאלה, קושי או מוטיבציה.", icon: <Users className="w-8 h-8" /> }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-10 bg-black/40 border border-white/5 rounded-3xl hover:border-blue-500/50 transition-colors group text-right"
              >
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-right">
          <h2 className="text-5xl font-black italic mb-16 uppercase">תוצאות <span className="text-blue-500">בשטח</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item} 
                whileHover={{ y: -10 }}
                className="space-y-6"
              >
                <div className="aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 relative group shadow-xl">
                   <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-xs italic uppercase font-black">
                      [תמונת לפני/אחרי לקוח {item}]
                   </div>
                   <div className="absolute bottom-6 inset-x-6 flex justify-between z-10">
                      <span className="px-4 py-1 bg-black/80 backdrop-blur-md rounded-full text-xs font-bold border border-white/10">לפני</span>
                      <span className="px-4 py-1 bg-blue-500 rounded-full text-xs font-black italic shadow-lg shadow-blue-500/40">אחרי</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="px-2">
                  <div className="flex text-blue-400 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg font-bold leading-snug">"התהליך עם דביר שינה לי את התפיסה על מה אני מסוגלת לעשות עם הגוף שלי."</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Links */}
      <footer id="contact" className="py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black italic mb-16 uppercase tracking-tighter">הגיע הזמן <span className="text-blue-500">שלך.</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {[
              { label: "WhatsApp", icon: <MessageCircle />, color: "hover:bg-green-600", link: "#" },
              { label: "Instagram", icon: <Instagram />, color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600", link: "#" },
              { label: "YouTube", icon: <Youtube />, color: "hover:bg-red-600", link: "#" },
              { label: "TikTok", icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.77a6.738 6.738 0 01-10.74 5.39 6.74 6.74 0 012.31-11.41c.48-.12.98-.18 1.48-.19v4.1c-.42.02-.85.12-1.23.3-.96.44-1.5 1.54-1.28 2.57.22 1.02 1.18 1.75 2.22 1.73 1.15-.02 2.13-.93 2.17-2.08V0h.24z"/>
                </svg>
              ), color: "hover:bg-[#010101] hover:shadow-[0_0_15px_rgba(255,0,80,0.5),0_0_15px_rgba(0,242,234,0.5)]", link: "#" }
            ].map((soc, i) => (
              <a key={i} href={soc.link} target="_blank" className={`flex flex-col items-center p-8 bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-white/5 ${soc.color} transition-all duration-300 group`}>
                <div className="mb-4 group-hover:scale-110 transition-transform">{soc.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest">{soc.label}</span>
              </a>
            ))}
          </div>

          <div className="space-y-6">
             <div className="text-3xl font-black italic tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent inline-block">
               DVIR MOSKOVICH
             </div>
             <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]">
               ENGINEERED BY IDAN ROTS / 2026
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
}