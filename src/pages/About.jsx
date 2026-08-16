import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-200 to-white flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        About Leet.AI
      </h1>
      <p className="text-gray-700 text-lg md:w-2/3 leading-relaxed">
        Leet.AI is an intelligent platform built for coders who want to enhance
        their problem-solving skills. Our mission is to make coding simple,
        inspiring, and accessible to everyone by merging human creativity with
        the power of artificial intelligence.
      </p>
      <img
        src="https://leetcode.com/static/images/LeetCode_logo.png"
        alt="LeetCode"
        className="mt-8 w-48 md:w-60"
      />
    </div>
  );
}
