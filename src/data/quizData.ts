export interface QuizQuestion {
  id: number;
  subject: string;
  themeColor: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  stemInsight: string;
}

export const STEM_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    subject: "Biologi",
    themeColor: "emerald",
    question: "Bagaimana sel usus manusia dan mikrobioma berkomunikasi untuk memperkuat ketahanan dinding epitel dan sistem imun?",
    options: [
      "Melalui penyerapan lipid trans tak jenuh secara berlebihan di lambung",
      "Melalui fermentasi serat makanan menjadi asam lemak rantai pendek (SCFA) seperti butirat",
      "Dengan membunuh seluruh bakteri flora normal menggunakan antibiotik spektrum luas",
      "Dengan memblokir produksi serotonin di dinding usus halus"
    ],
    correctAnswerIndex: 1,
    explanation:
      "Bakteri usus mengurai serat prebiotik menjadi Short-Chain Fatty Acids (SCFA) seperti butirat, asetat, dan propionat. Butirat merupakan sumber energi utama bagi sel kolonosit epitel usus dan memicu sintesis protein tight-junction yang mencegah 'leaky gut' serta melatih sel T regulator imun.",
    stemInsight: "Sinergi biologi sel dan biokimiawi: Serat yang tidak dicerna enzim manusia dimanfaatkan mikroorganisme untuk menghasilkan molekul sinyal imunitas."
  },
  {
    id: 2,
    subject: "Fisika",
    themeColor: "sky",
    question: "Berdasarkan Hukum Hagen-Poiseuille (Q ∝ r⁴), jika radius arteri seseorang berkurang sebesar 16% akibat penumpukan plak aterosklerosis, apa yang terjadi pada resistensi vaskular?",
    options: [
      "Resistensi vaskular turun menjadi setengahnya",
      "Resistensi vaskular tetap sama karena volume darah konstan",
      "Resistensi vaskular meningkat hampir dua kali lipat (~100% lebih tinggi)",
      "Resistensi vaskular hanya naik sedikit sebesar 16%"
    ],
    correctAnswerIndex: 2,
    explanation:
      "Karena resistensi berbanding terbalik dengan radius pangkat empat (R ∝ 1/r⁴): Jika r menjadi 0.84r, maka (0.84)⁴ ≈ 0.50. Artinya resistensi baru R' = R / 0.50 = 2R (meningkat dua kali lipat atau 100%). Ini menjelaskan mengapa penyempitan pembuluh darah yang tampak kecil memiliki dampak katastropik pada kenaikan tekanan darah.",
    stemInsight: "Matematika & Fisika Terapan: Hubungan eksponensial non-linear (pangkat 4) menunjukkan sensitivitas ekstrem sistem kardiovaskular terhadap diameter lumen vaskular."
  },
  {
    id: 3,
    subject: "Kimia",
    themeColor: "amber",
    question: "Saat seseorang mengalami serangan kepanikan dan bernapas sangat cepat serta dalam (hiperventilasi), pergeseran reaksi kesetimbangan dapar bikarbonat apa yang terjadi?",
    options: [
      "Kadar CO₂ darah naik drastis, memicu asidosis respiratori berat",
      "CO₂ terbuang berlebihan, menggeser reaksi ke kiri dan menurunkan konsentrasi H⁺ sehingga pH darah naik (alkalosis respiratori)",
      "Ion bikarbonat (HCO₃⁻) musnah seketika dalam beberapa detik",
      "Darah menjadi sangat asam dengan pH di bawah 6.8"
    ],
    correctAnswerIndex: 1,
    explanation:
      "Reaksi kesetimbangan: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. Saat hiperventilasi, CO₂ terembus keluar secara masif. Berdasarkan Azas Le Chatelier, sistem menggeser kesetimbangan ke arah kiri untuk menggantikan CO₂ yang hilang. Akibatnya konsentrasi ion H⁺ berkurang, menyebabkan pH darah naik di atas 7.45 (alkalosis respiratori) dengan gejala pusing, kram, dan kesemutan.",
    stemInsight: "Kimia Kesetimbangan: Paru-paru adalah organ pengatur kimiawi yang mampu menggeser konsentrasi ion hidrogen dalam hitungan detik."
  },
  {
    id: 4,
    subject: "Matematika",
    themeColor: "indigo",
    question: "Seorang pelajar berusia 17 tahun memiliki denyut nadi istirahat (Resting Heart Rate / RHR) 60 bpm. Berapakah target denyut nadi latihan saat intensitas 70% menurut Formula Karvonen?",
    options: [
      "140 bpm",
      "160 bpm",
      "120 bpm",
      "190 bpm"
    ],
    correctAnswerIndex: 1,
    explanation:
      "MHR (Max Heart Rate) = 220 - usia = 220 - 17 = 203 bpm. Heart Rate Reserve (HRR) = MHR - RHR = 203 - 60 = 143 bpm. Target HR (70%) = RHR + (0.70 × HRR) = 60 + (0.70 × 143) = 60 + 100.1 ≈ 160 bpm.",
    stemInsight: "Aljabar & Statistika Kebugaran: Memperhitungkan denyut istirahat pribadi memberikan zona latihan yang jauh lebih individual dan aman daripada rumus kasar."
  },
  {
    id: 5,
    subject: "PJOK",
    themeColor: "rose",
    question: "Fase tidur manakah yang paling krusial bagi atlet atau pelajar untuk pelepasan Human Growth Hormone (HGH) dan perbaikan mikroskopis serat otot?",
    options: [
      "Fase REM (Rapid Eye Movement / fase mimpi aktif)",
      "Fase Non-REM Tahap 1 (tidur ayam / transisi awal)",
      "Fase Non-REM Tahap 3 (Slow-Wave Sleep / Tidur Nyenyak Dalam)",
      "Fase terbangun sejenak tengah malam"
    ],
    correctAnswerIndex: 2,
    explanation:
      "Sekitar 70% dari sekresi harian Human Growth Hormone (HGH) terjadi pada fase Slow-Wave Sleep (NREM Tahap 3). Hormon ini merangsang penyerapan asam amino, sintesis protein otot, dan perbaikan mikrotulang setelah latihan intensif.",
    stemInsight: "Fisiologi Olahraga: Istirahat pasif terprogram sama pentingnya dengan beban latihan aktif dalam hukum adaptasi tubuh."
  },
  {
    id: 6,
    subject: "Bahasa Indonesia",
    themeColor: "teal",
    question: "Manakah kalimat berikut yang memenuhi kaidah bahasa ilmiah populer yang objektif dan bebas dari bias falasi retoris?",
    options: [
      "'Teh herbal ajaib 100% alami ini terbukti ampuh melibas racun kimia berbahaya di tubuh tanpa efek samping apa pun!'",
      "'Hasil studi klinis tersamar ganda pada 250 partisipan menunjukkan bahwa konsumsi ekstrak daun kelor terstandar menurunkan kadar glukosa puasa rata-rata 12% dalam 8 pekan (p < 0.05).'",
      "'Dokter pasti menyembunyikan ramuan ini karena takut industri obatnya bangkrut!'",
      "'Semua orang yang sakit diabetes wajib membuang obat dokter dan hanya meminum ramuan leluhur.'"
    ],
    correctAnswerIndex: 1,
    explanation:
      "Kalimat kedua memuat parameter kuantitatif terukur, metodologi eksplisit (uji klinis tersamar ganda), signifikansi statistik (nilai p), serta menghindari bahasa hiperbolis dan teori konspirasi emosional (Appeal to Emotion / Ad Hominem).",
    stemInsight: "Literasi Kritis: Bahasa ilmiah ditandai oleh ketepatan diksi, transparansi metodologis, batasan klaim, dan ketiadaan jargon bombastis."
  }
];
