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
    public class BankAgency : Model
    {
        public string AgencyName { get; set; }

        public Bank Bank { get; set; }

    }
}
