using System.Collections.Generic;
using System.Linq;

namespace TacoTruck
{
    public interface IProductService {
        List<Product> GetProducts();
        Product GetProduct(int Id);
    }

    public class ProductService : IProductService
    {
        private readonly List<Product> _products;

        public ProductService() {
            _products = GenerateProducts();
        }

        private List<Product> GenerateProducts()
        {
            return new List<Product>
            {
                new Product(1, "Basic Taco", 3.50m, 2.00m, 300),
                new Product(2, "Deluxe Taco", 4.50m, 2.25m, 40),
                new Product(3, "Korean Taco", 3.50m, 2.00m, 30),
                new Product(4, "Taco Bowl", 5.00m, 3.00m, 175),
                new Product(5, "Choco Taco", 2.50m, 1.00m, 150),
                new Product(6, "Bacon Weave Taco", 2.5m, 1.50m, 200)
            };
        }

        public Product GetProduct(int Id)
        {
            return _products.FirstOrDefault(t => t.Id == Id);
        }

        public List<Product> GetProducts()
        {
            return _products;
        }
    }
}
