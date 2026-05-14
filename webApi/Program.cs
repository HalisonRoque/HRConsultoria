using webApi.Features.Repositories;
using webApi.Features.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IReportRepository, ReportRepository>();

builder.Services.AddScoped<IReportService, ReportService>();

/*Permite apenas esse servidor de front-end
Permite qualquer método (GET, POST, PUT, DELETE)*/
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
        }
    );
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI();
}

/*Redireciona requisições HTTP para HTTPS automaticamente*/
app.UseHttpsRedirection();

/*Aplica a política de CORS definida anteriormente*/
app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();