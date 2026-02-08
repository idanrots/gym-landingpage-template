import type { Metadata } from "next";
import { Varela_Round, Rubik } from "next/font/google";
import "./globals.css";

// החזרתי את הפונט המקורי כדי שהעיצוב לא יישבר
const varela = Varela_Round({
  subsets: ["hebrew", "latin"],
  weight: "400",
  variable: "--font-varela",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
});

// כאן נשארים הפרטים החדשים והנכונים לוואטסאפ
export const metadata: Metadata = {
  title: "דביר מוסקוביץ | מאמן כושר וליווי אישי",
  description: "הצטרפו לנבחרת של דביר. ליווי אישי לתזונה ואימונים, ירידה במשקל, חיטוב ובניית מסת שריר. הגרסה הכי טובה שלך מתחילה כאן.",
  openGraph: {
    title: "דביר מוסקוביץ | מאמן כושר וליווי אישי",
    description: "מוכן לגרסה הכי טובה שלך? תוכנית אימונים ותזונה מותאמת אישית.",
    siteName: "Dvir Moskowitz Fitness",
    images: [
      {
        url: "/dvir.jpeg",
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
      {/* החזרתי את ה-Class המקורי כדי שהפונטים יחזרו לעבוד */}
      <body className={`${varela.variable} ${rubik.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}