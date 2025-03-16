"use client";

import HomeCard from "@/components/quiz/HomeCard";
import { useGlobalContext } from "@/context/globalContext";
import Loader from "@/components/Loader";
import { ICategory } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { categories } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categories.length > 0) {
      setIsLoading(false);
    }
  }, [categories]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Katalog Kuis</h1>

      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {categories.map((category: ICategory) => (
          <HomeCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
