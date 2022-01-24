

using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AspIntro2105.Models
{
    [Table("Vegetables")]
    public class Vegetable
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VegetableId { get; set; }

        [DisplayName("Toto Tata Titi")]
        [DataType(DataType.Text)]
        public string? Name { get; set; }

        public string? Family { get; set; }

        public double Price { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? Created { get; set; }


        [NotMapped]
        public string FullName { get { return Name + " " + Family; }  }

    }
}
