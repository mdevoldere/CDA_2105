using Microsoft.AspNetCore.Mvc;

namespace AspIntro2105.Controllers
{
    public class TestController : Controller
    {
        public string Index()
        {
            return "Hello World";
        }

        public string Toto()
        {
            return "<h1>Toto</h1>";
        }

        public IActionResult Barry()
        {
            return View();
        }

        public IActionResult Oliver()
        {
            ViewData["name"] = "Olivier";
            ViewBag.master = "Jocelyn";
            
            return View("Pascal");

        }
    }
}
