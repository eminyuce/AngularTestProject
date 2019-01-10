using AngularTestProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularTestProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JsonResult AuthorsList()
        {
            var authors = new List<Author>();
            for (int i = 0; i < 100; i++)
            {
                authors.Add(new Author() { FirstName = "Name " + i, LastName = "Last " + i });
            }
            return Json(authors, JsonRequestBehavior.AllowGet);

        }
    }
}