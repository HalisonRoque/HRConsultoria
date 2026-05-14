using webApi.Features.DTOs;
using webApi.Features.Repositories;
//using UserEntity = webApi.Features.Models.User;

namespace webApi.Features.Services
{
    public class ReportService : IReportService
    {
        private readonly IReportRepository _reportRepository;
        public ReportService(IReportRepository reportRepository)
        {
            _reportRepository = reportRepository;
        }

        public async Task<ResponseReportDto> GetReportDataAsync()
        {
            var users = await _reportRepository.GetReportDataAsync();

            var totalActiveHours = users.Sum(x => x.TotalActiveHours);

            var totalMachineHours = users.Sum(x => x.MachineProcessingHours);

            var totalSessions = users.Sum(x => x.Sessions);

            var activeUsers = users.Count(x => x.IsActive);

            var inactiveUsers = users.Count(x => !x.IsActive);

            var averageHoursPerUser =
                users.Count != 0
                    ? totalActiveHours / users.Count
                    : 0;

            var userDtos = users.Select(user =>
            {
                var economy = CalculateEconomy(
                    user.ProcessedRecords,
                    user.MachineProcessingHours);

                return new UserUsageDto
                {
                    UserName = user.UserName,
                    LastLogin = user.LastLogin,
                    TotalActiveHours = user.TotalActiveHours,
                    AverageHoursPerDay = user.AverageHoursPerDay,
                    MachineProcessingHours = user.MachineProcessingHours,
                    Sessions = user.Sessions,
                    IsActive = user.IsActive,
                    EconomyGenerated = economy
                };
            }).ToList();

            var dailyUsage = users
                .SelectMany(user =>
                    user.DailyUser.Select(day => new DailyUsageDto
                    {
                        UserName = user.UserName,
                        Day = day.Day.ToString(),
                        HoursUsed = day.HoursUsed
                    }))
                .ToList();

            return new ResponseReportDto
            {
                Summary = new DashboardSummaryDto
                {
                    TotalActiveHours = totalActiveHours,
                    AverageHoursPerUser = averageHoursPerUser,
                    TotalSessions = totalSessions,
                    ActiveUsers = activeUsers,
                    InactiveUsers = inactiveUsers,
                    TotalMachineHours = totalMachineHours,
                    TotalEconomy = userDtos.Sum(x => x.EconomyGenerated),
                    EconomyPeriod = "monthly"
                },

                Users = userDtos,

                DailyUsageChart = dailyUsage
            };
        }

        private decimal CalculateEconomy(
            int processedRecords,
            double machineHours)
        {
            const decimal monthlySalary = 3000m;

            const decimal monthlyHours = 220m;

            const int humanCapacityPer8Hours = 100000;

            var hourlyRate = monthlySalary / monthlyHours;

            var manualHours = ((decimal)processedRecords / humanCapacityPer8Hours) * 8;

            var savedHours = manualHours - (decimal)machineHours;

            if (savedHours < 0)
                savedHours = 0;

            return decimal.Round(savedHours * hourlyRate, 2);
        }
    }
}