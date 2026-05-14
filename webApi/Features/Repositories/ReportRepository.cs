using webApi.Features.MockData;
using UserEntity = webApi.Features.Models.User;

namespace webApi.Features.Repositories
{
    public class ReportRepository : IReportRepository
    {
        public async Task<List<UserEntity>> GetReportDataAsync()
        {
            return await Task.FromResult(MockUsersData.Users);
        }
    }
}