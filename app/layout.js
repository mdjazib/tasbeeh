import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter_18pt-Regular.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const lancelot = localFont({
  src: "./fonts/Lancelot-Regular.ttf",
  variable: "--font-lancelot",
  weight: "100 900",
});
const spartan = localFont({
  src: "./fonts/LeagueSpartan-Regular.ttf",
  variable: "--font-spartan",
  weight: "100 900",
});

export const metadata = {
  title: "Tasbeeh Pearl – Count Your Blessings",
  description: "A simple and beautiful Tasbeeh app to help you keep track of your daily Zikr with ease and focus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lancelot.variable} ${spartan.variable}`}>
        {children}
      </body>
    </html>
  );
}
