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
    /// Fields:            9 <br/> 
    /// Dependencies:      1 models <br/>
    /// Last modification: 20/12/2022 22:25:19
    /// </summary>
    [Serializable]
    public partial class BlogModel
    {
        [NotMapped]
        private string _ConnectionString = "data source =.; initial catalog = fiyistack_FiyiStackWeb; Integrated Security = SSPI; MultipleActiveResultSets=True;Pooling=false;Persist Security Info=True;App=EntityFramework;TrustServerCertificate=True";

        #region Fields
        [Library.ModelAttributeValidator.Key("BlogId")]
        public int BlogId { get; set; }

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

        [Library.ModelAttributeValidator.String("Title", false, 1, 100, "")]
        public string Title { get; set; }

        [Library.ModelAttributeValidator.String("Body", false, 1, 8000, "")]
        public string Body { get; set; }

        [Library.ModelAttributeValidator.String("BackgroundImage", false, 1, 8000, "")]
        public string BackgroundImage { get; set; }
        #endregion

        #region Models that depend on this model
        public virtual List<CommentForBlogModel> lstCommentForBlogModel { get; set; } //Foreign Key name: BlogId 
        #endregion

        #region Constructors
        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create fastly this model with field BlogId = 0 <br/>
        /// Note 1:       Generally used to have fast access to functions of object. <br/>
        /// Note 2:       Need construction with [new] reserved word, as all constructors. <br/>
        /// Fields:       9 <br/> 
        /// Dependencies: 1 models depend on this model <br/>
        /// </summary>
        public BlogModel()
        {
            try
            {
                BlogId = 0;
                lstCommentForBlogModel = new List<CommentForBlogModel>();
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model with stored information in database using BlogId <br/>
        /// Note:         Raise exception on duplicated IDs <br/>
        /// Fields:       9 <br/> 
        /// Dependencies: 1 models depend on this model <br/>
        /// </summary>
        public BlogModel(int BlogId)
        {
            try
            {
                List<BlogModel> lstBlogModel = new List<BlogModel>();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    //In case of not finding anything, Dapper return a List<BlogModel>
                    lstBlogModel = (List<BlogModel>)sqlConnection.Query<BlogModel>("[dbo].[FiyiStack.Blog.Select1ByBlogId]", dp, commandType: CommandType.StoredProcedure);
                }

                if (lstBlogModel.Count > 1)
                {
                    throw new Exception("The stored procedure [dbo].[FiyiStack.Blog.Select1ByBlogId] returned more than one register/row");
                }
        
                foreach (BlogModel blog in lstBlogModel)
                {
                    this.BlogId = blog.BlogId;
					this.Active = blog.Active;
					this.DateTimeCreation = blog.DateTimeCreation;
					this.DateTimeLastModification = blog.DateTimeLastModification;
					this.UserCreationId = blog.UserCreationId;
					this.UserLastModificationId = blog.UserLastModificationId;
					this.Title = blog.Title;
					this.Body = blog.Body;
					this.BackgroundImage = blog.BackgroundImage;
                }
            }
            catch (Exception ex) { throw ex; }
        }


        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model with filled parameters <br/>
        /// Note:         Raise exception on duplicated IDs <br/>
        /// Fields:       9 <br/> 
        /// Dependencies: 1 models depend on this model <br/>
        /// </summary>
        public BlogModel(int BlogId, bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, string Title, string Body, string BackgroundImage)
        {
            try
            {
                this.BlogId = BlogId;
				this.Active = Active;
				this.DateTimeCreation = DateTimeCreation;
				this.DateTimeLastModification = DateTimeLastModification;
				this.UserCreationId = UserCreationId;
				this.UserLastModificationId = UserLastModificationId;
				this.Title = Title;
				this.Body = Body;
				this.BackgroundImage = BackgroundImage;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Stack:        3 <br/>
        /// Function:     Create this model (copy) using the given model (original), blog, passed by parameter. <br/>
        /// Note:         This constructor is generally used to execute functions using the copied fields <br/>
        /// Fields:       9 <br/> 
        /// Dependencies: 1 models depend on this model <br/>
        /// </summary>
        public BlogModel(BlogModel blog)
        {
            try
            {
                BlogId = blog.BlogId;
				Active = blog.Active;
				DateTimeCreation = blog.DateTimeCreation;
				DateTimeLastModification = blog.DateTimeLastModification;
				UserCreationId = blog.UserCreationId;
				UserLastModificationId = blog.UserLastModificationId;
				Title = blog.Title;
				Body = blog.Body;
				BackgroundImage = blog.BackgroundImage;
            }
            catch (Exception ex) { throw ex; }
        }
        #endregion
        
        /// <summary>
        /// 
        /// </summary>
        /// <returns>The number of rows inside Blog</returns>
        public int Count()
        {
            try
            {
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.Count]", commandType: CommandType.StoredProcedure, param: dp);
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
        public DataTable Select1ByBlogIdToDataTable(int BlogId)
        {
            try
            {
                DataTable DataTable = new DataTable();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);
                
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.Select1ByBlogId]", commandType: CommandType.StoredProcedure, param: dp);

                    DataTable.Load(dataReader);
                }

                if (DataTable.Rows.Count > 1)
                { throw new Exception("The stored procedure [dbo].[FiyiStack.Blog.Select1ByBlogId] returned more than one register/row"); }

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
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.SelectAll]", commandType: CommandType.StoredProcedure, param: dp);

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
        public BlogModel Select1ByBlogIdToModel(int BlogId)
        {
            try
            {
                BlogModel BlogModel = new BlogModel();
                List<BlogModel> lstBlogModel = new List<BlogModel>();
                DynamicParameters dp = new DynamicParameters();

                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstBlogModel = (List<BlogModel>)sqlConnection.Query<BlogModel>("[dbo].[FiyiStack.Blog.Select1ByBlogId]", dp, commandType: CommandType.StoredProcedure);
                }
        
                if (lstBlogModel.Count > 1)
                { throw new Exception("The stored procedure [dbo].[FiyiStack.Blog.Select1ByBlogId] returned more than one register/row"); }

                foreach (BlogModel blog in lstBlogModel)
                {
                    BlogModel.BlogId = blog.BlogId;
					BlogModel.Active = blog.Active;
					BlogModel.DateTimeCreation = blog.DateTimeCreation;
					BlogModel.DateTimeLastModification = blog.DateTimeLastModification;
					BlogModel.UserCreationId = blog.UserCreationId;
					BlogModel.UserLastModificationId = blog.UserLastModificationId;
					BlogModel.Title = blog.Title;
					BlogModel.Body = blog.Body;
					BlogModel.BackgroundImage = blog.BackgroundImage;
                }

                return BlogModel;
            }
            catch (Exception ex) { throw ex; }
        }

        public List<BlogModel> SelectAllToList()
        {
            try
            {
                List<BlogModel> lstBlogModel = new List<BlogModel>();
                DynamicParameters dp = new DynamicParameters();

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstBlogModel = (List<BlogModel>)sqlConnection.Query<BlogModel>("[dbo].[FiyiStack.Blog.SelectAll]", dp, commandType: CommandType.StoredProcedure);
                }

                return lstBlogModel;
            }
            catch (Exception ex) { throw ex; }
        }

        public blogModelQuery SelectAllPagedToModel(blogModelQuery blogModelQuery)
        {
            try
            {
                blogModelQuery.lstBlogModel = new List<BlogModel>();
                DynamicParameters dp = new DynamicParameters();
                dp.Add("QueryString", blogModelQuery.QueryString, DbType.String, ParameterDirection.Input);
                dp.Add("ActualPageNumber", blogModelQuery.ActualPageNumber, DbType.Int32, ParameterDirection.Input);
                dp.Add("RowsPerPage", blogModelQuery.RowsPerPage, DbType.Int32, ParameterDirection.Input);
                dp.Add("SorterColumn", blogModelQuery.SorterColumn, DbType.String, ParameterDirection.Input);
                dp.Add("SortToggler", blogModelQuery.SortToggler, DbType.Boolean, ParameterDirection.Input);
                dp.Add("TotalRows", blogModelQuery.TotalRows, DbType.Int32, ParameterDirection.Output);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    blogModelQuery.lstBlogModel = (List<BlogModel>)sqlConnection.Query<BlogModel>("[dbo].[FiyiStack.Blog.SelectAllPaged]", dp, commandType: CommandType.StoredProcedure);
                    blogModelQuery.TotalRows = dp.Get<int>("TotalRows");
                }

                blogModelQuery.TotalPages = Library.Math.Divide(blogModelQuery.TotalRows, blogModelQuery.RowsPerPage, Library.Math.RoundType.RoundUp);

                //Loop through lists and sublists
                for (int i = 0; i < blogModelQuery.lstBlogModel.Count; i++)
                {
                    DynamicParameters dp2 = new DynamicParameters();
                    dp2.Add("BlogId", blogModelQuery.lstBlogModel[i].BlogId, DbType.Int32, ParameterDirection.Input);
                    using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                    {
                        List<CommentForBlogModel> lstCommentForBlogModel = new List<CommentForBlogModel>();
                        lstCommentForBlogModel = (List<CommentForBlogModel>)sqlConnection.Query<CommentForBlogModel>("[dbo].[FiyiStack.CommentForBlog.SelectAllByBlogIdCustom]", dp2, commandType: CommandType.StoredProcedure);

                        //Add list item inside another list
                        foreach (var CommentForBlogModel in lstCommentForBlogModel)
                        {
                            blogModelQuery.lstBlogModel[i].lstCommentForBlogModel.Add(CommentForBlogModel);
                        }
                    }
                }
                return blogModelQuery;
            }
            catch (Exception ex) { throw ex; }
        }
        #endregion

        #region Non-Queries
        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <returns>NewEnteredId: The ID of the last registry inserted in Blog table</returns>
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
				dp.Add("Title", Title, DbType.String, ParameterDirection.Input);
				dp.Add("Body", Body, DbType.String, ParameterDirection.Input);
				dp.Add("BackgroundImage", BackgroundImage, DbType.String, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.Insert]", commandType: CommandType.StoredProcedure, param: dp);
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
        /// <returns>The ID of the last registry inserted in Blog table</returns>
        public int Insert(BlogModel blog)
        {
            try
            {
                int NewEnteredId = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Active", blog.Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", blog.DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", blog.DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", blog.UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", blog.UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Title", blog.Title, DbType.String, ParameterDirection.Input);
				dp.Add("Body", blog.Body, DbType.String, ParameterDirection.Input);
				dp.Add("BackgroundImage", blog.BackgroundImage, DbType.String, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);
                
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.Insert]", commandType: CommandType.StoredProcedure, param: dp);
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
        /// <returns>The ID of the last registry inserted in Blog table</returns>
        public int Insert(bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, string Title, string Body, string BackgroundImage)
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
				dp.Add("Title", Title, DbType.String, ParameterDirection.Input);
				dp.Add("Body", Body, DbType.String, ParameterDirection.Input);
				dp.Add("BackgroundImage", BackgroundImage, DbType.String, ParameterDirection.Input);
                dp.Add("NewEnteredId", NewEnteredId, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.Insert]", commandType: CommandType.StoredProcedure, param: dp);
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
        /// <returns>The number of rows updated in Blog table</returns>
        public int UpdateByBlogId()
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Active", Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Title", Title, DbType.String, ParameterDirection.Input);
				dp.Add("Body", Body, DbType.String, ParameterDirection.Input);
				dp.Add("BackgroundImage", BackgroundImage, DbType.String, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.UpdateByBlogId]", commandType: CommandType.StoredProcedure, param: dp);
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
        /// <returns>The number of rows updated in Blog table</returns>
        public int UpdateByBlogId(BlogModel blog)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("BlogId", blog.BlogId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Active", blog.Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", blog.DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", blog.DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", blog.UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", blog.UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Title", blog.Title, DbType.String, ParameterDirection.Input);
				dp.Add("Body", blog.Body, DbType.String, ParameterDirection.Input);
				dp.Add("BackgroundImage", blog.BackgroundImage, DbType.String, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.UpdateByBlogId]", commandType: CommandType.StoredProcedure, param: dp);
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
        /// <returns>The number of rows updated in Blog table</returns>
        public int UpdateByBlogId(int BlogId, bool Active, DateTime DateTimeCreation, DateTime DateTimeLastModification, int UserCreationId, int UserLastModificationId, string Title, string Body, string BackgroundImage)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Active", Active, DbType.Boolean, ParameterDirection.Input);
				dp.Add("DateTimeCreation", DateTimeCreation, DbType.DateTime, ParameterDirection.Input);
				dp.Add("DateTimeLastModification", DateTimeLastModification, DbType.DateTime, ParameterDirection.Input);
				dp.Add("UserCreationId", UserCreationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("UserLastModificationId", UserLastModificationId, DbType.Int32, ParameterDirection.Input);
				dp.Add("Title", Title, DbType.String, ParameterDirection.Input);
				dp.Add("Body", Body, DbType.String, ParameterDirection.Input);
				dp.Add("BackgroundImage", BackgroundImage, DbType.String, ParameterDirection.Input);
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.UpdateByBlogId]", commandType: CommandType.StoredProcedure, param: dp);
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
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.DeleteAll]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                }
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull deletion in database
        /// </summary>
        /// <returns>The number of rows deleted in Blog table</returns>
        public int DeleteByBlogId()
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();
        
                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);        
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.DeleteByBlogId]", commandType: CommandType.StoredProcedure, param: dp);
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
        /// <returns>The number of rows affected in Blog table</returns>
        public int DeleteByBlogId(int BlogId)
        {
            try
            {
                int RowsAffected = 0;
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();
        
                dp.Add("BlogId", BlogId, DbType.Int32, ParameterDirection.Input);        
                dp.Add("RowsAffected", RowsAffected, DbType.Int32, ParameterDirection.Output);
        
                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[FiyiStack.Blog.DeleteByBlogId]", commandType: CommandType.StoredProcedure, param: dp);
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
        public BlogModel ByteArrayToBlogModel<T>(byte[] arrBlogModel)
        {
            try
            {
                if (arrBlogModel == null)
                { return new BlogModel(); }
                BinaryFormatter BinaryFormatter = new BinaryFormatter();
                using MemoryStream MemoryStream = new MemoryStream(arrBlogModel);
                object Object = BinaryFormatter.Deserialize(MemoryStream);
                return (BlogModel)Object;
            }
            catch (Exception ex)
            { throw ex; }
        }
        
        /// <summary>
        /// Function: Show all information (fields) inside the model during depuration mode.
        /// </summary>
        public override string ToString()
        {
            return $"BlogId: {BlogId}, " +
				$"Active: {Active}, " +
				$"DateTimeCreation: {DateTimeCreation}, " +
				$"DateTimeLastModification: {DateTimeLastModification}, " +
				$"UserCreationId: {UserCreationId}, " +
				$"UserLastModificationId: {UserLastModificationId}, " +
				$"Title: {Title}, " +
				$"Body: {Body}, " +
				$"BackgroundImage: {BackgroundImage}";
        }

        public string ToStringOnlyValuesForHTML()
        {
            return $@"<tr>
                <td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{BlogId}</span>
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
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Title}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{Body}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td><td align=""left"" valign=""top"">
        <div style=""height: 12px; line-height: 12px; font-size: 10px;"">&nbsp;</div>
        <font face=""'Source Sans Pro', sans-serif"" color=""#000000"" style=""font-size: 20px; line-height: 28px;"">
            <span style=""font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif; color: #000000; font-size: 20px; line-height: 28px;"">{BackgroundImage}</span>
        </font>
        <div style=""height: 40px; line-height: 40px; font-size: 38px;"">&nbsp;</div>
    </td>
                </tr>";
        }
    }

    /// <summary>
    /// Virtual model used for [dbo].[FiyiStack.Blog.SelectAllPaged] stored procedure
    /// </summary>
    public partial class blogModelQuery 
    {
        public string QueryString { get; set; }
        public int ActualPageNumber { get; set; }
        public int RowsPerPage { get; set; }
        public string SorterColumn { get; set; }
        public bool SortToggler { get; set; }
        public int TotalRows { get; set; }
        public int TotalPages { get; set; }
        public List<BlogModel> lstBlogModel { get; set; }
    }
}