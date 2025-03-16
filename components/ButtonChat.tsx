"use client";
import React, { useState } from "react";
import ModalChat from "./ModalChat";

function ButtonChat() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="fixed bottom-4 pt-4 right-6 z-50">
      {isModalOpen && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <ModalChat />
        </div>
      )}
      <button
        onClick={toggleModal}
        className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-6 rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat"
      >
        <i className="fa-regular fa-comment-dots text-2xl"></i>
      </button>
    </div>
  );
}

export default ButtonChat;
