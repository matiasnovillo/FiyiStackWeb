using Dapper;
using FiyiStackWeb.Areas.FiyiStack.DTOs;
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
 * Copyright © 2023
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
    /// Fields:            23 <br/> 
    /// Sub-models:      0 models <br/>
    /// Last modification: 02/03/2023 8:51:23
    /// </summary>
    [Serializable]
    public partial class ExampleModel
    {
        [NotMapped]
        private string _ConnectionString = ConnectionStrings.ConnectionStrings.Development();

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

        [Library.ModelAttributeValidator.Decimal("Decimal", true, 5D, 20D)]
        public decimal Decimal { get; set; }

        [Library.ModelAttributeValidator.Key("DropDown")]
        public int DropDown { get; set; }

        [Library.ModelAttributeValidator.Key("Options")]
        public int Options { get; set; }

        [Library.ModelAttributeValidator.Int("Integer", true, 5, 20)]
        public int Integer { get; set; }

        [Library.ModelAttributeValidator.String("TextBasic", true, 1, 100, "")]
        public string TextBasic { get; set; }

        [Library.ModelAttributeValidator.String("Email", true, 1, 320, "")]
        public string Email { get; set; }

        [Library.ModelAttributeValidator.String("FileUpload", false, 1, 8000, "")]
        public string FileUpload { get; set; }

        [Library.ModelAttributeValidator.HexColour("HexColour", false, "000000", "FFFFFF")]
        public string HexColour { get; set; }

        [Library.ModelAttributeValidator.String("Password", false, 1, 8000, "")]
        public string Password { get; set; }

        [Library.ModelAttributeValidator.String("PhoneNumber", false, 1, 500, "")]
        public string PhoneNumber { get; set; }

        [Library.ModelAttributeValidator.String("Tag", false, 1, 200, "")]
        public string Tag { get; set; }

        public string TextArea { get; set; }

        public string TextEditor { get; set; }

        [Library.ModelAttributeValidator.String("URL", false, 1, 800, "")]
        public string URL { get; set; }

        [Library.ModelAttributeValidator.TimeSpan("Time", false, "00:00", "23:59")]
        public TimeSpan Time { get; set; }

        [Library.ModelAttributeValidator.DateTime("DateTime", false, "1753-01-01T00:00", "9998-12-30T23:59")]
        public DateTime DateTime { get; set; }
        #endregion

        #region Sub-lists
        
        #endregion

        #region Constructors
        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create fastly this model with field ExampleId = 0 <br/>
        /// Note 1:       Generally used to have fast access to functions of object. <br/>
        /// Note 2:       Need construction with [new] reserved word, as all constructors. <br/>
        /// Fields:       23 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel()
        {
            try 
            {
                ExampleId = 0;

                //Initialize sub-lists
                
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model with stored information in database using ExampleId <br/>
        /// Note:         Raise exception on duplicated IDs <br/>
        /// Fields:       23 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel(int ExampleId)
        {
            try
            {
                List<ExampleModel> lstExampleModel = new List<ExampleModel>();

                //Initialize sub-lists
                
                
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
					this.Decimal = example.Decimal;
					this.DropDown = example.DropDown;
					this.Options = example.Options;
					this.Integer = example.Integer;
					this.TextBasic = example.TextBasic;
					this.Email = example.Email;
					this.FileUpload = example.FileUpload;
					this.HexColour = example.HexColour;
					this.Password = example.Password;
					this.PhoneNumber = example.PhoneNumber;
					this.Tag = example.Tag;
					this.TextArea = example.TextArea;
					this.TextEditor = example.TextEditor;
					this.URL = example.URL;
					this.Time = example.Time;
					this.DateTime = example.DateTime;
                }
            }
            catch (Exception ex) { throw ex; }
        }


        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model with filled parameters <br/>
        /// Note:         Raise exception on duplicated IDs <br/>
        /// Fields:       23 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel(int ExampleId, bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, bool Boolean, decimal Decimal, int DropDown, int Options, int Integer, string TextBasic, string Email, string FileUpload, string HexColour, string Password, string PhoneNumber, string Tag, string TextArea, string TextEditor, string URL, TimeSpan Time, DateTime DateTime)
        {
            try
            {
                //Initialize sub-lists
                

                this.ExampleId = ExampleId;
				this.Active = Active;
				this.DateTimeCreation = DateTimeCreation;
				this.DateTimeLastModification = DateTimeLastModification;
				this.UserCreationId = UserCreationId;
				this.UserLastModificationId = UserLastModificationId;
				this.Boolean = Boolean;
				this.Decimal = Decimal;
				this.DropDown = DropDown;
				this.Options = Options;
				this.Integer = Integer;
				this.TextBasic = TextBasic;
				this.Email = Email;
				this.FileUpload = FileUpload;
				this.HexColour = HexColour;
				this.Password = Password;
				this.PhoneNumber = PhoneNumber;
				this.Tag = Tag;
				this.TextArea = TextArea;
				this.TextEditor = TextEditor;
				this.URL = URL;
				this.Time = Time;
				this.DateTime = DateTime;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model (copy) using the given model (original), example, passed by parameter. <br/>
        /// Note:         This constructor is generally used to execute functions using the copied fields <br/>
        /// Fields:       23 <br/> 
        /// Dependencies: 0 models depend on this model <br/>
        /// </summary>
        public ExampleModel(ExampleModel example)
        {
            try
            {
                //Initialize sub-lists
                

                ExampleId = example.ExampleId;
				Active = example.Active;
				DateTimeCreation = example.DateTimeCreation;
				DateTimeLastModification = example.DateTimeLastModification;
				UserCreationId = example.UserCreationId;
				UserLastModificationId = example.UserLastModificationId;
				Boolean = example.Boolean;
				Decimal = example.Decimal;
				DropDown = example.DropDown;
				Options = example.Options;
				Integer = example.Integer;
				TextBasic = example.TextBasic;
				Email = example.Email;
				FileUpload = example.FileUpload;
				HexColour = example.HexColour;
				Password = example.Password;
				PhoneNumber = example.PhoneNumber;
				Tag = example.Tag;
				TextArea = example.TextArea;
				TextEditor = example.TextEditor;
				URL = example.URL;
				Time = example.Time;
				DateTime = example.DateTime;
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
					ExampleModel.Decimal = example.Decimal;
					ExampleModel.DropDown = example.DropDown;
					ExampleModel.Options = example.Options;
					ExampleModel.Integer = example.Integer;
					ExampleModel.TextBasic = example.TextBasic;
					ExampleModel.Email = example.Email;
					ExampleModel.FileUpload = example.FileUpload;
					ExampleModel.HexColour = example.HexColour;
					ExampleModel.Password = example.Password;
					ExampleModel.PhoneNumber = example.PhoneNumber;
					ExampleModel.Tag = example.Tag;
					ExampleModel.TextArea = example.TextArea;
					ExampleModel.TextEditor = example.TextEditor;
					ExampleModel.URL = example.URL;
					ExampleModel.Time = example.Time;
					ExampleModel.DateTime = example.DateTime;
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

        public exampleSelectAllPaged SelectAllPagedToModel(exampleSelectAllPaged exampleSelectAllPaged)
        {
            try
            {
                exampleSelectAllPaged.lstExampleModel = new List<ExampleModel>();
                DynamicParameters dp = new DynamicParameters();
                dp.Add("QueryString", exampleSelectAllPaged.QueryString, DbType.String, ParameterDirection.Input);
                dp.Add("ActualPageNumber", exampleSelectAllPaged.ActualPageNumber, DbType.Int32, ParameterDirection.Input);
                dp.Add("RowsPerPage", exampleSelectAllPaged.RowsPerPage, DbType.Int32, ParameterDirection.Input);
                dp.Add("SorterColumn", exampleSelectAllPaged.SorterColumn, DbType.String, ParameterDirection.Input);
                dp.Add("SortToggler", exampleSelectAllPaged.SortToggler, DbType.Boolean, ParameterDirection.Input);
                dp.Add("TotalRows", exampleSelectAllPaged.TotalRows, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    exampleSelectAllPaged.lstExampleModel = (List<ExampleModel>)sqlConnection.Query<ExampleModel>("[dbo].[FiyiStack.Example.SelectAllPaged]", dp, commandType: CommandType.StoredProcedure);
                    exampleSelectAllPaged.TotalRows = dp.Get<int>("TotalRows");
                }

                exampleSelectAllPaged.TotalPages = Library.Math.Divide(exampleSelectAllPaged.TotalRows, exampleSelectAllPaged.RowsPerPage, Library.Math.RoundType.RoundUp);

                

                return exampleSelectAllPaged;
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
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("DropDown", DropDown, DbType.Int32, ParameterDirection.Input);
				dp.Add("Options", Options, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("Email", Email, DbType.String, ParameterDirection.Input);
				dp.Add("FileUpload", FileUpload, DbType.String, ParameterDirection.Input);
				dp.Add("HexColour", HexColour, DbType.String, ParameterDirection.Input);
				dp.Add("Password", Password, DbType.String, ParameterDirection.Input);
				dp.Add("PhoneNumber", PhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("Tag", Tag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("URL", URL, DbType.String, ParameterDirection.Input);
				dp.Add("Time", Time, DbType.Time, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
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
				dp.Add("Decimal", example.Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("DropDown", example.DropDown, DbType.Int32, ParameterDirection.Input);
				dp.Add("Options", example.Options, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", example.Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", example.TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("Email", example.Email, DbType.String, ParameterDirection.Input);
				dp.Add("FileUpload", example.FileUpload, DbType.String, ParameterDirection.Input);
				dp.Add("HexColour", example.HexColour, DbType.String, ParameterDirection.Input);
				dp.Add("Password", example.Password, DbType.String, ParameterDirection.Input);
				dp.Add("PhoneNumber", example.PhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("Tag", example.Tag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", example.TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", example.TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("URL", example.URL, DbType.String, ParameterDirection.Input);
				dp.Add("Time", example.Time, DbType.Time, ParameterDirection.Input);
				dp.Add("DateTime", example.DateTime, DbType.DateTime, ParameterDirection.Input);
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
        public int Insert(bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, bool Boolean, decimal Decimal, int DropDown, int Options, int Integer, string TextBasic, string Email, string FileUpload, string HexColour, string Password, string PhoneNumber, string Tag, string TextArea, string TextEditor, string URL, TimeSpan Time, DateTime DateTime)
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
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("DropDown", DropDown, DbType.Int32, ParameterDirection.Input);
				dp.Add("Options", Options, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("Email", Email, DbType.String, ParameterDirection.Input);
				dp.Add("FileUpload", FileUpload, DbType.String, ParameterDirection.Input);
				dp.Add("HexColour", HexColour, DbType.String, ParameterDirection.Input);
				dp.Add("Password", Password, DbType.String, ParameterDirection.Input);
				dp.Add("PhoneNumber", PhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("Tag", Tag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("URL", URL, DbType.String, ParameterDirection.Input);
				dp.Add("Time", Time, DbType.Time, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
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
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("DropDown", DropDown, DbType.Int32, ParameterDirection.Input);
				dp.Add("Options", Options, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("Email", Email, DbType.String, ParameterDirection.Input);
				dp.Add("FileUpload", FileUpload, DbType.String, ParameterDirection.Input);
				dp.Add("HexColour", HexColour, DbType.String, ParameterDirection.Input);
				dp.Add("Password", Password, DbType.String, ParameterDirection.Input);
				dp.Add("PhoneNumber", PhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("Tag", Tag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("URL", URL, DbType.String, ParameterDirection.Input);
				dp.Add("Time", Time, DbType.Time, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
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
				dp.Add("Decimal", example.Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("DropDown", example.DropDown, DbType.Int32, ParameterDirection.Input);
				dp.Add("Options", example.Options, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", example.Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", example.TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("Email", example.Email, DbType.String, ParameterDirection.Input);
				dp.Add("FileUpload", example.FileUpload, DbType.String, ParameterDirection.Input);
				dp.Add("HexColour", example.HexColour, DbType.String, ParameterDirection.Input);
				dp.Add("Password", example.Password, DbType.String, ParameterDirection.Input);
				dp.Add("PhoneNumber", example.PhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("Tag", example.Tag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", example.TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", example.TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("URL", example.URL, DbType.String, ParameterDirection.Input);
				dp.Add("Time", example.Time, DbType.Time, ParameterDirection.Input);
				dp.Add("DateTime", example.DateTime, DbType.DateTime, ParameterDirection.Input);
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
        public int UpdateByExampleId(int ExampleId, bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, bool Boolean, decimal Decimal, int DropDown, int Options, int Integer, string TextBasic, string Email, string FileUpload, string HexColour, string Password, string PhoneNumber, string Tag, string TextArea, string TextEditor, string URL, TimeSpan Time, DateTime DateTime)
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
				dp.Add("Decimal", Decimal, DbType.Decimal, ParameterDirection.Input, precision: 24, scale: 6);
				dp.Add("DropDown", DropDown, DbType.Int32, ParameterDirection.Input);
				dp.Add("Options", Options, DbType.Int32, ParameterDirection.Input);
				dp.Add("Integer", Integer, DbType.Int32, ParameterDirection.Input);
				dp.Add("TextBasic", TextBasic, DbType.String, ParameterDirection.Input);
				dp.Add("Email", Email, DbType.String, ParameterDirection.Input);
				dp.Add("FileUpload", FileUpload, DbType.String, ParameterDirection.Input);
				dp.Add("HexColour", HexColour, DbType.String, ParameterDirection.Input);
				dp.Add("Password", Password, DbType.String, ParameterDirection.Input);
				dp.Add("PhoneNumber", PhoneNumber, DbType.String, ParameterDirection.Input);
				dp.Add("Tag", Tag, DbType.String, ParameterDirection.Input);
				dp.Add("TextArea", TextArea, DbType.String, ParameterDirection.Input);
				dp.Add("TextEditor", TextEditor, DbType.String, ParameterDirection.Input);
				dp.Add("URL", URL, DbType.String, ParameterDirection.Input);
				dp.Add("Time", Time, DbType.Time, ParameterDirection.Input);
				dp.Add("DateTime", DateTime, DbType.DateTime, ParameterDirection.Input);
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
				$"Decimal: {Decimal}, " +
				$"DropDown: {DropDown}, " +
				$"Options: {Options}, " +
				$"Integer: {Integer}, " +
				$"TextBasic: {TextBasic}, " +
				$"Email: {Email}, " +
				$"FileUpload: {FileUpload}, " +
				$"HexColour: {HexColour}, " +
				$"Password: {Password}, " +
				$"PhoneNumber: {PhoneNumber}, " +
				$"Tag: {Tag}, " +
				$"TextArea: {TextArea}, " +
				$"TextEditor: {TextEditor}, " +
				$"URL: {URL}, " +
				$"Time: {Time}, " +
				$"DateTime: {DateTime}";
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
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Decimal}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{DropDown}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Options}</span>
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
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Email}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{FileUpload}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{HexColour}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Password}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{PhoneNumber}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Tag}</span>
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
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{URL}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Time}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{DateTime}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td>
                </tr>";
        }
    }
}