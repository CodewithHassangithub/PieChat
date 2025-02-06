import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider } from '@clerk/nextjs';
import Footer from "./components/home/Footer";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "PieChat - Next Generation Communication Platform",
  description: "Experience the future of communication with AI-enhanced features and quantum-secured messaging.",
  keywords: "chat, communication, AI, messaging, video calls, encryption",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0A0A0F",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="antialiased">
          <Navbar />
          {children}
          <div className="mt-12 sm:mt-16 md:mt-20">
          <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
