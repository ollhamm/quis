let materialsPrisma: any;

async function addMaterials() {
  const { PrismaClient } = require("@prisma/client");

  materialsPrisma = new PrismaClient();

  const materials = [
    {
      title: "Materi Bahasa Indonesia",
      description: "Tanda Baca dan Struktur Kalimat",
      content:
        'Tanda baca berperan penting dalam penulisan bahasa Indonesia yang baik dan benar. Kalimat yang tepat memerlukan tanda titik (.) di akhir kalimat deklaratif. Penggunaan koma (,) digunakan untuk memisahkan bagian-bagian kalimat, namun harus ditempatkan dengan tepat agar tidak memutus kesatuan frasa.Dalam struktur kalimat, frasa adalah gabungan dua kata atau lebih yang tidak melebihi batas fungsi. Beberapa jenis frasa meliputi frasa nominal (gabungan kata yang memiliki inti berupa kata benda), frasa adverbial (keterangan), dan frasa preposisional (kata depan).Klausa dan Jenis KalimatKlausa adalah satuan gramatikal yang sekurang-kurangnya terdiri dari subjek dan predikat. Klausa subordinatif adalah klausa yang tidak dapat berdiri sendiri dan berfungsi sebagai bagian dari klausa lainnya. Contohnya "setelah berdebat panjang" dalam kalimat "Setelah berdebat panjang, akhirnya mereka mencapai kata sepakat."Kalimat dalam bahasa Indonesia dapat diklasifikasikan berdasarkan hubungan antarunsurnya, seperti kalimat simpleks (tunggal), kalimat majemuk setara, dan kalimat majemuk bertingkat. Kalimat majemuk bertingkat memiliki hubungan induk kalimat dan anak kalimat.KonjungsiKonjungsi adalah kata penghubung yang menghubungkan kata, frasa, klausa, atau kalimat. Beberapa jenis konjungsi: Konjungsi kausalitas: menunjukkan hubungan sebab-akibat (karena, sebab) Konjungsi korelatif: berpasangan dan saling berhubungan (jika...maka, baik...maupun)Majas (Gaya Bahasa)Majas adalah cara penutur mengungkapkan maksud dengan gaya bahasa untuk menimbulkan efek tertentu. Beberapa jenis majas: Personifikasi: memberikan sifat-sifat manusia pada benda mati Hiperbola: pernyataan berlebihan untuk memberikan kesan mendalam Metafora: perbandingan langsung tanpa kata pembanding Simile: perbandingan dengan kata pembanding seperti, bagai, bagaikan Ironi: sindiran dengan menyatakan sesuatu bertentangan dengan maksud sebenarnyaJenis Teks dan Ciri KebahasaanTeks deskripsi adalah teks yang menggambarkan objek, tempat, atau peristiwa secara detail. Ciri kebahasaan teks deskripsi antara lain menggunakan kata-kata yang menggambarkan suasana untuk memberikan kesan dan pengalaman kepada pembaca.Makna KataKata dapat memiliki makna denotatif (makna sebenarnya/harfiah) atau konotatif (makna kiasan/tersirat). Makna konotatif sering muncul berdasarkan konteks budaya, situasi, atau pengalaman masyarakat.Literasi dan Perkembangan TeknologiDi era digital, kemampuan literasi digital menjadi penting dalam menghadapi perkembangan teknologi. Kemajuan teknologi membawa kemudahan akses informasi tetapi juga risiko penyebaran berita bohong, sehingga kemampuan menganalisis dan memverifikasi informasi menjadi keterampilan yang sangat diperlukan.',
      categoryId: "67d5a2d6ea02deed5db1518c",
    },
  ];

  console.log("Adding Materials...");

  for (const material of materials) {
    await materialsPrisma.material.create({
      data: material,
    });
  }

  console.log("Materials Added Successfully!");
}

addMaterials()
  .catch((e) => {
    console.log("Error Adding Materials: ", e);
  })
  .finally(async () => {
    await materialsPrisma.$disconnect();
  });
