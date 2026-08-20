import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import odinAutoImage from "../assets/odin-auto.png.png";
import "tailwindcss";

function Home() {
  const [started, setStarted] = useState(false);

  function getStarted() {
    setStarted(true);
  }

  return (
    <div>
      <Navbar />

      <div className="flex min-h-125 flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-15">
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
            Your HR knowledge, available instantly.
          </h1>

          <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
            Odin Auto HR Knowledge Assistant
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Ask questions about HR policies, procedures and company documents.
          </p>

          <button
            onClick={getStarted}
            className="rounded-lg bg-gray-800 px-7 py-3 font-semibold text-white transition hover:bg-gray-600"
          >
            Get Started
          </button>

          {started && <p>Welcome! Let's get started.</p>}
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src={odinAutoImage}
            alt="Odin Auto"
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </div>

      <section className="`px-15` py-10 text-center">
        <h2>How Odin Auto helps</h2>

        <div className="flex flex-col items-center justify-center gap-7 md:flex-row">
          <div className="max-w-75 flex-1 rounded-xl border border-gray-300 `p-7.5` transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">📄 HR Documents</h3>
            <p className="leading-relaxed text-gray-600">
              Store and organize important HR documents in one central place.
            </p>
          </div>

          <div className="max-w-75 flex-1 rounded-xl border border-gray-300 `p-7.5` transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">🤖 AI Assistant</h3>
            <p className="leading-relaxed text-gray-600">
              Ask questions and get answers based on your company's HR
              knowledge.
            </p>
          </div>

          <div className="max-w-75 flex-1 rounded-xl border border-gray-300 `p-7.5`transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">🔎 Source References</h3>
            <p className="leading-relaxed text-gray-600">
              See which document the AI used to provide the answer.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
