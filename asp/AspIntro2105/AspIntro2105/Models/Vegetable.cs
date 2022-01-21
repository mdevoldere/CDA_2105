

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

        public string? Name { get; set; }

        public string? Family { get; set; }

        public double Price { get; set; }

    }
}
