import Form from "../components/Form";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 text-center font-bold text-xl text-primary">
        AI Policy Generator
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}
