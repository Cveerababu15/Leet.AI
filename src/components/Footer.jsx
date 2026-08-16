import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
     <div>
          <h2 className="text-lg font-semibold text-white mb-2">Guide</h2>
          <ul className="text-sm space-y-1">
            <li>Paste your LeetCode question</li>
            <li>Select your language</li>
            <li>Click Analyze Problem</li>
            <li>Review AI’s solution & dry run</li>
          </ul>
        </div>

  
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Learn More</h2>
          <ul className="text-sm space-y-1">
            <li>Identify problem topic</li>
            <li>Suggest best approach</li>
            <li>Explain step-by-step</li>
            <li>Give code & dry run</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Social Links</h2>
          <div className="flex justify-center sm:justify-start gap-4 text-xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-3 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Leet.AI</span> — Built by Veera
      </div>
    </footer>
  );
}
