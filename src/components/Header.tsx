import React, { useState } from "react";
import { Menu, X, BookOpen, Sparkles } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "kurikulum", label: "6 Disiplin STEM" },
    { id: "simulasi", label: "Simulasi Interaktif" },
    { id: "kalkulator", label: "Kalkulator Matematis" },
    { id: "bahasa-lab", label: "Lab Literasi Hoaks" },
    { id: "investigasi", label: "Studi Kasus" },
    { id: "kuis", label: "Uji Pemahaman" },
    { id: "glosarium", label: "Glosarium" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => handleLinkClick("hero")}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-display text-xl font-bold tracking-tight text-stone-900 group-hover:text-teal-900 transition-colors">
            BioKarsa STEM
          </span>
        </button>

        {/* Zone 2: Clean 4-6 text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`whitespace-nowrap transition-colors hover:text-stone-950 focus:outline-none cursor-pointer ${
                activeSection === link.id
                  ? "text-teal-900 font-semibold border-b-2 border-teal-800 pb-0.5"
                  : "text-stone-600 hover:border-b-2 hover:border-stone-400 pb-0.5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleLinkClick("simulasi")}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer shadow-xs"
          >
            <span>Buka Lab Virtual</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-950 focus:outline-none cursor-pointer rounded-lg hover:bg-stone-100"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FAFAF8] px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeSection === link.id
                  ? "bg-teal-50 text-teal-950 font-semibold"
                  : "text-stone-700 hover:bg-stone-100"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick("simulasi")}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors"
            >
              Buka Lab Virtual
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
