using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AspIntro2105.Data;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<VegetablesDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("VegetablesDbContext")));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
    // http://mondomaine.com/controller/action/id

app.Run();
