using webApi.Features.DTOs;

namespace webApi.Features.Services
{
    public interface IReportService
    {
        Task<ResponseReportDto> GetReportDataAsync();
    }
}