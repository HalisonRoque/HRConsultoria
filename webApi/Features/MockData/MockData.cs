using UserEntity = webApi.Features.Models.User;

namespace webApi.Features.MockData
{
    public static class MockUsersData
    {
        public static List<UserEntity> Users =>
        [
            new()
            {
                Id = 1,
                UserName = "Halison Roque",
                TypeUser = "Cliente",
                LastLogin = DateTime.UtcNow.AddHours(-2),
                TotalActiveHours = 18.5,
                AverageHoursPerDay = 3.1,
                MachineProcessingHours = 8.5,
                Sessions = 20,
                IsActive = true,
                ProcessedRecords = 250000,
                DailyUser =
                [
                    new() { Day = DayOfWeek.Monday, HoursUsed = 2 },
                    new() { Day = DayOfWeek.Tuesday, HoursUsed = 3 },
                    new() { Day = DayOfWeek.Wednesday, HoursUsed = 4 }
                ]
            },

            new()
            {
                Id = 2,
                UserName = "Caio Santos",
                TypeUser = "Empresa",
                LastLogin = DateTime.UtcNow.AddHours(-5),
                TotalActiveHours = 16.3,
                AverageHoursPerDay = 2.7,
                MachineProcessingHours = 7.2,
                Sessions = 17,
                IsActive = true,
                ProcessedRecords = 180000,
                DailyUser =
                [
                    new() { Day = DayOfWeek.Monday, HoursUsed = 1 },
                    new() { Day = DayOfWeek.Tuesday, HoursUsed = 2 },
                    new() { Day = DayOfWeek.Wednesday, HoursUsed = 3 }
                ]
            }
        ];
    }
}
