using System.ComponentModel.DataAnnotations;

namespace Suniukai_MVC_Paskaita.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Photo { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; } = 0;
    }
}
