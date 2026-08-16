import React from "react";
import heroImg from "../assets/leetcode-code.png"; 
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-amber-300 to-yellow-100 text-gray-900">

      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Empower Your DSA Journey with <span className="text-orange-600">Leet.AI</span>
          </h1>
          <p className="text-lg text-gray-700">
            Turn complex coding problems into simple step-by-step solutions.  
            Learn the logic, understand algorithms, and grow faster — powered by AI.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
        <Link to="/Main"><button className="bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
              Get Started
            </button></Link>
           <Link to="/learn"><button className="border-2 border-orange-600 text-orange-600 px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition">
              Learn More
            </button></Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="LeetCode coding interface"
            className="w-[90%] md:w-[80%] rounded-2xl shadow-xl border-2 border-gray-300"
          />
        </div>
      </div>

    
      <div className="bg-white py-12 px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          How <span className="text-orange-600">Leet.AI</span> Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
     
          <div className="p-6 bg-orange-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-orange-700">1️⃣ Paste LeetCode Problem</h3>
            <p>Just copy & paste your problem link or question text to start the analysis.</p>
          </div>

          <div className="p-6 bg-orange-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-orange-700">2️⃣ Detect Topic</h3>
            <p>AI automatically identifies if the problem is Arrays, DP, Graphs, or others.</p>
          </div>

          <div className="p-6 bg-orange-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-orange-700">3️⃣ Generate Approaches</h3>
            <p>See multiple solution paths — from brute force to optimized logic.</p>
          </div>

          <div className="p-6 bg-orange-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-orange-700">4️⃣ Time & Space Complexity</h3>
            <p>Understand which solution saves your runtime and memory best.</p>
          </div>

          <div className="p-6 bg-orange-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-orange-700">5️⃣ Step-by-Step Explanation</h3>
            <p>Get simple algorithm flow with a dry run to visualize how it works.</p>
          </div>
          
          <div className="p-6 bg-orange-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2 text-orange-700">6️⃣ Practice & Master</h3>
            <p>Access similar LeetCode problems to strengthen your logic & skill.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
