import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generatePolicy(data) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-latest" });

  const prompt = `
  Bir ${data.country} sitesine ait ${data.sector} sektöründe faaliyet gösteren
  bir web sitesi için ${data.policyType} oluştur.
  Firma adı: ${data.companyName}, iletişim: ${data.email}.
  Türkçe, yasal, anlaşılır ve sade bir metin oluştur.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
