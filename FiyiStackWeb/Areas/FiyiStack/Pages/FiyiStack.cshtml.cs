using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FiyiStackWeb.Areas.FiyiStack.Products.Pages
{
    public class FiyiStackModel : PageModel
    {
        public void OnGet()
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

                //User not found
                ViewData["LoginButton"] = $@"<a href='/Login' class='btn btn-outline-white mt-1 ml-2'>
                                                    <i class='fas fa-user'></i> 
                                                    <span class='nav-link-inner--text'>
                                                        Login
                                                    </span>
                                                </a>";
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

            ViewData["og:title"] = $@"<meta property=""og:title"" content=""FiyiStack: The low-code generator"">";
            ViewData["og:description"] = $@"<meta property=""og:description"" content=""Learn how to use FiyiStack, this generator can create ~5.000 with just 10 words (for the moment)"">";
            ViewData["description"] = $@"<meta name=""description"" content=""Learn how to use FiyiStack, this generator can create ~5.000 with just 10 words (for the moment)"">";
            ViewData["robot"] = $@"<meta name=""robots"" content=""index"">";
            ViewData["title"] = $@"FiyiStack: The low-code generator";
        }
    }
}
