import { useState } from "react";
import { generatePolicy } from "../api/gemini";
import PolicyResultModal from "./PolicyResultModal";
import Navbar from "./Navbar";


export default function Form() {
  const [formData, setFormData] = useState({
    country: "Türkiye",
    sector: "",
    companyName: "",
    email: "",
    policyType: "KVKK",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const text = await generatePolicy(formData);
    setResult(text);
    setModalOpen(true); // Modal aç
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-indigo-500 to-blue-500 relative overflow-hidden">
      {/* NAVBAR */}
        <Navbar />

      {/* FORM */}
      <div className="relative flex items-center justify-center pt-32 pb-32 px-4">
        <div className="w-full max-w-lg bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-semibold text-center mb-4">AI ile Politika Oluştur</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="companyName" placeholder="Firma Adı" className="p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition" onChange={handleChange} required />
            <input name="email" placeholder="E-posta" type="email" className="p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition" onChange={handleChange} required />
            <input name="sector" placeholder="Sektör (ör: E-ticaret)" className="p-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition" onChange={handleChange} required />
            <select name="policyType" className="p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition" onChange={handleChange}>
              <option className="text-black" value="KVKK">KVKK Politikası</option>
              <option className="text-black" value="Gizlilik Politikası">Gizlilik Politikası</option>
              <option className="text-black" value="Kullanım Şartları">Kullanım Şartları</option>
              <option className="text-black" value="Çerez Politikası">Çerez Politikası</option>
            </select>
            <button
  type="submit"
  disabled={loading}
  className={`mt-2 py-3 rounded-lg font-semibold text-white transition-all duration-300 
    ${loading
      ? "bg-white/30 cursor-not-allowed flex items-center justify-center gap-2"
      : "bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 hover:opacity-90 shadow-md hover:shadow-lg"
    }`}
>
  {loading ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      Oluşturuluyor...
    </>
  ) : (
    "Politika Oluştur"
  )}
</button>
          </form>
        </div>
      </div>

      {/* MODAL */}
      <PolicyResultModal content={result} isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* FOOTER */}
      <footer className="absolute bottom-0 left-0 w-full text-center py-4 bg-white/10 backdrop-blur-md border-t border-white/20 text-white text-sm">
        © 2025 PolicyAI — Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
