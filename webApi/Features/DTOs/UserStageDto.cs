namespace webApi.Features.DTOs
{
    public class UserUsageDto
    {
        public string UserName { get; set; } = string.Empty;

        public string UserType { get; set; } = string.Empty;

        public DateTime LastLogin { get; set; }

        public double TotalActiveHours { get; set; }

        public double AverageHoursPerDay { get; set; }

        public double MachineProcessingHours { get; set; }

        public int Sessions { get; set; }

        public bool IsActive { get; set; }

        public decimal EconomyGenerated { get; set; }
    }
}