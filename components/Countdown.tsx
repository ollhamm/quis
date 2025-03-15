"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  intitialTimeLeft: number;
}

function Countdown({ intitialTimeLeft }: Props) {
  const [timeLeft, setTimeLeft] = React.useState(intitialTimeLeft);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.refresh();
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <p>
      Please try again in{" "}
      <span className="text-2xl text-blue-400 font-bold">{timeLeft}</span>{" "}
      seconds. This page will automatically refresh.
    </p>
  );
}

export default Countdown;
