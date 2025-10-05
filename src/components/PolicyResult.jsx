export default function PolicyResult({ content }) {
  return (
    <div id="policy-result" className="mt-6 p-4 bg-gray-50 rounded-xl border">
      <h3 className="text-lg font-semibold mb-2 text-primary">Oluşturulan Politika</h3>
      <div className="whitespace-pre-wrap text-sm leading-relaxed text-black">
        {content}
      </div>
    </div>
  );
}
