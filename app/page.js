"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import HeroSection from "./components/home/HeroSection";
import dynamic from "next/dynamic";
import LoadingSpinner from "./components/LoadingSpinner";
import {
  features,
  stats,
  testimonials,
  trustLogos,
} from "./constants/homeData";

// Lazy load non-critical components
const StatsSection = dynamic(() => import("./components/home/StatsSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const FeaturesSection = dynamic(
  () => import("./components/home/FeaturesSection"),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const TestimonialsSection = dynamic(
  () => import("./components/home/TestimonialsSection"),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

const CTASection = dynamic(() => import("./components/home/CTASection"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      // Throttle mouse move updates
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <div className="relative min-h-screen bg-[#0A0A0F] overflow-hidden">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent transform-gpu"
              style={{
                transform: `translate3d(${
                  (mousePosition.x - window.innerWidth / 2) * 0.02
                }px, ${
                  (mousePosition.y - window.innerHeight / 2) * 0.02
                }px, 0)`,
              }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          </div>

          {/* Main Content */}
          <main className="relative pt-16 sm:pt-20 md:pt-24">
            <Suspense fallback={<LoadingSpinner />}>
              {/* Hero Section */}
              <div className="px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
                <HeroSection
                  mousePosition={mousePosition}
                  trustLogos={trustLogos}
                />
              </div>

              {/* Other Sections */}
              <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32">
                <StatsSection stats={stats} />
              </div>

              <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32">
                <FeaturesSection features={features} />
              </div>

              <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32">
                <TestimonialsSection testimonials={testimonials} />
              </div>

              <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32">
                <CTASection />
              </div>
            </Suspense>
          </main>
        </div>
      )}
    </AnimatePresence>
  );
}
