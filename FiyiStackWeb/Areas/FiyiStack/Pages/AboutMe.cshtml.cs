using FiyiStackWeb.Areas.FiyiStack.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;

namespace FiyiStackWeb.Areas.FiyiStack.Pages
{
    [FiyiStackFilter]
    public class AboutMeModel : PageModel
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

            ViewData["og:title"] = $@"<meta property=""og:title"" content=""About me - FiyiStack"">";
            ViewData["og:description"] = $@"<meta property=""og:description"" content=""About me. The creator of FiyiStak"">";
            ViewData["description"] = $@"<meta name=""description"" content=""About me. The creator of FiyiStak"">";
            ViewData["robot"] = $@"<meta name=""robots"" content=""index"">";
            ViewData["title"] = $@"About me - FiyiStack";
        }
    }
}
