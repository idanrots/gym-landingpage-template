import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";

// הגדרת פונט ראשי - Heebo (חזק, ספורטיבי, מודרני)
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});

// הגדרת פונט משני לקריאה
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "דביר מוסקוביץ | מאמן כושר וליווי אישי",
  description: "הצטרפו לנבחרת של דביר. ליווי אישי לתזונה ואימונים, ירידה במשקל, חיטוב ובניית מסת שריר. הגרסה הכי טובה שלך מתחילה כאן.",
  openGraph: {
    title: "דביר מוסקוביץ | מאמן כושר וליווי אישי",
    description: "מוכן לגרסה הכי טובה שלך? תוכנית אימונים ותזונה מותאמת אישית.",
    siteName: "Dvir Moskowitz Fitness",
    images: [
      {
        url: "/dvir.jpeg", // התמונה שתופיע בוואטסאפ
        width: 1200,
        height: 630,
        alt: "דביר מוסקוביץ - מאמן כושר",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${rubik.variable} antialiased font-sans bg-[#050507] text-white`}>
        {children}
      </body>
    </html>
  );
}