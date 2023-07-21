using FiyiStackWeb.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Http;
using FiyiStackWeb.Areas.CMSCore.Models;

namespace FiyiStackWeb.Areas.CMSCore.Pages
{
    [DashboardFilter]
    public class DashboardIndexModel : PageModel
    {
        public void OnGet()
        {
            int UserId = HttpContext.Session.GetInt32("UserId") ?? 0;
            UserModel UserModel = new UserModel().Select1ByUserIdToModel(UserId);

            int NumberOfUsers = UserModel.Count();

            string Menues = new RoleMenuModel().SelectMenuesByRoleIdToStringForLayoutDashboard(UserModel.RoleId);


            ViewData["FantasyName"] = UserModel.FantasyName;
            ViewData["Menues"] = Menues;
            ViewData["NumberOfUsers"] = NumberOfUsers;
        }
    }
}
