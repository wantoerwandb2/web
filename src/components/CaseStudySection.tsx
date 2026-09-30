import React, { useState } from "react";
import { STEM_CASE_STUDY, CaseStudyDiscipline } from "../data/caseStudy";
import { AlertCircle, Dna, Activity, FlaskConical, Calculator, Trophy, BookOpenCheck, ArrowRight, ShieldCheck, HeartPulse } from "lucide-react";

export const CaseStudySection: React.FC = () => {
  const [activeSubjectTab, setActiveSubjectTab] = useState<string>("Biologi");

  const activeDiscipline =
    STEM_CASE_STUDY.disciplines.find((d) => d.subject === activeSubjectTab) ||
    STEM_CASE_STUDY.disciplines[0];

  const getDisciplineIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Dna":
        return <Dna className={className} />;
      case "Activity":
        return <Activity className={className} />;
      case "FlaskConical":
        return <FlaskConical className={className} />;
      case "Calculator":
        return <Calculator className={className} />;
      case "Trophy":
        return <Trophy className={className} />;
      case "BookOpenCheck":
      default:
        return <BookOpenCheck className={className} />;
    }
  };

  return (
    <section id="investigasi" className="py-16 md:py-24 border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Projek STEM Terintegrasi · Investigasi Nyata</span>
            <span aria-hidden="true">·</span>
            <span>Kolaborasi 6 Disiplin</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            {STEM_CASE_STUDY.title}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            {STEM_CASE_STUDY.subtitle}. Bagaimana integrasi Biologi, Fisika, Kimia, Matematika, PJOK, dan Bahasa Indonesia mengungkap diagnosis kritis yang sering salah ditangani?
          </p>
        </div>

        {/* Scenario & Clinical Intake Card */}
        <div className="bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Scenario Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-500">
                <HeartPulse className="w-4 h-4 text-rose-600" />
                <span>Kronologi Kejadian di Lapangan</span>
              </div>
              <p className="text-sm sm:text-base text-stone-800 leading-relaxed">
                {STEM_CASE_STUDY.scenario}
              </p>

              {/* Misconception Alert */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <span className="font-semibold block text-amber-950">Mitos Umum:</span>
                <p className="leading-relaxed">{STEM_CASE_STUDY.commonMisconception}</p>
              </div>

              {/* True Diagnosis */}
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
                <span className="font-semibold block text-emerald-900">Diagnosis Ilmiah Terverifikasi:</span>
                <p className="leading-relaxed font-semibold">{STEM_CASE_STUDY.actualDiagnosis}</p>
              </div>
            </div>

            {/* Patient Vitals & Profile Column */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-stone-200 space-y-4">
              <h4 className="font-semibold text-xs font-mono uppercase tracking-wider text-stone-500">
                Rekam Medis & Parameter Lapangan
              </h4>
              <div className="space-y-2.5 text-xs text-stone-700">
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Profil Pasien:</span>
                  <span className="font-semibold text-stone-900">{STEM_CASE_STUDY.patientProfile.age} Tahun, Pelajar Atlet</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Aktivitas Fisik:</span>
                  <span className="font-semibold text-stone-900">{STEM_CASE_STUDY.patientProfile.activity}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Kondisi Cuaca:</span>
                  <span className="font-semibold text-stone-900">{STEM_CASE_STUDY.patientProfile.temperature}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Asupan Cairan:</span>
                  <span className="font-semibold text-rose-700">{STEM_CASE_STUDY.patientProfile.intakeVolume}</span>
                </div>
                <div className="pt-2">
                  <span className="text-stone-500 block mb-1.5">Tanda & Gejala Klinis:</span>
                  <ul className="space-y-1">
                    {STEM_CASE_STUDY.patientProfile.symptoms.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-stone-800">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Disciplines Interactive Tabs */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              Analisis Terperinci Menurut 6 Disiplin Keilmuan
            </h3>
            <span className="text-xs text-stone-500 hidden sm:block">Pilih mata pelajaran untuk membedah:</span>
          </div>

          {/* Subject Pills */}
          <div className="flex flex-wrap gap-2">
            {STEM_CASE_STUDY.disciplines.map((d) => {
              const isSelected = d.subject === activeSubjectTab;
              return (
                <button
                  key={d.subject}
                  onClick={() => setActiveSubjectTab(d.subject)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer inline-flex items-center gap-2 ${
                    isSelected
                      ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                      : "bg-[#FAFAF8] text-stone-700 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  {getDisciplineIcon(d.iconName, "w-4 h-4")}
                  <span>{d.subject}</span>
                </button>
              );
            })}
          </div>

          {/* Active Discipline Deep-Dive Box */}
          <div className="bg-[#FAFAF8] p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-800 font-semibold">
                  Tinjauan Keilmuan: {activeDiscipline.subject} ({activeDiscipline.badge})
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {activeDiscipline.analysisTitle}
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Scientific Breakdown */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm sm:text-base text-stone-800 leading-relaxed">
                  {activeDiscipline.scientificBreakdown}
                </p>

                {/* Key Formula / Concept */}
                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block">
                    Konsep Fundamental / Formula Kunci:
                  </span>
                  <div className="font-mono text-xs sm:text-sm text-stone-900 font-medium">
                    {activeDiscipline.keyFormulaOrConcept}
                  </div>
                </div>
              </div>

              {/* Protocol Action Box */}
              <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-stone-200 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h5 className="font-semibold text-sm text-stone-900">
                    Protokol Tindakan Berbasis Disiplin {activeDiscipline.subject}
                  </h5>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeDiscipline.actionProtocol}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Conclusion */}
        <div className="mt-10 p-6 bg-stone-900 text-white rounded-2xl border border-stone-800 space-y-2">
          <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">
            Simpulan Integrasi STEM Holistik
          </span>
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-serif">
            "{STEM_CASE_STUDY.conclusionSummary}"
          </p>
        </div>
      </div>
    </section>
  );
};
