using FiyiStackWeb.Areas.FiyiStack.Models;
using System.Collections.Generic;

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

namespace FiyiStackWeb.Areas.FiyiStack.DTOs
{

    /// <summary>
    /// Virtual model used for [dbo].[FiyiStack.SendUsDBDiagram.SelectAllPaged] stored procedure
    /// </summary>
    public partial class sendusdbdiagramSelectAllPaged
    {
        public string QueryString { get; set; }
        public int ActualPageNumber { get; set; }
        public int RowsPerPage { get; set; }
        public string SorterColumn { get; set; }
        public bool SortToggler { get; set; }
        public int TotalRows { get; set; }
        public int TotalPages { get; set; }
        public List<SendUsDBDiagramModel> lstSendUsDBDiagramModel { get; set; }
    }
}