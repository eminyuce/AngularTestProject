using AngularTestProject.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace AngularTestProject.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Drivers()
        {
            return View();
        }
        public ActionResult Driver(string id)
        {
            return View();
        }
        public ActionResult AngularPartials(string id)
        {
            return PartialView(String.Format("~/Views/Shared/{0}.cshtml", id));
        }
       
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

      
    }
}