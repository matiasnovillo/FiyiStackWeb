using FiyiStackWeb.Areas.CMSCore.Models;
using FiyiStackWeb.Areas.CMSCore.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * Licensed to a unique person with this Token:IAmTheOwnerOfThis
 * 
 * Coded by www.fiyistack.com
 * Copyright © 2021
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * Auto generated code. Add your custom code after the last line of auto generation
 */

//Last modification on: 08/12/2022 10:43:01

namespace FiyiStackWeb.Areas.CMSCore.Pages
{
    /// <summary>
    /// Stack:             9 <br/>
    /// Name:              C# Razor Page. <br/>
    /// Function:          Allow you to show HTML files using Razor Page technology. <br/>
    /// Last modification: 08/12/2022 10:43:01
    /// </summary>
    [UserFilter]
    public partial class PageUserNonQueryModel : PageModel
    {
        public void OnGet()
        {
            //#region User manipulation
            //byte[] arrUser;
            //HttpContext.Session.TryGetValue("User", out arrUser);
            //User User = new User().ByteArrayToUser<User>(arrUser);
            //User.ProfileImageURL = User.ProfileImageURL == "" || User.ProfileImageURL == null ? "/img/User.ProfileImageURL/NotFound.png" : User.ProfileImageURL;
            //#endregion

            //#region Menu manipulation
            //List<Menu> lstMenu = new Menu().SelectAllByRoleIdToModelList(User.RoleId);
            //#endregion

            //#region Information to layout
            //ViewData["Title"] = "Usuarios";
            //ViewData["User.FantasyName"] = User.FantasyName;
            //ViewData["User.ProfileImageURL"] = User.ProfileImageURL;
            //ViewData["lstMenu"] = lstMenu;
            //#endregion
            }
    }
}