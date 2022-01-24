using System.ComponentModel.DataAnnotations;

namespace AspIntro2105.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        public string? Name { get; set; } 
    }
}
