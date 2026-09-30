import React, { useState } from "react";
import { Calculator, Heart, Flame, ShieldAlert, Award, ArrowRight } from "lucide-react";

export const HealthMathCalculator: React.FC = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<number>(18);
  const [weight, setWeight] = useState<number>(65); // kg
  const [height, setHeight] = useState<number>(170); // cm
  const [rhr, setRhr] = useState<number>(65); // Resting Heart Rate bpm
  const [activityFactor, setActivityFactor] = useState<number>(1.375); // Light exercise

  // 1. BMI Calculation
  const heightM = height / 100;
  const bmi = Number((weight / (heightM * heightM)).toFixed(1));
  let bmiCategory = "Normal / Sehat";
  let bmiColor = "text-emerald-700";
  if (bmi < 18.5) {
    bmiCategory = "Berat Badan Kurang (Underweight)";
    bmiColor = "text-amber-700";
  } else if (bmi >= 23 && bmi < 25) {
    bmiCategory = "Kelebihan Berat Badan Ringan (Overweight)";
    bmiColor = "text-amber-700";
  } else if (bmi >= 25) {
    bmiCategory = "Obesitas (Tingkat Risiko Metabolik)";
    bmiColor = "text-rose-700";
  }

  // 2. BMR (Mifflin-St Jeor)
  // Men: BMR = (10 × W) + (6.25 × H) - (5 × A) + 5
  // Women: BMR = (10 × W) + (6.25 × H) - (5 × A) - 161
  const bmr = Math.round(
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161
  );

  // 3. TDEE
  const tdee = Math.round(bmr * activityFactor);

  // 4. Karvonen Heart Rate Zones
  // MHR = 220 - age
  const mhr = 220 - age;
  const hrr = mhr - rhr;

  const zone1 = Math.round(rhr + 0.5 * hrr); // 50%
  const zone2 = Math.round(rhr + 0.6 * hrr); // 60% (Fat burn / aerobic base)
  const zone3 = Math.round(rhr + 0.7 * hrr); // 70% (Aerobic fitness)
  const zone4 = Math.round(rhr + 0.8 * hrr); // 80% (Lactate threshold)
  const zone5 = Math.round(rhr + 0.9 * hrr); // 90% (Anaerobic peak)

  // 5. Estimated VO2 Max via Uth-Sorensen formula: VO2max = 15.3 * (MHR / RHR)
  const estimatedVO2Max = Number((15.3 * (mhr / rhr)).toFixed(1));

  return (
    <section id="kalkulator" className="py-16 md:py-24 border-t border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
            <span>Matematika Terapan & Fisiologi Olahraga</span>
            <span aria-hidden="true">·</span>
            <span>Kuantifikasi Biometrik Presisi</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Kalkulator Biometrik: Matematika Energi & Zona Jantung
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Kesehatan manusia dapat dihitung dengan presisi melalui model aljabar linear. Masukkan data profil Anda untuk menghitung Basal Metabolic Rate (BMR), laju pembakaran energi harian, serta zona latihan kardiovaskular Karvonen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-5 bg-[#FAFAF8] p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
            <h3 className="font-semibold text-stone-900 text-sm flex items-center justify-between border-b border-stone-200 pb-3">
              <span>Data Parameter Fisiologis Anda</span>
              <Calculator className="w-4 h-4 text-indigo-700" />
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-700 block">Jenis Kelamin Biologis</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border cursor-pointer transition-colors ${
                    gender === "male"
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  Laki-Laki (+5)
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border cursor-pointer transition-colors ${
                    gender === "female"
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-700 border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  Perempuan (-161)
                </button>
              </div>
            </div>

            {/* Age & Weight */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="userAge" className="text-xs font-medium text-stone-700 block">Usia (Tahun)</label>
                <input
                  id="userAge"
                  type="number"
                  min="12"
                  max="90"
                  value={age}
                  onChange={(e) => setAge(Math.max(12, parseInt(e.target.value) || 12))}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-mono text-stone-900 focus:outline-teal-800"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="userWeight" className="text-xs font-medium text-stone-700 block">Berat Badan (kg)</label>
                <input
                  id="userWeight"
                  type="number"
                  min="30"
                  max="180"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(30, parseInt(e.target.value) || 30))}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-mono text-stone-900 focus:outline-teal-800"
                />
              </div>
            </div>

            {/* Height & Resting Heart Rate */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label htmlFor="userHeight" className="text-xs font-medium text-stone-700 block">Tinggi Badan (cm)</label>
                <input
                  id="userHeight"
                  type="number"
                  min="100"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Math.max(100, parseInt(e.target.value) || 100))}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-mono text-stone-900 focus:outline-teal-800"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="userRhr" className="text-xs font-medium text-stone-700 block">Nadi Istirahat (RHR bpm)</label>
                <input
                  id="userRhr"
                  type="number"
                  min="40"
                  max="110"
                  value={rhr}
                  onChange={(e) => setRhr(Math.max(40, parseInt(e.target.value) || 40))}
                  className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-sm font-mono text-stone-900 focus:outline-teal-800"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div className="space-y-1.5">
              <label htmlFor="activityLevel" className="text-xs font-medium text-stone-700 block">Tingkat Aktivitas Fisik Harian</label>
              <select
                id="activityLevel"
                value={activityFactor}
                onChange={(e) => setActivityFactor(parseFloat(e.target.value))}
                className="w-full bg-white border border-stone-300 rounded-lg px-3 py-2 text-xs font-medium text-stone-900 focus:outline-teal-800"
              >
                <option value="1.2">Sedentari (Banyak Duduk, Tanpa Olahraga: ×1.2)</option>
                <option value="1.375">Ringan (Olahraga Santai 1-3 kali/minggu: ×1.375)</option>
                <option value="1.55">Sedang (Olahraga Teratur 3-5 kali/minggu: ×1.55)</option>
                <option value="1.725">Tinggi (Olahraga Berat 6-7 kali/minggu: ×1.725)</option>
                <option value="1.9">Atletik Ekstrem (Latihan Intensif 2× sehari: ×1.9)</option>
              </select>
            </div>

            {/* Formula Peek */}
            <div className="p-3 bg-stone-100 rounded-lg text-[11px] font-mono text-stone-600 space-y-1 border border-stone-200">
              <div>BMR = (10×{weight}) + (6.25×{height}) - (5×{age}) {gender === "male" ? "+ 5" : "- 161"}</div>
              <div>HRR = (220 - {age}) - {rhr} = {hrr} bpm</div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Scoreboards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* BMR */}
              <div className="bg-[#FAFAF8] p-4 rounded-xl border border-stone-200">
                <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>BMR (Energi Basal)</span>
                </span>
                <span className="font-mono text-2xl font-bold text-stone-900 mt-1 block tabular-nums">
                  {bmr.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5 block">kkal/hari (saat istirahat)</span>
              </div>

              {/* TDEE */}
              <div className="bg-[#FAFAF8] p-4 rounded-xl border border-stone-200">
                <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-indigo-600" />
                  <span>TDEE (Total Energi)</span>
                </span>
                <span className="font-mono text-2xl font-bold text-stone-900 mt-1 block tabular-nums">
                  {tdee.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-stone-500 mt-0.5 block">kkal/hari (total aktivitas)</span>
              </div>

              {/* BMI */}
              <div className="bg-[#FAFAF8] p-4 rounded-xl border border-stone-200 col-span-2 sm:col-span-1">
                <span className="text-xs text-stone-500 font-medium">Indeks Massa Tubuh (BMI)</span>
                <span className={`font-mono text-2xl font-bold mt-1 block tabular-nums ${bmiColor}`}>
                  {bmi}
                </span>
                <span className="text-[11px] text-stone-600 mt-0.5 block line-clamp-1">{bmiCategory}</span>
              </div>
            </div>

            {/* Karvonen Zones Display */}
            <div className="bg-stone-950 text-white p-6 rounded-2xl border border-stone-800 space-y-4">
              <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                    Formula Karvonen · Zona Latihan Kardiovaskular
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Target Denyut Jantung Optimal (HRR = {hrr} bpm)
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-stone-400 block">Estimasi VO₂ Max</span>
                  <span className="font-mono text-emerald-400 font-bold text-base">
                    {estimatedVO2Max} mL/kg/min
                  </span>
                </div>
              </div>

              {/* 5 Zones Visual Stack */}
              <div className="space-y-2.5 pt-1">
                {/* Zone 2: Fat Burn / Mitochondrial Base */}
                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-emerald-300">Zone 2: Oksidasi Lemak & Biogenesis Mitokondria (60-70%)</span>
                    <p className="text-[11px] text-stone-400">Intensitas percakapan lancar, adaptasi pembuluh kapiler baru.</p>
                  </div>
                  <span className="font-mono font-bold text-white text-sm tabular-nums whitespace-nowrap">
                    {zone2} - {zone3} bpm
                  </span>
                </div>

                {/* Zone 3: Aerobic Fitness */}
                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-sky-300">Zone 3: Kapasitas Aerobik & Volume Sekuncup (70-80%)</span>
                    <p className="text-[11px] text-stone-400">Pernapasan mulai dalam, peningkatan efisiensi pompa bilik jantung.</p>
                  </div>
                  <span className="font-mono font-bold text-white text-sm tabular-nums whitespace-nowrap">
                    {zone3} - {zone4} bpm
                  </span>
                </div>

                {/* Zone 4: Lactate Threshold */}
                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-amber-300">Zone 4: Ambang Batas Laktat / Tempo (80-90%)</span>
                    <p className="text-[11px] text-stone-400">Akumulasi asam laktat menantang dapar bikarbonat darah.</p>
                  </div>
                  <span className="font-mono font-bold text-white text-sm tabular-nums whitespace-nowrap">
                    {zone4} - {zone5} bpm
                  </span>
                </div>

                {/* Zone 5: Peak VO2 Max */}
                <div className="bg-stone-900/90 p-3 rounded-lg border border-stone-800 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-rose-300">Zone 5: Puncak Anaerobik & VO₂ Max (90-100%)</span>
                    <p className="text-[11px] text-stone-400">Sprint maksimal, produksi ATP via glikolisis anaerob murni.</p>
                  </div>
                  <span className="font-mono font-bold text-white text-sm tabular-nums whitespace-nowrap">
                    {zone5} - {mhr} bpm
                  </span>
                </div>
              </div>

              <div className="text-[11px] text-stone-400 pt-1 leading-relaxed">
                *Rumus Karvonen: Target HR = RHR + [% × (MHR - RHR)]. Jauh lebih akurat dibandingkan rumus konvensional karena merefleksikan tingkat adaptasi parasimpatis pada denyut istirahat Anda ({rhr} bpm).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
