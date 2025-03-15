let materialsPrisma: any;

async function addMaterials() {
  const { PrismaClient } = require("@prisma/client");

  materialsPrisma = new PrismaClient();

  const materials = [
    {
      title: "Fundamentals of Science",
      description: "Pahami dasar-dasar ilmu pengetahuan alam.",
      content:
        "Material ini akan membahas konsep dasar dalam ilmu pengetahuan, termasuk metode ilmiah.",
      categoryId: "67d5a2d5ea02deed5db15185", // Science category ID
    },
    {
      title: "Physics in Science",
      description: "Pelajari pengaruh fisika dalam fenomena ilmiah.",
      content:
        "Materi ini menjelaskan bagaimana fisika berperan dalam sains modern.",
      categoryId: "67d5a2d5ea02deed5db15185", // Science category ID
    },

    // Technology Category
    {
      title: "The Rise of Modern Technology",
      description: "Jelajahi perkembangan teknologi terbaru.",
      content: "Material ini membahas sejarah perkembangan teknologi terkini.",
      categoryId: "67d5a2d5ea02deed5db15186", // Technology category ID
    },
    {
      title: "The Internet of Things (IoT)",
      description: "Pahami konsep Internet of Things.",
      content:
        "Material ini menjelaskan tentang IoT dan penerapannya di kehidupan sehari-hari.",
      categoryId: "67d5a2d5ea02deed5db15186", // Technology category ID
    },

    // Programming Category
    {
      title: "Introduction to Programming",
      description: "Pelajari dasar-dasar pemrograman.",
      content:
        "Materi ini mengajarkan dasar-dasar pemrograman menggunakan bahasa pemrograman Python.",
      categoryId: "67d5a2d5ea02deed5db15187", // Programming category ID
    },
    {
      title: "Object-Oriented Programming",
      description: "Pahami konsep pemrograman berbasis objek.",
      content: "Material ini akan membantu Anda memahami konsep dasar OOP.",
      categoryId: "67d5a2d5ea02deed5db15187", // Programming category ID
    },

    // Computer Science Category
    {
      title: "Introduction to Algorithms",
      description: "Pahami konsep dasar algoritma.",
      content: "Materi ini akan mengajarkan tentang dasar-dasar algoritma.",
      categoryId: "67d5a2d5ea02deed5db15188", // Computer Science category ID
    },
    {
      title: "Data Structures in Computer Science",
      description: "Pelajari struktur data yang digunakan dalam ilmu komputer.",
      content: "Materi ini mencakup berbagai struktur data dan penggunaannya.",
      categoryId: "67d5a2d5ea02deed5db15188", // Computer Science category ID
    },

    // Mathematics Category
    {
      title: "Introduction to Algebra",
      description: "Pelajari dasar-dasar aljabar.",
      content: "Materi ini akan mengajarkan konsep dasar aljabar.",
      categoryId: "67d5a2d5ea02deed5db15189", // Mathematics category ID
    },
    {
      title: "Calculus Fundamentals",
      description: "Pahami dasar-dasar kalkulus.",
      content: "Materi ini mengajarkan konsep dasar kalkulus.",
      categoryId: "67d5a2d5ea02deed5db15189", // Mathematics category ID
    },

    // History Category
    {
      title: "World History Overview",
      description: "Temukan peristiwa penting dalam sejarah dunia.",
      content: "Material ini membahas sejarah dunia sejak zaman kuno.",
      categoryId: "67d5a2d5ea02deed5db1518a", // History category ID
    },
    {
      title: "History of Ancient Civilizations",
      description: "Pelajari peradaban-peradaban kuno.",
      content:
        "Materi ini menggali lebih dalam tentang peradaban kuno seperti Mesir Kuno dan Mesopotamia.",
      categoryId: "67d5a2d5ea02deed5db1518a", // History category ID
    },

    // Art Category
    {
      title: "The Evolution of Art",
      description: "Hargai perkembangan seni dari zaman ke zaman.",
      content: "Materi ini membahas evolusi seni dalam sejarah manusia.",
      categoryId: "67d5a2d6ea02deed5db1518b", // Art category ID
    },
    {
      title: "Famous Artists and Their Work",
      description: "Pelajari seniman terkenal dan karya mereka.",
      content:
        "Materi ini menggali berbagai seniman terkenal dan pengaruh karya mereka.",
      categoryId: "67d5a2d6ea02deed5db1518b", // Art category ID
    },

    // Geography Category
    {
      title: "The Continents of Earth",
      description: "Pelajari benua-benua yang ada di bumi.",
      content: "Materi ini membahas benua-benua bumi dan ciri-ciri fisiknya.",
      categoryId: "67d5a2d6ea02deed5db1518c", // Geography category ID
    },
    {
      title: "Earth's Natural Features",
      description: "Pelajari fitur geografi alam di bumi.",
      content:
        "Materi ini menjelaskan berbagai fitur alam seperti gunung, sungai, dan danau.",
      categoryId: "67d5a2d6ea02deed5db1518c", // Geography category ID
    },

    // Physics Category
    {
      title: "Newton's Laws of Motion",
      description: "Pelajari hukum-hukum gerak Newton.",
      content:
        "Materi ini menjelaskan dasar-dasar fisika melalui hukum gerak Newton.",
      categoryId: "67d5a2d6ea02deed5db1518d", // Physics category ID
    },
    {
      title: "Quantum Physics Basics",
      description: "Pelajari dasar-dasar fisika kuantum.",
      content:
        "Materi ini mengajarkan tentang konsep dasar dalam fisika kuantum.",
      categoryId: "67d5a2d6ea02deed5db1518d", // Physics category ID
    },

    // Biology Category
    {
      title: "Introduction to Biology",
      description: "Pelajari dasar-dasar biologi.",
      content:
        "Materi ini mencakup pengenalan dasar dalam biologi seperti sel dan organisme.",
      categoryId: "67d5a2d6ea02deed5db1518e", // Biology category ID
    },
    {
      title: "Human Anatomy and Physiology",
      description: "Pelajari anatomi dan fisiologi manusia.",
      content:
        "Materi ini memberikan wawasan tentang struktur dan fungsi tubuh manusia.",
      categoryId: "67d5a2d6ea02deed5db1518e", // Biology category ID
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
