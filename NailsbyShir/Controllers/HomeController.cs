using Microsoft.AspNetCore.Mvc;

namespace HobbyApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            return View();
        }
    }
}