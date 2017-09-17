using Microsoft.AspNetCore.Mvc;

namespace TacoTruck.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return new VirtualFileResult(@"~\wwwroot\index.html", "text/html");
        }
    }
}