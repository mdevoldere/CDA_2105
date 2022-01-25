using AppBank.DomainModel;
using Microsoft.EntityFrameworkCore;

namespace AppBank.DataAccessLayer
{
    public class AppBankDbContext : DbContext  
    {
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            // builder.UseSqlServer(@"Server=(LocalDB)\mssqllocaldb;Database=db_banks;AttachDBFileName=c:\users\CRM\localdbpathbug.mdf");
            builder.UseSqlServer(@"Server=(LocalDB)\mssqllocaldb;Database=db_banks");

            //builder.UseSqlServer()
        }

        public DbSet<Bank> Banks { get; set; }
        public DbSet<BankAgency> BankAgencies { get; set; }


        /*public void test()
        {
            var bank = new Bank() { Name = "Bastien's Bank .Inc" };

            Banks.Add(bank);

            this.Set<Bank>();

        }*/
    }
}