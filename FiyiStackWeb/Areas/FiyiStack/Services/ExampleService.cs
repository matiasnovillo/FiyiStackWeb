using ClosedXML.Excel;
using CsvHelper;
using IronPdf;
using Microsoft.AspNetCore.Http;
using FiyiStackWeb.Areas.FiyiStack.Models;
using FiyiStackWeb.Areas.FiyiStack.DTOs;
using FiyiStackWeb.Areas.FiyiStack.Protocols;
using FiyiStackWeb.Library;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * 
 * Coded by fiyistack.com
 * Copyright © 2023
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 */

//Last modification on: 22/02/2023 6:50:49

namespace FiyiStackWeb.Areas.FiyiStack.Services
{
    /// <summary>
    /// Stack:             4<br/>
    /// Name:              C# Service. <br/>
    /// Function:          Allow you to separate data contract stored in C# model from business with your clients. <br/>
    /// Also, allow dependency injection inside controllers/web apis<br/>
    /// Last modification: 22/02/2023 6:50:49
    /// </summary>
    public partial class ExampleService : ExampleProtocol
    {
        private readonly IHttpContextAccessor _IHttpContextAccessor;

        public ExampleService(IHttpContextAccessor IHttpContextAccessor)
        {
            _IHttpContextAccessor = IHttpContextAccessor;
        }

        #region Queries
        public ExampleModel Select1ByExampleIdToModel(int ExampleId)
        {
            return new ExampleModel().Select1ByExampleIdToModel(ExampleId);
        }

        public List<ExampleModel> SelectAllToList()
        {
            return new ExampleModel().SelectAllToList();
        }

        public exampleSelectAllPaged SelectAllPagedToModel(exampleSelectAllPaged exampleSelectAllPaged)
        {
            return new ExampleModel().SelectAllPagedToModel(exampleSelectAllPaged);
        } 
        #endregion

        #region Non-Queries
        public int Insert(ExampleModel ExampleModel)
        {
            return new ExampleModel().Insert(ExampleModel);
        }

        public int UpdateByExampleId(ExampleModel ExampleModel)
        {
            return new ExampleModel().UpdateByExampleId(ExampleModel);
        }

        public int DeleteByExampleId(int ExampleId)
        {
            return new ExampleModel().DeleteByExampleId(ExampleId);
        }

        public void DeleteManyOrAll(Ajax Ajax, string DeleteType)
        {
            if (DeleteType == "All")
            {
                ExampleModel ExampleModel = new ExampleModel();
                ExampleModel.DeleteAll();
            }
            else
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                for (int i = 0; i < RowsChecked.Length; i++)
                {
                    ExampleModel ExampleModel = new ExampleModel().Select1ByExampleIdToModel(Convert.ToInt32(RowsChecked[i]));
                    ExampleModel.DeleteByExampleId(ExampleModel.ExampleId);
                }
            }
        }

        public int CopyByExampleId(int ExampleId)
        {
            ExampleModel ExampleModel = new ExampleModel().Select1ByExampleIdToModel(ExampleId);
            int NewEnteredId = new ExampleModel().Insert(ExampleModel);

            return NewEnteredId;
        }

        public int[] CopyManyOrAll(Ajax Ajax, string CopyType)
        {
            if (CopyType == "All")
            {
                List<ExampleModel> lstExampleModel = new List<ExampleModel> { };
                lstExampleModel = new ExampleModel().SelectAllToList();

                int[] NewEnteredIds = new int[lstExampleModel.Count];

                for (int i = 0; i < lstExampleModel.Count; i++)
                {
                    NewEnteredIds[i] = lstExampleModel[i].Insert();
                }

                return NewEnteredIds;
            }
            else
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');
                int[] NewEnteredIds = new int[RowsChecked.Length];

                for (int i = 0; i < RowsChecked.Length; i++)
                {
                    ExampleModel ExampleModel = new ExampleModel().Select1ByExampleIdToModel(Convert.ToInt32(RowsChecked[i]));
                    NewEnteredIds[i] = ExampleModel.Insert();
                }

                return NewEnteredIds;
            }
        }
        #endregion

        #region Other services
        public DateTime ExportAsPDF(Ajax Ajax, string ExportationType)
        {
            var Renderer = new HtmlToPdf();
            DateTime Now = DateTime.Now;
            string RowsAsHTML = "";
            List<ExampleModel> lstExampleModel = new List<ExampleModel> { };

            if (ExportationType == "All")
            {
                lstExampleModel = new ExampleModel().SelectAllToList();

            }
            else if (ExportationType == "JustChecked")
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                foreach (string RowChecked in RowsChecked)
                {
                    ExampleModel ExampleModel = new ExampleModel().Select1ByExampleIdToModel(Convert.ToInt32(RowChecked));
                    lstExampleModel.Add(ExampleModel);
                }
            }

            foreach (ExampleModel row in lstExampleModel)
            {
                RowsAsHTML += $@"{row.ToStringOnlyValuesForHTML()}";
            }

            Renderer.RenderHtmlAsPdf($@"<table cellpadding=""0"" cellspacing=""0"" border=""0"" width=""88%"" style=""width: 88% !important; min-width: 88%; max-width: 88%;"">
    <tr>
    <td align=""left"" valign=""top"">
        <font face=""'Source Sans Pro', sans-serif"" color=""#1a1a1a"" style=""font-size: 52px; line-height: 55px; font-weight: 300; letter-spacing: -1.5px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #1a1a1a; font-size: 52px; line-height: 55px; font-weight: 300; letter-spacing: -1.5px;"">Mikromatica</span>
        </font>
        <div style=""height: 25px; line-height: 25px; font-size: 23px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#4c4c4c"" style=""font-size: 36px; line-height: 45px; font-weight: 300; letter-spacing: -1px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #4c4c4c; font-size: 36px; line-height: 45px; font-weight: 300; letter-spacing: -1px;"">Registers of Example</span>
        </font>
        <div style=""height: 35px; line-height: 35px; font-size: 33px;"">&nbsp;</div>
    </td>
    </tr>
</table>
<br>
<table cellpadding=""0"" cellspacing=""0"" border=""0"" width=""100%"" style=""width: 100% !important; min-width: 100%; max-width: 100%;"">
    <tr>
        <th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">ExampleId&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Active&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DateTimeCreation&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DateTimeLastModification&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">UserCreationId&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">UserLastModificationId&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Boolean&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DateTime&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Decimal&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DropDown&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Options&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Integer&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">TextBasic&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Email&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">FileUpload&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">HexColour&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Password&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">PhoneNumber&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Tag&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">TextArea&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">TextEditor&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">URL&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Time&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th>
    </tr>
    {RowsAsHTML}
</table>
<br>
<font face=""'Source Sans Pro', sans-serif"" color=""#868686"" style=""font-size: 17px; line-height: 20px;"">
    <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #868686; font-size: 17px; line-height: 20px;"">Printed on: {Now}</span>
</font>
").SaveAs($@"wwwroot/PDFFiles/FiyiStack/Example/Example_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.pdf");

            return Now;
        }

        public DateTime ExportAsExcel(Ajax Ajax, string ExportationType)
        {
            DateTime Now = DateTime.Now;

            using var Book = new XLWorkbook();

            if (ExportationType == "All")
            {
                DataTable dtExample = new DataTable();
                dtExample.TableName = "Example";

                //We define another DataTable dtExampleCopy to avoid issue related to DateTime conversion
                DataTable dtExampleCopy = new DataTable();
                dtExampleCopy.TableName = "Example";

                #region Define columns for dtExampleCopy
                DataColumn dtColumnExampleIdFordtExampleCopy = new DataColumn();
                    dtColumnExampleIdFordtExampleCopy.DataType = typeof(string);
                    dtColumnExampleIdFordtExampleCopy.ColumnName = "ExampleId";
                    dtExampleCopy.Columns.Add(dtColumnExampleIdFordtExampleCopy);

                    DataColumn dtColumnActiveFordtExampleCopy = new DataColumn();
                    dtColumnActiveFordtExampleCopy.DataType = typeof(string);
                    dtColumnActiveFordtExampleCopy.ColumnName = "Active";
                    dtExampleCopy.Columns.Add(dtColumnActiveFordtExampleCopy);

                    DataColumn dtColumnDateTimeCreationFordtExampleCopy = new DataColumn();
                    dtColumnDateTimeCreationFordtExampleCopy.DataType = typeof(string);
                    dtColumnDateTimeCreationFordtExampleCopy.ColumnName = "DateTimeCreation";
                    dtExampleCopy.Columns.Add(dtColumnDateTimeCreationFordtExampleCopy);

                    DataColumn dtColumnDateTimeLastModificationFordtExampleCopy = new DataColumn();
                    dtColumnDateTimeLastModificationFordtExampleCopy.DataType = typeof(string);
                    dtColumnDateTimeLastModificationFordtExampleCopy.ColumnName = "DateTimeLastModification";
                    dtExampleCopy.Columns.Add(dtColumnDateTimeLastModificationFordtExampleCopy);

                    DataColumn dtColumnUserCreationIdFordtExampleCopy = new DataColumn();
                    dtColumnUserCreationIdFordtExampleCopy.DataType = typeof(string);
                    dtColumnUserCreationIdFordtExampleCopy.ColumnName = "UserCreationId";
                    dtExampleCopy.Columns.Add(dtColumnUserCreationIdFordtExampleCopy);

                    DataColumn dtColumnUserLastModificationIdFordtExampleCopy = new DataColumn();
                    dtColumnUserLastModificationIdFordtExampleCopy.DataType = typeof(string);
                    dtColumnUserLastModificationIdFordtExampleCopy.ColumnName = "UserLastModificationId";
                    dtExampleCopy.Columns.Add(dtColumnUserLastModificationIdFordtExampleCopy);

                    DataColumn dtColumnBooleanFordtExampleCopy = new DataColumn();
                    dtColumnBooleanFordtExampleCopy.DataType = typeof(string);
                    dtColumnBooleanFordtExampleCopy.ColumnName = "Boolean";
                    dtExampleCopy.Columns.Add(dtColumnBooleanFordtExampleCopy);

                    DataColumn dtColumnDateTimeFordtExampleCopy = new DataColumn();
                    dtColumnDateTimeFordtExampleCopy.DataType = typeof(string);
                    dtColumnDateTimeFordtExampleCopy.ColumnName = "DateTime";
                    dtExampleCopy.Columns.Add(dtColumnDateTimeFordtExampleCopy);

                    DataColumn dtColumnDecimalFordtExampleCopy = new DataColumn();
                    dtColumnDecimalFordtExampleCopy.DataType = typeof(string);
                    dtColumnDecimalFordtExampleCopy.ColumnName = "Decimal";
                    dtExampleCopy.Columns.Add(dtColumnDecimalFordtExampleCopy);

                    DataColumn dtColumnDropDownFordtExampleCopy = new DataColumn();
                    dtColumnDropDownFordtExampleCopy.DataType = typeof(string);
                    dtColumnDropDownFordtExampleCopy.ColumnName = "DropDown";
                    dtExampleCopy.Columns.Add(dtColumnDropDownFordtExampleCopy);

                    DataColumn dtColumnOptionsFordtExampleCopy = new DataColumn();
                    dtColumnOptionsFordtExampleCopy.DataType = typeof(string);
                    dtColumnOptionsFordtExampleCopy.ColumnName = "Options";
                    dtExampleCopy.Columns.Add(dtColumnOptionsFordtExampleCopy);

                    DataColumn dtColumnIntegerFordtExampleCopy = new DataColumn();
                    dtColumnIntegerFordtExampleCopy.DataType = typeof(string);
                    dtColumnIntegerFordtExampleCopy.ColumnName = "Integer";
                    dtExampleCopy.Columns.Add(dtColumnIntegerFordtExampleCopy);

                    DataColumn dtColumnTextBasicFordtExampleCopy = new DataColumn();
                    dtColumnTextBasicFordtExampleCopy.DataType = typeof(string);
                    dtColumnTextBasicFordtExampleCopy.ColumnName = "TextBasic";
                    dtExampleCopy.Columns.Add(dtColumnTextBasicFordtExampleCopy);

                    DataColumn dtColumnEmailFordtExampleCopy = new DataColumn();
                    dtColumnEmailFordtExampleCopy.DataType = typeof(string);
                    dtColumnEmailFordtExampleCopy.ColumnName = "Email";
                    dtExampleCopy.Columns.Add(dtColumnEmailFordtExampleCopy);

                    DataColumn dtColumnFileUploadFordtExampleCopy = new DataColumn();
                    dtColumnFileUploadFordtExampleCopy.DataType = typeof(string);
                    dtColumnFileUploadFordtExampleCopy.ColumnName = "FileUpload";
                    dtExampleCopy.Columns.Add(dtColumnFileUploadFordtExampleCopy);

                    DataColumn dtColumnHexColourFordtExampleCopy = new DataColumn();
                    dtColumnHexColourFordtExampleCopy.DataType = typeof(string);
                    dtColumnHexColourFordtExampleCopy.ColumnName = "HexColour";
                    dtExampleCopy.Columns.Add(dtColumnHexColourFordtExampleCopy);

                    DataColumn dtColumnPasswordFordtExampleCopy = new DataColumn();
                    dtColumnPasswordFordtExampleCopy.DataType = typeof(string);
                    dtColumnPasswordFordtExampleCopy.ColumnName = "Password";
                    dtExampleCopy.Columns.Add(dtColumnPasswordFordtExampleCopy);

                    DataColumn dtColumnPhoneNumberFordtExampleCopy = new DataColumn();
                    dtColumnPhoneNumberFordtExampleCopy.DataType = typeof(string);
                    dtColumnPhoneNumberFordtExampleCopy.ColumnName = "PhoneNumber";
                    dtExampleCopy.Columns.Add(dtColumnPhoneNumberFordtExampleCopy);

                    DataColumn dtColumnTagFordtExampleCopy = new DataColumn();
                    dtColumnTagFordtExampleCopy.DataType = typeof(string);
                    dtColumnTagFordtExampleCopy.ColumnName = "Tag";
                    dtExampleCopy.Columns.Add(dtColumnTagFordtExampleCopy);

                    DataColumn dtColumnTextAreaFordtExampleCopy = new DataColumn();
                    dtColumnTextAreaFordtExampleCopy.DataType = typeof(string);
                    dtColumnTextAreaFordtExampleCopy.ColumnName = "TextArea";
                    dtExampleCopy.Columns.Add(dtColumnTextAreaFordtExampleCopy);

                    DataColumn dtColumnTextEditorFordtExampleCopy = new DataColumn();
                    dtColumnTextEditorFordtExampleCopy.DataType = typeof(string);
                    dtColumnTextEditorFordtExampleCopy.ColumnName = "TextEditor";
                    dtExampleCopy.Columns.Add(dtColumnTextEditorFordtExampleCopy);

                    DataColumn dtColumnURLFordtExampleCopy = new DataColumn();
                    dtColumnURLFordtExampleCopy.DataType = typeof(string);
                    dtColumnURLFordtExampleCopy.ColumnName = "URL";
                    dtExampleCopy.Columns.Add(dtColumnURLFordtExampleCopy);

                    DataColumn dtColumnTimeFordtExampleCopy = new DataColumn();
                    dtColumnTimeFordtExampleCopy.DataType = typeof(string);
                    dtColumnTimeFordtExampleCopy.ColumnName = "Time";
                    dtExampleCopy.Columns.Add(dtColumnTimeFordtExampleCopy);

                    
                #endregion

                dtExample = new ExampleModel().SelectAllToDataTable();

                foreach (DataRow DataRow in dtExample.Rows)
                {
                    dtExampleCopy.Rows.Add(DataRow.ItemArray);
                }

                var Sheet = Book.Worksheets.Add(dtExampleCopy);

                Sheet.ColumnsUsed().AdjustToContents();

                Book.SaveAs($@"wwwroot/ExcelFiles/Exampleing/Example/Example_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.xlsx");
            }
            else if (ExportationType == "JustChecked")
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                DataSet dsExample = new DataSet();

                foreach (string RowChecked in RowsChecked)
                {
                    //We define another DataTable dtExampleCopy to avoid issue related to DateTime conversion
                    DataTable dtExampleCopy = new DataTable();
                    dtExampleCopy.TableName = "Example";

                    #region Define columns for dtExampleCopy
                    DataColumn dtColumnExampleIdFordtExampleCopy = new DataColumn();
                    dtColumnExampleIdFordtExampleCopy.DataType = typeof(string);
                    dtColumnExampleIdFordtExampleCopy.ColumnName = "ExampleId";
                    dtExampleCopy.Columns.Add(dtColumnExampleIdFordtExampleCopy);

                    DataColumn dtColumnActiveFordtExampleCopy = new DataColumn();
                    dtColumnActiveFordtExampleCopy.DataType = typeof(string);
                    dtColumnActiveFordtExampleCopy.ColumnName = "Active";
                    dtExampleCopy.Columns.Add(dtColumnActiveFordtExampleCopy);

                    DataColumn dtColumnDateTimeCreationFordtExampleCopy = new DataColumn();
                    dtColumnDateTimeCreationFordtExampleCopy.DataType = typeof(string);
                    dtColumnDateTimeCreationFordtExampleCopy.ColumnName = "DateTimeCreation";
                    dtExampleCopy.Columns.Add(dtColumnDateTimeCreationFordtExampleCopy);

                    DataColumn dtColumnDateTimeLastModificationFordtExampleCopy = new DataColumn();
                    dtColumnDateTimeLastModificationFordtExampleCopy.DataType = typeof(string);
                    dtColumnDateTimeLastModificationFordtExampleCopy.ColumnName = "DateTimeLastModification";
                    dtExampleCopy.Columns.Add(dtColumnDateTimeLastModificationFordtExampleCopy);

                    DataColumn dtColumnUserCreationIdFordtExampleCopy = new DataColumn();
                    dtColumnUserCreationIdFordtExampleCopy.DataType = typeof(string);
                    dtColumnUserCreationIdFordtExampleCopy.ColumnName = "UserCreationId";
                    dtExampleCopy.Columns.Add(dtColumnUserCreationIdFordtExampleCopy);

                    DataColumn dtColumnUserLastModificationIdFordtExampleCopy = new DataColumn();
                    dtColumnUserLastModificationIdFordtExampleCopy.DataType = typeof(string);
                    dtColumnUserLastModificationIdFordtExampleCopy.ColumnName = "UserLastModificationId";
                    dtExampleCopy.Columns.Add(dtColumnUserLastModificationIdFordtExampleCopy);

                    DataColumn dtColumnBooleanFordtExampleCopy = new DataColumn();
                    dtColumnBooleanFordtExampleCopy.DataType = typeof(string);
                    dtColumnBooleanFordtExampleCopy.ColumnName = "Boolean";
                    dtExampleCopy.Columns.Add(dtColumnBooleanFordtExampleCopy);

                    DataColumn dtColumnDateTimeFordtExampleCopy = new DataColumn();
                    dtColumnDateTimeFordtExampleCopy.DataType = typeof(string);
                    dtColumnDateTimeFordtExampleCopy.ColumnName = "DateTime";
                    dtExampleCopy.Columns.Add(dtColumnDateTimeFordtExampleCopy);

                    DataColumn dtColumnDecimalFordtExampleCopy = new DataColumn();
                    dtColumnDecimalFordtExampleCopy.DataType = typeof(string);
                    dtColumnDecimalFordtExampleCopy.ColumnName = "Decimal";
                    dtExampleCopy.Columns.Add(dtColumnDecimalFordtExampleCopy);

                    DataColumn dtColumnDropDownFordtExampleCopy = new DataColumn();
                    dtColumnDropDownFordtExampleCopy.DataType = typeof(string);
                    dtColumnDropDownFordtExampleCopy.ColumnName = "DropDown";
                    dtExampleCopy.Columns.Add(dtColumnDropDownFordtExampleCopy);

                    DataColumn dtColumnOptionsFordtExampleCopy = new DataColumn();
                    dtColumnOptionsFordtExampleCopy.DataType = typeof(string);
                    dtColumnOptionsFordtExampleCopy.ColumnName = "Options";
                    dtExampleCopy.Columns.Add(dtColumnOptionsFordtExampleCopy);

                    DataColumn dtColumnIntegerFordtExampleCopy = new DataColumn();
                    dtColumnIntegerFordtExampleCopy.DataType = typeof(string);
                    dtColumnIntegerFordtExampleCopy.ColumnName = "Integer";
                    dtExampleCopy.Columns.Add(dtColumnIntegerFordtExampleCopy);

                    DataColumn dtColumnTextBasicFordtExampleCopy = new DataColumn();
                    dtColumnTextBasicFordtExampleCopy.DataType = typeof(string);
                    dtColumnTextBasicFordtExampleCopy.ColumnName = "TextBasic";
                    dtExampleCopy.Columns.Add(dtColumnTextBasicFordtExampleCopy);

                    DataColumn dtColumnEmailFordtExampleCopy = new DataColumn();
                    dtColumnEmailFordtExampleCopy.DataType = typeof(string);
                    dtColumnEmailFordtExampleCopy.ColumnName = "Email";
                    dtExampleCopy.Columns.Add(dtColumnEmailFordtExampleCopy);

                    DataColumn dtColumnFileUploadFordtExampleCopy = new DataColumn();
                    dtColumnFileUploadFordtExampleCopy.DataType = typeof(string);
                    dtColumnFileUploadFordtExampleCopy.ColumnName = "FileUpload";
                    dtExampleCopy.Columns.Add(dtColumnFileUploadFordtExampleCopy);

                    DataColumn dtColumnHexColourFordtExampleCopy = new DataColumn();
                    dtColumnHexColourFordtExampleCopy.DataType = typeof(string);
                    dtColumnHexColourFordtExampleCopy.ColumnName = "HexColour";
                    dtExampleCopy.Columns.Add(dtColumnHexColourFordtExampleCopy);

                    DataColumn dtColumnPasswordFordtExampleCopy = new DataColumn();
                    dtColumnPasswordFordtExampleCopy.DataType = typeof(string);
                    dtColumnPasswordFordtExampleCopy.ColumnName = "Password";
                    dtExampleCopy.Columns.Add(dtColumnPasswordFordtExampleCopy);

                    DataColumn dtColumnPhoneNumberFordtExampleCopy = new DataColumn();
                    dtColumnPhoneNumberFordtExampleCopy.DataType = typeof(string);
                    dtColumnPhoneNumberFordtExampleCopy.ColumnName = "PhoneNumber";
                    dtExampleCopy.Columns.Add(dtColumnPhoneNumberFordtExampleCopy);

                    DataColumn dtColumnTagFordtExampleCopy = new DataColumn();
                    dtColumnTagFordtExampleCopy.DataType = typeof(string);
                    dtColumnTagFordtExampleCopy.ColumnName = "Tag";
                    dtExampleCopy.Columns.Add(dtColumnTagFordtExampleCopy);

                    DataColumn dtColumnTextAreaFordtExampleCopy = new DataColumn();
                    dtColumnTextAreaFordtExampleCopy.DataType = typeof(string);
                    dtColumnTextAreaFordtExampleCopy.ColumnName = "TextArea";
                    dtExampleCopy.Columns.Add(dtColumnTextAreaFordtExampleCopy);

                    DataColumn dtColumnTextEditorFordtExampleCopy = new DataColumn();
                    dtColumnTextEditorFordtExampleCopy.DataType = typeof(string);
                    dtColumnTextEditorFordtExampleCopy.ColumnName = "TextEditor";
                    dtExampleCopy.Columns.Add(dtColumnTextEditorFordtExampleCopy);

                    DataColumn dtColumnURLFordtExampleCopy = new DataColumn();
                    dtColumnURLFordtExampleCopy.DataType = typeof(string);
                    dtColumnURLFordtExampleCopy.ColumnName = "URL";
                    dtExampleCopy.Columns.Add(dtColumnURLFordtExampleCopy);

                    DataColumn dtColumnTimeFordtExampleCopy = new DataColumn();
                    dtColumnTimeFordtExampleCopy.DataType = typeof(string);
                    dtColumnTimeFordtExampleCopy.ColumnName = "Time";
                    dtExampleCopy.Columns.Add(dtColumnTimeFordtExampleCopy);

                    
                    #endregion

                    dsExample.Tables.Add(dtExampleCopy);

                    for (int i = 0; i < dsExample.Tables.Count; i++)
                    {
                        dtExampleCopy = new ExampleModel().Select1ByExampleIdToDataTable(Convert.ToInt32(RowChecked));

                        foreach (DataRow DataRow in dtExampleCopy.Rows)
                        {
                            dsExample.Tables[0].Rows.Add(DataRow.ItemArray);
                        }
                    }
                    
                }

                for (int i = 0; i < dsExample.Tables.Count; i++)
                {
                    var Sheet = Book.Worksheets.Add(dsExample.Tables[i]);
                    Sheet.ColumnsUsed().AdjustToContents();
                }

                Book.SaveAs($@"wwwroot/ExcelFiles/Exampleing/Example/Example_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.xlsx");
            }

            return Now;
        }

        public DateTime ExportAsCSV(Ajax Ajax, string ExportationType)
        {
            DateTime Now = DateTime.Now;
            List<ExampleModel> lstExampleModel = new List<ExampleModel> { };

            if (ExportationType == "All")
            {
                lstExampleModel = new ExampleModel().SelectAllToList();

            }
            else if (ExportationType == "JustChecked")
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                foreach (string RowChecked in RowsChecked)
                {
                    ExampleModel ExampleModel = new ExampleModel().Select1ByExampleIdToModel(Convert.ToInt32(RowChecked));
                    lstExampleModel.Add(ExampleModel);
                }
            }

            using (var Writer = new StreamWriter($@"wwwroot/CSVFiles/Exampleing/Example/Example_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.csv"))
            using (var CsvWriter = new CsvWriter(Writer, CultureInfo.InvariantCulture))
            {
                CsvWriter.WriteRecords(lstExampleModel);
            }

            return Now;
        }
        #endregion
    }
}