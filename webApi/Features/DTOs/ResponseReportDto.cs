namespace webApi.Features.DTOs
{
    public class ResponseReportDto
    {
        public DashboardSummaryDto Summary { get; set; } = new();

        public List<UserUsageDto> Users { get; set; } = [];

        public List<DailyUsageDto> DailyUsageChart { get; set; } = [];
    }
}