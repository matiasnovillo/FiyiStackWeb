using ClosedXML.Excel;
using CsvHelper;
using IronPdf;
using Microsoft.AspNetCore.Http;
using FiyiStackWeb.Areas.CMSCore.Models;
using FiyiStackWeb.Areas.CMSCore.Protocols;
using FiyiStackWeb.Library;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
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

//Last modification on: 08/12/2022 10:43:01

namespace FiyiStackWeb.Areas.CMSCore.Services
{
    /// <summary>
    /// Stack:             4<br/>
    /// Name:              C# Service. <br/>
    /// Function:          Allow you to separate data contract stored in C# model from business with your clients. <br/>
    /// Also, allow dependency injection inside controllers/web apis<br/>
    /// Last modification: 08/12/2022 10:43:01
    /// </summary>
    public partial class UserService : UserProtocol
    {
        private readonly IHttpContextAccessor _IHttpContextAccessor;

        public UserService(IHttpContextAccessor IHttpContextAccessor)
        {
            _IHttpContextAccessor = IHttpContextAccessor;
        }

        #region Queries
        public UserModel Select1ByUserIdToModel(int UserId)
        {
            return new UserModel().Select1ByUserIdToModel(UserId);
        }

        public List<UserModel> SelectAllToList()
        {
            return new UserModel().SelectAllToList();
        }

        public usermodelQ SelectAllPagedToModel(usermodelQ userQ)
        {
            return new UserModel().SelectAllPagedToModel(userQ);
        }
        #endregion

        #region Non-Queries
        public int Insert(UserModel UserModel)
        {
            return new UserModel().Insert(UserModel);
        }

        public int UpdateByUserId(UserModel UserModel)
        {
            return new UserModel().UpdateByUserId(UserModel);
        }

        public int DeleteByUserId(int UserId)
        {
            return new UserModel().DeleteByUserId(UserId);
        }

        public void DeleteManyOrAll(Ajax Ajax, string DeleteType)
        {
            if (DeleteType == "All")
            {
                UserModel UserModel = new UserModel();
                UserModel.DeleteAll();
            }
            else
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                for (int i = 0; i < RowsChecked.Length; i++)
                {
                    UserModel UserModel = new UserModel().Select1ByUserIdToModel(Convert.ToInt32(RowsChecked[i]));
                    UserModel.DeleteByUserId(UserModel.UserId);
                }
            }
        }

        public int CopyByUserId(int UserId)
        {
            UserModel UserModel = new UserModel().Select1ByUserIdToModel(UserId);
            int NewEnteredId = new UserModel().Insert(UserModel);

            return NewEnteredId;
        }

        public int[] CopyManyOrAll(Ajax Ajax, string CopyType)
        {
            if (CopyType == "All")
            {
                List<UserModel> lstUserModel = new List<UserModel> { };
                lstUserModel = new UserModel().SelectAllToList();

                int[] NewEnteredIds = new int[lstUserModel.Count];

                for (int i = 0; i < lstUserModel.Count; i++)
                {
                    NewEnteredIds[i] = lstUserModel[i].Insert();
                }

                return NewEnteredIds;
            }
            else
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');
                int[] NewEnteredIds = new int[RowsChecked.Length];

                for (int i = 0; i < RowsChecked.Length; i++)
                {
                    UserModel UserModel = new UserModel().Select1ByUserIdToModel(Convert.ToInt32(RowsChecked[i]));
                    NewEnteredIds[i] = UserModel.Insert();
                }

                return NewEnteredIds;
            }
        }

        public UserModel Login(string UserNameOrEmail, string Password)
        {
            Password = Security.EncodeString(Password);
            UserModel UserModel = new UserModel().Login(UserNameOrEmail, Password);

            return UserModel;
        }

        public string ChangePassword(int UserId, string ActualPassword, string NewPassword)
        {
            NewPassword = Security.EncodeString(NewPassword);
            ActualPassword = Security.EncodeString(ActualPassword);

            UserModel UserModel = new UserModel(UserId);

            if (UserModel.Password == ActualPassword)
            {
                UserModel.ChangePassword(UserId, NewPassword);
                return "Password changed";
            }
            else
            {
                return "The actual password is wrong";
            }
        }
        #endregion

        #region Other services
        public DateTime ExportAsPDF(Ajax Ajax, string ExportationType)
        {
            var Renderer = new HtmlToPdf();
            DateTime Now = DateTime.Now;
            string RowsAsHTML = "";
            List<UserModel> lstUserModel = new List<UserModel> { };

            if (ExportationType == "All")
            {
                lstUserModel = new UserModel().SelectAllToList();

            }
            else if (ExportationType == "JustChecked")
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                foreach (string RowChecked in RowsChecked)
                {
                    UserModel UserModel = new UserModel().Select1ByUserIdToModel(Convert.ToInt32(RowChecked));
                    lstUserModel.Add(UserModel);
                }
            }

            foreach (UserModel row in lstUserModel)
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
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #4c4c4c; font-size: 36px; line-height: 45px; font-weight: 300; letter-spacing: -1px;"">Registers of User</span>
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
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">UserId&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">FantasyName&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Email&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Password&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">ProfileImageURL&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DateTimeBirth&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">VerificationToken&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">CookieToken&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">RoleId&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">Active&nbsp;&nbsp;&nbsp;</span>
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
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DateTimeCreation&nbsp;&nbsp;&nbsp;</span>
            </font>
            <div style=""height: 10px; line-height: 10px; font-size: 8px;"">&nbsp;</div>
        </th><th align=""left"" valign=""top"" style=""border-width: 1px; border-style: solid; border-color: #e8e8e8; border-top: none; border-left: none; border-right: none;"">
            <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px; font-weight: 600;"">
                <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px; font-weight: 600;"">DateTimeLastModification&nbsp;&nbsp;&nbsp;</span>
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
").SaveAs($@"wwwroot/PDFFiles/CMSCore/User/User_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.pdf");

            return Now;
        }

        public DateTime ExportAsExcel(Ajax Ajax, string ExportationType)
        {
            DateTime Now = DateTime.Now;

            using var Book = new XLWorkbook();

            if (ExportationType == "All")
            {
                DataTable dtUser = new DataTable();
                dtUser.TableName = "User";

                //We define another DataTable dtUserCopy to avoid issue related to DateTime conversion
                DataTable dtUserCopy = new DataTable();
                dtUserCopy.TableName = "User";

                #region Define columns for dtUserCopy
                DataColumn dtColumnUserIdFordtUserCopy = new DataColumn();
                    dtColumnUserIdFordtUserCopy.DataType = typeof(string);
                    dtColumnUserIdFordtUserCopy.ColumnName = "UserId";
                    dtUserCopy.Columns.Add(dtColumnUserIdFordtUserCopy);

                    DataColumn dtColumnFantasyNameFordtUserCopy = new DataColumn();
                    dtColumnFantasyNameFordtUserCopy.DataType = typeof(string);
                    dtColumnFantasyNameFordtUserCopy.ColumnName = "FantasyName";
                    dtUserCopy.Columns.Add(dtColumnFantasyNameFordtUserCopy);

                    DataColumn dtColumnEmailFordtUserCopy = new DataColumn();
                    dtColumnEmailFordtUserCopy.DataType = typeof(string);
                    dtColumnEmailFordtUserCopy.ColumnName = "Email";
                    dtUserCopy.Columns.Add(dtColumnEmailFordtUserCopy);

                    DataColumn dtColumnPasswordFordtUserCopy = new DataColumn();
                    dtColumnPasswordFordtUserCopy.DataType = typeof(string);
                    dtColumnPasswordFordtUserCopy.ColumnName = "Password";
                    dtUserCopy.Columns.Add(dtColumnPasswordFordtUserCopy);

                    DataColumn dtColumnProfileImageURLFordtUserCopy = new DataColumn();
                    dtColumnProfileImageURLFordtUserCopy.DataType = typeof(string);
                    dtColumnProfileImageURLFordtUserCopy.ColumnName = "ProfileImageURL";
                    dtUserCopy.Columns.Add(dtColumnProfileImageURLFordtUserCopy);

                    DataColumn dtColumnDateTimeBirthFordtUserCopy = new DataColumn();
                    dtColumnDateTimeBirthFordtUserCopy.DataType = typeof(string);
                    dtColumnDateTimeBirthFordtUserCopy.ColumnName = "DateTimeBirth";
                    dtUserCopy.Columns.Add(dtColumnDateTimeBirthFordtUserCopy);

                    DataColumn dtColumnVerificationTokenFordtUserCopy = new DataColumn();
                    dtColumnVerificationTokenFordtUserCopy.DataType = typeof(string);
                    dtColumnVerificationTokenFordtUserCopy.ColumnName = "VerificationToken";
                    dtUserCopy.Columns.Add(dtColumnVerificationTokenFordtUserCopy);

                    DataColumn dtColumnCookieTokenFordtUserCopy = new DataColumn();
                    dtColumnCookieTokenFordtUserCopy.DataType = typeof(string);
                    dtColumnCookieTokenFordtUserCopy.ColumnName = "CookieToken";
                    dtUserCopy.Columns.Add(dtColumnCookieTokenFordtUserCopy);

                    DataColumn dtColumnRoleIdFordtUserCopy = new DataColumn();
                    dtColumnRoleIdFordtUserCopy.DataType = typeof(string);
                    dtColumnRoleIdFordtUserCopy.ColumnName = "RoleId";
                    dtUserCopy.Columns.Add(dtColumnRoleIdFordtUserCopy);

                    DataColumn dtColumnActiveFordtUserCopy = new DataColumn();
                    dtColumnActiveFordtUserCopy.DataType = typeof(string);
                    dtColumnActiveFordtUserCopy.ColumnName = "Active";
                    dtUserCopy.Columns.Add(dtColumnActiveFordtUserCopy);

                    DataColumn dtColumnUserCreationIdFordtUserCopy = new DataColumn();
                    dtColumnUserCreationIdFordtUserCopy.DataType = typeof(string);
                    dtColumnUserCreationIdFordtUserCopy.ColumnName = "UserCreationId";
                    dtUserCopy.Columns.Add(dtColumnUserCreationIdFordtUserCopy);

                    DataColumn dtColumnUserLastModificationIdFordtUserCopy = new DataColumn();
                    dtColumnUserLastModificationIdFordtUserCopy.DataType = typeof(string);
                    dtColumnUserLastModificationIdFordtUserCopy.ColumnName = "UserLastModificationId";
                    dtUserCopy.Columns.Add(dtColumnUserLastModificationIdFordtUserCopy);

                    DataColumn dtColumnDateTimeCreationFordtUserCopy = new DataColumn();
                    dtColumnDateTimeCreationFordtUserCopy.DataType = typeof(string);
                    dtColumnDateTimeCreationFordtUserCopy.ColumnName = "DateTimeCreation";
                    dtUserCopy.Columns.Add(dtColumnDateTimeCreationFordtUserCopy);

                    DataColumn dtColumnDateTimeLastModificationFordtUserCopy = new DataColumn();
                    dtColumnDateTimeLastModificationFordtUserCopy.DataType = typeof(string);
                    dtColumnDateTimeLastModificationFordtUserCopy.ColumnName = "DateTimeLastModification";
                    dtUserCopy.Columns.Add(dtColumnDateTimeLastModificationFordtUserCopy);

                    
                #endregion

                dtUser = new UserModel().SelectAllToDataTable();

                foreach (DataRow DataRow in dtUser.Rows)
                {
                    dtUserCopy.Rows.Add(DataRow.ItemArray);
                }

                var Sheet = Book.Worksheets.Add(dtUserCopy);

                Sheet.ColumnsUsed().AdjustToContents();

                Book.SaveAs($@"wwwroot/ExcelFiles/Usering/User/User_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.xlsx");
            }
            else if (ExportationType == "JustChecked")
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                DataSet dsUser = new DataSet();

                foreach (string RowChecked in RowsChecked)
                {
                    //We define another DataTable dtUserCopy to avoid issue related to DateTime conversion
                    DataTable dtUserCopy = new DataTable();
                    dtUserCopy.TableName = "User";

                    #region Define columns for dtUserCopy
                    DataColumn dtColumnUserIdFordtUserCopy = new DataColumn();
                    dtColumnUserIdFordtUserCopy.DataType = typeof(string);
                    dtColumnUserIdFordtUserCopy.ColumnName = "UserId";
                    dtUserCopy.Columns.Add(dtColumnUserIdFordtUserCopy);

                    DataColumn dtColumnFantasyNameFordtUserCopy = new DataColumn();
                    dtColumnFantasyNameFordtUserCopy.DataType = typeof(string);
                    dtColumnFantasyNameFordtUserCopy.ColumnName = "FantasyName";
                    dtUserCopy.Columns.Add(dtColumnFantasyNameFordtUserCopy);

                    DataColumn dtColumnEmailFordtUserCopy = new DataColumn();
                    dtColumnEmailFordtUserCopy.DataType = typeof(string);
                    dtColumnEmailFordtUserCopy.ColumnName = "Email";
                    dtUserCopy.Columns.Add(dtColumnEmailFordtUserCopy);

                    DataColumn dtColumnPasswordFordtUserCopy = new DataColumn();
                    dtColumnPasswordFordtUserCopy.DataType = typeof(string);
                    dtColumnPasswordFordtUserCopy.ColumnName = "Password";
                    dtUserCopy.Columns.Add(dtColumnPasswordFordtUserCopy);

                    DataColumn dtColumnProfileImageURLFordtUserCopy = new DataColumn();
                    dtColumnProfileImageURLFordtUserCopy.DataType = typeof(string);
                    dtColumnProfileImageURLFordtUserCopy.ColumnName = "ProfileImageURL";
                    dtUserCopy.Columns.Add(dtColumnProfileImageURLFordtUserCopy);

                    DataColumn dtColumnDateTimeBirthFordtUserCopy = new DataColumn();
                    dtColumnDateTimeBirthFordtUserCopy.DataType = typeof(string);
                    dtColumnDateTimeBirthFordtUserCopy.ColumnName = "DateTimeBirth";
                    dtUserCopy.Columns.Add(dtColumnDateTimeBirthFordtUserCopy);

                    DataColumn dtColumnVerificationTokenFordtUserCopy = new DataColumn();
                    dtColumnVerificationTokenFordtUserCopy.DataType = typeof(string);
                    dtColumnVerificationTokenFordtUserCopy.ColumnName = "VerificationToken";
                    dtUserCopy.Columns.Add(dtColumnVerificationTokenFordtUserCopy);

                    DataColumn dtColumnCookieTokenFordtUserCopy = new DataColumn();
                    dtColumnCookieTokenFordtUserCopy.DataType = typeof(string);
                    dtColumnCookieTokenFordtUserCopy.ColumnName = "CookieToken";
                    dtUserCopy.Columns.Add(dtColumnCookieTokenFordtUserCopy);

                    DataColumn dtColumnRoleIdFordtUserCopy = new DataColumn();
                    dtColumnRoleIdFordtUserCopy.DataType = typeof(string);
                    dtColumnRoleIdFordtUserCopy.ColumnName = "RoleId";
                    dtUserCopy.Columns.Add(dtColumnRoleIdFordtUserCopy);

                    DataColumn dtColumnActiveFordtUserCopy = new DataColumn();
                    dtColumnActiveFordtUserCopy.DataType = typeof(string);
                    dtColumnActiveFordtUserCopy.ColumnName = "Active";
                    dtUserCopy.Columns.Add(dtColumnActiveFordtUserCopy);

                    DataColumn dtColumnUserCreationIdFordtUserCopy = new DataColumn();
                    dtColumnUserCreationIdFordtUserCopy.DataType = typeof(string);
                    dtColumnUserCreationIdFordtUserCopy.ColumnName = "UserCreationId";
                    dtUserCopy.Columns.Add(dtColumnUserCreationIdFordtUserCopy);

                    DataColumn dtColumnUserLastModificationIdFordtUserCopy = new DataColumn();
                    dtColumnUserLastModificationIdFordtUserCopy.DataType = typeof(string);
                    dtColumnUserLastModificationIdFordtUserCopy.ColumnName = "UserLastModificationId";
                    dtUserCopy.Columns.Add(dtColumnUserLastModificationIdFordtUserCopy);

                    DataColumn dtColumnDateTimeCreationFordtUserCopy = new DataColumn();
                    dtColumnDateTimeCreationFordtUserCopy.DataType = typeof(string);
                    dtColumnDateTimeCreationFordtUserCopy.ColumnName = "DateTimeCreation";
                    dtUserCopy.Columns.Add(dtColumnDateTimeCreationFordtUserCopy);

                    DataColumn dtColumnDateTimeLastModificationFordtUserCopy = new DataColumn();
                    dtColumnDateTimeLastModificationFordtUserCopy.DataType = typeof(string);
                    dtColumnDateTimeLastModificationFordtUserCopy.ColumnName = "DateTimeLastModification";
                    dtUserCopy.Columns.Add(dtColumnDateTimeLastModificationFordtUserCopy);

                    
                    #endregion

                    dsUser.Tables.Add(dtUserCopy);

                    for (int i = 0; i < dsUser.Tables.Count; i++)
                    {
                        dtUserCopy = new UserModel().Select1ByUserIdToDataTable(Convert.ToInt32(RowChecked));

                        foreach (DataRow DataRow in dtUserCopy.Rows)
                        {
                            dsUser.Tables[0].Rows.Add(DataRow.ItemArray);
                        }
                    }
                    
                }

                for (int i = 0; i < dsUser.Tables.Count; i++)
                {
                    var Sheet = Book.Worksheets.Add(dsUser.Tables[i]);
                    Sheet.ColumnsUsed().AdjustToContents();
                }

                Book.SaveAs($@"wwwroot/ExcelFiles/Usering/User/User_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.xlsx");
            }

            return Now;
        }

        public DateTime ExportAsCSV(Ajax Ajax, string ExportationType)
        {
            DateTime Now = DateTime.Now;
            List<UserModel> lstUserModel = new List<UserModel> { };

            if (ExportationType == "All")
            {
                lstUserModel = new UserModel().SelectAllToList();

            }
            else if (ExportationType == "JustChecked")
            {
                string[] RowsChecked = Ajax.AjaxForString.Split(',');

                foreach (string RowChecked in RowsChecked)
                {
                    UserModel UserModel = new UserModel().Select1ByUserIdToModel(Convert.ToInt32(RowChecked));
                    lstUserModel.Add(UserModel);
                }
            }

            using (var Writer = new StreamWriter($@"wwwroot/CSVFiles/Usering/User/User_{Now.ToString("yyyy_MM_dd_HH_mm_ss_fff")}.csv"))
            using (var CsvWriter = new CsvWriter(Writer, CultureInfo.InvariantCulture))
            {
                CsvWriter.WriteRecords(lstUserModel);
            }

            return Now;
        }
        #endregion
    }
}