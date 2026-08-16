import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCopy, FaPlay, FaSpinner } from "react-icons/fa";
import { fetchGeminiResponse } from "../utils/geminiAPI";

function LanguageSelect({ value, onChange }) {
  const languages = ["JavaScript", "Python", "Java", "C++", "TypeScript"];
  return (
    <select
      className="w-full md:w-64 rounded-lg border border-gray-600 bg-gray-900 text-gray-100 px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {languages.map((l) => (
        <option key={l} value={l}>
          {l}
        </option>
      ))}
    </select>
  );
}

function Collapsible({ title, openByDefault = false, children }) {
  const [open, setOpen] = useState(openByDefault);
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-800 transition"
      >
        <span className="font-semibold text-gray-100">{title}</span>
        <span className="text-gray-400">{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>
      {open && <div className="px-4 pb-4 pt-0 text-gray-200">{children}</div>}
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.log("Clipboard error:", err);
    }
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 text-sm text-gray-200"
      title="Copy"
    >
      <FaCopy /> {copied ? "Copied!" : "Copy"}
    </button>
  );
}

// second part
export default function MainPage() {
  const [problemText, setProblemText] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const allPatterns = [
    "Two Pointers", "Sliding Window", "Binary Search", "Recursion", "Backtracking",
    "Dynamic Programming", "Greedy", "Divide and Conquer", "Hashing", "Graph Traversal",
    "BFS", "DFS", "Topological Sort", "Union Find", "Bit Manipulation",
    "Heap / Priority Queue", "Stack", "Queue", "Prefix Sum", "Binary Tree",
    "Linked List", "Matrix Traversal", "String Matching", "Sorting", "Mathematical"
  ];

  const parseJSON = (text) => {
    try {
      const clean = text.replace(/```json|```/g, "").trim();
      return JSON.parse(clean);
    } catch {
      return { raw: text };
    }
  };

  const handleAnalyze = async () => {
    if (!problemText.trim()) return alert("Paste a problem or link first!");
    setLoading(true);
    setError(null);
    setAnalysis(null);

    const prompt = `
You are an expert DSA mentor. Analyze this LeetCode problem and return JSON strictly in this format:
{
  "category": "Algorithm Type",
  "methods": ["Method1", "Method2"],
  "best": {"approach": "Best Method", "time": "O(n)", "space": "O(1)", "explanation": "Explain why"},
  "steps": ["Step1", "Step2", "Step3", "Step4"],
  "dryRun": "Step-by-step dry run example",
  "tips": ["Tip1", "Tip2", "Tip3"],
  "codes": {
    "Python": "Code here",
    "JavaScript": "Code here",
    "C++": "Code here",
    "Java": "Code here",
    "TypeScript": "Code here"
  },
  "patterns": ["Pattern1", "Pattern2", "Pattern3"],
  "similar": ["Problem1", "Problem2"]
}
Analyze this problem in ${language}: ${problemText}
`;

    try {
      const response = await fetchGeminiResponse(prompt);
      setAnalysis(parseJSON(response));
      console.log(response);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to fetch AI response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 p-6 text-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-4 items-start border border-gray-700">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white">
               Leet.AI — Analyze LeetCode Problems Instantly
            </h1>
            <p className="text-gray-400 mt-2">
              Paste a problem or LeetCode link. Choose your language and click Analyze.  
              AI will return category, approaches, best method, and explanations beautifully formatted.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <LanguageSelect value={language} onChange={setLanguage} />
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="mt-1 w-full md:w-44 inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? <FaSpinner className="animate-spin" /> : <FaPlay />}
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl shadow-md p-4 border border-gray-700">
          <label className="text-sm text-gray-400 block mb-2">Enter LeetCode Problem</label>
          <textarea
            value={problemText}
            onChange={(e) => setProblemText(e.target.value)}
            rows={7}
            className="w-full rounded-lg border border-gray-700 bg-gray-950 p-3 text-gray-100 focus:ring-2 focus:ring-blue-500"
            placeholder="Example: LeetCode 1 - Two Sum or paste full problem statement..."
          />
          <div className="flex justify-end mt-3 gap-3">
            <button
              onClick={() => { setProblemText(""); setAnalysis(null); setError(null); }}
              className="px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-800"
            >
              Clear
            </button>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              {loading ? "Analyzing..." : "Analyze Problem"}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-900 border border-red-600 text-red-300 p-3 rounded">
            {error}
          </div>
        )}

        {analysis && (
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-blue-400 mb-2">Problem Overview</h2>
              <p><strong>Category:</strong> {analysis.category || "Not provided"}</p>
              <p className="mt-1"><strong>Approaches:</strong> {analysis.methods?.join(", ") || "No approaches listed"}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <Collapsible title="Recommended Approach" openByDefault>
                  {analysis.best ? (
                    <div className="text-sm space-y-1">
                      <p><strong>Approach:</strong> {analysis.best.approach}</p>
                      <p><strong>Time Complexity:</strong> {analysis.best.time}</p>
                      <p><strong>Space Complexity:</strong> {analysis.best.space}</p>
                      <p><strong>Explanation:</strong> {analysis.best.explanation}</p>
                    </div>
                  ) : <p>No recommendation provided</p>}
                </Collapsible>

                <Collapsible title="Applicable Algorithmic Patterns" openByDefault>
                  <div className="text-sm space-y-2">
                    <p><strong>Best Matching:</strong> {analysis.patterns?.slice(0, 3).join(", ") || "No specific patterns"}</p>
                    <details className="mt-2">
                      <summary className="cursor-pointer text-blue-400">Show All Patterns</summary>
                      <ul className="grid grid-cols-2 gap-1 mt-2 text-gray-300 text-xs">
                        {allPatterns.map((p, i) => (
                          <li key={i} className="border border-gray-700 px-2 py-1 rounded">{p}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </Collapsible>

                <Collapsible title=" Similar Problems">
                  <ul className="list-disc ml-5 text-sm">
                    {analysis.similar?.length
                      ? analysis.similar.map((p, i) => <li key={i}>{p}</li>)
                      : <li>No similar problems</li>}
                  </ul>
                </Collapsible>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <Collapsible title=" Step-by-Step Explanation" openByDefault>
                  <ol className="list-decimal ml-5 text-sm space-y-1">
                    {analysis.steps?.length
                      ? analysis.steps.map((s, i) => <li key={i}>{s}</li>)
                      : <li>No steps available</li>}
                  </ol>
                </Collapsible>

                <Collapsible title="Code Examples" openByDefault>
                  {analysis.codes && analysis.codes[language] ? (
                    <div className="bg-gray-950 border border-gray-800 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-200">{language}</h4>
                        <CopyButton text={analysis.codes[language]} />
                      </div>
                      <pre className="overflow-x-auto text-sm bg-gray-900 p-3 rounded">
                        {analysis.codes[language]}
                      </pre>
                    </div>
                  ) : (
                    <p>No code available for {language}</p>
                  )}
                </Collapsible>

                <Collapsible title="Tips & Tricks">
                  <ul className="list-disc ml-5 text-sm">
                    {analysis.tips?.length
                      ? analysis.tips.map((t, i) => <li key={i}>{t}</li>)
                      : <li>No tips provided</li>}
                  </ul>
                </Collapsible>

                <Collapsible title="Dry Run / Example Execution">
                  <pre className="text-sm bg-gray-950 border border-gray-800 p-3 rounded whitespace-pre-wrap">
                    {analysis.dryRun || "No dry run provided"}
                  </pre>
                </Collapsible>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
