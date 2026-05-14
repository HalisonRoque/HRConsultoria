namespace webApi.Features.DTOs
{
    public class FilterReportDto
    {
        public string? Client { get; set; }

        public string? Company { get; set; }

        public string? User { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }
    }
}