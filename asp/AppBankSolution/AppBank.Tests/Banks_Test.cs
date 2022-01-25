using AppBank.DataAccessLayer;
using AppBank.DataAccessLayer.Repositories;
using AppBank.DomainModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
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

           // dbContext.Database.ExecuteSqlRaw("TRUNCATE TABLE banks");
        }

        [TestMethod]
        public void AddOneBank()
        {
            Bank added = repository.Create(oneBank);

            Bank? result = dbContext.Banks.FirstOrDefault(b => b.Name == oneBank.Name);

            Assert.IsNotNull(result);

            Assert.AreEqual(oneBank, result);
        }
    }
}