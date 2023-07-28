using Dapper;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;

namespace FiyiStackWeb.Areas.FiyiStack.Models
{
    public partial class UserFromFiyiStackApp
    {
        private string _ConnectionString = ConnectionStrings.ConnectionStrings.FiyiStackAppProduction();

        public string Email { get; set; }
        public int GenerationsLeft { get; set; }
        public int UserAccountTypeId { get; set; }

        public int Count()
        {
            try
            {
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[CMSCore.User.Count]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                }

                int RowsCounter = Convert.ToInt32(DataTable.Rows[0][0].ToString());

                return RowsCounter;
            }
            catch (Exception ex) { throw ex; }
        }

        /// <summary>
        /// Note: Raise exception when the function did not made a succesfull insertion in database
        /// </summary>
        /// <returns>The ID of the last registry inserted in User table</returns>
        public int Insert(string Name,
            string FantasyName,
            string Email,
            string Password,
            int RoleId,
            int UserAccountTypeId,
            int GenerationsLeft)
        {
            try
            {
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Name", Name, DbType.String, ParameterDirection.Input);
                dp.Add("FantasyName", FantasyName, DbType.String, ParameterDirection.Input);
                dp.Add("Email", Email, DbType.String, ParameterDirection.Input);
                dp.Add("Password", Password, DbType.String, ParameterDirection.Input);
                dp.Add("RoleId", RoleId, DbType.Int32, ParameterDirection.Input);
                dp.Add("UserAccountTypeId", UserAccountTypeId, DbType.Int32, ParameterDirection.Input);
                dp.Add("GenerationsLeft", GenerationsLeft, DbType.Int32, ParameterDirection.Input);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    var dataReader = sqlConnection.ExecuteReader("[dbo].[User.Add]", commandType: CommandType.StoredProcedure, param: dp);
                    DataTable.Load(dataReader);
                }

                return 1;
            }
            catch (Exception ex) { throw ex; }
        }

        public UserFromFiyiStackApp Select1ByEmail(string Email)
        {
            try
            {

                UserFromFiyiStackApp UserFromFiyiStackApp = new UserFromFiyiStackApp();
                List<UserFromFiyiStackApp> lstUserFromFiyiStackApp = new List<UserFromFiyiStackApp>();
                DynamicParameters dp = new DynamicParameters();
                DataTable DataTable = new DataTable();

                dp.Add("Email", Email, DbType.String, ParameterDirection.Input);

                using (SqlConnection sqlConnection = new SqlConnection(_ConnectionString))
                {
                    lstUserFromFiyiStackApp = (List<UserFromFiyiStackApp>)sqlConnection.Query<UserFromFiyiStackApp>("[dbo].[User.GetOneByEmail]", dp, commandType: CommandType.StoredProcedure);
                }

                if (lstUserFromFiyiStackApp.Count > 1)
                { throw new Exception("The stored procedure [dbo].[User.Select1ByEmail] returned more than one register/row"); }

                foreach (UserFromFiyiStackApp userFromFiyiStackApp in lstUserFromFiyiStackApp)
                {
                    UserFromFiyiStackApp.Email = userFromFiyiStackApp.Email;
                    UserFromFiyiStackApp.UserAccountTypeId = userFromFiyiStackApp.UserAccountTypeId;
                    UserFromFiyiStackApp.GenerationsLeft = userFromFiyiStackApp.GenerationsLeft;
                }

                return UserFromFiyiStackApp;
            }
            catch (Exception ex) { throw ex; }
        }
    }
}