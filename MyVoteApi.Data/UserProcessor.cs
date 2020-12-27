using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public class UserProcessor : IUserProcessor
    {
        private readonly string connectionString;
        public UserProcessor(string connectionString)
        {
            this.connectionString = connectionString;
        }
        public void Create(User user)
        {

            using(var connection = new SqlConnection(connectionString))
            {
                connection.Execute("INSERT INTO [User] (name,about,school,country,email,friends,password) VALUES (@name,@about,@school,@country,@email,@friends,@password)",
                    new { user.name, user.about, user.school, user.country, user.email, user.friends, user.password });
            }

        }

        public void Delete(int userId)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute("DELETE FROM [User] WHERE id=@id",
                    new { id= userId });
            }
        }

        public void Update(User user)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute("UPDATE [User] SET name=@name,about=@about,school=@school,country=@country,email=@email,friends=@friends,password=@password WHERE id=@id",
                    new {user.id, user.name, user.about, user.school, user.country, user.email, user.friends, user.password });
            }
        }

        

               public void UpdateUser(User user)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute("UPDATE [User] SET name=@name,about=@about,school=@school,country=@country,password=@password WHERE id=@id",
                    new {user.id, user.name, user.about, user.school, user.country, user.email, user.friends, user.password });
            }
        }

        public void UpdateUserPhoto(User user)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute("UPDATE [User] SET photo=@photo WHERE id=@id",
                    new { user.id, user.photo });
            }
        }
    }
}
