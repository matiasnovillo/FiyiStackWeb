using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace FiyiStackWeb.Pages
{
    public class _404Model : PageModel
    {
        public void OnGet()
        {
            int UserId = HttpContext.Session.GetInt32("UserId") ?? 0;
        }
    }
}
