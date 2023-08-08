using Microsoft.AspNetCore.Http;
using FiyiStackWeb.Areas.BasicCore.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;

namespace FiyiStackWeb.Pages
{
    public class CheckoutModel : PageModel
    {
        public void OnGet(string AccountType)
        {
            //Get UserId from Session
            int UserId = HttpContext.Session.GetInt32("UserId") ?? 0;

            if (UserId == 0)
            {
                //User not found
                ViewData["EnterButton"] = $@"<li class='nav-item'>
                                                <a href='/Login' class='btn btn-white mt-1 ml-2'>
                                                    <i class='fas fa-user'></i> 
                                                    <span class='nav-link-inner--text'>
                                                        Login
                                                    </span>
                                                </a>
                                            </li>";
            }
            else
            {
                //User found
                ViewData["EnterButton"] = $@"<li class='nav-item'>
                                                <a href='/CMSCore/DashboardIndex' class='btn btn-white mt-1 ml-2'>
                                                    <i class='fas fa-user'></i> 
                                                    <span class='nav-link-inner--text'>
                                                        Enter dashboard
                                                    </span>
                                                </a>
                                            </li>";
            }

            if(AccountType == "AmateurAccount")
            {
                ViewData["AccountType"] = "Amateur account";
                ViewData["Price"] = "5";
            }
            else
            {
                ViewData["AccountType"] = "PRO account";
                ViewData["Price"] = "8";
            }

            VisitorCounterModel VisitorCounterModel = new VisitorCounterModel()
            {
                Active = true,
                Page = "/Checkout",
                DateTime = DateTime.Now,
                DateTimeCreation = DateTime.Now,
                DateTimeLastModification = DateTime.Now,
                UserCreationId = 1,
                UserLastModificationId = 1,
            };

            VisitorCounterModel.Insert();
        }
    }
}
