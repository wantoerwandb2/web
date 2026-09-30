import React from "react";
import { ArrowUp, BookOpen, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 py-14 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              BioKarsa STEM Medika
            </span>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Inisiatif kurikulum interdisipliner yang menyatukan Biologi Seluler, Dinamika Fisika, Kesetimbangan Kimia, Pemodelan Matematika, Adaptasi PJOK, dan Literasi Bahasa Indonesia demi kesehatan holistik manusia.
            </p>
            <div className="text-xs text-stone-500 pt-1">
              Dirancang untuk pelajar, pendidik, dan peminat sains kesehatan di seluruh Indonesia.
            </div>
          </div>

          {/* Core Pillars */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-semibold text-stone-200 uppercase tracking-wider font-mono">
              Integrasi Kurikulum
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>Biologi: Homeostasis & Imunologi</li>
              <li>Fisika: Hemodinamika Poiseuille</li>
              <li>Kimia: Dapar Darah Bikarbonat</li>
              <li>Matematika: Kalkulus BMR & Karvonen</li>
              <li>PJOK: VO₂ Max & Ritme Sirkadian</li>
              <li>Bahasa Indonesia: Literasi Bebas Hoaks</li>
            </ul>
          </div>

          {/* Quick Nav & Back to Top */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-semibold text-stone-200 text-xs uppercase tracking-wider font-mono">
              Eksplorasi Langsung
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <a href="#kurikulum" className="text-stone-400 hover:text-white transition-colors">6 Disiplin</a>
              <span className="text-stone-700">·</span>
              <a href="#simulasi" className="text-stone-400 hover:text-white transition-colors">Lab Virtual</a>
              <span className="text-stone-700">·</span>
              <a href="#kalkulator" className="text-stone-400 hover:text-white transition-colors">Kalkulator Biometrik</a>
              <span className="text-stone-700">·</span>
              <a href="#bahasa-lab" className="text-stone-400 hover:text-white transition-colors">Pembedah Hoaks</a>
              <span className="text-stone-700">·</span>
              <a href="#investigasi" className="text-stone-400 hover:text-white transition-colors">Studi Kasus EAH</a>
              <span className="text-stone-700">·</span>
              <a href="#kuis" className="text-stone-400 hover:text-white transition-colors">Kuis Evaluasi</a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors border border-stone-800 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} BioKarsa STEM Medika. Pembelajaran Terbuka Sains Terpadu.</p>
          <div className="flex items-center gap-2">
            <span>Berbasis Standar Fisiologi & Pedoman EYD / KBBI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
