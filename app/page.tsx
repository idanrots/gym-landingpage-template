import React from 'react';
import { ArrowLeft, Star, Heart, CheckCircle, Instagram, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen font-sans bg-dot-pattern">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#ebdacc]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-3xl font-black tracking-wide text-[#c47f5b]">LINIX</div>
          
          <div className="hidden md:flex gap-8 text-lg font-medium text-[#6d5a4b]">
            <a href="#services" className="hover:text-[#c47f5b] transition-colors">שירותים</a>
            <a href="#about" className="hover:text-[#c47f5b] transition-colors">עליי</a>
            <a href="#contact" className="hover:text-[#c47f5b] transition-colors">צור קשר</a>
          </div>
          
          <button className="bg-[#c47f5b] text-white hover:bg-[#a86545] transition-colors font-medium rounded-full px-6 py-2.5 shadow-md">
            שיחת היכרות
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4efe9] text-[#c47f5b] text-sm font-bold mb-8 animate-fade-in border border-[#ebdacc]">
          <Heart className="w-4 h-4 fill-current" />
          <span>ליווי רגשי לנשים</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-[#4a3b32] leading-tight mb-8 animate-fade-in delay-100">
          למצוא את השקט<br />
          <span className="text-[#c47f5b]">הפנימי שלך</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#8c7365] max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in delay-200">
          תהליך עומק שנועד לחבר אותך מחדש לעצמך, לשחרר חסמים ולהכניס איזון ורוגע לחיים.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in delay-300">
          {/* כפתור ראשי - עכשיו מוביל לוואטסאפ */}
          <a 
            href="https://wa.me/message/VHAR35OZ5HKYJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 text-lg rounded-full bg-[#c47f5b] text-white hover:bg-[#a86545] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center font-bold"
          >
            אני רוצה להתחיל
            <ArrowLeft className="mr-2 h-5 w-5" />
          </a>

          {/* כפתור משני - גלילה למטה */}
          <a 
            href="#about"
            className="h-14 px-10 text-lg rounded-full text-[#6d5a4b] bg-white border border-[#ebdacc] hover:bg-[#f4efe9] transition-all flex items-center justify-center font-medium"
          >
            קראי עוד על השיטה
          </a>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#f4efe9]/60">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#4a3b32]">איך נוכל להתקדם יחד?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#ebdacc] hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#fdfbf7] rounded-2xl flex items-center justify-center text-[#c47f5b] mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3b32]">פגישות אישיות</h3>
              <p className="text-[#8c7365] leading-relaxed">
                מרחב בטוח ומכיל לעבודה עמוקה על דפוסים, רגשות ומטרות אישיות בקצב שלך.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#ebdacc] hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#fdfbf7] rounded-2xl flex items-center justify-center text-[#c47f5b] mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3b32]">ליווי ממוקד</h3>
              <p className="text-[#8c7365] leading-relaxed">
                תהליך קצר ומדויק לפתרון דילמה ספציפית או קבלת החלטה משמעותית בחיים.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#ebdacc] hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-[#fdfbf7] rounded-2xl flex items-center justify-center text-[#c47f5b] mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4a3b32]">סדנאות העצמה</h3>
              <p className="text-[#8c7365] leading-relaxed">
                מפגשים קבוצתיים אינטימיים לנשים שרוצות לצמוח יחד ולקבל כלים לחיים.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-4xl font-bold mb-6 text-[#4a3b32]">נעים להכיר, אני לינוי</h2>
            <p className="text-[#6d5a4b] text-lg leading-relaxed mb-6">
              הגעתי לעולם האימון מתוך אמונה שלכל אישה מגיע לחיות בשלמות ובשלווה עם עצמה.
              אחרי שנים של למידה וניסיון, פיתחתי גישה המשלבת כלים מעולם הטיפול והאימון כדי ליצור שינוי אמיתי ויציב.
            </p>
            <div className="flex flex-col gap-3">
               <div className="flex items-center justify-center md:justify-start gap-3 text-[#4a3b32] font-medium bg-[#f4efe9] p-3 rounded-xl w-fit">
                  <CheckCircle className="w-5 h-5 text-[#c47f5b]" />
                  <span>מוסמכת מכון אדלר</span>
               </div>
               <div className="flex items-center justify-center md:justify-start gap-3 text-[#4a3b32] font-medium bg-[#f4efe9] p-3 rounded-xl w-fit">
                  <CheckCircle className="w-5 h-5 text-[#c47f5b]" />
                  <span>התמחות באימון רגשי</span>
               </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-[4/5] rounded-[2rem] bg-[#ebdacc] w-full max-w-sm mx-auto relative overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500">
               <div className="flex flex-col items-center justify-center h-full text-[#8c7365]">
                 <span className="text-5xl mb-4">📷</span>
                 <span className="font-medium">כאן תהיה התמונה שלך</span>
               </div>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
      <footer id="contact" className="py-12 bg-white border-t border-[#ebdacc]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-right">
            <div className="text-2xl font-black text-[#c47f5b] mb-1">LINIX</div>
            <p className="text-[#8c7365] text-sm">© כל הזכויות שמורות 2026</p>
          </div>
          
          <div className="flex gap-4">
            {/* כפתור אינסטגרם */}
            <a 
              href="https://www.instagram.com/linoy.shalom?igsh=Z3kwZHkxNjdubm5j&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#f4efe9] text-[#6d5a4b] hover:bg-[#c47f5b] hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>

            {/* כפתור וואטסאפ - עם לוגו רשמי */}
            <a 
              href="https://wa.me/message/VHAR35OZ5HKYJ1" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#f4efe9] text-[#6d5a4b] hover:bg-[#25D366] hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              {/* זה הציור של לוגו וואטסאפ */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}