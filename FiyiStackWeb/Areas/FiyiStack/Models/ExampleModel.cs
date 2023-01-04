using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

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

namespace FiyiStackWeb.Areas.FiyiStack.Models
{
    /// <summary>
    /// Stack:             3 <br/>
    /// Name:              C# Model with stored procedure calls saved on database. <br/>
    /// Function:          Allow you to manipulate information from database using stored procedures.
    ///                    Also, let you make other related actions with the model in question or
    ///                    make temporal copies with random data. <br/>
    /// Fields:            22 <br/> 
    /// Dependencies:      0 models <br/>
    /// Last modification: 23/12/2022 15:53:55
    /// </summary>
    [Serializable]
    public partial class ExampleModel
    {
        [NotMapped]
        private string _ConnectionString = "Password=O$6j5f5b4;Persist Security Info=True;User ID=fiyistac_FiyiStackWebAdmin;Initial Catalog=fiyistac_FiyiStackWeb;Data Source=192.168.28.14;TrustServerCertificate=True";

        #region Fields
        [Library.ModelAttributeValidator.Key("ExampleId")]
        public int ExampleId { get; set; }

        ///<summary>
        /// For auditing purposes
        ///</summary>
        public bool Active { get; set; }

        ///<summary>
        /// For auditing purposes
        ///</summary>
        [Library.ModelAttributeValidator.DateTime("DateTimeCreation", false, "1753-01-01T00:00", "9998-12-30T23:59")]
        public DateTime DateTimeCreation { get; set; }

        ///<summary>
        /// For auditing purposes
        ///</summary>
        [Library.ModelAttributeValidator.DateTime("DateTimeLastModification", false, "1753-01-01T00:00", "9998-12-30T23:59")]
        public DateTime DateTimeLastModification { get; set; }

        ///<summary>
        /// For auditing purposes
        ///</summary>
        [Library.ModelAttributeValidator.Key("UserCreationId")]
        public int UserCreationId { get; set; }

        ///<summary>
        /// For auditing purposes
        ///</summary>
        [Library.ModelAttributeValidator.Key("UserLastModificationId")]
        public int UserLastModificationId { get; set; }

        public bool Boolean { get; set; }

        [Library.ModelAttributeValidator.DateTime("DateTime", false, "1753-01-01T00:00", "9998-12-30T23:59")]
        public DateTime DateTime { get; set; }

        [Library.ModelAttributeValidator.Decimal("Decimal", false, 0D, 1000D)]
        public decimal Decimal { get; set; }

        [Library.ModelAttributeValidator.Key("ForeignKey1")]
        public int ForeignKey1 { get; set; }

        [Library.ModelAttributeValidator.Key("ForeignKey2")]
        public int ForeignKey2 { get; set; }

        [Library.ModelAttributeValidator.Int("Integer", false, 0, 1000)]
        public int Integer { get; set; }

        [Library.ModelAttributeValidator.String("TextBasic", false, 1, 8000, "")]
        public string TextBasic { get; set; }

        [Library.ModelAttributeValidator.String("TextEmail", false, 1, 8000, "")]
        public string TextEmail { get; set; }

        [Library.ModelAttributeValidator.String("TextFile", true, 1, 8000, "")]
        public string TextFile { get; set; }

        [Library.ModelAttributeValidator.HexColour("TextHexColour", false, "000000", "FFFFFF")]
        public string TextHexColour { get; set; }

        [Library.ModelAttributeValidator.String("TextPassword", false, 1, 8000, "")]
        public string TextPassword { get; set; }

        [Library.ModelAttributeValidator.String("TextPhoneNumber", false, 1, 8000, "")]
        public string TextPhoneNumber { get; set; }

        [Library.ModelAttributeValidator.String("TextTag", false, 1, 8000, "")]
        public string TextTag { get; set; }

        [Library.ModelAttributeValidator.String("TextArea", false, 1, 8000, "")]
        public string TextArea { get; set; }

        [Library.ModelAttributeValidator.String("TextEditor", false, 1, 8000, "")]
        public string TextEditor { get; set; }

        [Library.ModelAttributeValidator.String("TextURL", false, 1, 8000, "")]
        public string TextURL { get; set; }
        #endregion

        #region Models that depend on this model
        
        #endregion

        #region Constructors
        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create fastly this model with field ExampleId = 0 <br/>
        /// Note 1:       Generally used to have fast access to functions of object. <br/>
        /// Note 2:       Need construction with [new] reserved word, as all constructors. <br/>
        /// Fields:       22 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel()
        {
            try { ExampleId = 0; }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model with stored information in database using ExampleId <br/>
        /// Note:         Raise exception on duplicated IDs <br/>
        /// Fields:       22 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel(int ExampleId)
        {
            try
            {
                List<ExampleModel> lstExampleModel = new List<ExampleModel>();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    //In case of not finding anything, Dapper return a List<ExampleModel>
                    lstExampleModel = (List<ExampleModel>)sqlConnection.Query<ExampleModel>("[dbo].[FiyiStack.Example.Select1ByExampleId]", dp, commandType: CommandType.StoredProcedure);
                }

                if (lstExampleModel.Count > 1)
                {
                    throw new Exception("The stored procedure [dbo].[FiyiStack.Example.Select1ByExampleId] returned more than one register/row");
                }
        
                foreach (ExampleModel example in lstExampleModel)
                {
                    this.ExampleId = example.ExampleId;
					this.Active = example.Active;
					this.DateTimeCreation = example.DateTimeCreation;
					this.DateTimeLastModification = example.DateTimeLastModification;
					this.UserCreationId = example.UserCreationId;
					this.UserLastModificationId = example.UserLastModificationId;
					this.Boolean = example.Boolean;
					this.DateTime = example.DateTime;
					this.Decimal = example.Decimal;
					this.ForeignKey1 = example.ForeignKey1;
					this.ForeignKey2 = example.ForeignKey2;
					this.Integer = example.Integer;
					this.TextBasic = example.TextBasic;
					this.TextEmail = example.TextEmail;
					this.TextFile = example.TextFile;
					this.TextHexColour = example.TextHexColour;
					this.TextPassword = example.TextPassword;
					this.TextPhoneNumber = example.TextPhoneNumber;
					this.TextTag = example.TextTag;
					this.TextArea = example.TextArea;
					this.TextEditor = example.TextEditor;
					this.TextURL = example.TextURL;
                }
            }
            catch (Exception ex) { throw ex; }
        }


        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model with filled parameters <br/>
        /// Note:         Raise exception on duplicated IDs <br/>
        /// Fields:       22 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel(int ExampleId, bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, bool Boolean, DateTime DateTime, decimal Decimal, int ForeignKey1, int ForeignKey2, int Integer, string TextBasic, string TextEmail, string TextFile, string TextHexColour, string TextPassword, string TextPhoneNumber, string TextTag, string TextArea, string TextEditor, string TextURL)
        {
            try
            {
                this.ExampleId = ExampleId;
				this.Active = Active;
				this.DateTimeCreation = DateTimeCreation;
				this.DateTimeLastModification = DateTimeLastModification;
				this.UserCreationId = UserCreationId;
				this.UserLastModificationId = UserLastModificationId;
				this.Boolean = Boolean;
				this.DateTime = DateTime;
				this.Decimal = Decimal;
				this.ForeignKey1 = ForeignKey1;
				this.ForeignKey2 = ForeignKey2;
				this.Integer = Integer;
				this.TextBasic = TextBasic;
				this.TextEmail = TextEmail;
				this.TextFile = TextFile;
				this.TextHexColour = TextHexColour;
				this.TextPassword = TextPassword;
				this.TextPhoneNumber = TextPhoneNumber;
				this.TextTag = TextTag;
				this.TextArea = TextArea;
				this.TextEditor = TextEditor;
				this.TextURL = TextURL;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model (copy) using the given model (original), example, passed by parameter. <br/>
        /// Note:         This constructor is generally used to execute functions using the copied fields <br/>
        /// Fields:       22 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel(ExampleModel example)
        {
            try
            {
                ExampleId = example.ExampleId;
				Active = example.Active;
				DateTimeCreation = example.DateTimeCreation;
				DateTimeLastModification = example.DateTimeLastModification;
				UserCreationId = example.UserCreationId;
				UserLastModificationId = example.UserLastModificationId;
				Boolean = example.Boolean;
				DateTime = example.DateTime;
				Decimal = example.Decimal;
				ForeignKey1 = example.ForeignKey1;
				ForeignKey2 = example.ForeignKey2;
				Integer = example.Integer;
				TextBasic = example.TextBasic;
				TextEmail = example.TextEmail;
				TextFile = example.TextFile;
				TextHexColour = example.TextHexColour;
				TextPassword = example.TextPassword;
				TextPhoneNumber = example.TextPhoneNumber;
				TextTag = example.TextTag;
				TextArea = example.TextArea;
				TextEditor = example.TextEditor;
				TextURL = example.TextURL;
            }
            catch (Exception ex) { throw ex; }
        }
        #endregion
        
        /// <summary>
        /// 
        /// </summary>
        /// <returns>The number of rows inside Example</returns>
        public int Count()
        {
            try
            {
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.Count]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                }

                int RowsCounter = Convert.ToInt32(DataTable.Rows[0][0].ToString());

                return RowsCounter;
            }
            catch (Exception ex) { throw ex; }
        }

        #region Queries to DataTable
        /// <summary>
        /// Note: Raise exception when the query find duplicated IDs
        /// </summary>
        public DataTable Select1ByExampleIdToDataTable(int ExampleId)
        {
            try
            {
                DataTable DataTable = new DataTable();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);
                
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.Select1ByExampleId]", commandType: CommandType.StoredProcedure, param: dp);

                    DataTable.Load(dataReader);
                }

                if (DataTable.Rows.Count > 1)
                { throw new Exception("The stored procedure [dbo].[FiyiStack.Example.Select1ByExampleId] returned more than one register/row"); }

                return DataTable;
            }
            catch (Exception ex) { throw ex; }
        }

        public DataTable SelectAllToDataTable()
        {
            try
            {
                DataTable DataTable = new DataTable();
                DynamicParameters dp = new DynamicParameters();
                
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.SelectAll]", commandType: CommandType.StoredProcedure, param: dp);

                    DataTable.Load(dataReader);
                }

                return DataTable;
            }
            catch (Exception ex) { throw ex; }
        }
        #endregion

        #region Queries to Models
        /// <summary>
        /// Note: Raise exception when the query find duplicated IDs
        /// </summary>
        public ExampleModel Select1ByExampleIdToModel(int ExampleId)
        {
            try
            {
                ExampleModel ExampleModel = new ExampleModel();
                List<ExampleModel> lstExampleModel = new List<ExampleModel>();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstExampleModel = (List<ExampleModel>)sqlConnection.Query<ExampleModel>("[dbo].[FiyiStack.Example.Select1ByExampleId]", dp, commandType: CommandType.StoredProcedure);
                }
        
                if (lstExampleModel.Count > 1)
                { throw new Exception("The stored procedure [dbo].[FiyiStack.Example.Select1ByExampleId] returned more than one register/row"); }

                foreach (ExampleModel example in lstExampleModel)
                {
                    ExampleModel.ExampleId = example.ExampleId;
					ExampleModel.Active = example.Active;
					ExampleModel.DateTimeCreation = example.DateTimeCreation;
					ExampleModel.DateTimeLastModification = example.DateTimeLastModification;
					ExampleModel.UserCreationId = example.UserCreationId;
					ExampleModel.UserLastModificationId = example.UserLastModificationId;
					ExampleModel.Boolean = example.Boolean;
					ExampleModel.DateTime = example.DateTime;
					ExampleModel.Decimal = example.Decimal;
					ExampleModel.ForeignKey1 = example.ForeignKey1;
					ExampleModel.ForeignKey2 = example.ForeignKey2;
					ExampleModel.Integer = example.Integer;
					ExampleModel.TextBasic = example.TextBasic;
					ExampleModel.TextEmail = example.TextEmail;
					ExampleModel.TextFile = example.TextFile;
					ExampleModel.TextHexColour = example.TextHexColour;
					ExampleModel.TextPassword = example.TextPassword;
					ExampleModel.TextPhoneNumber = example.TextPhoneNumber;
					ExampleModel.TextTag = example.TextTag;
					ExampleModel.TextArea = example.TextArea;
					ExampleModel.TextEditor = example.TextEditor;
					ExampleModel.TextURL = example.TextURL;
                }

                return ExampleModel;
            }
            catch (Exception ex) { throw ex; }
        }

        public List<ExampleModel> SelectAllToList()
        {
            try
            {
                List<ExampleModel> lstExampleModel = new List<ExampleModel>();
                DynamicParameters dp = new DynamicParameters();

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstExampleModel = (List<ExampleModel>)sqlConnection.Query<ExampleModel>("[dbo].[FiyiStack.Example.SelectAll]", dp, commandType: CommandType.StoredProcedure);
                }

                return lstExampleModel;
            }
            catch (Exception ex) { throw ex; }
        }

        public exampleModelQuery SelectAllPagedToModel(exampleModelQuery exampleModelQuery)
        {
            try
            {
                exampleModelQuery.lstExampleModel = new List<ExampleModel>();
                DynamicParameters dp = new DynamicParameters();
                dp.Add("QueryString", exampleModelQuery.QueryString, DbType.String, ParameterDirection.Input);
                dp.Add("ActualPageNumber", exampleModelQuery.ActualPageNumber, DbType.Int32, ParameterDirection.Input);
                dp.Add("RowsPerPage", exampleModelQuery.RowsPerPage, DbType.Int32, ParameterDirection.Input);
                dp.Add("SorterColumn", exampleModelQuery.SorterColumn, DbType.String, ParameterDirection.Input);
                dp.Add("SortToggler", exampleModelQuery.SortToggler, DbType.Boolean, ParameterDirection.Input);
                dp.Add("TotalRows", exampleModelQuery.TotalRows, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    exampleModelQuery.lstExampleModel = (List<ExampleModel>)sqlConnection.Query<ExampleModel>("[dbo].[FiyiStack.Example.SelectAllPaged]", dp, commandType: CommandType.StoredProcedure);
                    exampleModelQuery.TotalRows = dp.Get<int>("TotalRows");
                }

                exampleModelQuery.TotalPages = Library.Math.Divide(exampleModelQuery.TotalRows, exampleModelQuery.RowsPerPage, Library.Math.RoundType.RoundUp);

                return exampleModelQuery;
            }
            catch (Exception ex) { throw ex; }
        }
        #endregion

        #region Non-Queries
        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <returns>NewEnteredId: The ID of the last registry inserted in Example table</returns>
        public int Insert()
        {
            try
            {
                int NewEnteredId = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();
                
                dp.Add("Active", Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Boolean", Boolean, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("ForeignKey1", ForeignKey1, DbType.Int32, ParameterDirection.Input);
				dp.Add("ForeignKey2", ForeignKey2, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("TextEmail", TextEmail, DbType.String, ParameterDirection.Input);
				dp.Add("TextFile", TextFile, DbType.String, ParameterDirection.Input);
				dp.Add("TextHexColour", TextHexColour, DbType.String, ParameterDirection.Input);
				dp.Add("TextPassword", TextPassword, DbType.String, ParameterDirection.Input);
				dp.Add("TextPhoneNumber", TextPhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("TextTag", TextTag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("TextURL", TextURL, DbType.String, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.Insert]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    NewEnteredId = dp.Get<int>("NewEnteredId");
                }
                                
                if (NewEnteredId == 0) { throw new Exception("NewEnteredId with no value"); }

                return NewEnteredId;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <returns>The ID of the last registry inserted in Example table</returns>
        public int Insert(ExampleModel example)
        {
            try
            {
                int NewEnteredId = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Active", example.Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", example.DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", example.DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", example.UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", example.UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Boolean", example.Boolean, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTime", example.DateTime, DbType.DateTime, ParameterDirection.Input);
				dp.Add("Decimal", example.Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("ForeignKey1", example.ForeignKey1, DbType.Int32, ParameterDirection.Input);
				dp.Add("ForeignKey2", example.ForeignKey2, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", example.Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", example.TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("TextEmail", example.TextEmail, DbType.String, ParameterDirection.Input);
				dp.Add("TextFile", example.TextFile, DbType.String, ParameterDirection.Input);
				dp.Add("TextHexColour", example.TextHexColour, DbType.String, ParameterDirection.Input);
				dp.Add("TextPassword", example.TextPassword, DbType.String, ParameterDirection.Input);
				dp.Add("TextPhoneNumber", example.TextPhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("TextTag", example.TextTag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", example.TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", example.TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("TextURL", example.TextURL, DbType.String, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);
                
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.Insert]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    NewEnteredId = dp.Get<int>("NewEnteredId");
                }
                                
                if (NewEnteredId == 0) { throw new Exception("NewEnteredId with no value"); }

                return NewEnteredId;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <returns>The ID of the last registry inserted in Example table</returns>
        public int Insert(bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, bool Boolean, DateTime DateTime, decimal Decimal, int ForeignKey1, int ForeignKey2, int Integer, string TextBasic, string TextEmail, string TextFile, string TextHexColour, string TextPassword, string TextPhoneNumber, string TextTag, string TextArea, string TextEditor, string TextURL)
        {
            try
            {
                int NewEnteredId = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Active", Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Boolean", Boolean, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("ForeignKey1", ForeignKey1, DbType.Int32, ParameterDirection.Input);
				dp.Add("ForeignKey2", ForeignKey2, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("TextEmail", TextEmail, DbType.String, ParameterDirection.Input);
				dp.Add("TextFile", TextFile, DbType.String, ParameterDirection.Input);
				dp.Add("TextHexColour", TextHexColour, DbType.String, ParameterDirection.Input);
				dp.Add("TextPassword", TextPassword, DbType.String, ParameterDirection.Input);
				dp.Add("TextPhoneNumber", TextPhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("TextTag", TextTag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("TextURL", TextURL, DbType.String, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.Insert]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    NewEnteredId = dp.Get<int>("NewEnteredId");
                }
                                
                if (NewEnteredId == 0) { throw new Exception("NewEnteredId with no value"); }

                return NewEnteredId;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull update in database
        /// </summary>
        /// <returns>The number of rows updated in Example table</returns>
        public int UpdateByExampleId()
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Active", Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Boolean", Boolean, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("ForeignKey1", ForeignKey1, DbType.Int32, ParameterDirection.Input);
				dp.Add("ForeignKey2", ForeignKey2, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("TextEmail", TextEmail, DbType.String, ParameterDirection.Input);
				dp.Add("TextFile", TextFile, DbType.String, ParameterDirection.Input);
				dp.Add("TextHexColour", TextHexColour, DbType.String, ParameterDirection.Input);
				dp.Add("TextPassword", TextPassword, DbType.String, ParameterDirection.Input);
				dp.Add("TextPhoneNumber", TextPhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("TextTag", TextTag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("TextURL", TextURL, DbType.String, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.UpdateByExampleId]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }
                                
                if (RowsAffected == 0) { throw new Exception("RowsAffected with no value"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull update in database
        /// </summary>
        /// <returns>The number of rows updated in Example table</returns>
        public int UpdateByExampleId(ExampleModel example)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("ExampleId", example.ExampleId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Active", example.Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", example.DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", example.DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", example.UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", example.UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Boolean", example.Boolean, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTime", example.DateTime, DbType.DateTime, ParameterDirection.Input);
				dp.Add("Decimal", example.Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("ForeignKey1", example.ForeignKey1, DbType.Int32, ParameterDirection.Input);
				dp.Add("ForeignKey2", example.ForeignKey2, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", example.Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", example.TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("TextEmail", example.TextEmail, DbType.String, ParameterDirection.Input);
				dp.Add("TextFile", example.TextFile, DbType.String, ParameterDirection.Input);
				dp.Add("TextHexColour", example.TextHexColour, DbType.String, ParameterDirection.Input);
				dp.Add("TextPassword", example.TextPassword, DbType.String, ParameterDirection.Input);
				dp.Add("TextPhoneNumber", example.TextPhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("TextTag", example.TextTag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", example.TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", example.TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("TextURL", example.TextURL, DbType.String, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.UpdateByExampleId]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }
                                
                if (RowsAffected == 0) { throw new Exception("RowsAffected with no value"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull update in database
        /// </summary>
        /// <returns>The number of rows updated in Example table</returns>
        public int UpdateByExampleId(int ExampleId, bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, bool Boolean, DateTime DateTime, decimal Decimal, int ForeignKey1, int ForeignKey2, int Integer, string TextBasic, string TextEmail, string TextFile, string TextHexColour, string TextPassword, string TextPhoneNumber, string TextTag, string TextArea, string TextEditor, string TextURL)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Active", Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Boolean", Boolean, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("ForeignKey1", ForeignKey1, DbType.Int32, ParameterDirection.Input);
				dp.Add("ForeignKey2", ForeignKey2, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("TextEmail", TextEmail, DbType.String, ParameterDirection.Input);
				dp.Add("TextFile", TextFile, DbType.String, ParameterDirection.Input);
				dp.Add("TextHexColour", TextHexColour, DbType.String, ParameterDirection.Input);
				dp.Add("TextPassword", TextPassword, DbType.String, ParameterDirection.Input);
				dp.Add("TextPhoneNumber", TextPhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("TextTag", TextTag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("TextURL", TextURL, DbType.String, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.UpdateByExampleId]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }
                                
                if (RowsAffected == 0) { throw new Exception("RowsAffected with no value"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        ///
        public void DeleteAll()
        {
            try
            {
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.DeleteAll]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                }
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        /// <returns>The number of rows deleted in Example table</returns>
        public int DeleteByExampleId()
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();
        
                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);        
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.DeleteByExampleId]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }
                                
                if (RowsAffected == 0) { throw new Exception("RowsAffected with no value"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        /// <returns>The number of rows affected in Example table</returns>
        public int DeleteByExampleId(int ExampleId)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();
        
                dp.Add("ExampleId", ExampleId, DbType.Int32, ParameterDirection.Input);        
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Example.DeleteByExampleId]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                    RowsAffected = dp.Get<int>("RowsAffected");
                }
                                
                if (RowsAffected == 0) { throw new Exception("RowsAffected with no value"); }

                return RowsAffected;
            }
            catch (Exception ex) { throw ex; }
        }
        #endregion

        /// <summary>
        /// Function: Take the model stored in the given byte array to return the model. <br/>
        /// Note 1:   Similar to a decryptor function. <br/>
        /// Note 2:   The model need the [Serializable] decorator in model definition. <br/>
        /// </summary>
        public ExampleModel ByteArrayToExampleModel<T>(byte[] arrExampleModel)
        {
            try
            {
                if (arrExampleModel == null)
                { return new ExampleModel(); }
                BinaryFormatter BinaryFormatter = new BinaryFormatter();
                using MemoryStream MemoryStream = new MemoryStream(arrExampleModel);
                object Object = BinaryFormatter.Deserialize(MemoryStream);
                return (ExampleModel)Object;
            }
            catch (Exception ex)
            { throw ex; }
        }
        
        /// <summary>
        /// Function: Show all information (fields) inside the model during depuration mode.
        /// </summary>
        public override string ToString()
        {
            return $"ExampleId: {ExampleId}, " +
				$"Active: {Active}, " +
				$"DateTimeCreation: {DateTimeCreation}, " +
				$"DateTimeLastModification: {DateTimeLastModification}, " +
				$"UserCreationId: {UserCreationId}, " +
				$"UserLastModificationId: {UserLastModificationId}, " +
				$"Boolean: {Boolean}, " +
				$"DateTime: {DateTime}, " +
				$"Decimal: {Decimal}, " +
				$"ForeignKey1: {ForeignKey1}, " +
				$"ForeignKey2: {ForeignKey2}, " +
				$"Integer: {Integer}, " +
				$"TextBasic: {TextBasic}, " +
				$"TextEmail: {TextEmail}, " +
				$"TextFile: {TextFile}, " +
				$"TextHexColour: {TextHexColour}, " +
				$"TextPassword: {TextPassword}, " +
				$"TextPhoneNumber: {TextPhoneNumber}, " +
				$"TextTag: {TextTag}, " +
				$"TextArea: {TextArea}, " +
				$"TextEditor: {TextEditor}, " +
				$"TextURL: {TextURL}";
        }

        public string ToStringOnlyValuesForHTML()
        {
            return $@"<tr>
                <td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{ExampleId}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Active}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{DateTimeCreation}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{DateTimeLastModification}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{UserCreationId}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{UserLastModificationId}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Boolean}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{DateTime}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Decimal}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{ForeignKey1}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{ForeignKey2}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Integer}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextBasic}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextEmail}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextFile}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextHexColour}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextPassword}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextPhoneNumber}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextTag}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextArea}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextEditor}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{TextURL}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td>
                </tr>";
        }
    }

    /// <summary>
    /// Virtual model used for [dbo].[FiyiStack.Example.SelectAllPaged] stored procedure
    /// </summary>
    public partial class exampleModelQuery 
    {
        public string QueryString { get; set; }
        public int ActualPageNumber { get; set; }
        public int RowsPerPage { get; set; }
        public string SorterColumn { get; set; }
        public bool SortToggler { get; set; }
        public int TotalRows { get; set; }
        public int TotalPages { get; set; }
        public List<ExampleModel> lstExampleModel { get; set; }
    }
}