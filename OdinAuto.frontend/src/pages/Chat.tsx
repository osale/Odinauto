import { useState, type FormEvent } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCurrentUser } from "../services/authService";
import { askQuestion, type ChatSource } from "../services/chatService";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
  sources?: ChatSource[];
}

function Chat() {
  const user = getCurrentUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = question.trim();
    if (!text || loading) return;

    setError("");
    setQuestion("");
    setLoading(true);
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", text },
    ]);

    try {
      const result = await askQuestion(text);
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: result.answer,
          sources: result.sources,
        },
      ]);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 md:py-14"
      >
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
          Hi {user.name}, what can I help you with?
        </h1>

        <p className="mb-8 text-gray-700">
          Ask a question about company policies and procedures.
        </p>

        <div
          role="log"
          aria-live="polite"
          aria-label="Conversation"
          className="mb-6 space-y-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={
                message.role === "user"
                  ? "ml-auto max-w-[85%] rounded-2xl bg-gray-900 px-4 py-3 text-white"
                  : "max-w-[85%] rounded-2xl bg-gray-100 px-4 py-3 text-gray-900"
              }
            >
              <p className="sr-only">
                {message.role === "user" ? "You asked:" : "Answer:"}
              </p>
              <p className="leading-relaxed">{message.text}</p>

              {message.sources && message.sources.length > 0 && (
                <p className="mt-3 border-t border-gray-300 pt-2 text-sm text-gray-700">
                  Source:{" "}
                  {message.sources.map((source) => source.title).join(", ")}
                </p>
              )}
            </div>
          ))}

          {loading && (
            <p className="text-gray-700" role="status">
              Looking through the documents…
            </p>
          )}
        </div>

        {error && (
          <p className="mb-4 text-red-700" role="alert">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex gap-3">
          <label htmlFor="question" className="sr-only">
            Your question
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="For example: How many vacation days do I get?"
            className="w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-800"
          />
          <button
            type="submit"
            disabled={loading || question.trim() === ""}
            className="rounded-md bg-gray-800 px-6 py-3 font-semibold text-white transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Ask
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Chat;
