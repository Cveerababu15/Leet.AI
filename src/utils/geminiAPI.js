// Gemini API client for Leet.AI
// Uses model aliases (e.g. gemini-flash-latest) instead of version-pinned names,
// because Google retires old models (gemini-2.0-flash is gone) — aliases always
// point to the newest available flash model.

const MODELS = ["gemini-flash-latest", "gemini-flash-lite-latest"];

async function callGemini(model, prompt) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing API key. Add VITE_GEMINI_API_KEY to your .env file and restart the dev server."
    );
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: "application/json" },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let message = `HTTP ${res.status}`;
    try {
      const errorData = await res.json();
      message = errorData?.error?.message || message;
    } catch {
      /* keep the status-only message */
    }
    throw new Error(message);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    const reason = data?.promptFeedback?.blockReason;
    throw new Error(
      reason
        ? `Gemini blocked the request (${reason}).`
        : "No response from Gemini model."
    );
  }
  return text;
}

export async function fetchGeminiResponse(prompt) {
  let lastError;

  for (const model of MODELS) {
    try {
      return await callGemini(model, prompt);
    } catch (err) {
      lastError = err;
      console.error(`Gemini API error with ${model}:`, err);
    }
  }

  throw lastError;
}
