using System.Net;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, TraceWriter log)
{
    var products = new List<Product>
    {
        new Product(1, "Basic Taco", 3.50m, 2.00m, 300),
        new Product(2, "Deluxe Taco", 4.50m, 2.25m, 40),
        new Product(3, "Korean Taco", 3.50m, 2.00m, 30),
        new Product(4, "Taco Bowl", 5.00m, 3.00m, 175),
        new Product(5, "Choco Taco", 2.50m, 1.00m, 150),
        new Product(6, "Bacon Weave Taco", 2.5m, 1.50m, 200)
    };

    return req.CreateResponse(HttpStatusCode.OK, products);
}

public class Product {
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public decimal Cost { get; set; }
    public int Inventory { get; set; }

    public Product(int id, string name, decimal price, decimal cost, int inventory) {
        Id = id;
        Name = name;
        Price = price;
        Cost = cost;
        Inventory = inventory;
    }
}