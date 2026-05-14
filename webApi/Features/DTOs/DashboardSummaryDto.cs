namespace webApi.Features.DTOs
{
    public class DashboardSummaryDto
    {
        public double TotalActiveHours { get; set; }

        public double AverageHoursPerUser { get; set; }

        public int TotalSessions { get; set; }

        public int ActiveUsers { get; set; }

        public int InactiveUsers { get; set; }

        public double TotalMachineHours { get; set; }

        public decimal TotalEconomy { get; set; }

        public string EconomyPeriod { get; set; } = string.Empty;
    }
}