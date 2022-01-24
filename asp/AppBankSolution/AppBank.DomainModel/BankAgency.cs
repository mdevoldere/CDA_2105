using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppBank.DomainModel
{
    [Table("banks_agencies")]
    public class BankAgency
    {
        [Key]
        public int Id { get; set; }

        public string AgencyName { get; set; }

        
        public Bank bank { get; set; }

    }
}
