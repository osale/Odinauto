public class Document
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string FileType { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime UploadedAt { get; set; } = DateTime.Now;
}