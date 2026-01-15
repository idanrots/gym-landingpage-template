import type { Metadata } from "next";
import { Varela_Round, Rubik } from "next/font/google";
import "./globals.css";

// הגדרת הפונט העגול (כמו בלוגו)
const varela = Varela_Round({
  subsets: ["hebrew", "latin"],
  weight: "400",
  variable: "--font-varela",
});

// הגדרת פונט נוסף לקריאה (אופציונלי)
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "LINIX - ליווי רגשי לנשים",
  description: "למצוא את השקט הפנימי שלך",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${varela.variable} ${rubik.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}