export interface CaseStudyDiscipline {
  subject: string;
  badge: string;
  themeColor: string;
  iconName: string;
  analysisTitle: string;
  scientificBreakdown: string;
  keyFormulaOrConcept: string;
  actionProtocol: string;
}

export interface CaseStudyData {
  title: string;
  subtitle: string;
  scenario: string;
  patientProfile: {
    age: number;
    activity: string;
    temperature: string;
    intakeVolume: string;
    symptoms: string[];
  };
  commonMisconception: string;
  actualDiagnosis: string;
  disciplines: CaseStudyDiscipline[];
  conclusionSummary: string;
}

export const STEM_CASE_STUDY: CaseStudyData = {
  title: "Investigasi Kasus: Bahaya Tersembunyi 'Water Intoxication' pada Atlet",
  subtitle: "Projek STEM Multidisiplin Mengungkap Kolaps Pelari Maraton Akibat Hiponatremia",
  scenario:
    "Rian (17 tahun), seorang atlet lari pelajar, mengikuti kompetisi half-marathon (21 km) di cuaca terik bersuhu 32°C. Karena cemas mengalami dehidrasi, Rian meminum lebih dari 3,8 liter air putih murni di setiap pos air (water station) tanpa mengonsumsi elektrolit. Menjelang kilometer ke-19, Rian limbung, mengalami disorientasi parah, sakit kepala berdenyut hebat, muntah, dan akhirnya jatuh pingsan. Paramedis sekolah awal mengira ia 'dehidrasi biasa' dan hendak menyuntikkan infus hidrasi standar, namun tim medis STEM menghentikannya tepat waktu.",
  patientProfile: {
    age: 17,
    activity: "Half-Marathon (21.1 km, 2 jam 15 menit)",
    temperature: "Lingkungan 32°C, Kelembaban Relatif 78%",
    intakeVolume: "3.8 Liter Air Murni (Hipotonik)",
    symptoms: [
      "Kebingungan mental akut & disorientasi",
      "Edema perifer (jari tangan membengkak tegang)",
      "Mual dan muntah berulang",
      "Kadar natrium serum: 122 mmol/L (Normal: 135-145 mmol/L)"
    ]
  },
  commonMisconception:
    "Asumsi keliru masyarakat & pelatih awam: 'Setiap kali seseorang pingsan saat berolahraga di cuaca panas, mereka pasti mengalami kekurangan air (dehidrasi) dan harus dicekoki air sebanyak-banyaknya.'",
  actualDiagnosis:
    "Exercise-Associated Hyponatremia (EAH) disertai Cerebral Edema (Pembengkakan Sel Otak Akibat Keracunan Air Hipotonik).",
  disciplines: [
    {
      subject: "Biologi",
      badge: "Imunologi & Fisiologi Sel",
      themeColor: "emerald",
      iconName: "Dna",
      analysisTitle: "Gradien Osmotik & Edema Seluler Otak",
      scientificBreakdown:
        "Cairan ekstraseluler Rian menjadi sangat encer (hipotonik) dibandingkan cairan intraseluler sel-sel otaknya. Berdasarkan prinsip osmosis membran semipermeabel, air berdifusi deras masuk ke dalam neuron otak. Karena tulang tengkorak manusia adalah rongga kaku (rigid calvarium), pembengkakan jaringan otak meningkatkan Tekanan Intrakranial (TKR), menekan batang otak dan memicu disorientasi hingga kejang.",
      keyFormulaOrConcept: "Osmosis Seluler: Aliran pelarut bersih dari tonisitas rendah ([Solut] rendah) ke tonisitas tinggi ([Solut] tinggi).",
      actionProtocol: "Pemberian larutan Salin Hipertonik 3% (NaCl pekat) secara intravena terukur untuk menarik kelebihan air keluar dari neuron otak kembali ke aliran darah."
    },
    {
      subject: "Fisika",
      badge: "Termodinamika & Tekanan Hidrodinamika",
      themeColor: "sky",
      iconName: "Activity",
      analysisTitle: "Tekanan Hidrostatis Vaskular & Kegagalan Evaporasi",
      scientificBreakdown:
        "Pada kelembaban udara 78%, laju disipasi kalor laten evaporasi keringat Rian turun drastis karena gradien tekanan uap air mengecil. Secara simultan, ekspansi volume plasma vaskular akibat kelebihan 3,8 liter air murni menaikkan tekanan hidrostatis kapiler (Pc), mendorong cairan merembes menembus dinding endotel menuju ruang interstitial jaringan.",
      keyFormulaOrConcept: "Persamaan Starling Kapiler: Jv = Kf · [(Pc - Pi) - σ(πc - πi)]",
      actionProtocol: "Evakuasi ke zona berangin dengan pendinginan konvektif aktif (mist-fan cooling) dan penghentian total asupan cairan hipotonik."
    },
    {
      subject: "Kimia",
      badge: "Stoikiometri & Kesetimbangan Ionik",
      themeColor: "amber",
      iconName: "FlaskConical",
      analysisTitle: "Anjloknya Konsentrasi Ion Natrium [Na⁺] & Potensial Aksi",
      scientificBreakdown:
        "Keringat mengandung ion natrium rata-rata 40-60 mmol/L. Kehilangan natrium lewat keringat yang dibarengi pengenceran cairan darah murni menurunkan kadar [Na⁺] dari normal 140 mmol/L menjadi kritis 122 mmol/L. Penurunan gradien konsentrasi Na⁺ mengacaukan persamaan Nernst untuk potensial membran istirahat sel saraf, melumpuhkan depolarisasi teratur di otak dan miokardium.",
      keyFormulaOrConcept: "Potensial Nernst: E_ion = (RT / zF) · ln([Ion_luar] / [Ion_dalam])",
      actionProtocol: "Analisis gas darah dan panel elektrolit cepat (point-of-care testing) untuk memantau natrium serum per 30 menit."
    },
    {
      subject: "Matematika",
      badge: "Kalkulasi Neraca Massa & Laju Keringat",
      themeColor: "indigo",
      iconName: "Calculator",
      analysisTitle: "Neraca Massa Cairan & Kuantifikasi Defisit Natrium",
      scientificBreakdown:
        "Dengan massa awal 65 kg dan massa akhir 65.8 kg setelah lari 2 jam 15 menit, Rian justru mengalami pertambahan massa netto (+0.8 kg). Jika laju keringatnya 1.3 L/jam (total keringat 2.9 L), dan asupan airnya 3.8 L: Neraca massa = 3.8 L - 2.9 L = +0.9 L retensi cairan. Kehilangan natrium = 2.9 L × 45 mmol/L = 130.5 mmol Na⁺ yang tidak diganti sama sekali.",
      keyFormulaOrConcept: "Laju Keringat = (Massa_awal - Massa_akhir + Asupan_cairan - Urin) / Waktu",
      actionProtocol: "Koreksi natrium bertahap maksimal 8-10 mmol/L per 24 jam untuk mencegah komplikasi fatal mielinolisis pontin sentral."
    },
    {
      subject: "PJOK",
      badge: "Manajemen Hidrasi & Protokol Latihan",
      themeColor: "rose",
      iconName: "Trophy",
      analysisTitle: "Pacing Lari, Strategi Hidrasi Terprogram, & Heat Illness",
      scientificBreakdown:
        "Rian meminum air berdasarkan kepanikan, bukan sinyal haus fisiologis ('drink beyond thirst'). Dalam kurikulum PJOK modern, atlet wajib diajarkan strategi hidrasi berbasis 'ad libitum' (minum secukupnya saat merasa haus) atau menghitung laju keringat pribadi saat uji coba latihan.",
      keyFormulaOrConcept: "Prinsip Asupan Elektrolit PJOK: Cairan isotonik mengandung 400-800 mg sodium per liter air untuk aktivitas >60 menit.",
      actionProtocol: "Edukasi strategi latihan aklimatisasi panas bertahap 10-14 hari sebelum hari perlombaan marathon."
    },
    {
      subject: "Bahasa Indonesia",
      badge: "Literasi Komunikasi & Rilis Medis",
      themeColor: "teal",
      iconName: "BookOpenCheck",
      analysisTitle: "Penulisan Rilis Edukasi & Meluruskan Mitos 'Kurang Minum'",
      scientificBreakdown:
        "Jika panitia acara membuat rilis berita yang gegabah dengan kalimat 'Atlet pingsan karena dehidrasi', masyarakat akan semakin percaya pada mitos yang mematikan. Tim menyusun teks eksplanasi ilmiah yang lugas, tidak berbelit-belit, memakai istilah baku KBBI ('edema serebral', 'hiponatremia terkait-latihan'), dan menyampaikan pesan preventif tanpa kepanikan publik.",
      keyFormulaOrConcept: "Kaidah Bahasa Eksplanasi: Struktur Pernyataan Umum → Urutan Kausalitas Logis → Simpulan Solutif.",
      actionProtocol: "Publikasi infografik edukasi berslogan: 'Minumlah Sesuai Rasa Haus, Kenali Bahaya Kelebihan Air Tanpa Garam'."
    }
  ],
  conclusionSummary:
    "Projek STEM ini membuktikan bahwa kesehatan manusia adalah satu kesatuan utuh. Kita tidak bisa membedah keselamatan seorang atlet hanya dari sudut pandang Biologi saja, atau Fisika saja. Penguasaan Kimia larutan, Matematika neraca massa, kepatuhan prinsip olahraga PJOK, serta kecakapan komunikasi Bahasa Indonesia bersama-sama berhasil menyelamatkan nyawa Rian dari kesalahan diagnosis fatal."
};
