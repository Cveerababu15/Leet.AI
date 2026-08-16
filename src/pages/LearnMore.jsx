import React from "react";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Learn More</h1>
      <p className="text-gray-700 md:w-2/3 leading-relaxed text-lg">
        Leet.AI helps you master data structures, algorithms, and AI concepts
        through personalized practice problems, interactive hints, and detailed
        code explanations — step by step.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {["AI Hints", "Smart Practice", "Code Insights"].map((item) => (
          <div
            key={item}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{item}</h2>
            <p className="text-gray-600">
              Learn efficiently with intelligent recommendations tailored to
              your progress.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
