#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AspIntro2105.Models;

namespace AspIntro2105.Data
{
    public class VegetablesDbContext : DbContext
    {
        public VegetablesDbContext (DbContextOptions<VegetablesDbContext> options)
            : base(options)
        {
        }

        public DbSet<AspIntro2105.Models.Vegetable> Vegetables { get; set; }

        public DbSet<AspIntro2105.Models.Category> Category { get; set; }
    }
}
