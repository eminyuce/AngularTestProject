using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Routing;

namespace AngularTestProject
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.LowercaseUrls = true;

            routes.MapRoute(
                name: "AngularPartials",
                url: "home/partial/{id}",
                defaults: new { controller = "Home", action = "AngularPartials" }
            );

            routes.MapRoute(
                name: "AjaxRequest",
                url: "Ajax/{action}/{id}",
                defaults: new { controller = "Ajax", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "AllRequest",
                url: "{*permalink}",
                defaults: new { controller = "Home", action = "Index" }
            );


            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);

        }
    }
}
