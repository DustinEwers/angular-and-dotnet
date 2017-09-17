using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TacoTruck.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customer) {
            _customerService = customer;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return _customerService.GetCustomers();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Customer Get(int id)
        {
            return _customerService.GetCustomer(id);
        }
    }
}
