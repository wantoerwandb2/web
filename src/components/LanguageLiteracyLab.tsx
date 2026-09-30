import React, { useState } from "react";
import { BookOpenCheck, AlertOctagon, CheckCircle2, Search, ArrowRight, ShieldCheck } from "lucide-react";

interface HoaxCase {
  id: string;
  claimTitle: string;
  viralQuote: string;
  fallacyType: string;
  linguisticAnalysis: string;
  scientificRebuttal: string;
  correctScientificVersion: string;
  stemSubjectInvolved: string;
}

const HOAX_DATABASE: HoaxCase[] = [
  {
    id: "alkali-water",
    claimTitle: "Mitos Air Alkali pH 9+ Menyembuhkan Kanker & 'Membasmi Asam Tubuh'",
    viralQuote: "'Minum air alkali setiap hari mengubah darah menjadi basa sehingga sel kanker mati kelaparan, karena penyakit tidak bisa hidup di lingkungan alkali!'",
    fallacyType: "Appeal to Nature + Ignoratio Elenchi (Kesesatan Relevansi)",
    linguisticAnalysis:
      "Menggunakan diksi bombastis absolut ('mati kelaparan', 'tidak bisa hidup'). Terjadi oversimplifikasi konsep kimia 'pH' dengan mengabaikan anatomi fisiologis bahwa darah manusia memiliki sistem dapar bikarbonat mandiri.",
    scientificRebuttal:
      "Secara kimia dan biologi, lambung manusia memiliki asam klorida (HCl) berkadar pH 1.5 - 2.0. Begitu air alkali masuk ke lambung, ion hidroksida (OH⁻) seketika dinetralkan oleh HCl menjadi air biasa dan garam mineral. pH darah tidak pernah dapat diubah oleh air minum tanpa merusak homeostasis dan memicu kematian akibat alkalosis metabolik.",
    correctScientificVersion:
      "'Air minum terhidrasi baik untuk fungsi fisiologis, namun klaim bahwa air alkali mampu mengubah pH darah secara sistemik atau membunuh sel kanker bertentangan dengan mekanisme sistem dapar bikarbonat tubuh dan asam lambung normal.'",
    stemSubjectInvolved: "Kimia (Titrasi Asam Basa) & Biologi (Homeostasis Darah)",
  },
  {
    id: "detox-tea",
    claimTitle: "Mitos Teh 'Detox' Peluntur 10 kg Racun Usus dalam 3 Hari",
    viralQuote: "'Kuras tuntas kotoran dan racun kimia bertahun-tahun di dinding ususmu dengan ramuan 100% alami tanpa zat kimia buatan!'",
    fallacyType: "Naturalistic Fallacy (Semua yang 'alami' suci & bebas bahaya) + Scare Tactics",
    linguisticAnalysis:
      "Eksploitasi kata 'racun' dan 'alami' tanpa definisi biokimiawi spesifik. Memakai kata kerja hiperbolis ('kuras tuntas', 'melibas') untuk menciptakan ketakutan (fear-mongering) pada konsumen yang awam anatomi usus.",
    scientificRebuttal:
      "Secara biologi, organ hepar (hati) dan ginjal adalah mesin detoksifikasi alamiah tercanggih manusia yang bekerja 24 jam sehari membuang metabolit lewat empedu dan urine. Produk 'teh detoks' umumnya hanya mengandung pencahar kuat (laksatif seperti senna) yang memaksa usus besar membuang air dan elektrolit secara drastis, menimbulkan dehidrasi dan kram perut semu.",
    correctScientificVersion:
      "'Tubuh manusia memiliki organ hepar dan ginjal yang secara fisiologis terus-menerus mendetoksifikasi sisa metabolisme. Penggunaan laksatif berlebih dapat mengganggu keseimbangan mikrobioma dan memicu hipokalemia.'",
    stemSubjectInvolved: "Biologi (Sistem Ekskresi & Mikrobioma) & PJOK (Manajemen Nutrisi)",
  },
  {
    id: "mrna-dna",
    claimTitle: "Mitos Vaksin mRNA Memodifikasi Kode DNA Manusia Selamanya",
    viralQuote: "'Suntikan vaksin mRNA adalah rekayasa genetik terselubung yang akan mengubah untaian DNA inti sel manusia secara permanen!'",
    fallacyType: "Slippery Slope (Lereng Licin) + False Analogy",
    linguisticAnalysis:
      "Mengaburkan batasan terminologi antara 'mRNA' dan 'DNA' demi memicu kecemasan eksistensial. Mengaitkan kata 'rekayasa genetik' secara peyoratif tanpa dasar sitologi seluler.",
    scientificRebuttal:
      "Berdasarkan Dogma Sentral Biologi Molekuler, aliran informasi genetik normal adalah DNA → transkripsi → mRNA → translasi → Protein. Molekul mRNA dari vaksin hanya berada di sitoplasma sel dan bertindak sebagai instruksi cetak biru sementara untuk memproduksi protein spike. Molekul mRNA tidak pernah masuk ke dalam membran inti sel (nukleus) tempat DNA berada, dan secara alami hancur oleh enzim ribonuklease seluler dalam hitungan hari.",
    correctScientificVersion:
      "'Vaksin mRNA bekerja di sitoplasma sel untuk memicu respons imun adaptif tanpa pernah memasuki inti sel tempat genom manusia tersimpan, lalu terurai secara enzimatik setelah sintesis antigen selesai.'",
    stemSubjectInvolved: "Biologi Seluler (Dogma Sentral) & Kimia Polimer Organik",
  },
  {
    id: "himalayan-salt",
    claimTitle: "Mitos Garam Himalaya Alami 'Bebas Bahaya Natrium' untuk Hipertensi",
    viralQuote: "'Ganti garam dapurmu dengan garam kristal merah muda ini karena murni dari alam tanpa natrium sehingga aman dimakan sebanyak apa pun bagi penderita darah tinggi!'",
    fallacyType: "Cherry-Picking Data + False Authority",
    linguisticAnalysis:
      "Mengglorifikasi warna merah muda dan asal geografis ('pegunungan kuno') untuk mengelabui pembaca. Menghilangkan fakta kuantitatif bahwa secara komposisi stoikiometri, garam tetaplah senyawa NaCl.",
    scientificRebuttal:
      "Secara kimia analitik, kristal garam Himalaya tersusun dari 96% hingga 98% Natrium Klorida (NaCl). Kandungan mineral kelumit seperti zat besi yang memberi warna merah muda hanya berjumlah kurang dari 2%. Mengonsumsi garam Himalaya secara berlebihan tetap memasukkan ion Na⁺ dalam jumlah masif ke dalam plasma darah, memicu retensi air dan peningkatan tekanan hidrostatik arteri (hipertensi) persis sama dengan garam dapur biasa.",
    correctScientificVersion:
      "'Garam kristal Himalaya tetap didominasi oleh natrium klorida (≥96%). Oleh karena itu, penderita hipertensi tetap wajib membatasi asupannya maksimal 1 sendok teh (5 gram) per hari sesuai rekomendasi Kementerian Kesehatan RI.'",
    stemSubjectInvolved: "Kimia Stoikiometri & Fisika Tekanan Arteri (Poiseuille)",
  },
];

export const LanguageLiteracyLab: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("alkali-water");
  const activeCase = HOAX_DATABASE.find((c) => c.id === selectedCaseId) || HOAX_DATABASE[0];

  return (
    <section id="bahasa-lab" className="py-16 md:py-24 border-t border-stone-200 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Laboratorium Bahasa Indonesia & Literasi Sains</span>
            <span aria-hidden="true">·</span>
            <span>Dekonstruksi Pseudosains</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Pembedah Hoaks Medis: Menguliti Manipulasi Bahasa dengan Bukti STEM
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Bahasa adalah benteng pertama pertahanan kesehatan masyarakat. Hoaks medis memanfaatkan kecemasan emosional dan jargon palsu untuk menipu publik. Di sini kita membedah retorika linguistik dan merekonstruksinya menjadi teks eksplanasi ilmiah baku.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {HOAX_DATABASE.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-800 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                <span className={`text-[11px] font-mono block mb-1 ${isSelected ? "text-teal-300" : "text-stone-500"}`}>
                  Kasus Kajian #{item.id}
                </span>
                <h4 className="font-semibold text-xs sm:text-sm line-clamp-2 leading-tight">
                  {item.claimTitle}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Analysis Board */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          {/* Viral Quote Banner */}
          <div className="p-6 sm:p-8 bg-rose-50/60 border-b border-rose-100">
            <div className="flex items-start gap-3">
              <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-800 font-semibold">
                  Klaim Viral / Bahasa Menyesatkan di Media Sosial:
                </span>
                <p className="text-sm sm:text-base font-serif italic text-stone-900 leading-relaxed">
                  {activeCase.viralQuote}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-rose-800">
                  <span className="font-semibold">Tipe Falasi Logika:</span>
                  <span>{activeCase.fallacyType}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* 2-Column Dissection: Bahasa vs STEM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Bahasa Indonesia Analysis */}
              <div className="bg-[#FAFAF8] p-5 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-teal-100 text-teal-900">
                    <BookOpenCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-stone-900">
                    1. Dekonstruksi Retorika & Bahasa Indonesia
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeCase.linguisticAnalysis}
                </p>
                <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200">
                  Kaidah Kebahasaan: Mengidentifikasi kalimat hiperbolis, logical fallacy, dan ketiadaan verifikasi data kuantitatif.
                </div>
              </div>

              {/* Right: STEM Scientific Rebuttal */}
              <div className="bg-[#FAFAF8] p-5 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-100 text-sky-900">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-sm text-stone-900">
                    2. Bantahan Ilmiah Berbasis Bukti STEM
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeCase.scientificRebuttal}
                </p>
                <div className="text-[11px] text-sky-800 font-mono pt-2 border-t border-stone-200">
                  Disiplin Terlibat: {activeCase.stemSubjectInvolved}
                </div>
              </div>
            </div>

            {/* Bottom: Reconstructed Scientific Text */}
            <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Rekonstruksi Bahasa Baku (Teks Eksplanasi Ilmiah yang Benar & Edukatif):</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans pl-6">
                "{activeCase.correctScientificVersion}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
