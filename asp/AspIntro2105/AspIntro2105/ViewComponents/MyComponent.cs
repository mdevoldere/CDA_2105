using AspIntro2105.Data;
using Microsoft.AspNetCore.Mvc;

namespace AspIntro2105.ViewComponents
{
    [ViewComponent]
    public class MyViewComponent : ViewComponent
    {
        VegetablesDbContext db;

        public MyViewComponent(VegetablesDbContext context)
        {
            db = context;
        }


        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(db.Vegetables.ToList());
        }
    }
}
