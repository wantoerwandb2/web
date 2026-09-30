import React, { useState } from "react";
import { STEM_GLOSSARY, GlossaryItem } from "../data/glossaryData";
import { Search, BookMarked, Filter } from "lucide-react";

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>("Semua");

  const subjects = ["Semua", "Biologi", "Fisika", "Kimia", "Matematika", "PJOK", "Bahasa Indonesia"];

  const filteredItems = STEM_GLOSSARY.filter((item) => {
    const matchesSubject =
      selectedSubjectFilter === "Semua" || item.subject === selectedSubjectFilter;
    const matchesSearch =
      item.termIndo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.termOriginal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <section id="glosarium" className="py-16 md:py-24 border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Peristilahan Baku STEM Kesehatan</span>
            <span aria-hidden="true">·</span>
            <span>Referensi KBBI & Sains</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Glosarium Terpadu Istilah Medis & Fisiologi
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Kumpulan istilah ilmiah standar bahasa Indonesia yang memayungi ranah Biologi, Fisika, Kimia, Matematika, Olahraga, dan Bahasa dengan rujukan etimologi serta signifikansi klinis.
          </p>
        </div>

        {/* Search & Subject Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Cari istilah, definisi, etimologi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#FAFAF8] border border-stone-300 rounded-lg pl-9 pr-4 py-2 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-teal-800"
            />
          </div>

          {/* Subject Filter Pills */}
          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubjectFilter(sub)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border cursor-pointer ${
                  selectedSubjectFilter === sub
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-[#FAFAF8] text-stone-600 border-stone-200 hover:bg-stone-100"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAFAF8] p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-base text-stone-900 leading-snug">
                    {item.termIndo}
                  </h3>
                  <span className="text-xs font-mono text-stone-500 italic block mt-0.5">
                    {item.termOriginal}
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-stone-200/80 text-stone-700 rounded shrink-0">
                  {item.subject}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {item.definition}
              </p>

              <div className="pt-2 border-t border-stone-200 text-xs text-stone-500 space-y-1">
                <div>
                  <strong className="text-stone-700">Etimologi & Konteks:</strong> {item.etymologyOrContext}
                </div>
                <div>
                  <strong className="text-teal-900">Signifikansi Klinis:</strong> {item.clinicalSignificance}
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-2 text-center py-12 text-stone-500 text-sm">
              Tidak ada istilah yang cocok dengan pencarian "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
