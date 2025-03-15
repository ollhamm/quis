"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGlobalContext } from "@/context/globalContext";
import { play } from "@/utils/Icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function page() {
  const router = useRouter();
  const { quizSetup, setQuizSetup, selectedQuiz, setFilteredQuestions } =
    useGlobalContext();

  useEffect(() => {
    if (!selectedQuiz) {
      router.push("/");
    }
  }, [selectedQuiz, router]);

  useEffect(() => {
    const filteredQuestions = selectedQuiz?.questions.filter(
      (q: { difficulty: string }) => {
        return (
          !quizSetup?.difficulty ||
          quizSetup?.difficulty === "unspecified" ||
          q?.difficulty.toLowerCase() === quizSetup?.difficulty.toLowerCase()
        );
      }
    );

    setFilteredQuestions(filteredQuestions);
  }, [quizSetup]);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    const maxQuestions = selectedQuiz?.questions.length || 1;

    const newCount =
      isNaN(value) || value < 1 ? 1 : Math.min(value, maxQuestions);

    setQuizSetup((prev: {}) => ({ ...prev, questionCount: newCount }));
  };

  const handleDifficultyChange = (difficulty: string) => {
    setQuizSetup((prev: {}) => ({ ...prev, difficulty }));

    console.log("Difficulty: ", difficulty);
  };

  const startQuiz = async () => {
    const selectedQuestions = selectedQuiz?.questions
      .slice(0, quizSetup?.questionCount)
      .filter((q: { difficulty: string }) => {
        return (
          quizSetup?.difficulty ||
          q.difficulty?.toLowerCase() ===
            selectedQuiz?.difficulty?.toLowerCase()
        );
      });

    if (selectedQuestions.length > 0) {
      //update the db for quiz attempt start

      try {
        await axios.post("/api/user/quiz/start", {
          categoryId: selectedQuiz?.categoryId,
          quizId: selectedQuiz?.id,
        });
      } catch (error) {
        console.log("Error starting quiz: ", error);
      }

      // pushh to the quiz page
      router.push("/quiz");
    } else {
      toast.error("No questions found for the selected criteria");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="py-[6rem] w-[50%] fixed left-1/2 top-[45%] translate-x-[-50%] translate-y-[-50%] p-6 border-2 rounded-xl shadow-[0_.5rem_0_0_rgba(0,0,0,0.1)] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Pengaturan Kuis</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="questionCount" className="text-lg">
              Jumlah Pertanyaan
            </Label>
            <Input
              type="number"
              min={1}
              id="questionCount"
              value={quizSetup?.questionCount}
              onChange={handleQuestionChange}
              max={selectedQuiz?.questions.length}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty" className="text-lg">
              Kesulitan
            </Label>

            <Select
              defaultValue="unspecified"
              onValueChange={(value) => handleDifficultyChange(value)}
            >
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unspecified">Tidak ditentukan</SelectItem>
                <SelectItem value="easy">Mudah</SelectItem>
                <SelectItem value="medium">Menengah</SelectItem>
                <SelectItem value="hard">Sulit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="w-full py-[3rem] flex items-center justify-center fixed bottom-0 left-0 bg-white">
        <Button
          variant={"blue"}
          className="px-10 py-6 font-bold text-white text-xl rounded-xl"
          onClick={startQuiz}
        >
          <span className="flex items-center gap-2">{play} Mulai</span>
        </Button>
      </div>
    </div>
  );
}

export default page;
