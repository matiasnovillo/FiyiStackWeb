using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;

namespace FiyiStackWeb.Areas.FiyiStack.Pages
{
    public class LearnMoreModel : PageModel
    {
        public void OnGet()
        {
            //Get UserId from Session
            int UserId = HttpContext.Session.GetInt32("UserId") ?? 0;

            if (UserId == 0)
            {
                //User not found
                ViewData["EnterButton"] = $@"<li class='nav-item'>
                                                <a href='/CMSCore/Login' class='btn btn-white mt-1 ml-2'>
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

            ViewData["og:title"] = $@"<meta property=""og:title"" content=""Learn more about FiyiStack and RAD tools"">";
            ViewData["og:description"] = $@"<meta property=""og:description"" content=""Learn more about FiyiStack and RAD tools. What is RAD tool? How to use a RAD tool?"">";
            ViewData["description"] = $@"<meta name=""description"" content=""Learn more about FiyiStack and RAD tools. What is RAD tool? How to use a RAD tool?"">";
            ViewData["robot"] = $@"<meta name=""robots"" content=""index"">";
        }
    }
}
