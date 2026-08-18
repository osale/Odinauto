using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class DocumentsController : ControllerBase
{
    private readonly AppDbContext _context;

    public DocumentsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Document>>> GetDocuments()
    {
        return await _context.Documents.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Document>> GetDocument(int id)
    {
        var document = await _context.Documents.FindAsync(id);
        if (document == null) return NotFound();
        return document;
    }

    [HttpPost]
    public async Task<ActionResult<Document>> CreateDocument(Document document)
    {
        _context.Documents.Add(document);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetDocument), new { id = document.Id }, document);
    }
}