interface ICategory {
  id: string;
  name: string;
  description: string;
  image?: string;
  quizzes: IQuiz[];
}

export interface IMaterial {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  description: string | null;
}

interface IQuiz {
  id: string;
  title: string;
  description?: string | null;
  image?: string | null;
  categoryId: string;
  questions: IQuestion[];
}

interface IQuestion {
  id: string;
  text: string;
  difficulty?: string | null;
  options: IOption[];
}

interface IResponse {
  questionId: string;
  optionId: string;
  isCorrect: boolean;
}

interface IOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface ICategoryStats {
  attempts: number;
  averageScore: number | null;
  categoryId: string;
  completed: number;
  id: string;
  lastAttempt: Date;
  userId: string;
  category: ICategory;
}

interface message {
  role: "user" | "assistant";
  content: string;
}

interface InputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required: boolean;
}

interface SubmitButtonProps {
  label: string;
  isLoading: boolean;
}

export type {
  ICategory,
  IQuiz,
  IQuestion,
  IOption,
  IResponse,
  ICategoryStats,
  message,
  InputProps,
  SubmitButtonProps,
};
