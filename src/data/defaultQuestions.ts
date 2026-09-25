import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (20 BUTIR SOAL: NO. 1 - 20)
  // Setiap soal memiliki 4 opsi jawaban (A, B, C, D) dengan 1 jawaban benar.
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Urutan Saluran Pernapasan',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar sistem pernapasan manusia berikut!\n\nUrutan jalannya udara pernapasan yang benar saat manusia menghirup udara (inspirasi) dari lingkungan luar menuju tempat pertukaran gas di dalam tubuh adalah...',
    imageSvg: `<svg viewBox="0 0 500 240" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#eff6ff" />
      <stop offset="100%" stop-color="#dbeafe" />
    </linearGradient>
    <linearGradient id="lungGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fda4af" />
      <stop offset="100%" stop-color="#f43f5e" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="500" height="240" rx="16" fill="url(#bgGrad)" stroke="#bfdbfe" stroke-width="2" />
  <!-- Hidung & Kepala -->
  <path d="M 120 40 Q 140 40 140 60 Q 155 70 140 85 L 140 110" fill="none" stroke="#334155" stroke-width="3" stroke-linecap="round" />
  <circle cx="145" cy="78" r="4" fill="#0284c7" />
  <text x="75" y="78" font-size="11" font-weight="bold" fill="#0369a1">1. Rongga Hidung</text>
  <line x1="135" y1="78" x2="142" y2="78" stroke="#0284c7" stroke-width="2" />
  <!-- Laring & Faring -->
  <rect x="135" y="90" width="10" height="20" rx="3" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5" />
  <text x="65" y="103" font-size="11" font-weight="bold" fill="#1e40af">2. Faring & Laring</text>
  <!-- Trakea (Cincin) -->
  <path d="M 140 110 L 140 145" stroke="#64748b" stroke-width="8" stroke-linecap="round" />
  <line x1="135" y1="118" x2="145" y2="118" stroke="#ffffff" stroke-width="1.5" />
  <line x1="135" y1="126" x2="145" y2="126" stroke="#ffffff" stroke-width="1.5" />
  <line x1="135" y1="134" x2="145" y2="134" stroke="#ffffff" stroke-width="1.5" />
  <line x1="135" y1="142" x2="145" y2="142" stroke="#ffffff" stroke-width="1.5" />
  <text x="60" y="133" font-size="11" font-weight="bold" fill="#475569">3. Trakea (Tenggorokan)</text>
  <!-- Bronkus Percabangan -->
  <path d="M 140 145 Q 120 160 105 175" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round" />
  <path d="M 140 145 Q 160 160 175 175" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round" />
  <text x="210" y="155" font-size="11" font-weight="bold" fill="#334155">4. Bronkus (Cabang)</text>
  <!-- Paru-paru Kiri & Kanan -->
  <path d="M 105 155 C 80 155 60 180 70 215 C 80 225 115 225 120 210 C 125 190 120 165 105 155 Z" fill="url(#lungGrad)" opacity="0.9" stroke="#e11d48" stroke-width="1.5" />
  <path d="M 175 155 C 200 155 220 180 210 215 C 200 225 165 225 160 210 C 155 190 160 165 175 155 Z" fill="url(#lungGrad)" opacity="0.9" stroke="#e11d48" stroke-width="1.5" />
  <text x="235" y="185" font-size="11" font-weight="bold" fill="#be123c">5. Paru-Paru (Alveolus)</text>
  <!-- Panah Aliran -->
  <g transform="translate(350, 40)">
    <rect x="0" y="0" width="130" height="155" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="65" y="22" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Jalur Udara:</text>
    <text x="65" y="42" font-size="10" fill="#2563eb" text-anchor="middle">Rongga Hidung</text>
    <text x="65" y="58" font-size="9" fill="#64748b" text-anchor="middle">↓</text>
    <text x="65" y="72" font-size="10" fill="#2563eb" text-anchor="middle">Faring & Laring</text>
    <text x="65" y="88" font-size="9" fill="#64748b" text-anchor="middle">↓</text>
    <text x="65" y="102" font-size="10" fill="#2563eb" text-anchor="middle">Trakea</text>
    <text x="65" y="118" font-size="9" fill="#64748b" text-anchor="middle">↓</text>
    <text x="65" y="132" font-size="10" fill="#2563eb" text-anchor="middle">Bronkus & Alveolus</text>
  </g>
</svg>`,
    options: [
      { id: 'A', text: 'Hidung → Kerongkongan → Lambung → Paru-paru' },
      { id: 'B', text: 'Hidung → Faring → Laring → Trakea → Bronkus → Bronkiolus → Alveolus' },
      { id: 'C', text: 'Hidung → Bronkiolus → Bronkus → Trakea → Alveolus' },
      { id: 'D', text: 'Mulut → Kerongkongan → Trakea → Alveolus → Jantung' },
    ],
    correctAnswer: 'B',
    explanation: 'Urutan saluran pernapasan manusia dari luar ke dalam adalah Rongga Hidung → Faring → Laring → Trakea (batang tenggorokan) → Bronkus (cabang tenggorokan) → Bronkiolus (cabang halus) → Alveolus (kantung udara tempat pertukaran O2 dan CO2).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Rongga Hidung & Penyaringan Udara',
    difficulty: 'Mudah',
    text: 'Di dalam rongga hidung terdapat rambut-rambut halus (bulu hidung) dan selaput lendir (mukus). Fungsi utama dari rambut hidung dan selaput lendir tersebut adalah...',
    options: [
      { id: 'A', text: 'Menghasilkan gas oksigen murni untuk dialirkan ke otak' },
      { id: 'B', text: 'Menyaring debu/kotoran serta melembapkan dan menyesuaikan suhu udara pernapasan' },
      { id: 'C', text: 'Memompa udara agar bergerak lebih kencang ke dalam paru-paru' },
      { id: 'D', text: 'Menghancurkan kuman penyakit menggunakan asam lambung' },
    ],
    correctAnswer: 'B',
    explanation: 'Rambut hidung berfungsi menyaring partikel debu dan kotoran dari udara yang masuk, sedangkan selaput lendir berfungsi menangkap debu halus, melembapkan udara, dan menyesuaikan suhu udara dengan suhu tubuh manusia.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Fungsi Katup Epiglotis',
    difficulty: 'Sedang',
    text: 'Pada persimpangan antara saluran pernapasan (tenggorokan) dan saluran pencernaan (kerongkongan) terdapat sebuah katup tulang rawan bernama epiglotis. Fungsi katup epiglotis saat kita sedang menelan makanan atau minuman adalah...',
    options: [
      { id: 'A', text: 'Menutup saluran pernapasan (laring/trakea) agar makanan tidak masuk ke paru-paru dan mencegah tersedak' },
      { id: 'B', text: 'Mendorong makanan agar langsung masuk ke dalam rongga paru-paru' },
      { id: 'C', text: 'Menyerap sari makanan sebelum masuk ke lambung' },
      { id: 'D', text: 'Mengubah makanan padat menjadi cairan kaya oksigen' },
    ],
    correctAnswer: 'A',
    explanation: 'Epiglotis bertindak seperti pintu buka-tutup otomatis. Saat menelan makanan/minuman, epiglotis menutup laring (saluran napas) sehingga makanan diarahkan ke esofagus (kerongkongan) dan kita tidak tersedak.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Struktur Batang Tenggorokan (Trakea)',
    difficulty: 'Sedang',
    text: 'Trakea (batang tenggorokan) memiliki struktur yang unik berupa cincin-cincin tulang rawan berbentuk huruf C dan dilapisi oleh jaringan bersilia (rambut getar). Fungsi rambut getar (silia) pada dinding dalam trakea adalah...',
    options: [
      { id: 'A', text: 'Menyerap oksigen langsung ke dalam darah secara cepat' },
      { id: 'B', text: 'Menyapu dan mengeluarkan kotoran, debu, atau lendir ke arah atas menuju faring' },
      { id: 'C', text: 'Mendinginkan udara pernapasan yang terlalu panas' },
      { id: 'D', text: 'Membantu pembentukan sel darah merah di dalam dada' },
    ],
    correctAnswer: 'B',
    explanation: 'Silia (rambut getar) pada dinding trakea selalu bergerak bergetar secara teratur ke arah atas untuk menyapu kotoran, debu, dan mikroorganisme yang lolos dari hidung agar keluar bersama dahak atau tertelan ke saluran cerna.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Percabangan Bronkus',
    difficulty: 'Mudah',
    text: 'Saluran tenggorokan yang mengalami percabangan menjadi dua saluran, di mana satu cabang menuju ke paru-paru kanan dan satu cabang lainnya menuju ke paru-paru kiri disebut...',
    options: [
      { id: 'A', text: 'Bronkus' },
      { id: 'B', text: 'Alveolus' },
      { id: 'C', text: 'Faring' },
      { id: 'D', text: 'Diafragma' },
    ],
    correctAnswer: 'A',
    explanation: 'Trakea bercabang menjadi dua saluran utama yang disebut Bronkus (bronkus kanan dan bronkus kiri). Masing-masing bronkus masuk ke dalam paru-paru kanan dan kiri.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Pertukaran Gas di Alveolus',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar kantung udara mikroskopis di dalam paru-paru berikut!\n\nBagian yang ditunjuk merupakan gelembung-gelembung halus berdinding tipis dan dikelilingi banyak pembuluh darah kapiler. Bagian ini dinamakan...',
    imageSvg: `<svg viewBox="0 0 460 210" class="w-full max-w-sm h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="alvGrad" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fee2e2" />
      <stop offset="70%" stop-color="#fca5a5" />
      <stop offset="100%" stop-color="#f87171" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="460" height="210" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
  <!-- Saluran Bronkiolus -->
  <path d="M 80 20 L 140 80 L 160 80" fill="none" stroke="#64748b" stroke-width="12" stroke-linecap="round" />
  <text x="60" y="30" font-size="11" font-weight="bold" fill="#475569">Bronkiolus</text>
  <!-- Gugusan Alveolus (seperti anggur) -->
  <g transform="translate(140, 45)">
    <circle cx="80" cy="50" r="28" fill="url(#alvGrad)" stroke="#ef4444" stroke-width="2" />
    <circle cx="50" cy="70" r="26" fill="url(#alvGrad)" stroke="#ef4444" stroke-width="2" />
    <circle cx="105" cy="75" r="25" fill="url(#alvGrad)" stroke="#ef4444" stroke-width="2" />
    <circle cx="75" cy="95" r="27" fill="url(#alvGrad)" stroke="#ef4444" stroke-width="2" />
    <circle cx="45" cy="110" r="24" fill="url(#alvGrad)" stroke="#ef4444" stroke-width="2" />
    <circle cx="100" cy="115" r="25" fill="url(#alvGrad)" stroke="#ef4444" stroke-width="2" />
    <!-- Kapiler Darah Membelit -->
    <path d="M 25 80 Q 75 40 125 90 T 80 135" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="3,3" />
    <path d="M 30 100 Q 80 60 130 110 T 60 145" fill="none" stroke="#dc2626" stroke-width="3" />
  </g>
  <!-- Keterangan Gas O2 dan CO2 -->
  <g transform="translate(305, 55)">
    <rect x="0" y="0" width="135" height="100" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <text x="67" y="24" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Pertukaran Gas:</text>
    <text x="67" y="48" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">Oksigen (O₂) Masuk</text>
    <text x="67" y="70" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">CO₂ Keluar</text>
    <text x="67" y="88" font-size="9" fill="#64748b" text-anchor="middle">Secara Difusi</text>
  </g>
</svg>`,
    options: [
      { id: 'A', text: 'Laring' },
      { id: 'B', text: 'Alveolus' },
      { id: 'C', text: 'Trakea' },
      { id: 'D', text: 'Diafragma' },
    ],
    correctAnswer: 'B',
    explanation: 'Alveolus adalah kantung-kantung udara mikroskopis mirip buah anggur di ujung bronkiolus. Di alveolus inilah terjadi pertukaran gas oksigen (O2) ke pembuluh darah dan karbon dioksida (CO2) dikeluarkan ke udara.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Anatomi Paru-Paru (Lobus)',
    difficulty: 'Sedang',
    text: 'Paru-paru manusia terdiri atas dua bagian, yaitu paru-paru kanan (pulmo dekster) dan paru-paru kiri (pulmo sinister). Perbedaan jumlah gelambir (lobus) antara kedua bagian tersebut yang tepat adalah...',
    options: [
      { id: 'A', text: 'Paru-paru kanan memiliki 3 gelambir, sedangkan paru-paru kiri memiliki 2 gelambir' },
      { id: 'B', text: 'Paru-paru kanan memiliki 2 gelambir, sedangkan paru-paru kiri memiliki 4 gelambir' },
      { id: 'C', text: 'Paru-paru kanan dan kiri sama-sama memiliki 3 gelambir' },
      { id: 'D', text: 'Paru-paru kanan memiliki 1 gelambir, sedangkan paru-paru kiri memiliki 3 gelambir' },
    ],
    correctAnswer: 'A',
    explanation: 'Paru-paru kanan memiliki 3 lobus (gelambir atas, tengah, bawah), sedangkan paru-paru kiri memiliki 2 lobus karena ruang rongga dada sebelah kiri terbagi oleh posisi organ jantung.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Selaput Pembungkus Paru-Paru',
    difficulty: 'Mudah',
    text: 'Paru-paru dibungkus dan dilindungi oleh selaput tipis ganda yang berisi sedikit cairan pelumas agar tidak terjadi gesekan sakit dengan dinding rongga dada saat mengembang dan mengempis. Selaput tersebut bernama...',
    options: [
      { id: 'A', text: 'Perikardium' },
      { id: 'B', text: 'Pleura' },
      { id: 'C', text: 'Meninges' },
      { id: 'D', text: 'Periosteum' },
    ],
    correctAnswer: 'B',
    explanation: 'Pleura adalah selaput tipis pembungkus paru-paru. Di antara lapisan pleura terdapat cairan pleura yang berfungsi melumasi dan mengurangi gesekan saat paru-paru bernapas.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Mekanisme Inspirasi Pernapasan Dada',
    difficulty: 'Sedang',
    text: 'Saat kita melakukan inspirasi (menghirup napas) pada pernapasan dada, peristiwa yang terjadi pada otot antartulang rusuk dan rongga dada adalah...',
    options: [
      { id: 'A', text: 'Otot antartulang rusuk berelaksasi, tulang rusuk turun, rongga dada mengecil' },
      { id: 'B', text: 'Otot antartulang rusuk berkontraksi, tulang rusuk terangkat naik, rongga dada membesar' },
      { id: 'C', text: 'Otot diafragma melengkung ke atas, rongga dada menyempit' },
      { id: 'D', text: 'Otot perut menekan lambung, udara terdorong keluar' },
    ],
    correctAnswer: 'B',
    explanation: 'Pada fase inspirasi pernapasan dada, otot antartulang rusuk berkontraksi sehingga tulang rusuk terangkat ke atas, rongga dada membesar, tekanan udara di dalam paru-paru mengecil, dan udara luar mengalir masuk ke paru-paru.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Mekanisme Ekspirasi Pernapasan Dada',
    difficulty: 'Sedang',
    text: 'Saat seseorang menghembuskan napas (ekspirasi) pada pernapasan dada, apa yang menyebabkan udara keluar dari paru-paru?',
    options: [
      { id: 'A', text: 'Otot antartulang rusuk relaksasi, tulang rusuk turun, rongga dada mengecil, tekanan membesar' },
      { id: 'B', text: 'Otot diafragma mendatar secara tiba-tiba' },
      { id: 'C', text: 'Rongga dada semakin mengembang menampung banyak udara' },
      { id: 'D', text: 'Kantung alveolus menyedot udara keluar tubuh' },
    ],
    correctAnswer: 'A',
    explanation: 'Pada ekspirasi pernapasan dada: Otot antartulang rusuk relaksasi → tulang rusuk turun ke posisi semula → rongga dada mengecil → tekanan udara di paru-paru lebih tinggi dari luar → udara kaya CO2 terdorong keluar.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Pernapasan Perut (Diafragma)',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi kerja otot sekat rongga dada (diafragma) berikut!\n\nPernapasan perut adalah pernapasan yang utamanya digerakkan oleh otot diafragma. Pada saat fase inspirasi (menghirup udara), kondisi otot diafragma yang benar adalah...',
    imageSvg: `<svg viewBox="0 0 460 210" class="w-full max-w-sm h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="460" height="210" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2" />
  <!-- Panel Kiri: Inspirasi (Mendatar) -->
  <g transform="translate(30, 20)">
    <rect x="0" y="0" width="185" height="170" rx="10" fill="#ffffff" stroke="#86efac" stroke-width="1.5" />
    <text x="92" y="24" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">INSPIRASI (Masuk)</text>
    <!-- Paru membesar -->
    <path d="M 60 40 C 40 40 30 80 40 100 C 50 110 80 110 85 95 Z" fill="#fca5a5" />
    <path d="M 125 40 C 145 40 155 80 145 100 C 135 110 105 110 100 95 Z" fill="#fca5a5" />
    <!-- Diafragma Mendatar -->
    <path d="M 25 125 Q 92 135 160 125" fill="none" stroke="#16a34a" stroke-width="6" stroke-linecap="round" />
    <text x="92" y="145" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Diafragma Berkontraksi</text>
    <text x="92" y="160" font-size="9" fill="#475569" text-anchor="middle">(Bentuk Mendatar)</text>
  </g>
  <!-- Panel Kanan: Ekspirasi (Melengkung) -->
  <g transform="translate(245, 20)">
    <rect x="0" y="0" width="185" height="170" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="92" y="24" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">EKSPIRASI (Keluar)</text>
    <!-- Paru mengecil -->
    <path d="M 65 48 C 50 48 40 75 50 90 C 58 98 80 98 82 85 Z" fill="#f87171" opacity="0.7" />
    <path d="M 120 48 C 135 48 145 75 135 90 C 127 98 105 98 103 85 Z" fill="#f87171" opacity="0.7" />
    <!-- Diafragma Melengkung ke Atas -->
    <path d="M 25 135 Q 92 100 160 135" fill="none" stroke="#dc2626" stroke-width="6" stroke-linecap="round" />
    <text x="92" y="145" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Diafragma Berelaksasi</text>
    <text x="92" y="160" font-size="9" fill="#475569" text-anchor="middle">(Bentuk Melengkung ke Atas)</text>
  </g>
</svg>`,
    options: [
      { id: 'A', text: 'Otot diafragma berkontraksi sehingga posisinya menjadi mendatar' },
      { id: 'B', text: 'Otot diafragma berelaksasi sehingga melengkung ke arah atas rongga dada' },
      { id: 'C', text: 'Otot diafragma berhenti bekerja sama sekali' },
      { id: 'D', text: 'Otot diafragma mengecil dan mengeras menjadi tulang' },
    ],
    correctAnswer: 'A',
    explanation: 'Saat inspirasi pernapasan perut, otot diafragma berkontraksi sehingga diafragma yang semula melengkung menjadi mendatar. Hal ini memperbesar rongga dada ke arah bawah sehingga udara tersedot masuk ke paru-paru.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Gas Oksigen dan Metabolisme',
    difficulty: 'Mudah',
    text: 'Oksigen (O2) yang diserap oleh darah di dalam paru-paru dialirkan ke seluruh sel tubuh. Manfaat utama gas oksigen bagi sel-sel tubuh manusia adalah...',
    options: [
      { id: 'A', text: 'Mengubah makanan menjadi zat beracun' },
      { id: 'B', text: 'Membakar sari-sari makanan (proses oksidasi) untuk menghasilkan energi' },
      { id: 'C', text: 'Mendinginkan suhu darah menjadi nol derajat celsius' },
      { id: 'D', text: 'Membekukan cairan tubuh di dalam pembuluh darah' },
    ],
    correctAnswer: 'B',
    explanation: 'Oksigen diperlukan sel-sel tubuh untuk respirasi seluler (oksidasi biologi), yaitu proses pembakaran glukosa/sari makanan guna menghasilkan energi (tenaga) yang digunakan untuk beraktivitas, bergerak, dan bertumbuh.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Zat Sisa Pernapasan',
    difficulty: 'Mudah',
    text: 'Ketika manusia menghembuskan napas ke permukaan kaca cermin di pagi hari, permukaan cermin menjadi buram dan basah oleh bintik-bintik air. Hal ini membuktikan bahwa selain gas karbon dioksida (CO2), udara hasil pernapasan juga mengandung...',
    options: [
      { id: 'A', text: 'Uap air (H2O)' },
      { id: 'B', text: 'Gas nitrogen cair' },
      { id: 'C', text: 'Minyak atsiri' },
      { id: 'D', text: 'Asam klorida pekat' },
    ],
    correctAnswer: 'A',
    explanation: 'Zat sisa hasil respirasi sel yang dikeluarkan melalui paru-paru adalah gas Karbon Dioksida (CO2) dan Uap Air (H2O). Uap air akan mengembun saat menyentuh permukaan kaca yang dingin.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Penyakit Asma',
    difficulty: 'Mudah',
    text: 'Andi sering mengalami sesak napas, dada berbunyi "ngik-ngik" (mengi), dan batuk-batuk saat cuaca sangat dingin atau ketika terpapar debu tebal. Gangguan pernapasan akibat penyempitan dan hipersensitivitas saluran napas ini disebut...',
    options: [
      { id: 'A', text: 'Asma' },
      { id: 'B', text: 'Tifus' },
      { id: 'C', text: 'Rakitis' },
      { id: 'D', text: 'Sariawan' },
    ],
    correctAnswer: 'A',
    explanation: 'Asma adalah kelainan penyumbatan saluran pernapasan yang disebabkan oleh penyempitan bronkus/bronkiolus akibat alergi terhadap debu, bulu hewan, polusi, atau suhu udara dingin.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Penyakit Tuberkulosis (TBC)',
    difficulty: 'Sedang',
    text: 'Penyakit paru-paru menular yang ditandai dengan batuk berdahak berkepanjangan (lebih dari 2 minggu), kadang bercampur darah, demam berkeringat di malam hari, dan disebabkan oleh bakteri Mycobacterium tuberculosis adalah...',
    options: [
      { id: 'A', text: 'TBC (Tuberkulosis)' },
      { id: 'B', text: 'Influenza' },
      { id: 'C', text: 'Anemia' },
      { id: 'D', text: 'Polio' },
    ],
    correctAnswer: 'A',
    explanation: 'TBC (Tuberkulosis) adalah penyakit infeksi menular pada paru-paru yang disebabkan oleh bakteri Mycobacterium tuberculosis. Bakteri ini membentuk bintil-bintil pada dinding alveolus sehingga mengganggu penyerapan oksigen.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Penyakit Bronkitis',
    difficulty: 'Sedang',
    text: 'Peradangan pada lapisan lendir dinding cabang tenggorokan (bronkus) yang sering menyebabkan batuk berdahak tebal berwarna kuning kehijauan dan sesak napas disebut...',
    options: [
      { id: 'A', text: 'Bronkitis' },
      { id: 'B', text: 'Gastritis' },
      { id: 'C', text: 'Apendisitis' },
      { id: 'D', text: 'Sinusitis' },
    ],
    correctAnswer: 'A',
    explanation: 'Bronkitis adalah peradangan pada bronkus (cabang tenggorokan). Peradangan ini menghasilkan lendir berlebih yang menyumbat saluran sehingga penderita mengalami batuk berdahak dan sesak.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Bahaya Rokok & Emfisema',
    difficulty: 'Sukar',
    text: 'Kebiasaan merokok aktif maupun terpapar asap rokok orang lain (perokok pasif) dapat merusak dinding kantung alveolus secara permanen hingga kehilangan kelenturannya dan robek. Penyakit kerusakan alveolus ini disebut...',
    options: [
      { id: 'A', text: 'Emfisema' },
      { id: 'B', text: 'Influenza' },
      { id: 'C', text: 'Hipotensi' },
      { id: 'D', text: 'Rabies' },
    ],
    correctAnswer: 'A',
    explanation: 'Emfisema adalah penyakit saluran pernapasan kronis di mana kantung udara (alveolus) mengalami pembengkakan dan kerusakan dinding antar-alveolus, sehingga luas permukaan untuk pertukaran oksigen berkurang drastis.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Penyakit Pneumonia (Paru-Paru Basah)',
    difficulty: 'Sedang',
    text: 'Infeksi pada salah satu atau kedua paru-paru yang menyebabkan kantung udara (alveolus) meradang dan terisi oleh cairan atau nanah akibat bakteri Streptococcus pneumoniae atau virus disebut...',
    options: [
      { id: 'A', text: 'Pneumonia' },
      { id: 'B', text: 'Rhinitis' },
      { id: 'C', text: 'Hepatitis' },
      { id: 'D', text: 'Laringitis' },
    ],
    correctAnswer: 'A',
    explanation: 'Pneumonia (sering disebut paru-paru basah) adalah infeksi pada jaringan paru di mana alveolus terisi oleh cairan, nanah, dan sel darah putih, sehingga oksigen sulit masuk ke aliran darah.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Kadar Oksigen & Tumbuhan Hijau',
    difficulty: 'Mudah',
    text: 'Mengapa kita merasa sangat sejuk, segar, dan mudah bernapas ketika berada di bawah pohon rindang pada siang hari?',
    options: [
      { id: 'A', text: 'Karena pohon menyedot semua oksigen di sekitar kita' },
      { id: 'B', text: 'Karena pada siang hari tumbuhan melakukan fotosintesis menghasilkan gas oksigen (O2) yang melimpah' },
      { id: 'C', text: 'Karena pohon mengeluarkan gas karbon monoksida dingin' },
      { id: 'D', text: 'Karena daun pohon menyerap air dari tubuh kita' },
    ],
    correctAnswer: 'B',
    explanation: 'Tumbuhan hijau pada siang hari melakukan proses fotosintesis dengan menyerap karbon dioksida (CO2) dan melepaskan gas oksigen (O2) bersih ke udara, sehingga lingkungan di sekitar pohon terasa segar dan kaya oksigen.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Upaya Menjaga Kesehatan Organ Pernapasan',
    difficulty: 'Mudah',
    text: 'Berikut ini adalah kebiasaan hidup sehari-hari yang paling tepat untuk menjaga kesehatan paru-paru dan organ pernapasan kita adalah...',
    options: [
      { id: 'A', text: 'Sering begadang dan tidur di ruangan berdebu tanpa ventilasi udara' },
      { id: 'B', text: 'Mengenakan masker saat berkendara di jalan berdebu dan berolahraga secara teratur di udara segar' },
      { id: 'C', text: 'Menghirup asap pembakaran sampah plastik setiap sore' },
      { id: 'D', text: 'Menutup semua pintu dan jendela rumah sepanjang hari tanpa sirkulasi' },
    ],
    correctAnswer: 'B',
    explanation: 'Menggunakan masker di tempat berdebu/berpolusi dan rutin berolahraga di udara pagi yang bersih membantu mengoptimalkan kapasitas paru-paru serta mencegah masuknya partikel berbahaya ke saluran napas.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 21 - 25)
  // Siswa dapat memilih lebih dari satu jawaban yang benar (Checkbox).
  // =========================================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Saluran Pernapasan Manusia',
    difficulty: 'Sedang',
    text: 'Pilihlah DUA atau TIGA organ berikut yang merupakan bagian dari saluran pernapasan pada manusia! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Rongga Hidung' },
      { id: 'B', text: 'Trakea (Batang Tenggorokan)' },
      { id: 'C', text: 'Lambung dan Usus Halus' },
      { id: 'D', text: 'Bronkus dan Alveolus' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: 'Organ saluran pernapasan manusia terdiri dari Rongga Hidung, Faring, Laring, Trakea, Bronkus, Bronkiolus, dan Alveolus di dalam paru-paru. Lambung dan usus halus adalah organ sistem pencernaan.',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Ciri Fase Inspirasi',
    difficulty: 'Sedang',
    text: 'Ketika seseorang sedang menghirup napas dalam-dalam (inspirasi), manakah peristiwa di bawah ini yang benar-benar terjadi di dalam tubuhnya? (Pilihlah semua jawaban yang tepat!)',
    options: [
      { id: 'A', text: 'Otot antartulang rusuk berkontraksi sehingga tulang rusuk terangkat naik' },
      { id: 'B', text: 'Otot diafragma berkontraksi sehingga posisi diafragma mendatar' },
      { id: 'C', text: 'Volume rongga dada membesar dan tekanan udara di dalam paru-paru mengecil' },
      { id: 'D', text: 'Paru-paru mengecil dan memeras seluruh udara keluar tubuh' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: 'Saat inspirasi: 1) Otot antartulang rusuk kontraksi (tulang rusuk naik), 2) Otot diafragma kontraksi (mendatar), 3) Rongga dada membesar sehingga tekanan udara paru mengecil dibanding udara luar, akibatnya udara masuk.',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Ciri-Ciri Alveolus',
    difficulty: 'Sedang',
    text: 'Alveolus merupakan organ kunci tempat terjadinya pertukaran gas. Manakah ciri-ciri fisik dan fungsional dari alveolus di bawah ini yang BENAR? (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Dinding kantung alveolus sangat tipis, lembap, dan elastis' },
      { id: 'B', text: 'Dikelilingi oleh jaring-jaring pembuluh darah kapiler yang sangat rapat' },
      { id: 'C', text: 'Berfungsi sebagai tempat keluarnya keringat dari tubuh' },
      { id: 'D', text: 'Tempat difusi molekul oksigen (O2) ke dalam darah dan karbon dioksida (CO2) ke rongga alveolus' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: 'Alveolus memiliki dinding selapis yang sangat tipis dan lembap, bersentuhan erat dengan pembuluh darah kapiler, sehingga pertukaran gas O2 dan CO2 berlangsung cepat secara difusi.',
  },
  {
    id: 24,
    type: 'pgk',
    topic: 'Faktor Pemicu Gangguan Pernapasan',
    difficulty: 'Mudah',
    text: 'Kesehatan organ pernapasan dapat terganggu oleh berbagai faktor lingkungan dan kebiasaan. Manakah faktor-faktor di bawah ini yang dapat merusak saluran pernapasan? (Pilihlah semua yang benar!)',
    options: [
      { id: 'A', text: 'Menghirup asap rokok (baik sebagai perokok aktif maupun pasif)' },
      { id: 'B', text: 'Paparan gas buang knalpot kendaraan bermotor dan debu jalanan' },
      { id: 'C', text: 'Rutin berolahraga lari pagi di taman yang dipenuhi pepohonan rindang' },
      { id: 'D', text: 'Menghirup asap hasil pembakaran sampah plastik atau jerami' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: 'Asap rokok, gas buang kendaraan (karbon monoksida, partikulat), dan asap pembakaran sampah mengandung racun berbahaya yang dapat merusak silia trakea dan dinding alveolus. Berolahraga di taman asri justru menyehatkan paru-paru.',
  },
  {
    id: 25,
    type: 'pgk',
    topic: 'Tindakan Menjaga Paru-Paru',
    difficulty: 'Mudah',
    text: 'Sebagai siswa kelas 6 SD Negeri 3 Loloan Timur yang peduli kesehatan, tindakan apa saja yang dapat kamu lakukan untuk merawat organ pernapasan? (Pilihlah semua tindakan yang tepat!)',
    options: [
      { id: 'A', text: 'Membuka jendela kamar setiap pagi agar udara bersih dan sinar matahari masuk' },
      { id: 'B', text: 'Mengenakan masker pelindung saat membersihkan ruangan berdebu atau berada di jalan ramai' },
      { id: 'C', text: 'Mencoba mengisap rokok elektrik (vape) karena mengira tidak berbahaya' },
      { id: 'D', text: 'Makan makanan bergizi seimbang dan minum air putih yang cukup' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: 'Membuka jendela untuk ventilasi, memakai masker saat berdebu, dan mengonsumsi makanan bergizi menjaga daya tahan tubuh paru-paru. Rokok elektrik/vape tetap mengandung zat kimia berbahaya bagi paru-paru.',
  },

  // =========================================================================
  // BAGIAN 3: PGK KATEGORI (5 BUTIR SOAL: NO. 26 - 30)
  // Setiap soal memuat tabel pernyataan yang direspon:
  // Benar/Salah, Sesuai/Tidak Sesuai, atau Setuju/Tidak Setuju.
  // =========================================================================
  {
    id: 26,
    type: 'pgk_kategori',
    categoryResponseType: 'benar_salah',
    topic: 'Fungsi Organ Pernapasan Bagian Atas',
    difficulty: 'Sedang',
    text: 'Tentukan apakah setiap pernyataan mengenai fungsi organ pernapasan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Bulu hidung dan mukus berfungsi menyaring partikel debu serta menghangatkan udara yang masuk.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pertukaran gas oksigen dengan karbon dioksida terjadi di dalam batang tenggorokan (trakea).',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Katup epiglotis akan menutup saluran pernapasan secara otomatis ketika kita sedang menelan makanan.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (rambut hidung menyaring debu). Pernyataan 2 SALAH (pertukaran gas terjadi di alveolus, bukan di trakea). Pernyataan 3 BENAR (epiglotis mencegah makanan masuk ke paru-paru).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    categoryResponseType: 'sesuai_tidak_sesuai',
    topic: 'Mekanisme dan Dinamika Bernapas',
    difficulty: 'Sedang',
    text: 'Bacalah pernyataan mengenai proses bernapas berikut, lalu tentukan apakah SESUAI atau TIDAK SESUAI dengan konsep sains!',
    statements: [
      {
        id: 's1',
        text: 'Saat otot diafragma berkontraksi mendatar, volume rongga dada membesar dan udara masuk ke paru-paru.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Udara yang kita hembuskan keluar mengandung persentase oksigen yang lebih banyak dibanding udara yang kita hirup.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Bernapas melalui hidung jauh lebih sehat dibandingkan dengan bernapas langsung melalui rongga mulut.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 SESUAI (fase inspirasi diafragma). Pernyataan 2 TIDAK SESUAI (udara hembusan mengandung lebih banyak karbon dioksida dan lebih sedikit oksigen). Pernyataan 3 SESUAI (hidung memiliki filter bulu dan selaput lendir sedangkan mulut tidak).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    categoryResponseType: 'benar_salah',
    topic: 'Gangguan & Kelainan Pernapasan',
    difficulty: 'Sedang',
    text: 'Tentukan BENAR atau SALAH untuk setiap fakta penyakit sistem pernapasan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Penyakit asma merupakan kelainan pernapasan menular yang diakibatkan oleh infeksi virus rabies.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'TBC (Tuberkulosis) adalah penyakit infeksi paru-paru yang disebabkan oleh bakteri Mycobacterium tuberculosis.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Seseorang yang sering menghirup asap rokok orang lain (perokok pasif) juga memiliki risiko tinggi terkena penyakit paru-paru.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 SALAH (asma bukan penyakit menular, melainkan alergi/penyempitan saluran napas). Pernyataan 2 BENAR (TBC disebabkan bakteri M. tuberculosis). Pernyataan 3 BENAR (perokok pasif menghirup zat racun tar dan nikotin yang sama bahayanya).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    categoryResponseType: 'setuju_tidak_setuju',
    topic: 'Perilaku Menjaga Lingkungan Udara Bersih',
    difficulty: 'Mudah',
    text: 'Tentukan apakah kamu SETUJU atau TIDAK SETUJU dengan tindakan-tindakan berikut untuk menjaga kualitas udara pernapasan!',
    statements: [
      {
        id: 's1',
        text: 'Membakar tumpukan sampah plastik di pekarangan rumah setiap sore hari agar halaman cepat bersih.',
        correctAnswer: false,
      },
      {
        id: 's2',
        text: 'Menanam tanaman hijau peneduh di sekitar lingkungan sekolah SD Negeri 3 Loloan Timur.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Menutup mulut dan hidung dengan tisu atau lipatan siku tangan saat sedang batuk atau bersin.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 TIDAK SETUJU (membakar plastik menghasilkan gas dioksin beracun pemicu kanker paru-paru). Pernyataan 2 SETUJU (pohon memproduksi oksigen). Pernyataan 3 SETUJU (etika batuk mencegah penularan kuman ke orang lain).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    categoryResponseType: 'sesuai_tidak_sesuai',
    topic: 'Struktur Anatomi Organ Pernapasan',
    difficulty: 'Sukar',
    text: 'Tentukan apakah pernyataan mengenai struktur anatomi organ pernapasan berikut SESUAI atau TIDAK SESUAI!',
    statements: [
      {
        id: 's1',
        text: 'Paru-paru kanan manusia terdiri atas 3 gelambir (lobus), sedangkan paru-paru kiri terdiri atas 2 gelambir (lobus).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pernapasan dada menggunakan otot diafragma sebagai penggerak utama pembesaran volume rongga dada.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pleura adalah selaput pelindung yang membungkus paru-paru dari benturan dan gesekan dengan tulang rusuk.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 SESUAI (paru-paru kanan 3 lobus, paru-paru kiri 2 lobus). Pernyataan 2 TIDAK SESUAI (pernapasan dada menggunakan otot antartulang rusuk, sedangkan otot diafragma digunakan pada pernapasan perut). Pernyataan 3 SESUAI (pleura adalah selaput pembungkus paru-paru).',
  },

  // =========================================================================
  // BAGIAN 4: ISIAN SINGKAT (5 BUTIR SOAL: NO. 31 - 35)
  // Siswa mengetikkan jawaban singkat yang berupa istilah atau konsep kunci.
  // =========================================================================
  {
    id: 31,
    type: 'isian',
    topic: 'Kantung Udara Paru-Paru',
    difficulty: 'Mudah',
    text: 'Kantung-kantung udara mikroskopis di dalam paru-paru yang berbentuk mirip gugusan buah anggur dan berfungsi sebagai tempat terjadinya pertukaran gas oksigen (O2) serta karbon dioksida (CO2) disebut...',
    correctAnswer: 'Alveolus',
    acceptableAnswers: ['alveolus', 'alveoli', 'gelembung paru-paru', 'kantung alveolus'],
    explanation: 'Kantung udara tempat difusi pertukaran gas oksigen dan karbon dioksida di dalam paru-paru disebut Alveolus (bentuk jamak: Alveoli).',
  },
  {
    id: 32,
    type: 'isian',
    topic: 'Otot Pembatas Rongga Dada & Perut',
    difficulty: 'Mudah',
    text: 'Otot tipis berbentuk kubah yang membatasi rongga dada dan rongga perut serta menjadi penggerak utama pada pernapasan perut disebut otot...',
    correctAnswer: 'Diafragma',
    acceptableAnswers: ['diafragma', 'otot diafragma', 'sekat rongga dada'],
    explanation: 'Otot sekat yang membatasi rongga dada dan rongga perut adalah Diafragma. Saat mendatar, udara terhisap masuk ke paru-paru.',
  },
  {
    id: 33,
    type: 'isian',
    topic: 'Selaput Pembungkus Paru-Paru',
    difficulty: 'Sedang',
    text: 'Selaput tipis rangkap dua yang membungkus dan melindungi paru-paru dari gesekan dengan dinding dada saat mengembang dan mengempis dinamakan selaput...',
    correctAnswer: 'Pleura',
    acceptableAnswers: ['pleura', 'selaput pleura'],
    explanation: 'Selaput tipis ganda yang membungkus dan melindungi paru-paru disebut Pleura.',
  },
  {
    id: 34,
    type: 'isian',
    topic: 'Fase Menghirup Udara',
    difficulty: 'Mudah',
    text: 'Peristiwa masuknya udara kaya oksigen dari atmosfer luar ke dalam paru-paru manusia dinamakan fase...',
    correctAnswer: 'Inspirasi',
    acceptableAnswers: ['inspirasi', 'inhalasi'],
    explanation: 'Fase menghirup atau memasukkan udara ke dalam paru-paru disebut Inspirasi (atau Inhalasi), sedangkan fase mengeluarkan udara disebut Ekspirasi (atau Ekshalasi).',
  },
  {
    id: 35,
    type: 'isian',
    topic: 'Batang Tenggorokan',
    difficulty: 'Mudah',
    text: 'Saluran pernapasan berbentuk pipa memanjang yang tersusun dari cincin-cincin tulang rawan dan menghubungkan laring dengan bronkus disebut batang tenggorokan atau...',
    correctAnswer: 'Trakea',
    acceptableAnswers: ['trakea', 'batang tenggorokan', 'trachea'],
    explanation: 'Batang tenggorokan yang tersusun atas cincin tulang rawan dan memiliki silia penyapu kotoran dikenal dalam istilah ilmiah sebagai Trakea.',
  },
];
