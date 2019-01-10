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
            //ViewDataDictionary viewData = new ViewDataDictionary();
            //TempDataDictionary tempData = new TempDataDictionary();
            //var result = RenderPartialToString(id, viewData, tempData);
            //// return Content(result);
            return PartialView(String.Format("~/Views/Shared/{0}.cshtml", id));
        }
        public string RenderPartialToString(string partialViewName, ViewDataDictionary viewData, TempDataDictionary tempData)
        {
            ControllerContext controllerContext = this.ControllerContext;
            if (tempData == null)
            {
                tempData = new TempDataDictionary();
            }

            ViewEngineResult result = ViewEngines.Engines.FindPartialView(controllerContext, partialViewName);

            if (result.View != null)
            {
                StringBuilder sb = new StringBuilder();
                using (StringWriter sw = new StringWriter(sb))
                {
                    using (HtmlTextWriter output = new HtmlTextWriter(sw))
                    {
                        ViewContext viewContext = new ViewContext(controllerContext, result.View, viewData, tempData, output);
                        //  viewContext.ViewBag.location = location;
                        result.View.Render(viewContext, output);
                    }
                }

                return sb.ToString();
            }

            return String.Empty;
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