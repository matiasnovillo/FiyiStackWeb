using FiyiStackWeb.Areas.FiyiStack.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;

namespace FiyiStackWeb.Areas.FiyiStack
{
    [FiyiStackFilter]
    public class PricingModel : PageModel
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

            ViewData["og:title"] = $@"<meta property=""og:title"" content=""Pricing - FiyiStack"">";
            ViewData["og:description"] = $@"<meta property=""og:description"" content=""Get FiyiStack (the generator), FiyiRequirements (the sample) or both. Make your best choice and enter into this programming world with a modern software factory"">";
            ViewData["description"] = $@"<meta name=""description"" content=""Get FiyiStack (the generator), FiyiRequirements (the sample) or both. Make your best choice and enter into this programming world with a modern software factory"">";
            ViewData["robot"] = $@"<meta name=""robots"" content=""index"">";
            ViewData["title"] = $@"Pricing - FiyiStack";
        }
    }
}
