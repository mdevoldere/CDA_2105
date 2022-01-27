using AppBank.DomainModel;
using Microsoft.EntityFrameworkCore;

namespace AppBank.DataAccessLayer
{
    /// <summary>
    /// Contexte de base de données
    /// Classe permettant l'accès à une base de données
    /// stocke la connexion
    /// permet d'effecteur des requêtes via EF6 ou directement en SQL
    /// </summary>
    public class AppBankDbContext : DbContext  
    {
        /// <summary>
        /// Méthode appelée automatiquement lors de l'instanciation du DbContext.
        /// On peut y inclure 
        /// - la chaine de connexion (builder.useSqlServer())
        /// - L'initialisateur de la base de données (à voir)
        /// </summary>
        /// <param name="builder"></param>
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            // chaine de connexion: server + nom de bases de données (à minima)
            builder.UseSqlServer(@"Server=(LocalDB)\mssqllocaldb;Database=db_banks");

            // En cas de bug "chemin local invalide"
            // commenter la ligne ci-dessus et utiliser la ligne ci-dessous à la place
            // il faudra adapter le chemin de "AttachDBFileName" à votre machine
            // builder.UseSqlServer(@"Server=(LocalDB)\mssqllocaldb;Database=db_banks;AttachDBFileName=c:\users\CRM\localdbpathbug.mdf");


        }

        /// <summary>
        /// DbSet = équivalent de List<> adapté au contexte de persitance des données
        /// 1 DbSet = Une table en base de données
        /// </summary>
        public DbSet<Bank> Banks { get; set; }

        public DbSet<BankAgency> BankAgencies { get; set; }

    }
}