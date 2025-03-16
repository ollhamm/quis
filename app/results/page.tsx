"use client";
import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/globalContext";
import { play } from "@/utils/Icons";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  const { quizResponses, selectedQuiz } = useGlobalContext();

  if (!quizResponses || quizResponses.length === 0) {
    return router.push("/"); /// redirect to home page
  }

  // calculate the score
  const correctAnswers = quizResponses.filter(
    (res: { isCorrect: boolean }) => res.isCorrect
  ).length;

  const totalQuestions = quizResponses.length;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  // Show message for the score
  let message = "";

  if (scorePercentage < 25) {
    message = "Anda harus berusaha lebih keras!";
  } else if (scorePercentage >= 25 && scorePercentage < 50) {
    message = "Kau sudah sampai di sana! Teruslah berlatih.";
  } else if (scorePercentage >= 50 && scorePercentage < 75) {
    message = "Usaha yang bagus! Anda berada di atas rata-rata.";
  } else if (scorePercentage >= 75 && scorePercentage < 100) {
    message = "Kerja bagus! Anda hampir mendekati sempurna!";
  } else if (scorePercentage === 100) {
    message = "Luar biasa! Kau melakukan semuanya dengan benar!";
  }

  return (
    <div className="py-20 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">Hasil Kuis</h1>

      <p className="text-2xl text-center mt-4">
        Anda mencetak gol <span className="font-bold">{correctAnswers}</span>{" "}
        dari {""}
        <span className="font-bold text-3xl">{totalQuestions}</span> {""}
      </p>

      <p className="text-blue-400 font-bold text-4xl text-center">
        {scorePercentage.toFixed()}%
      </p>

      <p className="text-2xl text-center mt-2 font-semibold">{message}</p>

      <div className="flex justify-center mt-8">
        <Button
          variant={"green"}
          className="px-10 py-6 font-bold text-white text-xl rounded-xl"
          onClick={() => router.push("/quiz/setup/" + `${selectedQuiz.id}`)}
        >
          {play} Mainkan Lagi
        </Button>
      </div>
    </div>
  );
}

export default page;
