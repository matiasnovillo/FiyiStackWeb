using FiyiStackWeb.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FiyiStackWeb.Areas.CMSCore.Pages
{
    [DashboardFilter]
    public class DashboardIndexModel : PageModel
    {
        public void OnGet()
        {
        }
    }
}
