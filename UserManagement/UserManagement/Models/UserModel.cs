using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserManagement.Models
{
    public class UserModel
    {

        public string fName { get; set; }
        public string lName { get; set; }
        public string address { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string gender { get; set; }
        public string dob { get; set; }
    }
}