// src/services/GeminiService.js
export async function generatePolicy(prompt) {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const MODEL = import.meta.env.VITE_GEMINI_MODEL;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  if (data.error) {
    console.error("Gemini API Error:", data.error);
    throw new Error(data.error.message);
  }

  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Cevap alınamadı.";
}
