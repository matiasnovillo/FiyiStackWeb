using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using FiyiStackWeb.Areas.BasicCore.Models;
using FiyiStackWeb.Areas.FiyiStack.Filters;
using FiyiStackWeb.Areas.FiyiStack.Protocols;
using FiyiStackWeb.Areas.FiyiStack.Models;
using FiyiStackWeb.Library;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.Text;
using System.IO;

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

namespace FiyiStackWeb.Areas.FiyiStack.Controllers
{
    /// <summary>
    /// Stack:             6<br/>
    /// Name:              C# Web API Controller. <br/>
    /// Function:          Allow you to intercept HTPP calls and comunicate with his C# Service using dependency injection.<br/>
    /// Last modification: 23/12/2022 15:53:55
    /// </summary>
    [ApiController]
    [ExampleFilter]
    public partial class ExampleValuesController : ControllerBase
    {
        private readonly IWebHostEnvironment _WebHostEnvironment;
        private readonly ExampleProtocol _ExampleProtocol;

        public ExampleValuesController(IWebHostEnvironment WebHostEnvironment, ExampleProtocol ExampleProtocol) 
        {
            _WebHostEnvironment = WebHostEnvironment;
            _ExampleProtocol = ExampleProtocol;
        }

        #region Queries
        [HttpGet("~/api/FiyiStack/Example/1/Select1ByExampleIdToJSON/{ExampleId:int}")]
        public ExampleModel Select1ByExampleIdToJSON(int ExampleId)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                return _ExampleProtocol.Select1ByExampleIdToModel(ExampleId);
            }
            catch (Exception ex) 
            { 
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return null;
            }
        }

        [HttpGet("~/api/FiyiStack/Example/1/SelectAllToJSON")]
        public List<ExampleModel> SelectAllToJSON()
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                return _ExampleProtocol.SelectAllToList();
            }
            catch (Exception ex) 
            { 
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return null;
            }
        }

        [HttpPost("~/api/FiyiStack/Example/1/SelectAllPagedToJSON")]
        public exampleModelQuery SelectAllPagedToJSON([FromBody] exampleModelQuery exampleModelQuery)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                 return _ExampleProtocol.SelectAllPagedToModel(exampleModelQuery);
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return null;
            }
        }
        #endregion

        #region Non-Queries
        [HttpPost("~/api/FiyiStack/Example/1/InsertOrUpdateAsync")]
        [Produces("text/plain")]
        public async Task<IActionResult> InsertOrUpdateAsync()
        {
            try
            {
                //Get UserId from Session
                int UserId = HttpContext.Session.GetInt32("UserId") ?? 0;

                if(UserId == 0)
                {
                    return StatusCode(401, "User not found in session");
                }

                //Add or edit value
                string AddOrEdit = HttpContext.Request.Form["fiyistack-example-title-page"];

                bool Boolean = Convert.ToBoolean(HttpContext.Request.Form["fiyistack-example-boolean-input"]);
                DateTime DateTime = Convert.ToDateTime(HttpContext.Request.Form["fiyistack-example-datetime-input"]);
                decimal Decimal = Convert.ToDecimal(HttpContext.Request.Form["fiyistack-example-decimal-input"].ToString().Replace(".",","));
                int ForeignKey1 = 0;
                ForeignKey1 = Convert.ToInt32(HttpContext.Request.Form["fiyistack-example-foreignkey1-input"]);
                int ForeignKey2 = 0;
                ForeignKey2 = Convert.ToInt32(HttpContext.Request.Form["fiyistack-example-foreignkey2-input"]);
                int Integer = Convert.ToInt32(HttpContext.Request.Form["fiyistack-example-integer-input"]);
                string TextBasic = HttpContext.Request.Form["fiyistack-example-textbasic-input"];
                string TextEmail = HttpContext.Request.Form["fiyistack-example-textemail-input"];
                string TextFile = HttpContext.Request.Form["fiyistack-example-textfile-input"];;
                if (HttpContext.Request.Form.Files.Count != 0)
                {
                    TextFile = $@"/Uploads/FiyiStack/Example/{HttpContext.Request.Form.Files[0].FileName}";
                }
                string TextHexColour = HttpContext.Request.Form["fiyistack-example-texthexcolour-input"];
                string TextPassword = "";
                if (HttpContext.Request.Form["fiyistack-example-textpassword-input"] != "")
                {
                    TextPassword = Security.EncodeString(HttpContext.Request.Form["fiyistack-example-textpassword-input"]); 
                }
                string TextPhoneNumber = HttpContext.Request.Form["fiyistack-example-textphonenumber-input"];
                string TextTag = HttpContext.Request.Form["fiyistack-example-texttag-input"];
                string TextArea = HttpContext.Request.Form["fiyistack-example-textarea-input"];
                string TextEditor = HttpContext.Request.Form["fiyistack-example-texteditor-input"];
                string TextURL = HttpContext.Request.Form["fiyistack-example-texturl-input"];
                

                int NewEnteredId = 0;
                int RowsAffected = 0;

                if (AddOrEdit.StartsWith("Add"))
                {
                    //Add
                    ExampleModel ExampleModel = new ExampleModel()
                    {
                        Active = true,
                        UserCreationId = UserId,
                        UserLastModificationId = UserId,
                        DateTimeCreation = DateTime.Now,
                        DateTimeLastModification = DateTime.Now,
                        Boolean = Boolean,
                        DateTime = DateTime,
                        Decimal = Decimal,
                        ForeignKey1 = ForeignKey1,
                        ForeignKey2 = ForeignKey2,
                        Integer = Integer,
                        TextBasic = TextBasic,
                        TextEmail = TextEmail,
                        TextFile = TextFile,
                        TextHexColour = TextHexColour,
                        TextPassword = TextPassword,
                        TextPhoneNumber = TextPhoneNumber,
                        TextTag = TextTag,
                        TextArea = TextArea,
                        TextEditor = TextEditor,
                        TextURL = TextURL,
                        
                    };
                    
                    NewEnteredId = _ExampleProtocol.Insert(ExampleModel);
                }
                else
                {
                    //Update
                    int ExampleId = Convert.ToInt32(HttpContext.Request.Form["fiyistack-example-exampleid-input"]);
                    ExampleModel ExampleModel = new ExampleModel(ExampleId);
                    
                    ExampleModel.UserLastModificationId = UserId;
                    ExampleModel.DateTimeLastModification = DateTime.Now;
                    ExampleModel.Boolean = Boolean;
                    ExampleModel.DateTime = DateTime;
                    ExampleModel.Decimal = Decimal;
                    ExampleModel.ForeignKey1 = ForeignKey1;
                    ExampleModel.ForeignKey2 = ForeignKey2;
                    ExampleModel.Integer = Integer;
                    ExampleModel.TextBasic = TextBasic;
                    ExampleModel.TextEmail = TextEmail;
                    ExampleModel.TextFile = TextFile;
                    ExampleModel.TextHexColour = TextHexColour;
                    ExampleModel.TextPassword = TextPassword;
                    ExampleModel.TextPhoneNumber = TextPhoneNumber;
                    ExampleModel.TextTag = TextTag;
                    ExampleModel.TextArea = TextArea;
                    ExampleModel.TextEditor = TextEditor;
                    ExampleModel.TextURL = TextURL;
                                       

                    RowsAffected = _ExampleProtocol.UpdateByExampleId(ExampleModel);
                }
                

                //Look for sent files
                if (HttpContext.Request.Form.Files.Count != 0)
                {
                    int i = 0; //Used to iterate in HttpContext.Request.Form.Files
                    foreach (var File in Request.Form.Files)
                    {
                        if (File.Length > 0)
                        {
                            var FileName = HttpContext.Request.Form.Files[i].FileName;
                            var FilePath = $@"{_WebHostEnvironment.WebRootPath}/Uploads/FiyiStack/Example/";

                            using (var FileStream = new FileStream($@"{FilePath}{FileName}", FileMode.Create))
                            {
                                
                                await File.CopyToAsync(FileStream); // Read file to stream
                                byte[] array = new byte[FileStream.Length]; // Stream to byte array
                                FileStream.Seek(0, SeekOrigin.Begin);
                                FileStream.Read(array, 0, array.Length);
                            }

                            i += 1;
                        }
                    }
                }

                if (AddOrEdit.StartsWith("Add"))
                {
                    return StatusCode(200, NewEnteredId); 
                }
                else
                {
                    return StatusCode(200, RowsAffected);
                }
            }
            catch (Exception ex) 
            { 
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("~/api/FiyiStack/Example/1/DeleteByExampleId/{ExampleId:int}")]
        [Produces("text/plain")]
        public IActionResult DeleteByExampleId(int ExampleId)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                int RowsAffected = _ExampleProtocol.DeleteByExampleId(ExampleId);
                return StatusCode(200, RowsAffected);
            }
            catch (Exception ex) 
            { 
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/FiyiStack/Example/1/DeleteManyOrAll/{DeleteType}")]
        [Produces("text/plain")]
        public IActionResult DeleteManyOrAll([FromBody] Ajax Ajax, string DeleteType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                _ExampleProtocol.DeleteManyOrAll(Ajax, DeleteType);

                return StatusCode(200, Ajax.AjaxForString);
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/FiyiStack/Example/1/CopyByExampleId/{ExampleId:int}")]
        [Produces("text/plain")]
        public IActionResult CopyByExampleId(int ExampleId)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                int NewEnteredId = _ExampleProtocol.CopyByExampleId(ExampleId);

                return StatusCode(200, NewEnteredId);
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/FiyiStack/Example/1/CopyManyOrAll/{CopyType}")]
        [Produces("text/plain")]
        public IActionResult CopyManyOrAll([FromBody] Ajax Ajax, string CopyType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                int[] NewEnteredIds = _ExampleProtocol.CopyManyOrAll(Ajax, CopyType);
                string NewEnteredIdsAsString = "";

                for (int i = 0; i < NewEnteredIds.Length; i++)
                {
                    NewEnteredIdsAsString += NewEnteredIds[i].ToString() + ",";
                }
                NewEnteredIdsAsString = NewEnteredIdsAsString.TrimEnd(',');

                return StatusCode(200, NewEnteredIdsAsString);
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }
        #endregion

        #region Other actions
        [HttpPost("~/api/FiyiStack/Example/1/ExportAsPDF/{ExportationType}")]
        [Produces("text/plain")]
        public IActionResult ExportAsPDF([FromBody] Ajax Ajax, string ExportationType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                DateTime Now = _ExampleProtocol.ExportAsPDF(Ajax, ExportationType);

                return StatusCode(200, new Ajax() { AjaxForString = Now.ToString("yyyy_MM_dd_HH_mm_ss_fff") });
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/FiyiStack/Example/1/ExportAsExcel/{ExportationType}")]
        [Produces("text/plain")]
        public IActionResult ExportAsExcel([FromBody] Ajax Ajax, string ExportationType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                DateTime Now = _ExampleProtocol.ExportAsExcel(Ajax, ExportationType);

                return StatusCode(200, new Ajax() { AjaxForString = Now.ToString("yyyy_MM_dd_HH_mm_ss_fff") });
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("~/api/FiyiStack/Example/1/ExportAsCSV/{ExportationType}")]
        [Produces("text/plain")]
        public IActionResult ExportAsCSV([FromBody] Ajax Ajax, string ExportationType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                DateTime Now = _ExampleProtocol.ExportAsCSV(Ajax, ExportationType);

                return StatusCode(200, new Ajax() { AjaxForString = Now.ToString("yyyy_MM_dd_HH_mm_ss_fff") });
            }
            catch (Exception ex)
            {
                DateTime Now = DateTime.Now;
                FailureModel FailureModel = new FailureModel()
                {
                    HTTPCode = 500,
                    Message = ex.Message,
                    EmergencyLevel = 1,
                    StackTrace = ex.StackTrace ?? "",
                    Source = ex.Source ?? "",
                    Comment = "",
                    Active = true,
                    UserCreationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    UserLastModificationId = HttpContext.Session.GetInt32("UserId") ?? 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex.Message);
            }
        }
        #endregion
    }
}