import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import odinAutoImage from "../assets/odin-auto.png.png";

const steps = [
  {
    icon: "🔐",
    title: "Log in",
    text: "Sign in with your Odin Auto work account.",
  },
  {
    icon: "💬",
    title: "Ask a question",
    text: "Write your HR question in plain language, just like you would ask a colleague.",
  },
  {
    icon: "🔎",
    title: "Get an answer with sources",
    text: "See a clear answer and exactly which HR document it came from.",
  },
];

const audiences = [
  {
    title: "For employees",
    text: "Find answers about leave, policies and procedures in seconds, without searching through long documents.",
  },
  {
    title: "For HR",
    text: "Keep all HR documents in one place. When a document is updated, the answers follow.",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Intro */}
        <section
          aria-labelledby="about-heading"
          className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24"
        >
          <div className="grid items-center gap-12 rounded-3xl bg-gray-50 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16">
            <div className="text-center md:text-left">
              <p className="mb-5 text-sm font-semibold text-gray-600">
                About Odin Auto
              </p>

              <h1
                id="about-heading"
                className="mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
              >
                HR answers, without the digging.
              </h1>

              <p className="mb-4 max-w-xl text-lg leading-relaxed text-gray-700">
                Odin Auto is an internal HR knowledge assistant for the people
                who work at Odin Auto. Ask a question about company policies
                and get a clear answer based on the company's own HR documents.
              </p>

              <p className="max-w-xl leading-relaxed text-gray-700">
                Every answer shows its source, so you can always check the
                original document.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 p-3 shadow-lg">
                <img
                  src={odinAutoImage}
                  alt="Odin Auto HR Knowledge Assistant"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          aria-labelledby="how-heading"
          className="border-t border-gray-200 px-6 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="how-heading"
              className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
            >
              How it works
            </h2>

            <ol className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <div aria-hidden="true" className="mb-4 text-3xl">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    <span className="mr-2 text-gray-500">{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-gray-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who it's for */}
        <section
          aria-labelledby="audience-heading"
          className="border-t border-gray-200 bg-gray-50 px-6 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="audience-heading"
              className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
            >
              Built for Odin Auto
            </h2>

            <ul className="grid gap-6 md:grid-cols-2">
              {audiences.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-700">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call to action */}
        <section
          aria-labelledby="cta-heading"
          className="px-6 py-16 text-center md:px-10 md:py-20"
        >
          <h2
            id="cta-heading"
            className="mb-4 text-3xl font-bold tracking-tight text-gray-900"
          >
            Ready to ask your first question?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-700">
            This tool is for Odin Auto employees. Log in with your work account
            to get started.
          </p>
          <Link
            to="/login"
            className="inline-block rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white no-underline transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Log in
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;