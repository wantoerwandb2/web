import React, { useState } from "react";
import { STEM_SUBJECTS, StemSubject, SubTopic } from "../data/stemSubjects";
import { Dna, Activity, FlaskConical, Calculator, Trophy, BookOpenCheck, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export const SubjectGrid: React.FC = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("biologi");
  const [activeSubTopicIndex, setActiveSubTopicIndex] = useState<number>(0);

  const selectedSubject = STEM_SUBJECTS.find((s) => s.id === selectedSubjectId) || STEM_SUBJECTS[0];
  const activeSubTopic: SubTopic = selectedSubject.subTopics[activeSubTopicIndex] || selectedSubject.subTopics[0];

  const getSubjectIcon = (iconName: string, className: string) => {
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

  const handleSelectSubject = (id: string) => {
    setSelectedSubjectId(id);
    setActiveSubTopicIndex(0);
  };

  return (
    <section id="kurikulum" className="py-16 md:py-24 border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Kurikulum Projek STEM</span>
            <span aria-hidden="true">·</span>
            <span>6 Sudut Pandang Keilmuan</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Eksplorasi Mendalam 6 Disiplin Kesehatan Holistik
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Klik mata pelajaran di bawah untuk membedah bagaimana prinsip ilmiah, kalkulasi matematika, kebiasaan jasmani, dan kecermatan bahasa menyatu dalam menjaga kelangsungan hidup manusia.
          </p>
        </div>

        {/* 6 Subject Selector Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {STEM_SUBJECTS.map((subject) => {
            const isSelected = subject.id === selectedSubjectId;
            return (
              <button
                key={subject.id}
                onClick={() => handleSelectSubject(subject.id)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer focus:outline-none ${
                  isSelected
                    ? "bg-stone-900 text-white border-stone-900 shadow-md"
                    : "bg-[#FAFAF8] text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? "bg-white/10 text-white" : "bg-white text-stone-800 border border-stone-200"
                    }`}
                  >
                    {getSubjectIcon(subject.iconName, "w-5 h-5")}
                  </div>
                  {isSelected && <span className="text-xs font-mono text-teal-300">Aktif</span>}
                </div>
                <h3 className="font-semibold text-sm leading-tight">{subject.shortName}</h3>
                <p className={`text-xs mt-1 line-clamp-1 ${isSelected ? "text-stone-300" : "text-stone-500"}`}>
                  {subject.subTopics.length} Modul Inti
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Subject Detail Stage */}
        <div className="bg-[#FAFAF8] rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          {/* Subject Banner / Header */}
          <div className="p-6 sm:p-8 bg-stone-100/70 border-b border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-wider">
                  <span>Modul Pembelajaran</span>
                  <span aria-hidden="true">/</span>
                  <span className="font-semibold text-stone-800">{selectedSubject.name}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                  {selectedSubject.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed pt-1">
                  {selectedSubject.leadExplanation}
                </p>
                <div className="pt-2 flex items-start gap-2 text-xs text-stone-600 bg-white/70 p-3 rounded-lg border border-stone-200">
                  <span className="font-semibold text-stone-900 shrink-0">Pertanyaan Penyelidikan:</span>
                  <span className="italic">"{selectedSubject.coreQuestion}"</span>
                </div>
              </div>

              {/* Subject Image Thumbnail (if available) */}
              {selectedSubject.image && (
                <div className="lg:col-span-4">
                  <div className="rounded-xl overflow-hidden border border-stone-300 shadow-xs h-44 bg-stone-200">
                    <img
                      src={selectedSubject.image}
                      alt={selectedSubject.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Subtopics Tabs & Content Container */}
          <div className="p-6 sm:p-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-4">
              Pilih Topik Pembahasan Khusus:
            </h4>

            {/* Subtopic Selector Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedSubject.subTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSubTopicIndex(idx)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors border cursor-pointer ${
                    activeSubTopicIndex === idx
                      ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                      : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  <span className="font-mono mr-1.5 opacity-60">0{idx + 1}.</span>
                  {topic.title}
                </button>
              ))}
            </div>

            {/* Subtopic Comprehensive Triad Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1: Konsep Ilmiah Murni */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                  <h5 className="font-semibold text-sm text-stone-900">1. Konsep & Prinsip Sains</h5>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeSubTopic.scientificConcept}
                </p>
              </div>

              {/* Box 2: Pengaruh Fisiologis & Kesehatan */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-600"></div>
                  <h5 className="font-semibold text-sm text-stone-900">2. Relevansi Fisiologi & Kesehatan</h5>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeSubTopic.healthImpact}
                </p>
              </div>

              {/* Box 3: Aplikasi Nyata Kehidupan Sehari-hari */}
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                  <h5 className="font-semibold text-sm text-stone-900">3. Aplikasi & Tindakan Nyata</h5>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {activeSubTopic.realLifeApplication}
                </p>
              </div>
            </div>

            {/* Curriculum Connection Badge */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-700">Fokus Kurikulum Nasional:</span>
                <span>{selectedSubject.curriculumHighlight}</span>
              </div>
              <div className="text-stone-400 font-mono">
                Topik {activeSubTopicIndex + 1} dari {selectedSubject.subTopics.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
