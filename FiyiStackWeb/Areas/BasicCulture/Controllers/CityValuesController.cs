using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using FiyiStackWeb.Areas.BasicCore.Models;
using FiyiStackWeb.Areas.BasicCulture.Filters;
using FiyiStackWeb.Areas.BasicCulture.Protocols;
using FiyiStackWeb.Areas.BasicCulture.Models;
using FiyiStackWeb.Library;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using System.Text;
using System.IO;

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

//Last modification on: 09/12/2022 19:23:11

namespace FiyiStackWeb.Areas.BasicCulture.Controllers
{
    /// <summary>
    /// Stack:             6<br/>
    /// Name:              C# Web API Controller. <br/>
    /// Function:          Allow you to intercept HTPP calls and comunicate with his C# Service using dependency injection.<br/>
    /// Last modification: 09/12/2022 19:23:11
    /// </summary>
    [ApiController]
    [CityFilter]
    public partial class CityValuesController : ControllerBase
    {
        private readonly IWebHostEnvironment _WebHostEnvironment;
        private readonly CityProtocol _CityProtocol;

        public CityValuesController(IWebHostEnvironment WebHostEnvironment, CityProtocol CityProtocol) 
        {
            _WebHostEnvironment = WebHostEnvironment;
            _CityProtocol = CityProtocol;
        }

        #region Queries
        [HttpGet("~/api/BasicCulture/City/1/Select1ByCityIdToJSON/{CityId:int}")]
        public CityModel Select1ByCityIdToJSON(int CityId)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                return _CityProtocol.Select1ByCityIdToModel(CityId);
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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return null;
            }
        }

        [HttpGet("~/api/BasicCulture/City/1/SelectAllToJSON")]
        public List<CityModel> SelectAllToJSON()
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                return _CityProtocol.SelectAllToList();
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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return null;
            }
        }

        [HttpPut("~/api/BasicCulture/City/1/SelectAllPagedToJSON")]
        public citymodelQ SelectAllPagedToJSON([FromBody] citymodelQ citymodelQ)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                 return _CityProtocol.SelectAllPagedToModel(citymodelQ);
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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return null;
            }
        }
        #endregion

        #region Non-Queries
        [HttpPost("~/api/BasicCulture/City/1/InsertOrUpdateAsync")]
        public async Task<IActionResult> InsertOrUpdateAsync()
        {
            try
            {
                //Add or edit value
                string AddOrEdit = HttpContext.Request.Form["basicculture-city-title-page"];

                string Name = HttpContext.Request.Form["basicculture-city-name-input"];
                string GeographicalCoordinates = HttpContext.Request.Form["basicculture-city-geographicalcoordinates-input"];
                string Code = HttpContext.Request.Form["basicculture-city-code-input"];
                int ProvinceId = 0; 
                if (Convert.ToInt32(HttpContext.Request.Form["basicculture-city-provinceid-input"]) != 0)
                {
                    ProvinceId = Convert.ToInt32(HttpContext.Request.Form["basicculture-city-provinceid-input"]);
                }
                else
                { throw new Exception("It's not allowed to save zero values in ProvinceId"); }
                int UserCreationId = Convert.ToInt32(HttpContext.Request.Form["basicculture-city-usercreationid-input"]);
                int UserLastModificationId = Convert.ToInt32(HttpContext.Request.Form["basicculture-city-userlastmodificationid-input"]);
                

                CityModel CityModel = new CityModel()
                {
                    Name = Name,
                    GeographicalCoordinates = GeographicalCoordinates,
                    Code = Code,
                    ProvinceId = ProvinceId,
                    UserCreationId = UserCreationId,
                    UserLastModificationId = UserLastModificationId,
                    
                };

                int NewEnteredId = 0;
                int RowsAffected = 0;

                CityModel.DateTimeLastModification = DateTime.Now;
                //CityModel.UserLastModificationId = TODO Sacarlo de User logueado
                if (AddOrEdit.StartsWith("Add"))
                {
                    CityModel.DateTimeCreation = DateTime.Now;
                    //CityModel.UserCreationId = TODO Sacarlo de User logueado
                    NewEnteredId = _CityProtocol.Insert(CityModel);
                }
                else
                {
                    int CityId = Convert.ToInt32(HttpContext.Request.Form["testing-test-testid-input"]);
                    CityModel.CityId = CityId;
                    RowsAffected = _CityProtocol.UpdateByCityId(CityModel);
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
                            var FilePath = $@"{_WebHostEnvironment.WebRootPath}/Uploads/BasicCulture/City/";

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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }

        [HttpDelete("~/api/BasicCulture/City/1/DeleteByCityId/{CityId:int}")]
        public IActionResult DeleteByCityId(int CityId)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                int RowsAffected = _CityProtocol.DeleteByCityId(CityId);
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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }

        [HttpPost("~/api/BasicCulture/City/1/DeleteManyOrAll/{DeleteType}")]
        public IActionResult DeleteManyOrAll([FromBody] Ajax Ajax, string DeleteType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                _CityProtocol.DeleteManyOrAll(Ajax, DeleteType);

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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }

        [HttpPost("~/api/BasicCulture/City/1/CopyByCityId/{CityId:int}")]
        public IActionResult CopyByCityId(int CityId)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                int NewEnteredId = _CityProtocol.CopyByCityId(CityId);

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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }

        [HttpPost("~/api/BasicCulture/City/1/CopyManyOrAll/{CopyType}")]
        public IActionResult CopyManyOrAll([FromBody] Ajax Ajax, string CopyType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                int[] NewEnteredIds = _CityProtocol.CopyManyOrAll(Ajax, CopyType);
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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }
        #endregion

        #region Other actions
        [HttpPost("~/api/BasicCulture/City/1/ExportAsPDF/{ExportationType}")]
        public IActionResult ExportAsPDF([FromBody] Ajax Ajax, string ExportationType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                DateTime Now = _CityProtocol.ExportAsPDF(Ajax, ExportationType);

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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }

        [HttpPost("~/api/BasicCulture/City/1/ExportAsExcel/{ExportationType}")]
        public IActionResult ExportAsExcel([FromBody] Ajax Ajax, string ExportationType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                DateTime Now = _CityProtocol.ExportAsExcel(Ajax, ExportationType);

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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }

        [HttpPost("~/api/BasicCulture/City/1/ExportAsCSV/{ExportationType}")]
        public IActionResult ExportAsCSV([FromBody] Ajax Ajax, string ExportationType)
        {
            try
            {
                var SyncIO = HttpContext.Features.Get<IHttpBodyControlFeature>();
                if (SyncIO != null) { SyncIO.AllowSynchronousIO = true; }

                DateTime Now = _CityProtocol.ExportAsCSV(Ajax, ExportationType);

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
                    UserCreationId = 1,
                    UserLastModificationId = 1,
                    DateTimeCreation = Now,
                    DateTimeLastModification = Now
                };
                FailureModel.Insert();
                return StatusCode(500, ex);
            }
        }
        #endregion
    }
}