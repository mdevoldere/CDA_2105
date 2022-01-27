using AppBank.DataAccessLayer;
using AppBank.DataAccessLayer.Repositories;
using AppBank.DomainModel;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppBank.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BanksController : ControllerBase
    {
        IRepository<Bank> repo;

        public BanksController()
        {
            repo = new Repository<Bank>(new AppBankDbContext());
        }

        // GET: api/Banks
        [HttpGet]
        public IEnumerable<Bank> Get()
        {
            return repo.GetAll();
        }

        // GET api/Banks/5
        [HttpGet("{id}")]
        public Bank? Get(int id)
        {
            return repo.GetById(id);
        }

        // POST api/Banks
        // Ajout d'un nouvel élément
        [HttpPost]
        public Bank Post([FromBody] Bank newBank)
        {
            return repo.Create(newBank);
        }

        // PUT api/Banks/5
        // Mise à jour d'un élément existant
        [HttpPut("{id}")]
        public Bank Put(int id, [FromBody] Bank updatedBank)
        {
            return repo.Update(updatedBank);
        }

        // DELETE api/Banks/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            repo.Delete(id);
        }
    }
}
