const API_URL = "http://localhost:5169/api/chat";

export interface ChatSource {
  id: number;
  title: string;
}

export interface ChatAnswer {
  answer: string;
  sources: ChatSource[];
}

export async function askQuestion(question: string): Promise<ChatAnswer> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });

  if (!res.ok) {
    throw new Error("Could not get an answer");
  }

  return res.json();
}
