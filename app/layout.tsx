import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PlanProvider } from "./context/PlanContext";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AthletIQ - AI-Powered Sports Training",
  description: "AI-powered workout plans tailored to your sport, goals, and schedule. Level up your game in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          {/* Glow effects */}
          <div style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -200,
            left: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          
          <PlanProvider>
            <Navbar />
            <div style={{ position: 'relative', zIndex: 10 }}>
              {children}
            </div>
          </PlanProvider>
        </div>
      </body>
    </html>
  );
}
