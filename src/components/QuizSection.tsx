import React, { useState } from "react";
import { STEM_QUIZ_QUESTIONS, QuizQuestion } from "../data/quizData";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from "lucide-react";

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const currentQuestion: QuizQuestion = STEM_QUIZ_QUESTIONS[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQuestion.id] !== undefined;
  const totalQuestions = STEM_QUIZ_QUESTIONS.length;

  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return; // Prevent changing after selection
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  // Calculate score
  const score = Object.keys(selectedAnswers).reduce((acc, qIdStr) => {
    const qId = parseInt(qIdStr);
    const q = STEM_QUIZ_QUESTIONS.find((item) => item.id === qId);
    if (q && selectedAnswers[qId] === q.correctAnswerIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <section id="kuis" className="py-16 md:py-24 border-t border-stone-200 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Evaluasi Pemahaman Interaktif</span>
            <span aria-hidden="true">·</span>
            <span>6 Soal Uji Konseptual</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Uji Pemahaman STEM & Kesehatan Holistik
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Uji sejauh mana Anda memahami keterkaitan sains, metabolisme tubuh, aktivitas fisik, dan literasi bahasa melalui kuis studi kasus konseptual ini.
          </p>
        </div>

        {!showResults ? (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-8 space-y-6">
            {/* Progress Header */}
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-teal-800 uppercase tracking-wider">
                  Mata Pelajaran: {currentQuestion.subject}
                </span>
              </div>
              <span className="text-xs font-mono text-stone-500">
                Soal {currentQuestionIndex + 1} dari {totalQuestions}
              </span>
            </div>

            {/* Question Text */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === idx;
                const isCorrect = currentQuestion.correctAnswerIndex === idx;

                let optionStyle = "bg-[#FAFAF8] text-stone-800 border-stone-200 hover:bg-stone-50";

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-50 text-emerald-950 border-emerald-300 font-medium";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-50 text-rose-950 border-rose-300";
                  } else {
                    optionStyle = "bg-stone-50 text-stone-400 border-stone-200 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="font-mono text-xs font-bold shrink-0 mt-0.5 w-6 h-6 rounded-md bg-stone-200/60 flex items-center justify-center text-stone-700">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed">{option}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when answered */}
            {isAnswered && (
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-900">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>Pembahasan Ilmiah:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
                <div className="pt-2 border-t border-stone-200 text-xs text-teal-900 font-medium">
                  {currentQuestion.stemInsight}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={handlePrevious}
                className="px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                ← Sebelumnya
              </button>

              <button
                disabled={!isAnswered}
                onClick={handleNext}
                className="px-5 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>{currentQuestionIndex === totalQuestions - 1 ? "Lihat Skor Akhir" : "Lanjut Soal Berikutnya"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Results Stage */
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                Evaluasi Selesai!
              </h3>
              <p className="text-sm text-stone-600">
                Skor Anda: <strong className="text-stone-900 font-mono text-xl">{score}</strong> dari {totalQuestions} Soal Benar ({Math.round((score / totalQuestions) * 100)}%)
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 max-w-lg mx-auto leading-relaxed">
              {score === 6
                ? "Luar biasa! Anda memiliki pemahaman integratif holistik yang sempurna di semua cabang Biologi, Fisika, Kimia, Matematika, PJOK, dan Bahasa Indonesia."
                : score >= 4
                ? "Sangat baik! Anda telah menangkap esensi utama keterpaduan STEM dalam memahami kerja tubuh manusia dan literasi kesehatan."
                : "Bagus! Silakan telusuri kembali modul interaktif dan glosarium untuk memperdalam konsep-konsep yang masih keliru."}
            </p>

            <div className="pt-4">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
