using FiyiStackWeb.Areas.CMSCore.Models;
using FiyiStackWeb.Library;
using System;
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

//Last modification on: 14/12/2022 19:43:28

namespace FiyiStackWeb.Areas.CMSCore.Protocols
{
    /// <summary>
    /// Stack:             5<br/>
    /// Name:              C# Protocol/Interface. <br/>
    /// Function:          This protocol/interface allow you to standardize the C# service associated. 
    ///                    In other words, define the functions that has to implement the C# service. <br/>
    /// Note:              Raise exception in case of missing any function declared here but not in the service. <br/>
    /// Last modification: 14/12/2022 19:43:28
    /// </summary>
    public partial interface UserProtocol
    {
        #region Queries
        /// <summary>
        /// Note: Raise exception when the query find duplicated IDs
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        UserModel Select1ByUserIdToModel(int UserId);

        List<UserModel> SelectAllToList();

        usermodelQ SelectAllPagedToModel(usermodelQ userQ);
        #endregion

        #region Non-Queries
        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <param name="User"></param>
        /// <returns>NewEnteredId: The ID of the last registry inserted in User table</returns>
        int Insert(UserModel User);

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull update in database
        /// </summary>
        /// <param name="User"></param>
        /// <returns>The number of rows updated in User table</returns>
        int UpdateByUserId(UserModel User);

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns>The number of rows deleted in User table</returns>
        int DeleteByUserId(int UserId);

        void DeleteManyOrAll(Ajax Ajax, string DeleteType);

        int CopyByUserId(int UserId);

        int[] CopyManyOrAll(Ajax Ajax, string CopyType);

        UserModel Login(string UserFantasyNameOrEmail, string Password);

        string ChangePassword(int UserId, string ActualPassword, string NewPassword);
        #endregion

        #region Other actions
        DateTime ExportAsPDF(Ajax Ajax, string ExportationType);

        DateTime ExportAsExcel(Ajax Ajax, string ExportationType);

        DateTime ExportAsCSV(Ajax Ajax, string ExportationType);
        #endregion
    }
}