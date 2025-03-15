"use client";
import { IMaterial } from "@/types/types";
import { book } from "@/utils/Icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  material: IMaterial;
}

function MaterialsCard({ material }: Props) {
  const router = useRouter();

  return (
    <div
      className="border-2 rounded-xl p-1 shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]
        hover:-translate-y-1 transition-transform duration-300 ease-in-out"
    >
      <div className="py-2 px-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 semi-bold text-sm flex items-center gap-2 leading-none">
            <span className="text-xl">{book}</span>
            <span>Materi Pembelajaran</span>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">{material.title}</h2>
          <p className="text-gray-600 leading-none font-semibold">
            {material.description}
          </p>
          <p className="text-gray-500 mt-8 leading-none font-medium">
            {material.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MaterialsCard;
