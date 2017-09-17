using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace TacoTruck
{
    public interface ICustomerService {
        List<Customer> GetCustomers();
        Customer GetCustomer(int id);
    }

    public class CustomerService : ICustomerService
    {
        public List<Customer> GetCustomers()
        {
            string customers = File.ReadAllText("./MockData/Customers.json");
            return JsonConvert.DeserializeObject<List<Customer>>(customers);
        }
        public Customer GetCustomer(int id)
        {
            return GetCustomers().FirstOrDefault(x => x.Id == id);
        }
    }
}
