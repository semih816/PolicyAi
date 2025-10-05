import { useState } from "react";
import Markdown from "markdown-to-jsx";

export default function PolicyResultModal({ content, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-24 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full p-6 shadow-2xl overflow-y-auto max-h-[80vh]">
        <h3 className="text-2xl font-bold mb-4 text-white text-primary">Oluşturulan Politika</h3>

        <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-100 leading-relaxed">
          <Markdown>{content}</Markdown>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handleCopy}
            className="py-2 px-4 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
          >
            {copied ? "Kopyalandı!" : "Kopyala"}
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 rounded-lg bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 text-white hover:opacity-90 transition"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
