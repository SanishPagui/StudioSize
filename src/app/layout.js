import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: 'swap',
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: 'swap',
});

export const metadata = {
  title: "Studio Size - Design studio for timeless branding",
  description: "Design studio for timeless branding, strategy, packaging, motion, and naming",
  keywords: "design, branding, strategy, packaging, motion graphics, web design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
