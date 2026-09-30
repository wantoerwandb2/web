/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SubjectGrid } from "./components/SubjectGrid";
import { InteractiveSimulators } from "./components/InteractiveSimulators";
import { HealthMathCalculator } from "./components/HealthMathCalculator";
import { LanguageLiteracyLab } from "./components/LanguageLiteracyLab";
import { CaseStudySection } from "./components/CaseStudySection";
import { QuizSection } from "./components/QuizSection";
import { GlossarySection } from "./components/GlossarySection";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "kurikulum",
        "simulasi",
        "kalkulator",
        "bahasa-lab",
        "investigasi",
        "kuis",
        "glosarium",
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1E293B]">
      {/* 3-Zone Sticky Navigation Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onExploreClick={() => scrollToSection("kurikulum")}
          onSimulationClick={() => scrollToSection("simulasi")}
        />

        {/* Section 2: 6 Disiplin STEM Kesehatan */}
        <SubjectGrid />

        {/* Section 3: Laboratorium Simulasi Interaktif (Fisika & Kimia) */}
        <InteractiveSimulators />

        {/* Section 4: Kalkulator Matematis Kebugaran (Matematika & PJOK) */}
        <HealthMathCalculator />

        {/* Section 5: Lab Bahasa Indonesia & Literasi Pembedah Hoaks */}
        <LanguageLiteracyLab />

        {/* Section 6: Investigasi Projek STEM Kasus Nyata Terintegrasi */}
        <CaseStudySection />

        {/* Section 7: Kuis Evaluasi Pemahaman Multidisiplin */}
        <QuizSection />

        {/* Section 8: Glosarium Istilah Medis & Fisiologi Baku */}
        <GlossarySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
