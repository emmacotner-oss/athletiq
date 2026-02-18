import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PlanProvider } from "./context/PlanContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AthletIQ - AI-Powered Sports Training",
  description: "Get a personalized workout plan tailored to your sport, goals, and schedule — powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlanProvider>{children}</PlanProvider>
      </body>
    </html>
  );
}
