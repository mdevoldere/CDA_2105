using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppBank.DomainModel
{
    [Table("banks")]
    public class Bank : Model
    {
       /* [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public new int Id { get; set; }*/
        
        [Required]
        [DisplayName("Bank Name")]
        [StringLength(50, ErrorMessage = "")]
        [MinLength(3, ErrorMessage = "Name too short")]
        [MaxLength(10, ErrorMessage = "Name too long")]
        public string Name { get; set; }

        [Range(0, 20, ErrorMessage = "")]
        public int NbCustomers { get; set; }


        public ICollection<BankAgency> BankAgencies { get; set; }


    }
}
