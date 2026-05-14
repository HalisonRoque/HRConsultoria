using System.ComponentModel.DataAnnotations;
using DailyUserEntity = webApi.Features.Models.DailyUser;

namespace webApi.Features.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string UserName { get; set; } = string.Empty;

        [Required]
        public string TypeUser { get; set; } = string.Empty;

        public DateTime LastLogin { get; set; }

        public double TotalActiveHours { get; set; }

        public double AverageHoursPerDay { get; set; }

        public double MachineProcessingHours { get; set; }

        public int Sessions { get; set; }

        public bool IsActive { get; set; }

        public int ProcessedRecords { get; set; }

        public List<DailyUserEntity> DailyUser { get; set; } = [];
    }
}