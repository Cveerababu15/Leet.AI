import React from "react";

export default function Guide() {
  const steps = [
    "Sign up or log in to Leet.AI.",
    "Choose your difficulty level.",
    "Start solving problems with AI-powered hints.",
    "Track your performance in real-time.",
    "Get personalized suggestions for improvement.",
    "Celebrate your growth as a coder!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8">
        How Leet.AI Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:bg-indigo-50 transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              Step {index + 1}
            </h2>
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
