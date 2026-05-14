using UserEntity = webApi.Features.Models.User;

namespace webApi.Features.Repositories
{
    public interface IReportRepository
    {
        Task<List<UserEntity>> GetReportDataAsync();
    }
}