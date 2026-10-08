public record ChatRequest(string Question);

public record ChatSource(int Id, string Title);

public record ChatResponse(string Answer, List<ChatSource> Sources);
