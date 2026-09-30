export interface SubTopic {
  title: string;
  summary: string;
  scientificConcept: string;
  healthImpact: string;
  realLifeApplication: string;
}

export interface StemSubject {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  iconName: string;
  themeColor: string;
  accentBg: string;
  image?: string;
  leadExplanation: string;
  coreQuestion: string;
  subTopics: SubTopic[];
  curriculumHighlight: string;
}

export const STEM_SUBJECTS: StemSubject[] = [
  {
    id: "biologi",
    name: "Biologi: Fondasi Seluler & Fisiologi Organ",
    shortName: "Biologi",
    subtitle: "Struktur Kehidupan, Imunologi, dan Keseimbangan Fisiologis",
    iconName: "Dna",
    themeColor: "emerald",
    accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    image: "/src/assets/images/biology_biome_human_1790729231684.jpg",
    leadExplanation:
      "Biologi mengungkap bagaimana triliunan sel manusia bekerja secara harmonis mempertahankan homeostasis. Dari sistem kekebalan tubuh yang aktif melawan patogen hingga poros usus-otak (gut-brain axis) yang memengaruhi kesehatan mental dan fisik secara simultan.",
    coreQuestion: "Bagaimana sel dan organ mengatur keseimbangan internal tubuh ketika menghadapi stresor lingkungan?",
    curriculumHighlight: "Sel, Jaringan, Sistem Peredaran Darah, Sistem Imun, dan Ekologi Mikrobioma Manusia",
    subTopics: [
      {
        title: "Homeostasis dan Regulasi Suhu Tubuh",
        summary: "Mekanisme umpan balik negatif (negative feedback loop) mempertahankan kondisi stabil internal tubuh.",
        scientificConcept:
          "Hipotalamus berfungsi sebagai termostat biologis. Saat suhu meningkat, reseptor termal memicu vasodilatasi pembuluh darah kutan dan stimulasi kelenjar keringat. Sebaliknya, saat suhu turun, terjadi vasokonstriksi dan shivering (menggigil) untuk memproduksi panas metabolik.",
        healthImpact:
          "Kerusakan homeostasis memicu kondisi kritis seperti hipotermia (<35°C) yang menekan enzim seluler, atau heat stroke (>40°C) yang mendenaturasi protein vital.",
        realLifeApplication:
          "Strategi hidrasi dan pemilihan pakaian berventilasi bagi individu yang berolahraga di iklim tropis lembap Indonesia."
      },
      {
        title: "Imunologi: Sel T, Sel B, dan Memori Adaptif",
        summary: "Sistem pertahanan lapis ganda (innate vs adaptif) yang membedakan sel kawan dan patogen asing.",
        scientificConcept:
          "Makrofag dan sel dendritik memfagositosis patogen lalu mempresentasikan antigen kepada sel T pembantu (CD4+). Sel B kemudian berdiferensiasi menjadi sel plasma penghasil antibodi spesifik dan sel B memori yang tahan puluhan tahun.",
        healthImpact:
          "Menjaga efisiensi respon vaksinasi, mencegah penyakit autoimun, dan meminimalkan kerentanan terhadap infeksi bakteri resisten.",
        realLifeApplication:
          "Mengapa imunisasi lengkap sejak dini dan kecukupan tidur 7-8 jam sangat krusial memperkuat memori kekebalan humoral."
      },
      {
        title: "Mikrobioma Usus & Poros Usus-Otak (Gut-Brain Axis)",
        summary: "Ekosistem triliunan bakteri usus yang memproduksi neurotransmiter dan melatih kekebalan mukosa.",
        scientificConcept:
          "Bakteri usus memfermentasi serat menjadi asam lemak rantai pendek (SCFA seperti butirat) yang meregulasi permeabilitas epitel usus. Lebih dari 90% serotonin tubuh disintesis di saluran cerna dan berkomunikasi dengan otak melalui nervus vagus.",
        healthImpact:
          "Disbiosis mikrobioma usus berkorelasi erat dengan sindrom metabolik, inflamasi sistemik kronis, kecemasan, dan resistensi insulin.",
        realLifeApplication:
          "Konsumsi rutin makanan fermentasi kaya probiotik (tempe, yogurt, kefir) serta prebiotik (pisang, gandum utuh, bawang putih)."
      }
    ]
  },
  {
    id: "fisika",
    name: "Fisika: Biomekanika, Dinamika Fluida, & Energi Tubuh",
    shortName: "Fisika",
    subtitle: "Hukum Mekanika, Viskositas Darah, dan Termodinamika Manusia",
    iconName: "Activity",
    themeColor: "sky",
    accentBg: "bg-sky-50 text-sky-800 border-sky-200",
    image: "/src/assets/images/physics_biomechanics_motion_1790729243819.jpg",
    leadExplanation:
      "Tubuh manusia tunduk pada hukum-hukum fundamental fisika. Jantung adalah pompa fluida bertekanan, pembuluh darah mematuhi hukum dinamika fluida laminar dan turbulen, sedangkan kerangka serta persendian bertindak sebagai sistem pengungkit mekanis torsi.",
    coreQuestion: "Bagaimana hukum-hukum mekanika fluida dan pengungkit menentukan beban kerja jantung dan resiko cedera sendi?",
    curriculumHighlight: "Tekanan Hidrostatis, Hukum Poiseuille, Momen Gaya (Torsi), Termodinamika & Efisiensi Energi",
    subTopics: [
      {
        title: "Hukum Poiseuille & Resistensi Vaskular Jantung",
        summary: "Laju aliran darah berbanding lurus dengan radius pembuluh darah pangkat empat (Q ∝ r⁴).",
        scientificConcept:
          "Persamaan Hagen-Poiseuille: Q = (π · ΔP · r⁴) / (8 · η · L). Karena faktor r⁴, penurunan kecil sebesar 16% pada diameter pembuluh darah akibat plak kolesterol akan melipatgandakan resistensi vaskular hingga dua kali lipat, memaksa miokardium memompa jauh lebih keras.",
        healthImpact:
          "Penjelasan fisik di balik hipertensi esensial, hipertrofi ventrikel kiri, dan bahaya aterosklerosis pada arteri koroner.",
        realLifeApplication:
          "Menjelaskan secara matematis mengapa olahraga aerobik teratur yang melebarkan radius vaskular via nitrat oksida menurunkan tekanan darah secara signifikan."
      },
      {
        title: "Biomekanika Pengungkit & Torsi Tulang Belakang",
        summary: "Tulang belakang dan persendian sebagai sistem pengungkit kelas 1, 2, dan 3 yang menerima beban torsi tinggi.",
        scientificConcept:
          "Torsi (τ = F · d · sin θ). Saat mengangkat beban dengan membungkuk (punggung melengkung tanpa menekuk lutut), lengan beban (d) dari sumbu putar lumbal L5-S1 ke beban menjadi sangat panjang, menciptakan gaya kompresi hingga ratusan kilogram pada diskus intervertebralis.",
        healthImpact:
          "Pencegahan hernia nukleus pulposus (HNP / saraf terjepit) dan keausan dini sendi faset tulang belakang.",
        realLifeApplication:
          "Prinsip ergonomis mengangkat beban dengan menekuk lutut (hip hinge) agar lengan gaya beban sedekat mungkin dengan titik tumpu pusat gravitasi."
      },
      {
        title: "Hukum Termodinamika & Disipasi Panas Keringat",
        summary: "Tubuh sebagai mesin termal yang melepaskan kelebihan kalor metabolik melalui perubahan fase cair ke gas.",
        scientificConcept:
          "Kalor laten penguapan air bernilai sangat tinggi (~2.427 kJ per liter keringat pada 30°C). Ketika kelembaban udara terlalu tinggi (100% RH), tekanan uap air lingkungan jenuh sehingga laju evaporasi terhenti, menyebabkan penumpukan panas internal.",
        healthImpact:
          "Pemahaman risiko hipertermia saat berolahraga di iklim panas-lembap tanpa penggantian cairan dan pendinginan konvektif.",
        realLifeApplication:
          "Penggunaan kipas angin (konveksi paksa) dan handuk basah dingin saat pertolongan pertama sengatan panas."
      }
    ]
  },
  {
    id: "kimia",
    name: "Kimia: Biokimiawi Sel, Keseimbangan pH, & Elektrolit",
    shortName: "Kimia",
    subtitle: "Sistem Dapar Darah, Fosforilasi ATP, dan Dinamika Makronutrien",
    iconName: "FlaskConical",
    themeColor: "amber",
    accentBg: "bg-amber-50 text-amber-800 border-amber-200",
    image: "/src/assets/images/chemistry_metabolism_enzymes_1790729256274.jpg",
    leadExplanation:
      "Setiap kedipan mata, kontraksi otot, dan transmisi sinyal saraf merupakan reaksi kimia redoks dan kesetimbangan ionik. Tubuh mempertahankan rentang pH darah yang sangat ketat (7,35 - 7,45) melalui reaksi kesetimbangan asam bikarbonat.",
    coreQuestion: "Mengapa pergeseran kesetimbangan ionik mikroskopis dapat melumpuhkan fungsi fisiologis makroskopis tubuh?",
    curriculumHighlight: "Larutan Penyangga (Buffer), Kesetimbangan Kimiawi, Termokimia Energi ATP, Redoks & Radikal Bebas",
    subTopics: [
      {
        title: "Sistem Penyangga Bikarbonat Darah (Buffer Bicarbonate)",
        summary: "Kesetimbangan CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ menjaga kestabilan pH darah manusia.",
        scientificConcept:
          "Berdasarkan Persamaan Henderson-Hasselbalch: pH = 6.1 + log([HCO₃⁻] / [H₂CO₃]). Paru-paru mengontrol komponen asam melalui respirasi (membuang CO₂ dalam hitungan detik), sementara ginjal mengontrol komponen basa dengan menyerap kembali atau mengekskresi ion bikarbonat dalam hitungan jam.",
        healthImpact:
          "Mencegah asidosis metabolik/respiratorik yang menyebabkan aritmia jantung dan denaturasi enzim intraseluler.",
        realLifeApplication:
          "Mengapa bernapas cepat dan dalam secara tak terkontrol (hiperventilasi panik) menyebabkan alkalosis respiratori dengan gejala kesemutan dan pusing."
      },
      {
        title: "Fosforilasi ATP: Valuta Energi Biokimiawi",
        summary: "Pemecahan ikatan fosfoanhidrida melepaskan energi bebas gibbs (ΔG°' ≈ -30.5 kJ/mol).",
        scientificConcept:
          "Glikolisis, Siklus Krebs, dan Rantai Transpor Elektron di mitokondria memanfaatkan gradien proton (daya gerak proton) untuk mengaktifkan ATP sintase. Dalam kondisi anaerob, piruvat direduksi menjadi laktat untuk meregenerasi NAD⁺ agar glikolisis dapat berlanjut.",
        healthImpact:
          "Kapasitas produksi ATP menentukan daya tahan otot, pemulihan kelelahan, dan integritas membran seluler.",
        realLifeApplication:
          "Dasar ilmiah mengapa atlet membutuhkan jeda istirahat (rest-interval) untuk resintesis fosfokreatin otot."
      },
      {
        title: "Osmolalitas & Pompa Ion Natrium-Kalium (Na⁺/K⁺ ATPase)",
        summary: "Menjaga potensial istirahat membran (-70 mV) dan mencegah lisis seluler.",
        scientificConcept:
          "Protein transmembran memompa 3 ion Na⁺ ke luar dan 2 ion K⁺ ke dalam sel dengan menghidrolisis 1 molekul ATP. Perbedaan konsentrasi ini menciptakan gradien elektrokimiawi yang vital untuk eksitasi sel saraf dan otot rangka.",
        healthImpact:
          "Ketidakseimbangan natrium darah dapat memicu hiponatremia (pembengkakan sel otak) atau hipernatremia (penciutan sel).",
        realLifeApplication:
          "Pentingnya larutan oralit atau minuman isotonik yang seimbang osmolaritasnya saat diare berat atau latihan ketahanan panjang."
      }
    ]
  },
  {
    id: "matematika",
    name: "Matematika: Kalkulasi Metabolisme & Model Epidemiologi",
    shortName: "Matematika",
    subtitle: "Aljabar Fisiologis, Analisis Data Vital, dan Laju Perubahan",
    iconName: "Calculator",
    themeColor: "indigo",
    accentBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
    leadExplanation:
      "Matematika adalah bahasa kuantitatif kesehatan. Melalui kalkulus laju denyut jantung, aljabar linear kebutuhan kalori basal (BMR), hingga sistem persamaan diferensial model penularan penyakit (SIR), matematika memungkinkan diagnosis akurat dan personalisasi kebugaran.",
    coreQuestion: "Bagaimana formulasi matematis memprediksi tren kesehatan individu dan populasi dengan akurat?",
    curriculumHighlight: "Persamaan Linear, Fungsi Eksponensial, Kalkulus Laju Perubahan, Statistik dan Probabilitas Klinis",
    subTopics: [
      {
        title: "Persamaan Mifflin-St Jeor & Aljabar Kebutuhan Kalori",
        summary: "Menghitung Basal Metabolic Rate (BMR) dan Total Daily Energy Expenditure (TDEE).",
        scientificConcept:
          "Pria: BMR = (10 × massa/kg) + (6.25 × tinggi/cm) - (5 × usia/tahun) + 5. Wanita: BMR = (10 × massa/kg) + (6.25 × tinggi/cm) - (5 × usia/tahun) - 161. TDEE kemudian dihitung dengan mengalikan faktor aktivitas fisik (1.2 hingga 1.9).",
        healthImpact:
          "Mencegah defisit kalori terlalu ekstrim (>25%) yang memicu hilangnya massa otot tanpa lemak dan penurunan laju metabolisme adaptif.",
        realLifeApplication:
          "Menyusun program penurunan berat badan yang aman dan berkelanjutan berbasis angka nyata, bukan diet instan kelaparan."
      },
      {
        title: "Formula Karvonen & Persentase Heart Rate Reserve (HRR)",
        summary: "Penentuan zona intensitas latihan kardiovaskular secara matematis presisi.",
        scientificConcept:
          "Target HR = RHR + [% Intensitas × (MHR - RHR)], dengan MHR = 220 - usia. Metode ini jauh lebih akurat daripada %MHR konvensional karena memperhitungkan resting heart rate (RHR) yang mencerminkan tingkat adaptasi fisik seorang individu.",
        healthImpact:
          "Memastikan latihan kardio berada di zona pembakaran lemak (Zone 2: 60-70% HRR) atau ambang laktat (Zone 4: 80-90% HRR) tanpa overtraining.",
        realLifeApplication:
          "Panduan bagi pelari dan pesepeda menggunakan monitor detak jantung untuk mengoptimalkan efisiensi mitokondria."
      },
      {
        title: "Model Epidemiologi SIR & Angka Reproduksi Dasar (R₀)",
        summary: "Sistem persamaan diferensial untuk melacak laju penyebaran penyakit menular di masyarakat.",
        scientificConcept:
          "dS/dt = -βSI/N, dI/dt = βSI/N - γI, dR/dt = γI. Ambang batas kekebalan kelompok (herd immunity threshold) dirumuskan sebagai H = 1 - (1 / R₀).",
        healthImpact:
          "Membantu pembuat kebijakan menentukan target cakupan vaksinasi minimum untuk menghentikan transmisi wabah.",
        realLifeApplication:
          "Pemahaman logis mengapa kampanye vaksinasi massal membutuhkan minimal 70-85% populasi terlindungi agar transmisi penyakit berhenti."
      }
    ]
  },
  {
    id: "pjok",
    name: "PJOK: Prinsip Latihan, Kapasitas Aerobik, & Kebugaran",
    shortName: "PJOK",
    subtitle: "Adaptasi Neuromuskular, VO₂ Max, dan Ergonomi Postur",
    iconName: "Trophy",
    themeColor: "rose",
    accentBg: "bg-rose-50 text-rose-800 border-rose-200",
    leadExplanation:
      "Pendidikan Jasmani bukan sekadar berkeringat, melainkan sains aplikasi tubuh manusia. Dari prinsip FITT (Frequency, Intensity, Time, Type) hingga arsitektur tidur fase gelombang lambat (slow-wave sleep), aktivitas fisik adalah obat preventif paling manjur bagi manusia modern.",
    coreQuestion: "Bagaimana stimulus gerak yang terprogram memicu adaptasi struktural pada otot, paru-paru, dan otak?",
    curriculumHighlight: "Prinsip FITT, Kapasitas Kardiorespiratori (VO₂ Max), Ergonomi Tubuh, dan Higienitas Tidur Sirkadian",
    subTopics: [
      {
        title: "VO₂ Max & Adaptasi Kardiorespiratori Jangka Panjang",
        summary: "Volume maksimal oksigen yang dapat dikonsumsi tubuh per kilogram berat badan per menit.",
        scientificConcept:
          "VO₂ Max = Cardiac Output (Q) × Perbedaan O₂ Arteri-Vena (a-vO₂ diff). Latihan aerobik teratur memicu pembentukan kapiler darah baru (angiogenesis) di jaringan otot dan pembesaran bilik ventrikel kiri, menaikkan volume sekuncup (stroke volume).",
        healthImpact:
          "VO₂ Max adalah salah satu prediktor klinis terkuat untuk mortalitas semua penyebab (all-cause mortality) dan umur panjang aktif.",
        realLifeApplication:
          "Tes kebugaran lari 12 menit Cooper atau Beep Test di sekolah sebagai tolok ukur kapasitas fungsional jantung-paru siswa."
      },
      {
        title: "Prinsip Overload Progresif & Hipertrofi Otot",
        summary: "Mekanisme adaptasi tegangan mekanis, kerusakan mikro serat otot, dan sintesis protein.",
        scientificConcept:
          "Beban kerja yang melampaui kapasitas normal memicu jalur pensinyalan mTOR intraseluler. Sel satelit berproliferasi dan menyatu dengan serat otot yang rusak untuk menyumbangkan nukleus baru, meningkatkan luas penampang melintang miofibril.",
        healthImpact:
          "Mencegah sarkopenia (penyusutan massa otot terkait usia), meningkatkan kepadatan mineral tulang, dan mengoptimalkan sensitivitas insulin perifer.",
        realLifeApplication:
          "Pentingnya progressive overload terukur (menaikkan repetisi atau beban perlahan) disertai waktu istirahat 48 jam antar kelompok otot yang sama."
      },
      {
        title: "Ritme Sirkadian & Arsitektur Tidur untuk Pemulihan",
        summary: "Peran siklus terang-gelap, hormon melatonin, dan fase tidur Non-REM dalam regenerasi jaringan.",
        scientificConcept:
          "Nukleus suprakiasmatik di hipotalamus mengendalikan sekresi kortisol pagi hari dan melatonin malam hari. Pada fase Non-REM Tahap 3 (Deep Sleep), kelenjar pituitari melepaskan Human Growth Hormone (HGH) yang memicu perbaikan jaringan mikroskopis.",
        healthImpact:
          "Kurang tidur kronis menurunkan fungsi memori, menaikkan hormon lapar ghrelin, dan melipatgandakan risiko cedera muskuloskeletal.",
        realLifeApplication:
          "Praktik sleep hygiene: mematikan layar gadget 1 jam sebelum tidur dan menjaga suhu kamar sejuk demi kualitas tidur optimal."
      }
    ]
  },
  {
    id: "bahasa-indonesia",
    name: "Bahasa Indonesia: Literasi Kritis, Hoaks Medis, & Komunikasi",
    shortName: "Bahasa Indonesia",
    subtitle: "Dekonstruksi Pseudosains, Ejaan Medis Baku, dan Retorika Edukasi",
    iconName: "BookOpenCheck",
    themeColor: "teal",
    accentBg: "bg-teal-50 text-teal-800 border-teal-200",
    leadExplanation:
      "Informasi kesehatan yang tepat tidak akan menyelamatkan nyawa jika tidak dipahami dengan benar atau terdistorsi oleh bahasa manipulatif. Bahasa Indonesia berperan krusial dalam menyaring fakta vs klaim palsu, membakukan peristilahan medis, dan menyampaikan empati klinis.",
    coreQuestion: "Bagaimana kemahiran berbahasa dan literasi kritis melindungi masyarakat dari bahaya hoaks kesehatan?",
    curriculumHighlight: "Teks Eksplanasi Ilmiah Populer, Analisis Falasi Retoris, Pembakuan Istilah Medis KBBI/EYD, Komunikasi Empatis",
    subTopics: [
      {
        title: "Membongkar Retorika Pseudosains & Fallacy Kesehatan",
        summary: "Identifikasi bahasa bombastis, cherry-picking, dan appeal to nature dalam klaim obat instan.",
        scientificConcept:
          "Klaim sesat kerap memakai falasi 'Appeal to Nature' (beranggapan semua yang 'alami' pasti aman dan kimia sintetis selalu beracun) serta 'False Dilemma' (menolak obat resep demi ramuan rahasia). Bahasa ilmiah sejati selalu memuat batasan metodologi, dosis toksisitas, dan signifikansi statistik.",
        healthImpact:
          "Mencegah pasien menunda terapi medis esensial (seperti kemoterapi atau insulin) hanya karena termakan janji manis iklan obat palsu di media sosial.",
        realLifeApplication:
          "Pemeriksaan fakta mandiri dengan rumus 3S: Siapa yang mengklaim (otoritas?), Sumber studinya mana (peer-reviewed?), serta Sesuai akal ilmiah atau bombastis?"
      },
      {
        title: "Pembakuan Istilah Medis Asing ke Bahasa Indonesia",
        summary: "Penerapan kaidah pedoman penyerapan istilah dan Ejaan Yang Disempurnakan (EYD).",
        scientificConcept:
          "Penyerapan istilah ilmiah mengutamakan kemudahan translasi dan konsistensi morfem: 'hypertension' menjadi 'hipertensi', 'resuscitation' menjadi 'resusitasi', 'stroke' menjadi 'strok / lesatan darah', 'carbohydrate' menjadi 'karbohidrat'.",
        healthImpact:
          "Menghilangkan jurang ketidakpahaman (communication gap) antara tenaga medis dengan pasien awam yang sering bingung dengan jargon asing rumit.",
        realLifeApplication:
          "Penyusunan brosur posyandu dan puskesmas yang menggunakan padanan kata baku bahasa Indonesia yang komunikatif dan inklusif."
      },
      {
        title: "Penulisan Esai Eksplanasi Ilmiah Populer",
        summary: "Struktur teks pengenalan fenomena, rangkaian sebab-akibat objektif, dan ulasan simpulan.",
        scientificConcept:
          "Menulis sains kesehatan menuntut penggunaan konjungsi kausalitas ('karena', 'sehingga', 'mengakibatkan') dan kalimat efektif tanpa hiperbola. Informasi rumit biologi dan kimia ditransformasikan menjadi analogi konkret tanpa mengorbankan akurasi sains.",
        healthImpact:
          "Meningkatkan literasi sains publik di era banjir informasi digital sehingga masyarakat mampu membuat keputusan kesehatan rasional.",
        realLifeApplication:
          "Pembuatan infografik edukatif dan artikel kesehatan sekolah tentang bahaya rokok elektrik/vape bagi perkembangan paru remaja."
      }
    ]
  }
];
