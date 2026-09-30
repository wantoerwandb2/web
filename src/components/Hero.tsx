import React from "react";
import { ArrowDown, Sparkles, Layers, Activity, BookOpenCheck } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onSimulationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSimulationClick }) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-5">
          <span>Projek Pembelajaran STEM Terpadu</span>
          <span aria-hidden="true">·</span>
          <span>Integrasi 6 Disiplin Keilmuan</span>
          <span aria-hidden="true">·</span>
          <span>Fisiologi Kesehatan Holistik</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and Thesis */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12] [text-wrap:balance]">
              Menyingkap Rahasia Tubuh Manusia Melalui Sudut Pandang STEM & Humaniora
            </h1>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl">
              Kesehatan bukan sekadar ketiadaan penyakit, melainkan harmoni biokimiawi, hukum dinamika fluida, kalkulasi aljabar metabolisme, adaptasi fisik terukur, serta kecakapan berbahasa dalam mengurai informasi ilmiah.
            </p>

            {/* Micro pillar highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-stone-200">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-teal-800">Biologi & Kimia</span>
                <p className="text-xs text-stone-600">Homeostasis seluler, keseimbangan pH dapar, dan siklus energi ATP.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-sky-800">Fisika & Matematika</span>
                <p className="text-xs text-stone-600">Tekanan darah Poiseuille, torsi ergonomis, dan formula BMR/Karvonen.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-rose-800">PJOK & Bhs Indonesia</span>
                <p className="text-xs text-stone-600">Kapasitas VO₂ Max, adaptasi tidur, dan dekonstruksi hoaks kesehatan.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 text-sm font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:scale-[0.98] transition-all cursor-pointer shadow-sm inline-flex items-center gap-2"
              >
                <span>Pelajari 6 Disiplin</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onSimulationClick}
                className="px-6 py-3 text-sm font-semibold text-stone-800 bg-stone-100 border border-stone-300 rounded-lg hover:bg-stone-200 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Activity className="w-4 h-4 text-teal-700" />
                <span>Uji Simulasi Aliran Darah & pH</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 group">
              <img
                src="/src/assets/images/hero_stem_holistic_health_1790729216889.jpg"
                alt="Proposisi visual STEM Kesehatan Holistik"
                className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                  Laboratorium Eksplorasi Terpadu
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold mt-1 text-white">
                  Keterkaitan Antardisiplin dalam Anatomi & Fisiologi
                </h3>
                <p className="text-xs text-stone-200 mt-1 line-clamp-2">
                  Membedah fenomena tubuh dari skala molekuler nanometer hingga gerakan makroskopis biomekanik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
