using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public class UserProvider : IUserProvider
    {
        private readonly string connectionString;
        public UserProvider (string connectionString)
        {
            this.connectionString = connectionString;
        }
        public IEnumerable<User> Get()
        {
            IEnumerable<User> user = null;
            using (var connection = new SqlConnection(connectionString))
            {
                user = connection.Query<User>("select * from [User] ");


            }
            return user;
        }
    }
}
