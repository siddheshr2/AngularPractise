using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UserManagement.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;

namespace UserManagement.Controllers
{
    public class HomeController : ApiController
    {
        [System.Web.Http.Route("api/User/Register")]
        [HttpPost]
        public IdentityResult Register(UserModel model)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            var user = new ApplicationUser() { UserName = model.email, Email = model.email };
            user.FirstName = model.fName;
            user.LastName = model.lName;
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 3
            };
            IdentityResult result = manager.Create(user, model.password);
            return result;
        }
    }
}