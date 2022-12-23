using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * 
 * Coded by fiyistack.com
 * Copyright © 2022
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 */

//Last modification on: 23/12/2022 15:53:55

namespace FiyiStackWeb.Areas.FiyiStack.Filters
{
    /// <summary>
    /// Stack:             7 <br/>
    /// Name:              C# Filter. <br/>
    /// Function:          Allow you to intercept HTPP inside a pipeline.<br/>
    /// Last modification: 23/12/2022 15:53:55
    /// </summary>
    public class ExampleFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            int? UserId = context.HttpContext.Session.GetInt32("UserId");
            if (UserId == null || UserId == 0)
            {
                context.HttpContext.Response.Redirect("/BasicCore/Error?ErrorId=401");
            }
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
        }

        public override void OnResultExecuting(ResultExecutingContext context)
        {
            int? UserId = context.HttpContext.Session.GetInt32("UserId");
            if (UserId == null || UserId == 0)
            {
                context.HttpContext.Response.Redirect("/BasicCore/Error?ErrorId=401");
            }
        }

        public override void OnResultExecuted(ResultExecutedContext context)
        {
        }
    }
}