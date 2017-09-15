using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TacoTruck.Product.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductService _productService;

        public ProductsController(IProductService productService) {
            _productService = productService;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return _productService.GetProducts();
        }
        
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            return _productService.GetProduct(id);
        }
    }
}
