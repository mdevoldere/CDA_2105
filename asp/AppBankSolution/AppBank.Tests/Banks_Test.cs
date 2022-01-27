using AppBank.DataAccessLayer;
using AppBank.DataAccessLayer.Repositories;
using AppBank.DomainModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AppBank.Tests
{
    [TestClass]
    public class Banks_Test
    {
        private AppBankDbContext dbContext;

        private IRepository<Bank> repository;

        private Bank oneBank;

        private List<Bank> banks;

        public Banks_Test()
        {
            this.dbContext = new AppBankDbContext();

            this.repository = new Repository<Bank>(dbContext);

            this.oneBank = new Bank() { Name="Pascalou's Bank" };

            this.banks = new List<Bank> {
                new Bank() { Name="Barry's Bank" },
                new Bank() { Name="Tarik's Bank" },
                new Bank() { Name="Crédit Jocelyn" }
            };

           // dbContext.Database.ExecuteSqlRaw("DELETE FROM TABLE banks");
        }

        [TestMethod]
        public void AddOneBank()
        { 
            Bank added = repository.Create(oneBank);

            Bank? result = dbContext.Banks.OrderBy(x => x.Id).LastOrDefault(b => b.Name == oneBank.Name);

            Assert.IsNotNull(result);

            Assert.AreEqual(oneBank.Name, result.Name);
        }

        [TestMethod]
        public void EditOneBank()
        {
            IQueryable<Bank> result = repository.Search(x => x.Name == oneBank.Name);

            try
            {
                Bank bank2 = result.OrderBy(x => x.Id).First();

                bank2.Name = "Mike's Bank";
                repository.Update(bank2);

                Bank actualBank = repository.Search(x => x.Name == bank2.Name).OrderBy(x => x.Id).First();

                Assert.AreEqual(bank2.Name, actualBank.Name);

            }
            catch(Exception e)
            {
                // faites autre chose que ça
                throw new Exception(e.Message);
            }
        }

        [TestMethod]
        public void DeleteOneBank()
        {
            Bank myBank = repository.Create(new Bank() { Name = "La banque des Dragons" });

            if (repository.Delete(myBank.Id))
            {
                int nb = repository.Search(x => x.Id == myBank.Id).Count();

                Assert.AreEqual(0, nb, "La suppression a échoué !");
            }
            else
            {
                throw new Exception("La suppression a planté !");
            }
        }
    }
}