using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularTestProject.Startup))]
namespace AngularTestProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
