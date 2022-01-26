using AspIntro2105.Models;
using Microsoft.AspNetCore.Mvc;

namespace AspIntro2105.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Test()
        {
            Category cat = new Category() { Id = 1, Name = "Super Cat !" };

            return PartialView(cat);
        }
    }
}
