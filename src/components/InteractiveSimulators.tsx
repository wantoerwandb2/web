import React, { useState, useId } from "react";
import { Activity, FlaskConical, RotateCcw, AlertTriangle, CheckCircle, Info } from "lucide-react";

export const InteractiveSimulators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"physics" | "chemistry">("physics");

  // Physics: Poiseuille's Blood Flow Simulator State
  const [vesselRadius, setVesselRadius] = useState<number>(1.0); // 0.5 to 1.3
  const [bloodViscosity, setBloodViscosity] = useState<number>(1.0); // 0.7 to 1.6
  const [drivingPressure, setDrivingPressure] = useState<number>(100); // 70 to 160 mmHg

  // Chemistry: Acid-Base Buffer Simulator State
  const [pCO2, setPCO2] = useState<number>(40); // Normal 40 mmHg (20 to 70)
  const [bicarbonate, setBicarbonate] = useState<number>(24); // Normal 24 mEq/L (14 to 34)

  // Calculations for Physics (Poiseuille)
  // Baseline: r=1.0, eta=1.0, P=100 -> Q_base = 100%, R_base = 1.0x
  const r4 = Math.pow(vesselRadius, 4);
  const flowRatePercent = Math.round(((drivingPressure / 100) * (r4 / bloodViscosity)) * 100);
  const resistanceFactor = Number((bloodViscosity / r4).toFixed(2));
  const cardiacStressPercent = Math.round(resistanceFactor * 100);

  // Calculations for Chemistry (Henderson-Hasselbalch)
  // pH = 6.1 + log10([HCO3-] / (0.03 * pCO2))
  const calculatedPH = Number((6.1 + Math.log10(bicarbonate / (0.03 * pCO2))).toFixed(2));

  // Determine clinical diagnosis
  let phDiagnosis = "Normal Fisiologis (Homeostasis Terjaga)";
  let phStatusType: "normal" | "acidosis" | "alkalosis" = "normal";

  if (calculatedPH < 7.35) {
    phStatusType = "acidosis";
    if (pCO2 > 45 && bicarbonate <= 26) {
      phDiagnosis = "Asidosis Respiratori (Retensi CO₂ Akut / Hipoventilasi)";
    } else if (bicarbonate < 22 && pCO2 <= 42) {
      phDiagnosis = "Asidosis Metabolik (Defisit Bikarbonat / Akumulasi Laktat)";
    } else {
      phDiagnosis = "Asidosis Campuran / Terkompensasi Parsial";
    }
  } else if (calculatedPH > 7.45) {
    phStatusType = "alkalosis";
    if (pCO2 < 35 && bicarbonate >= 22) {
      phDiagnosis = "Alkalosis Respiratori (Hiperventilasi / Pengeluaran CO₂ Berlebih)";
    } else if (bicarbonate > 26 && pCO2 >= 38) {
      phDiagnosis = "Alkalosis Metabolik (Kelebihan Basa / Kehilangan Asam Lambung)";
    } else {
      phDiagnosis = "Alkalosis Campuran / Terkompensasi Parsial";
    }
  }

  const resetPhysics = () => {
    setVesselRadius(1.0);
    setBloodViscosity(1.0);
    setDrivingPressure(100);
  };

  const resetChemistry = () => {
    setPCO2(40);
    setBicarbonate(24);
  };

  return (
    <section id="simulasi" className="py-16 md:py-24 border-t border-stone-200 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Laboratorium Simulasi Virtual</span>
            <span aria-hidden="true">·</span>
            <span>Eksperimen Interaktif Dinamis</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Simulasi Interaktif: Fisika Vaskular & Keseimbangan Kimia Darah
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Manipulasi variabel-variabel kunci tubuh manusia untuk mengamati bagaimana hukum fisika dinamika fluida dan prinsip kesetimbangan kimiawi mengatur kehidupan secara real-time.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-200/70 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab("physics")}
            className={`flex-1 py-2 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 ${
              activeTab === "physics"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Activity className="w-4 h-4 text-sky-600" />
            <span>Fisika: Aliran Darah (Poiseuille)</span>
          </button>
          <button
            onClick={() => setActiveTab("chemistry")}
            className={`flex-1 py-2 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 ${
              activeTab === "chemistry"
                ? "bg-white text-stone-900 shadow-xs"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <FlaskConical className="w-4 h-4 text-amber-600" />
            <span>Kimia: Dapar Darah (pH Buffer)</span>
          </button>
        </div>

        {/* TAB 1: PHYSICS POISEUILLE SIMULATOR */}
        {activeTab === "physics" && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono text-sky-700 uppercase tracking-wider font-semibold">
                  Hukum Hagen-Poiseuille: Q = (π · ΔP · r⁴) / (8 · η · L)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  Eksperimen Resistensi Vaskular & Laju Aliran Darah
                </h3>
              </div>
              <button
                onClick={resetPhysics}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Atur Ulang Nilai Standar</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              {/* Interactive Control Sliders */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#FAFAF8] p-5 rounded-xl border border-stone-200 space-y-5">
                  <h4 className="font-semibold text-sm text-stone-900 flex items-center justify-between">
                    <span>Parameter Vaskular Tubuh</span>
                    <span className="text-xs font-normal text-stone-500">Geser untuk mengubah</span>
                  </h4>

                  {/* Slider 1: Radius Lumen Arteri */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label htmlFor="vesselRadius" className="font-medium text-stone-800">
                        1. Jari-Jari (Radius) Arteri (r)
                      </label>
                      <span className="font-mono font-semibold text-sky-700">
                        {vesselRadius.toFixed(2)}x ({vesselRadius < 1 ? "Penyempitan / Plak" : vesselRadius > 1 ? "Vasodilatasi" : "Normal"})
                      </span>
                    </div>
                    <input
                      id="vesselRadius"
                      type="range"
                      min="0.55"
                      max="1.30"
                      step="0.05"
                      value={vesselRadius}
                      onChange={(e) => setVesselRadius(parseFloat(e.target.value))}
                      className="w-full accent-sky-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>0.55x (Stenosis Berat)</span>
                      <span>1.0x (Sehat)</span>
                      <span>1.30x (Vasodilatasi Aktif)</span>
                    </div>
                  </div>

                  {/* Slider 2: Viskositas Darah */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label htmlFor="bloodViscosity" className="font-medium text-stone-800">
                        2. Viskositas (Kekentalan) Darah (η)
                      </label>
                      <span className="font-mono font-semibold text-sky-700">
                        {bloodViscosity.toFixed(2)}x ({bloodViscosity > 1.1 ? "Dehidrasi / Kental" : bloodViscosity < 0.9 ? "Encer" : "Normal"})
                      </span>
                    </div>
                    <input
                      id="bloodViscosity"
                      type="range"
                      min="0.75"
                      max="1.50"
                      step="0.05"
                      value={bloodViscosity}
                      onChange={(e) => setBloodViscosity(parseFloat(e.target.value))}
                      className="w-full accent-sky-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>0.75x (Hidrasi Prima)</span>
                      <span>1.0x (Normal)</span>
                      <span>1.50x (Dehidrasi Parah)</span>
                    </div>
                  </div>

                  {/* Slider 3: Tekanan Pompa Jantung */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label htmlFor="drivingPressure" className="font-medium text-stone-800">
                        3. Beda Tekanan Hidrolik (ΔP)
                      </label>
                      <span className="font-mono font-semibold text-sky-700">
                        {drivingPressure} mmHg
                      </span>
                    </div>
                    <input
                      id="drivingPressure"
                      type="range"
                      min="70"
                      max="150"
                      step="5"
                      value={drivingPressure}
                      onChange={(e) => setDrivingPressure(parseInt(e.target.value))}
                      className="w-full accent-sky-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>70 mmHg (Hipotensi)</span>
                      <span>100 mmHg</span>
                      <span>150 mmHg (Hipertensi Akut)</span>
                    </div>
                  </div>
                </div>

                {/* STEM Clinical Explanation */}
                <div className="p-4 bg-sky-50/60 rounded-xl border border-sky-200 text-xs text-stone-700 space-y-2">
                  <div className="flex items-center gap-1.5 font-semibold text-sky-900">
                    <Info className="w-4 h-4 text-sky-700 shrink-0" />
                    <span>Mengapa Efek Pangkat Empat (r⁴) Sangat Mematikan?</span>
                  </div>
                  <p className="leading-relaxed">
                    Karena ketergantungan pangkat empat, jika dinding arteri Anda menyempit hanya <strong>20%</strong> (radius menjadi 0.80x), resistensi vaskular melonjak sebesar <strong>{(1 / Math.pow(0.8, 4)).toFixed(2)}x lipat!</strong> Jantung harus bekerja lebih dari dua kali lipat lebih keras hanya untuk mengalirkan volume darah yang sama.
                  </p>
                </div>
              </div>

              {/* Dynamic Output & SVG Vessel Stage */}
              <div className="lg:col-span-7 space-y-6">
                {/* 3 Metric Scoreboard */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#FAFAF8] p-4 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-500 font-medium block">Laju Aliran Darah (Q)</span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-stone-900 mt-1 block tabular-nums">
                      {flowRatePercent}%
                    </span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">
                      vs Arteri Normal (100%)
                    </span>
                  </div>

                  <div className="bg-[#FAFAF8] p-4 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-500 font-medium block">Resistensi Vaskular (R)</span>
                    <span className={`font-mono text-xl sm:text-2xl font-bold mt-1 block tabular-nums ${
                      resistanceFactor > 1.8 ? "text-rose-700" : resistanceFactor > 1.2 ? "text-amber-700" : "text-emerald-700"
                    }`}>
                      {resistanceFactor}x
                    </span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">
                      Faktor Hambatan Aliran
                    </span>
                  </div>

                  <div className="bg-[#FAFAF8] p-4 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-500 font-medium block">Beban Kerja Jantung</span>
                    <span className={`font-mono text-xl sm:text-2xl font-bold mt-1 block tabular-nums ${
                      cardiacStressPercent > 180 ? "text-rose-700" : cardiacStressPercent > 120 ? "text-amber-700" : "text-stone-900"
                    }`}>
                      {cardiacStressPercent}%
                    </span>
                    <span className="text-[11px] text-stone-500 mt-0.5 block">
                      Tekanan Miokardium
                    </span>
                  </div>
                </div>

                {/* Interactive SVG Vessel Cross-Section Visualization */}
                <div className="p-6 bg-stone-950 rounded-xl text-white relative overflow-hidden border border-stone-800">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                      Visualisasi Aliran Pembuluh Darah (Laminar Stream)
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                      resistanceFactor > 1.8 ? "bg-rose-950 text-rose-300 border border-rose-800" : "bg-emerald-950 text-emerald-300 border border-emerald-800"
                    }`}>
                      {resistanceFactor > 1.8 ? "PERINGATAN: ISKEMIA / HIPERTENSI" : "ALIRAN HEMODINAMIK AMAN"}
                    </span>
                  </div>

                  <div className="relative h-44 flex items-center justify-center bg-stone-900/60 rounded-lg p-4 border border-stone-800">
                    {/* SVG Diagram of Blood Vessel with variable radius */}
                    <svg viewBox="0 0 600 160" className="w-full h-full">
                      {/* Vessel Outer Wall */}
                      <rect x="20" y="10" width="560" height="140" rx="8" fill="#2d1217" stroke="#4a1c24" strokeWidth="3" />
                      
                      {/* Plaque / Stenosis layers representing radius narrowing */}
                      {vesselRadius < 1.0 && (
                        <>
                          {/* Upper plaque */}
                          <path
                            d={`M 150 10 Q 300 ${10 + (1 - vesselRadius) * 80} 450 10 Z`}
                            fill="#d97706"
                            opacity="0.85"
                          />
                          {/* Lower plaque */}
                          <path
                            d={`M 150 150 Q 300 ${150 - (1 - vesselRadius) * 80} 450 150 Z`}
                            fill="#d97706"
                            opacity="0.85"
                          />
                        </>
                      )}

                      {/* Vessel Lumen (Inner Flow Tunnel) */}
                      <line
                        x1="30"
                        y1="80"
                        x2="570"
                        y2="80"
                        stroke="#dc2626"
                        strokeWidth={Math.max(16, 75 * vesselRadius)}
                        strokeLinecap="round"
                        opacity="0.75"
                      />

                      {/* Flow Stream Vectors / Red blood cells dots */}
                      {Array.from({ length: 9 }).map((_, i) => {
                        const x = 50 + i * 60;
                        const speedOffset = (i * 20) % 40;
                        return (
                          <g key={i}>
                            <circle
                              cx={x}
                              cy={80 + (i % 2 === 0 ? 12 : -12) * Math.min(1, vesselRadius)}
                              r={Math.max(3, 5 * (1 / bloodViscosity))}
                              fill="#f87171"
                            />
                            <circle
                              cx={x + 25}
                              cy={80}
                              r={Math.max(4, 6 * (1 / bloodViscosity))}
                              fill="#ef4444"
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* Flow speed label */}
                    <div className="absolute bottom-3 left-4 text-xs font-mono text-stone-300 bg-stone-950/80 px-2.5 py-1 rounded border border-stone-700">
                      Kecepatan Partikel: ~{(flowRatePercent / 100).toFixed(2)} m/s · Viskositas: {bloodViscosity.toFixed(2)} cP
                    </div>
                  </div>

                  <p className="text-xs text-stone-400 mt-3 leading-relaxed">
                    Diagram di atas menyimulasikan aliran darah laminar di dalam arteri. Warna jingga menandakan akumulasi aterosklerosis yang mempersempit diameter efektif (lumen).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CHEMISTRY ACID-BASE BUFFER SIMULATOR */}
        {activeTab === "chemistry" && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono text-amber-700 uppercase tracking-wider font-semibold">
                  Persamaan Henderson-Hasselbalch: pH = 6.1 + log([HCO₃⁻] / 0.03·PaCO₂)
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  Eksperimen Keseimbangan Asam-Basa & Dapar Bikarbonat
                </h3>
              </div>
              <button
                onClick={resetChemistry}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Atur Ulang Nilai Standar</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
              {/* Chemical Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#FAFAF8] p-5 rounded-xl border border-stone-200 space-y-5">
                  <h4 className="font-semibold text-sm text-stone-900 flex items-center justify-between">
                    <span>Komponen Pengatur Dapar Darah</span>
                    <span className="text-xs font-normal text-stone-500">Paru vs Ginjal</span>
                  </h4>

                  {/* Slider 1: PaCO2 (Paru-Paru / Pernapasan) */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label htmlFor="pCO2" className="font-medium text-stone-800">
                        1. Tekanan Parsial CO₂ Darah (PaCO₂)
                      </label>
                      <span className="font-mono font-semibold text-amber-700">
                        {pCO2} mmHg
                      </span>
                    </div>
                    <input
                      id="pCO2"
                      type="range"
                      min="20"
                      max="65"
                      step="1"
                      value={pCO2}
                      onChange={(e) => setPCO2(parseInt(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>20 mmHg (Hiperventilasi)</span>
                      <span>40 mmHg (Normal)</span>
                      <span>65 mmHg (Hipoventilasi/Asma)</span>
                    </div>
                  </div>

                  {/* Slider 2: HCO3- (Ginjal / Basa Bikarbonat) */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <label htmlFor="bicarbonate" className="font-medium text-stone-800">
                        2. Ion Bikarbonat Ginjal [HCO₃⁻]
                      </label>
                      <span className="font-mono font-semibold text-amber-700">
                        {bicarbonate} mEq/L
                      </span>
                    </div>
                    <input
                      id="bicarbonate"
                      type="range"
                      min="14"
                      max="36"
                      step="1"
                      value={bicarbonate}
                      onChange={(e) => setBicarbonate(parseInt(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-400">
                      <span>14 mEq/L (Asidosis Ginjal)</span>
                      <span>24 mEq/L (Normal)</span>
                      <span>36 mEq/L (Alkalosis Ginjal)</span>
                    </div>
                  </div>
                </div>

                {/* Chemical Equilibrium Equation Box */}
                <div className="p-4 bg-stone-900 text-white rounded-xl border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-amber-300 uppercase tracking-wider">
                    Reaksi Kesetimbangan Le Chatelier:
                  </div>
                  <div className="font-mono text-xs sm:text-sm py-2 px-3 bg-stone-950 rounded text-center text-stone-200 overflow-x-auto">
                    CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pCO2 > 45
                      ? "→ CO₂ menumpuk: Reaksi terdorong ke KANAN, memproduksi ion H⁺ berlebih sehingga darah menjadi lebih asam."
                      : pCO2 < 35
                      ? "← CO₂ terbuang berlebih: Reaksi terdorong ke KIRI, mengonsumsi ion H⁺ sehingga darah menjadi lebih basa (alkalis)."
                      : "⚖ Kesetimbangan stabil: Paru-paru membuang CO₂ seimbang dengan laju metabolisme seluler."}
                  </p>
                </div>
              </div>

              {/* Chemical Output & pH Meter Stage */}
              <div className="lg:col-span-7 space-y-6">
                {/* Master pH Gauge Display */}
                <div className="bg-[#FAFAF8] p-6 rounded-xl border border-stone-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                      Indikator Potensi Hidrogen (pH Darah Arteri)
                    </span>
                    <span className="text-xs font-mono text-stone-600">
                      Rentang Normal: 7.35 – 7.45
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-mono text-4xl sm:text-5xl font-bold tabular-nums ${
                        phStatusType === "acidosis"
                          ? "text-rose-700"
                          : phStatusType === "alkalosis"
                          ? "text-blue-700"
                          : "text-emerald-700"
                      }`}
                    >
                      {calculatedPH.toFixed(2)}
                    </span>
                    <div className="space-y-0.5">
                      <span className="text-sm font-semibold text-stone-900 block">
                        {phDiagnosis}
                      </span>
                      <span className="text-xs text-stone-500 block">
                        {phStatusType === "normal"
                          ? "Fungsi enzim metabolisme optimal, afinitas oksigen hemoglobin stabil."
                          : phStatusType === "acidosis"
                          ? "Enzim intraseluler terancam terdenaturasi, risiko depresi sistem saraf pusat."
                          : "Neuromuskular hipereksitabel, risiko spasme tetani dan konstriksi pembuluh otak."}
                      </span>
                    </div>
                  </div>

                  {/* Visual pH Scale Bar */}
                  <div className="mt-6 space-y-1.5">
                    <div className="h-4 w-full rounded-full bg-linear-to-r from-rose-500 via-emerald-500 to-blue-500 relative">
                      {/* Normal zone indicator lines */}
                      <div
                        className="absolute top-0 bottom-0 bg-white/40 border-x-2 border-stone-900"
                        style={{ left: "45%", width: "10%" }}
                        title="Rentang Fisiologis Normal (7.35 - 7.45)"
                      />
                      {/* Current Pointer */}
                      <div
                        className="absolute top-[-4px] bottom-[-4px] w-2 bg-stone-950 rounded-full shadow-md transition-all duration-300"
                        style={{
                          left: `${Math.min(98, Math.max(2, ((calculatedPH - 6.9) / (7.8 - 6.9)) * 100))}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-stone-400">
                      <span>pH 6.9 (Asidosis Kritis)</span>
                      <span className="text-emerald-800 font-semibold">pH 7.40 (Optimal)</span>
                      <span>pH 7.8 (Alkalosis Kritis)</span>
                    </div>
                  </div>
                </div>

                {/* Organ Collaboration Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-stone-200">
                    <span className="text-xs font-semibold text-stone-900 block">
                      Respons Paru-Paru (Hitungan Detik)
                    </span>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Mengatur ventilasi pernapasan. Menghirup dan membuang molekul gas CO₂ dalam hitungan detik untuk mengubah keasaman secara cepat saat Anda mulai berolahraga atau panik.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-stone-200">
                    <span className="text-xs font-semibold text-stone-900 block">
                      Respons Ginjal (Hitungan Jam-Hari)
                    </span>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Mengatur sekresi ion H⁺ dan reabsorpsi ion bikarbonat (HCO₃⁻) ke dalam sirkulasi darah. Merupakan garis pertahanan dapar kimiawi kedua yang sangat kuat dan berkelanjutan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
