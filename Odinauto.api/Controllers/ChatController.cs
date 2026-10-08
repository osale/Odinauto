using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private static readonly char[] WordSeparators =
        [' ', ',', '.', '?', '!', ';', ':', '\n', '\r', '\t', '(', ')', '"'];

    private static readonly char[] SentenceSeparators = ['.', '!', '?', '\n', '\r'];

    private const int MinKeywordLength = 3;
    private const int MaxSources = 3;
    private const int MaxSentences = 2;

    private readonly AppDbContext _context;

    public ChatController(AppDbContext context)
    {
        _context = context;
    }

    // Keyword search over the stored HR documents. Can be swapped for an AI model later.
    [HttpPost]
    public async Task<ActionResult<ChatResponse>> Ask(ChatRequest request)
    {
        var question = request.Question.Trim();
        if (question.Length == 0)
            return BadRequest("Question is required");

        var keywords = question
            .ToLowerInvariant()
            .Split(WordSeparators, StringSplitOptions.RemoveEmptyEntries)
            .Where(word => word.Length >= MinKeywordLength)
            .Distinct()
            .ToArray();

        var documents = await _context.Documents.AsNoTracking().ToListAsync();

        var matches = documents
            .Select(document => new
            {
                Document = document,
                Score = CountMatches($"{document.Title} {document.Content}", keywords)
            })
            .Where(match => match.Score > 0)
            .OrderByDescending(match => match.Score)
            .Take(MaxSources)
            .ToList();

        if (matches.Count == 0)
        {
            return new ChatResponse(
                "I couldn't find anything about that in the HR documents. Try rephrasing your question.",
                []);
        }

        var best = matches[0].Document;
        var sentences = best.Content
            .Split(SentenceSeparators, StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
            .OrderByDescending(sentence => CountMatches(sentence, keywords))
            .Where(sentence => CountMatches(sentence, keywords) > 0)
            .Take(MaxSentences)
            .ToList();

        var answer = sentences.Count > 0
            ? string.Join(". ", sentences) + "."
            : $"See \"{best.Title}\" for more information.";

        var sources = matches
            .Select(match => new ChatSource(match.Document.Id, match.Document.Title))
            .ToList();

        return new ChatResponse(answer, sources);
    }

    private static int CountMatches(string text, string[] keywords)
    {
        var lower = text.ToLowerInvariant();
        return keywords.Count(keyword => lower.Contains(keyword));
    }
}
