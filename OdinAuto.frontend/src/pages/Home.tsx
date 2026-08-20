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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"
        >
          <div className="grid items-center gap-12 rounded-3xl bg-gray-50 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
            {/* Hero Text */}
            <div className="text-center md:text-left">
              <p className="mb-5 text-sm font-semibold text-gray-600">
                AI-powered HR knowledge
              </p>

              <h1
                id="hero-heading"
                className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl"
              >
                Your HR knowledge,
                <span className="block">available instantly.</span>
              </h1>

              <p className="mb-12 max-w-xl text-lg leading-relaxed text-gray-700 md:text-xl">
                Ask questions about HR policies, procedures, and company
                documents and get clear answers from your organization's
                knowledge.
              </p>

              <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                <button
                  type="button"
                  onClick={getStarted}
                  className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Get Started
                </button>

                <a
                  href="#features"
                  className="rounded-lg px-6 py-3 font-semibold text-gray-800 no-underline transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Learn more
                </a>
              </div>

              {started && (
                <p
                  className="mt-10 border-t border-gray-200 pt-4 font-medium text-gray-700"
                  role="status"
                  aria-live="polite"
                >
                  Welcome! Let's get started.
                </p>
              )}
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 p-3 shadow-lg">
                <img
                  src={odinAutoImage}
                  alt="Odin Auto HR Knowledge Assistant"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="border-t border-gray-200 bg-gray-50 px-6 py-12 md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-7xl">
            {/* Section heading */}
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <h2
                id="features-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
              >
                How Odin Auto helps
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">
                Everything your team needs to find and understand HR information
                quickly.
              </p>
            </div>
            {/* Feature cards */}
            <div role="list" className="grid gap-6 md:grid-cols-3">
              {/* HR Documents */}
              <div
                role="listitem"
                className="min-h-52 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div aria-hidden="true" className="mb-5 text-3xl">
                  📄
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  HR Documents
                </h3>

                <p className="leading-relaxed text-gray-700">
                  Store and organize important HR documents in one central
                  place.
                </p>
              </div>

              {/* AI Assistant */}
              <div
                role="listitem"
                className="min-h-52 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div aria-hidden="true" className="mb-5 text-3xl">
                  🤖
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  AI Assistant
                </h3>

                <p className="leading-relaxed text-gray-700">
                  Ask questions and get answers based on your company's HR
                  knowledge.
                </p>
              </div>

              {/* Source References */}
              <div
                role="listitem"
                className="min-h-52 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div aria-hidden="true" className="mb-5 text-3xl">
                  🔎
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Source References
                </h3>

                <p className="leading-relaxed text-gray-700">
                  See which document the AI used to provide the answer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
