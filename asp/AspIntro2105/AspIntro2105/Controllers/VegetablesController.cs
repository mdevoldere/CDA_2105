using AspIntro2105.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspIntro2105.Controllers
{
    public class VegetablesController : Controller 
    {
        static private readonly List<Vegetable> vegetables;

        static VegetablesController()
        {
            vegetables = new List<Vegetable>();

            Vegetable banane = new Vegetable()
            {
                VegetableId = 1,
                Name = "Banane",
                Family = "F",
                Price = 5.99
            };

            Vegetable orange = new Vegetable()
            {
                VegetableId = 2,
                Name = "Orange",
                Family = "F",
                Price = 0.99
            };

            vegetables.Add(banane);
            vegetables.Add(orange);
        }

        // GET: VegetablesController 
        // Lister tous les éléments 
        public ActionResult Index()
        {
            
            return View(vegetables);
        }

        // GET: VegetablesController/Details/5
        // afficher 1 élément (par son identifiant)
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VegetablesController/Create
        // Créer un nouvel élément
        public ActionResult Create()
        {
            return View();
        }

        // POST: VegetablesController/Create
        // validation du formulaire Create (l'action ci-dessus 👍)
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VegetablesController/Edit/5
        // modifier un élément existant
        public ActionResult Edit(int id)
        {
            Vegetable? result = vegetables.FirstOrDefault(item => item.VegetableId == id);

            return View(result);
        }

        // POST: VegetablesController/Edit/5
        // validation du formulaire d'édition
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                Vegetable? result = vegetables.FirstOrDefault(item => item.VegetableId == id);

                if(result != null)
                {
                    /*result.Price = double.Parse(collection["Price"]);*/
                    result.Price = Convert.ToDouble(collection["Price"]);
                }

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VegetablesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VegetablesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
