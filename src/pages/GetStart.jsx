import React from "react";
import { Link } from "react-router-dom";
export default function GetStart() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl font-bold text-green-600 mb-4">Get Started</h1>
      <p className="text-lg text-gray-700 mb-8 md:w-2/3">
        Begin your coding journey with Leet.AI — where challenges meet clarity.
        Start with easy problems, learn from detailed AI explanations, and grow
        into a confident problem solver.
      </p>
<Link to="/Main"><button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
        Start Solving Now
      </button></Link>
    </div>
  );
}
