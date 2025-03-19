const indonesianQuestions = [
  {
    text: "Manakah dari kalimat berikut yang menggunakan tanda baca yang tepat?",
    options: [
      { text: "Ayah pergi ke pasar, membeli buah dan sayur", isCorrect: false },
      { text: "Ayah pergi ke pasar membeli buah, dan sayur", isCorrect: false },
      { text: "Ayah pergi ke pasar membeli buah dan sayur.", isCorrect: true },
      {
        text: "Ayah, pergi ke pasar membeli buah dan sayur.",
        isCorrect: false,
      },
    ],
    difficulty: "Easy",
  },
  {
    text: "Perhatikan kalimat berikut:\nAngin malam berbisik lembut di telingaku.\nMajas yang digunakan dalam kalimat tersebut adalah...",
    options: [
      { text: "Hiperbola", isCorrect: false },
      { text: "Personifikasi", isCorrect: true },
      { text: "Metafora", isCorrect: false },
      { text: "Litotes", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "Kalimat berikut yang menggunakan majas hiperbola adalah...",
    options: [
      { text: "Hatinya sekeras batu.", isCorrect: false },
      { text: "Aku sudah menunggu seribu tahun lamanya.", isCorrect: true },
      { text: "Senyummu seperti mentari pagi.", isCorrect: false },
      { text: "Rumah itu bagaikan istana.", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "Ciri kebahasaan dalam teks deskripsi adalah...",
    options: [
      { text: "Menggunakan kalimat langsung", isCorrect: false },
      {
        text: "Menggunakan kata-kata yang menggambarkan suasana",
        isCorrect: true,
      },
      { text: "Menggunakan kata tanya", isCorrect: false },
      { text: "Menggunakan kalimat perintah", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "Manakah yang merupakan frasa nominal dalam kalimat berikut?\nAyah membeli sepatu baru di toko dekat rumah.",
    options: [
      { text: "membeli sepatu", isCorrect: false },
      { text: "sepatu baru", isCorrect: true },
      { text: "di toko", isCorrect: false },
      { text: "dekat rumah", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "Apa yang dimaksud dengan makna konotatif dalam suatu kata?",
    options: [
      { text: "Makna yang bersifat harfiah", isCorrect: false },
      { text: "Makna yang sesuai dengan kamus", isCorrect: false },
      { text: "Makna yang bersifat kiasan atau tersirat", isCorrect: true },
      { text: "Makna yang tidak dapat diartikan", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Kalimat berikut yang mengandung klausa subordinatif adalah...",
    options: [
      {
        text: "Dia pergi ke sekolah dan belajar dengan giat.",
        isCorrect: false,
      },
      { text: "Saya akan datang jika tidak ada halangan.", isCorrect: true },
      { text: "Kami bermain bola setiap sore.", isCorrect: false },
      { text: "Mereka pergi ke pasar dan membeli sayur.", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: 'Perhatikan kalimat berikut: "Ibu memasak di dapur dengan hati-hati." Frasa "dengan hati-hati" termasuk jenis...',
    options: [
      { text: "Frasa nominal", isCorrect: false },
      { text: "Frasa adjektival", isCorrect: false },
      { text: "Frasa preposisional", isCorrect: false },
      { text: "Frasa adverbial", isCorrect: true },
    ],
    difficulty: "Medium",
  },
  {
    text: "Kalimat berikut yang menggunakan majas ironi adalah...",
    options: [
      {
        text: "Wah, tulisanmu rapi sekali sampai aku tak bisa membacanya.",
        isCorrect: true,
      },
      {
        text: "Langkahnya secepat kilat saat pulang sekolah.",
        isCorrect: false,
      },
      { text: "Dadanya lapang seperti samudra.", isCorrect: false },
      { text: "Daun-daun menari diterpa angin sore.", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Kalimat yang mengandung konjungsi kausalitas adalah...",
    options: [
      { text: "Kami tetap berangkat meskipun hujan turun.", isCorrect: false },
      { text: "Ia terlambat ke sekolah karena macet.", isCorrect: true },
      { text: "Andi suka membaca buku dan menulis cerita.", isCorrect: false },
      { text: "Kami pulang sebelum hujan turun.", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Perhatikan paragraf berikut!\nKemajuan teknologi membawa perubahan besar dalam kehidupan manusia. Di satu sisi, kemudahan dalam mengakses informasi semakin meningkat. Namun, di sisi lain, penyebaran berita bohong juga semakin sulit dikendalikan. Oleh karena itu, literasi digital menjadi keterampilan yang sangat diperlukan di era modern ini.\nPernyataan yang sesuai dengan isi paragraf tersebut adalah...",
    options: [
      {
        text: "Kemajuan teknologi hanya membawa dampak positif bagi manusia.",
        isCorrect: false,
      },
      {
        text: "Penyebaran informasi di era digital sepenuhnya dapat dikendalikan.",
        isCorrect: false,
      },
      {
        text: "Literasi digital sangat penting untuk menghadapi perkembangan teknologi.",
        isCorrect: true,
      },
      {
        text: "Perkembangan teknologi tidak berpengaruh terhadap penyebaran berita bohong.",
        isCorrect: false,
      },
    ],
    difficulty: "Hard",
  },
  {
    text: 'Perhatikan kalimat berikut!\n"Setelah berdebat panjang, akhirnya mereka mencapai kata sepakat."\nBagian kalimat yang termasuk klausa subordinatif adalah...',
    options: [
      { text: "Setelah berdebat panjang", isCorrect: true },
      { text: "Akhirnya mereka", isCorrect: false },
      { text: "Mencapai kata sepakat", isCorrect: false },
      { text: "Mereka mencapai kata sepakat", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    text: 'Bacalah kutipan puisi berikut!\n"Luka itu telah membatu di hatiku,\nNamun kenangan tetap mengalir deras,\nSeperti sungai yang tak mengenal surut."\nMajas yang dominan dalam kutipan puisi di atas adalah...',
    options: [
      { text: "Metafora dan hiperbola", isCorrect: true },
      { text: "Simile dan eufemisme", isCorrect: false },
      { text: "Paradoks dan ironi", isCorrect: false },
      { text: "Litotes dan metonimia", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    text: 'Perhatikan kalimat berikut!\n"Hanya dengan kerja keras dan tekad yang kuat, seseorang dapat mencapai kesuksesan."\nJenis kalimat tersebut berdasarkan hubungan antarunsurnya adalah...',
    options: [
      { text: "Kalimat majemuk bertingkat", isCorrect: true },
      { text: "Kalimat majemuk setara", isCorrect: false },
      { text: "Kalimat simpleks", isCorrect: false },
      { text: "Kalimat kompleks parataktik", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    text: "Perhatikan pernyataan berikut!\n(1) Langit tampak mendung sejak pagi.\n(2) Jika hujan turun, maka jalanan akan licin.\n(3) Para siswa berlatih menari dengan penuh semangat.\n(4) Buku ini sangat inspiratif dan banyak mengandung nilai moral.\nKalimat yang mengandung konjungsi korelatif adalah...",
    options: [
      { text: "(1)", isCorrect: false },
      { text: "(2)", isCorrect: true },
      { text: "(3)", isCorrect: false },
      { text: "(4)", isCorrect: false },
    ],
    difficulty: "Hard",
  },
];

module.exports = indonesianQuestions;
