"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Instagram, 
  MessageCircle, 
  Trophy,
  Smartphone,
  Dumbbell,
  ClipboardList,
  Quote
} from "lucide-react";

// אייקון טיקטוק מקורי ומדויק
const TikTokIcon = ({ size = 28, color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

export default function DvirMoskovichNewPage() {
  
  // הגדרת הקישורים
  const whatsappLink = "https://wa.me/972525282795";
  const instagramLink = "https://www.instagram.com/dvir_moskowitz8?igsh=ZHEwcHNlZGJrOWlj&utm_source=qr";
  const tiktokLink = "https://www.tiktok.com/@dvir_moskowitz?_r=1&_t=ZS-93daRjEZkpR";

  // נתונים לסקשן המהפכים
  const transformations = [
    {
      id: 1,
      name: "עמית ר.",
      achievement: "ירידה של 18 ק״ג",
      text: "חשבתי שניסיתי הכל, אבל השיטה של דביר הוכיחה לי שאפשר אחרת. האנרגיות שלי בשמיים.",
      imgBefore: "/before2.jpeg", 
      imgAfter: "/after2.jpeg"   
    },
    {
      id: 2,
      name: "דניאל ק.",
      achievement: "חיטוב ועליה במסה",
      text: "לא רק הגוף השתנה, אלא כל הביטחון העצמי שלי. דביר לא מוותר לך, וזה בדיוק מה שהייתי צריך.",
      imgBefore: "/before1.png",
      imgAfter: "/after1.jpeg"
    },
    {
      id: 3,
      name: "רועי מ.",
      achievement: "הכנה לתחרות",
      text: "מקצוענות ברמה הכי גבוהה שיש. הדיוק בתזונה ובאימונים הביא אותי לשיא של החיים שלי.",
      imgBefore: "/api/placeholder/300/400",
      imgAfter: "/api/placeholder/300/400"
    }
  ];

  // רשימת האייקונים - רקע שחור מלא
  const socialLinks = [
    { 
      icon: <MessageCircle size={28} />, 
      link: whatsappLink,
      styles: "border-green-500 text-green-500 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.6)]"
    },
    { 
      icon: <TikTokIcon size={24} />, 
      link: tiktokLink, 
      styles: "border-cyan-400 text-cyan-400 shadow-[0_0_20px_-5px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]"
    },
    { 
      icon: <Instagram size={28} />, 
      link: instagramLink,
      styles: "border-pink-500 text-pink-500 shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.6)]"
    }
  ];

  // הגדרת השירותים (הקוביות)
  const services = [
    { 
      title: "ליווי אונליין", 
      icon: <Smartphone />, 
      desc: "מעטפת ליווי מלאה 24/7 לכל מטרה. כולל בניית תוכנית אימונים, תפריט תזונה מותאם אישית ומעקב שקילות שבועי. זמינות מלאה בוואטסאפ לתיקון טכניקה ודיוקים בזמן אמת." 
    },
    { 
      title: "אימונים אישיים", 
      icon: <Dumbbell />, 
      desc: "אימון 1 על 1 בסטודיו פרטי ומאובזר ברמה הגבוהה ביותר. יחס אישי, דגש על ביצוע מושלם, ודחיפה לקצה היכולת באווירה מחשמלת שאי אפשר למצוא בחדר כושר רגיל." 
    },
    { 
      title: "תפריט / תוכנית אימונים", 
      icon: <ClipboardList />, 
      desc: "פתרון מושלם למי שרוצה לרוץ עצמאית. בניית תוכנית עבודה מדויקת ומסודרת, תפריט גמיש והנחיות ברורות שיעשו לך סדר בראש ויובילו אותך לתוצאות." 
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#050507] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden scroll-smooth">
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden p-0.5 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
                     <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex items-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95">
                    <span>בוא נתחיל</span>
                    <ArrowLeft size={16} />
                </a>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-bold tracking-wider uppercase text-[11px]">דביר מוסקוביץ</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[75px] font-black mb-6 leading-[1.1] tracking-tight">
              הגרסה הכי חזקה <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-slate-300 to-slate-500">שאי פעם הייתה לך</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 font-light leading-relaxed">
              זה לא רק המשקל על המוט, זה הביטחון מול המראה. בוא נשבור את הגבולות המנטליים שלך ונבנה גוף שאי אפשר להתעלם ממנו.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden px-8 py-4 bg-white text-black rounded-xl font-bold transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-[1.02] flex items-center justify-center gap-3">
                <span>בוא נתחיל לעבוד</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a href="#results" className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-medium text-slate-300 hover:text-white flex items-center justify-center">
                צפה בתוצאות
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[90%] rounded-[2rem] bg-gradient-to-b from-[#1a1a20] to-[#0a0a0c] overflow-hidden border border-white/10 shadow-2xl group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.15),transparent_70%)] z-10 pointer-events-none" />
               <img src="/dvir.jpeg" alt="דביר מוסקוביץ" className="absolute inset-0 w-full h-full object-cover z-0" />
               <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 z-20">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <Trophy size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white">מקצוענות מוכחת</p>
                    </div>
               </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-10 md:p-14 text-center backdrop-blur-md relative overflow-hidden">
            {/* אלמנט דקורטיבי זוהר */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">נעים להכיר, <span className="text-cyan-400">דביר.</span></h2>
            
            <p className="text-slate-300 text-lg md:text-xl leading-loose font-light">
              אני חי את עולם הברזל כבר למעלה מעשור, עם ניסיון עשיר בליווי מתאמנים ורזומה תחרותי בעולם פיתוח הגוף.
              הדרך שעברתי לימדה אותי שאין קיצורי דרך – רק דיוק, התמדה ומדע.
              אני כאן כדי להעביר את הידע הזה אליכם, ולבנות יחד את הגרסה הכי חזקה ואסתטית שלכם.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">השיטה שלי</h2>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-200">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">תוצאות מדברות</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">בלי תירוצים, בלי קיצורי דרך. רק עבודה קשה ותוצאות שנשארות.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((item) => (
                <motion.div key={item.id} whileHover={{ y: -5 }} className="bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
                    <div className="flex h-64 relative">
                        <div className="w-1/2 relative border-l border-white/10 bg-slate-800">
                            <img src={item.imgBefore} alt="לפני" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-300 border border-white/10">לפני</div>
                        </div>
                        <div className="w-1/2 relative bg-slate-700">
                            <img src={item.imgAfter} alt="אחרי" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute top-3 left-3 bg-cyan-500/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]">אחרי</div>
                        </div>
                    </div>
                    <div className="p-8 text-right">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white">{item.name}</h3>
                            <span className="text-cyan-400 text-sm font-bold bg-cyan-950/30 px-3 py-1 rounded-lg border border-cyan-500/20">{item.achievement}</span>
                        </div>
                        <div className="relative">
                            <Quote size={20} className="text-slate-700 absolute -top-1 -right-2 transform scale-x-[-1]" />
                            <p className="text-slate-400 text-sm leading-relaxed pr-6">{item.text}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-40 pb-20 px-6 text-center relative z-10 border-t border-white/5 bg-[#030304] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-16 tracking-tight leading-tight">מוכן לגרסה <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-pulse-slow">הכי טובה שלך?</span></h2>
          <div className="flex justify-center gap-6 mb-24">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className={`w-20 h-20 flex items-center justify-center bg-black rounded-[24px] border border-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${social.styles}`}>
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-12 mt-16">
            <motion.div whileHover={{ scale: 1.05 }} className="relative z-10 cursor-default select-none">
                <h3 className="text-4xl md:text-[75px] font-black tracking-tightest uppercase leading-none text-center">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-500 filter drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">DVIR</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-300 to-white filter drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">MOSKOWITZ</span>
                </h3>
            </motion.div>
            
            {/* Updated Footer Credit Section */}
            <div className="flex flex-col gap-5 mt-10">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto opacity-50"></div>
              <p className="text-slate-500 font-bold text-[11px] tracking-[0.25em] uppercase">
                BUILT BY IDAN ROTSHTEIN • {' '}
                <a href="https://www.instagram.com/idanrots" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  @idanrots
                </a> • 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}