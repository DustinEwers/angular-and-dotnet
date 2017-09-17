namespace TacoTruck
{
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
}
