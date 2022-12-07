using FiyiStackWeb.Areas.Basic.Core.Models;
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

//Last modification on: 07/12/2022 17:01:54

namespace FiyiStackWeb.Areas.Basic.Core.Protocols
{
    /// <summary>
    /// Stack:             5<br/>
    /// Name:              C# Protocol/Interface. <br/>
    /// Function:          This protocol/interface allow you to standardize the C# service associated. 
    ///                    In other words, define the functions that has to implement the C# service. <br/>
    /// Note:              Raise exception in case of missing any function declared here but not in the service. <br/>
    /// Last modification: 07/12/2022 17:01:54
    /// </summary>
    public partial interface FailureProtocol
    {
        #region Queries
        /// <summary>
        /// Note: Raise exception when the query find duplicated IDs
        /// </summary>
        /// <param name="FailureId"></param>
        /// <returns></returns>
        FailureModel Select1ByFailureIdToModel(int FailureId);

        List<FailureModel> SelectAllToList();

        failuremodelQ SelectAllPagedToModel(failuremodelQ failureQ);
        #endregion

        #region Non-Queries
        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <param name="Failure"></param>
        /// <returns>NewEnteredId: The ID of the last registry inserted in Failure table</returns>
        int Insert(FailureModel Failure);

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull update in database
        /// </summary>
        /// <param name="Failure"></param>
        /// <returns>The number of rows updated in Failure table</returns>
        int UpdateByFailureId(FailureModel Failure);

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        /// <param name="FailureId"></param>
        /// <returns>The number of rows deleted in Failure table</returns>
        int DeleteByFailureId(int FailureId);

        void DeleteManyOrAll(Ajax Ajax, string DeleteType);

        int CopyByFailureId(int FailureId);

        int[] CopyManyOrAll(Ajax Ajax, string CopyType);
        #endregion

        #region Other actions
        DateTime ExportAsPDF(Ajax Ajax, string ExportationType);

        DateTime ExportAsExcel(Ajax Ajax, string ExportationType);

        DateTime ExportAsCSV(Ajax Ajax, string ExportationType);
        #endregion
    }
}