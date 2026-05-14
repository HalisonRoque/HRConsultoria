namespace webApi.Features.DTOs
{
    public class DailyUsageDto
    {
        public string UserName { get; set; } = string.Empty;

        public string Day { get; set; } = string.Empty;

        public double HoursUsed { get; set; }
    }
}