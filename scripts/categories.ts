let categsPrisma: any;

async function addCategories() {
  const { PrismaClient } = require("@prisma/client");

  categsPrisma = new PrismaClient();

  const categories = [
    {
      name: "Science",
      description:
        "Ilmu pengetahuan adalah pencarian dan penerapan pengetahuan serta pemahaman tentang dunia alam dan sosial dengan mengikuti metodologi sistematis yang berdasarkan bukti.",
    },
    {
      name: "Technology",
      description: "Jelajahi perkembangan teknologi terbaru.",
    },
    {
      name: "Programming",
      description:
        "Pelajari tentang pengkodean dan pengembangan perangkat lunak.",
    },
    {
      name: "Computer Science",
      description: "Pahami dasar-dasar komputer dan algoritma.",
    },
    {
      name: "Mathematics",
      description: "Kuasi bahasa angka dan pola.",
    },
    {
      name: "History",
      description: "Temukan peristiwa yang membentuk dunia kita.",
    },
    {
      name: "Art",
      description: "Hargai kreativitas melalui berbagai bentuk seni.",
    },
    {
      name: "Geography",
      description: "Jelajahi fitur fisik planet kita.",
    },
    {
      name: "Physics",
      description: "Ungkap hukum-hukum yang mengatur alam semesta.",
    },
    { name: "Biology", description: "Pelajari ilmu tentang organisme hidup." },
  ];

  console.log("Adding Categories...");

  for (const category of categories) {
    await categsPrisma.category.create({
      data: category,
    });
  }

  console.log("Categories Added Successfully!");
}

addCategories()
  .catch((e) => {
    console.log("Error Adding Categories: ", e);
  })
  .finally(async () => {
    await categsPrisma.$disconnect();
  });
