export interface GlossaryItem {
  id: string;
  termIndo: string;
  termOriginal: string;
  subject: "Biologi" | "Fisika" | "Kimia" | "Matematika" | "PJOK" | "Bahasa Indonesia";
  definition: string;
  etymologyOrContext: string;
  clinicalSignificance: string;
}

export const STEM_GLOSSARY: GlossaryItem[] = [
  {
    id: "homeostasis",
    termIndo: "Homeostasis",
    termOriginal: "Homeostasis (Yunani: homoios = serupa, stasis = berdiri tegak)",
    subject: "Biologi",
    definition:
      "Kemampuan organisme untuk mempertahankan kondisi fisik dan kimiawi lingkungan internal yang relatif konstan terlepas dari fluktuasi lingkungan eksternal.",
    etymologyOrContext: "Diperkenalkan oleh fisiolog Walter Cannon pada tahun 1926 dari konsep 'milieu intérieur' Claude Bernard.",
    clinicalSignificance:
      "Kegagalan homeostasis termal, glukosa, atau tekanan darah merupakan akar dari hampir semua penyakit kronis dan kegawatdaruratan medis."
  },
  {
    id: "hukum-poiseuille",
    termIndo: "Hukum Hagen-Poiseuille",
    termOriginal: "Poiseuille's Law of Laminar Flow",
    subject: "Fisika",
    definition:
      "Hukum fisika yang menyatakan bahwa laju volume aliran fluida laminar viskos melalui pipa silinder seragam berbanding lurus dengan beda tekanan dan jari-jari pangkat empat, serta berbanding terbalik dengan viskositas dan panjang pipa.",
    etymologyOrContext: "Diformulasikan secara independen oleh Jean Léonard Marie Poiseuille (dokter Prancis) dan Gotthilf Hagen (insinyur Jerman).",
    clinicalSignificance:
      "Menjadi landasan hemodinamika kardiologi untuk memahami bagaimana vasokonstriksi arteriol mengontrol resistensi perifer total dan tekanan darah."
  },
  {
    id: "dapar-bikarbonat",
    termIndo: "Sistem Dapar Bikarbonat",
    termOriginal: "Bicarbonate Buffer System",
    subject: "Kimia",
    definition:
      "Campuran larutan asam lemah (asam karbonat H₂CO₃) dan basa konjugatnya (ion bikarbonat HCO₃⁻) yang bekerja menetralkan penambahan asam atau basa berlebih dalam darah manusia.",
    etymologyOrContext: "Dapar adalah padanan baku bahasa Indonesia untuk kata 'buffer' dalam KBBI.",
    clinicalSignificance:
      "Menjaga pH darah arteri tetap pada batas toleransi sempit 7.35 - 7.45. Di luar rentang 6.8 - 7.8, fungsi seluler berhenti dan terjadi kematian."
  },
  {
    id: "bmr",
    termIndo: "Laju Metabolisme Basal (LMB / BMR)",
    termOriginal: "Basal Metabolic Rate (BMR)",
    subject: "Matematika",
    definition:
      "Jumlah energi minimal dalam satuan kilokalori (kkal) yang dihabiskan oleh tubuh manusia dalam keadaan istirahat total, puasa 12 jam, dan suhu lingkungan netral untuk mempertahankan fungsi organ vital.",
    etymologyOrContext: "Dihitung secara matematis menggunakan persamaan Mifflin-St Jeor atau Harris-Benedict revisi.",
    clinicalSignificance:
      "Mendasari kuantifikasi kebutuhan gizi harian, pencegahan malnutrisi rumah sakit, dan manajemen defisit kalori obesitas."
  },
  {
    id: "vo2-max",
    termIndo: "Volume Oksigen Maksimal (VO₂ Max)",
    termOriginal: "Maximal Oxygen Uptake",
    subject: "PJOK",
    definition:
      "Tingkat konsumsi oksigen maksimum yang dapat dicapai selama latihan bertahap hingga titik kelelahan, diukur dalam mililiter oksigen per kilogram berat badan per menit (mL/kg/min).",
    etymologyOrContext: "Pertama kali diteliti secara sistematis oleh A.V. Hill (pemenang Nobel 1922).",
    clinicalSignificance:
      "Tolok ukur standar emas efisiensi kardiorespiratori. Peningkatan 1 MET (setara 3.5 mL/kg/min) berkorelasi dengan penurunan risiko kematian dini sebesar 12%."
  },
  {
    id: "falasi-retoris",
    termIndo: "Falasi Retoris Medis (Kesesatan Pikir)",
    termOriginal: "Medical Rhetorical Fallacies",
    subject: "Bahasa Indonesia",
    definition:
      "Kekeliruan penalaran atau pola argumen yang manipulatif dalam wacana publik kesehatan, seperti mendasarkan khasiat obat hanya pada 'kemurnian alamiah' (naturalistic fallacy) atau testimonial subjektif tanpa kontrol ilmiah.",
    etymologyOrContext: "Berasal dari bahasa Latin 'fallacia' yang berarti tipu daya atau ilusi logika.",
    clinicalSignificance:
      "Keahlian mendeteksi falasi bahasa melindungi masyarakat dari eksploitasi obat palsu dan desinformasi anti-sains yang membahayakan jiwa."
  },
  {
    id: "osmolaritas",
    termIndo: "Osmolaritas Plasma",
    termOriginal: "Plasma Osmolarity",
    subject: "Kimia",
    definition:
      "Kadar konsentrasi partikel zat terlarut osmotik aktif per liter larutan darah, normalnya berkisar antara 275 - 295 mOsm/L.",
    etymologyOrContext: "Dari kata 'osmosis' (dorongan impuls) dan 'molaritas'.",
    clinicalSignificance:
      "Menentukan arah perpindahan air melintasi membran sel. Penurunan osmolaritas plasma memicu perpindahan cairan ke intraseluler (edema seluler)."
  },
  {
    id: "karvonen",
    termIndo: "Formula Karvonen (Cadangan Denyut Jantung)",
    termOriginal: "Karvonen Heart Rate Reserve Formula",
    subject: "Matematika",
    definition:
      "Metode matematis untuk menghitung batas denyut jantung latihan dengan mengurangi denyut nadi istirahat dari denyut nadi maksimal (HRR = MHR - RHR).",
    etymologyOrContext: "Diciptakan oleh fisiolog Finlandia Martti J. Karvonen pada tahun 1957.",
    clinicalSignificance:
      "Mencegah pembebanan berlebih pada pasien rehabilitasi jantung pasca infark miokard dan memastikan intensitas latihan berada di zona metabolik terarah."
  },
  {
    id: "ergonomi",
    termIndo: "Ergonomi Postural",
    termOriginal: "Postural Ergonomics (Yunani: ergon = kerja, nomos = hukum alam)",
    subject: "PJOK",
    definition:
      "Penerapan ilmu biomekanika untuk menyelaraskan postur tubuh dengan lingkungan aktivitas fisik agar gaya kompresi tulang belakang dan regangan ligamen minimal.",
    etymologyOrContext: "Pertama kali digunakan oleh ilmuwan Polandia Wojciech Jastrzębowski pada tahun 1857.",
    clinicalSignificance:
      "Mencegah nyeri punggung bawah kronis (chronic low back pain), degenerasi diskus tulang belakang, dan sindrom leher akibat gawai (text-neck syndrome)."
  },
  {
    id: "penyerapan-istilah",
    termIndo: "Penyerapan Istilah Ilmiah Baku",
    termOriginal: "Standardized Scientific Loanwords",
    subject: "Bahasa Indonesia",
    definition:
      "Proses integrasi kosakata keilmuan mancanegara ke dalam kaidah bahasa Indonesia resmi melalui adaptasi fonologis dan morfologis sesuai Pedoman Umum Ejaan Bahasa Indonesia (PUEBI/EYD) dan KBBI.",
    etymologyOrContext: "Dikelola oleh Badan Pengembangan dan Pembinaan Bahasa Kemendikbudristek RI.",
    clinicalSignificance:
      "Mencegah ambiguitas diagnosa antara klinisi dan masyarakat, misalnya perbedaan tegas antara 'hipertensi' (gejala tekanan darah tinggi) dan 'strok' (kerusakan vaskular serebral akut)."
  }
];
