using Microsoft.AspNetCore.Mvc;
using webApi.Features.Services;

namespace webApi.Features.Controllers
{
    [ApiController]
    [Route("api/report")]
    public class ReportController : ControllerBase
    {
        private readonly IReportService _service;

        public ReportController(IReportService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetReport()
        {
            var result = await _service.GetReportDataAsync();

            return Ok(result);
        }
    }
}