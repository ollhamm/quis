const questions = require("../data/indonesianQuestions.js");

let questionsPrisma: any;

async function seedQuestions() {
  const { PrismaClient } = require("@prisma/client");

  questionsPrisma = new PrismaClient();

  console.log("Seeding questions...");

  for (const question of questions) {
    const createdQuestion = await questionsPrisma.question.create({
      data: {
        text: question.text,
        quizId: "67dab98d97384b4543cb87fa",
        options: {
          create: question.options,
        },
        difficulty: question.difficulty,
      },
    });

    console.log(`Created question: ${createdQuestion.text}`);
  }
  console.log("Seeding questions completed.");
}

seedQuestions()
  .catch((e) => {
    console.log("Error seeding questions: ", e);
  })
  .finally(async () => {
    await questionsPrisma.$disconnect();
  });
