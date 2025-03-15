const { PrismaClient } = require("@prisma/client");

let quizzesPrisma: any;

const quizzes = [
  {
    title: "Computer Science Basics",
    description: "Kuis tentang konsep dasar ilmu komputer.",
    categoryId: "67d5a2d5ea02deed5db15188", // ID kategori: Computer Science
  },
  {
    title: "Programming Fundamentals",
    description: "Uji pengetahuan Anda tentang konsep dasar pemrograman.",
    categoryId: "67d5a2d5ea02deed5db15187", // ID kategori: Programming
  },
  {
    title: "Data Structures",
    description: "Tingkatkan pemahaman Anda tentang struktur data.",
    categoryId: "67d5a2d5ea02deed5db15188", // ID kategori: Computer Science
  },
  {
    title: "Physics",
    description: "Uji pengetahuan Anda tentang fisika.",
    categoryId: "67d5a2d6ea02deed5db1518d", // ID kategori: Physics
  },
  {
    title: "Biology",
    description: "Uji pengetahuan Anda tentang biologi.",
    categoryId: "67d5a2d6ea02deed5db1518e", // ID kategori: Biology
  },
  {
    title: "Chemistry",
    description: "Uji pengetahuan Anda tentang kimia.",
    categoryId: "67d5a2d5ea02deed5db15185", // ID kategori: Science
  },
];

async function seedQuizzes() {
  quizzesPrisma = new PrismaClient();

  console.log("Menambahkan kuis...");

  for (const quiz of quizzes) {
    const kuisBaru = await quizzesPrisma.quiz.create({
      data: quiz,
    });

    console.log("Kuis berhasil dibuat: ", `${kuisBaru.title}`);
  }

  console.log("Penambahan kuis selesai.");
}

seedQuizzes()
  .catch((e) => {
    console.log("Terjadi kesalahan saat menambahkan kuis: ", e);
  })
  .finally(async () => {
    await quizzesPrisma.$disconnect();
  });
