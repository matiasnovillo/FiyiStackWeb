using FiyiStackWeb.Areas.BasicCulture.Models;
using FiyiStackWeb.Library;
using System;
using System.Collections.Generic;

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

//Last modification on: 20/12/2022 18:48:59

namespace FiyiStackWeb.Areas.BasicCulture.Protocols
{
    /// <summary>
    /// Stack:             5<br/>
    /// Name:              C# Protocol/Interface. <br/>
    /// Function:          This protocol/interface allow you to standardize the C# service associated. 
    ///                    In other words, define the functions that has to implement the C# service. <br/>
    /// Note:              Raise exception in case of missing any function declared here but not in the service. <br/>
    /// Last modification: 20/12/2022 18:48:59
    /// </summary>
    public partial interface PlanetProtocol
    {
        #region Queries
        /// <summary>
        /// Note: Raise exception when the query find duplicated IDs
        /// </summary>
        /// <param name="PlanetId"></param>
        /// <returns></returns>
        PlanetModel Select1ByPlanetIdToModel(int PlanetId);

        List<PlanetModel> SelectAllToList();

        planetmodelQ SelectAllPagedToModel(planetmodelQ planetQ);
        #endregion

        #region Non-Queries
        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <param name="Planet"></param>
        /// <returns>NewEnteredId: The ID of the last registry inserted in Planet table</returns>
        int Insert(PlanetModel Planet);

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull update in database
        /// </summary>
        /// <param name="Planet"></param>
        /// <returns>The number of rows updated in Planet table</returns>
        int UpdateByPlanetId(PlanetModel Planet);

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        /// <param name="PlanetId"></param>
        /// <returns>The number of rows deleted in Planet table</returns>
        int DeleteByPlanetId(int PlanetId);

        void DeleteManyOrAll(Ajax Ajax, string DeleteType);

        int CopyByPlanetId(int PlanetId);

        int[] CopyManyOrAll(Ajax Ajax, string CopyType);
        #endregion

        #region Other actions
        DateTime ExportAsPDF(Ajax Ajax, string ExportationType);

        DateTime ExportAsExcel(Ajax Ajax, string ExportationType);

        DateTime ExportAsCSV(Ajax Ajax, string ExportationType);
        #endregion
    }
}