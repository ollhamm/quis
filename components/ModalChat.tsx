"use client";

import React, { useState } from "react";
import MergeChat from "./chat/MergeChat";
import AreaChat from "./areachat/AreaChat";
import { Ollama } from "ollama/browser";

export default function ModalChat() {
  const [messages, setMessages] = useState<
    { content: string; role: "assistant" | "user" }[]
  >([
    {
      content: "Halo! Ada yang bisa saya bantu?",
      role: "assistant",
    },
  ]);

  const handleNewMessage = async (message: string) => {
    try {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: message, role: "user" },
      ]);

      const ollama = new Ollama({ host: "http://localhost:11434" });

      const response = await ollama.chat({
        model: "deepseek-r1:1.5b",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      });

      let cleanResponse = response.message?.content || "";
      cleanResponse = cleanResponse.replace(/<think>.*?<\/think>/gs, "").trim();

      cleanResponse = cleanResponse.replace(/<[^>]+>/g, "").trim();

      setMessages((prevMessages) => [
        ...prevMessages,
        { content: cleanResponse, role: "assistant" },
      ]);
    } catch (error) {
      console.error("Error chatting with Ollama:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          content: "Sorry, I encountered an error. Please try again.",
          role: "assistant",
        },
      ]);
    }
  };

  return (
    <div className="flex w-[375px] h-[74%] flex-col">
      {/* Chat messages area */}
      <div className="flex-1 w-full mt-[4rem] mb-[4rem] overflow-hidden">
        <AreaChat messages={messages} />
      </div>

      {/* MergeChat positioned at the bottom */}
      <div className="flex justify-center items-center">
        <MergeChat onSendMessage={handleNewMessage} />
      </div>
    </div>
  );
}
