using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public class PhotoProvider : IPhotoProvider
    {
        private readonly string connectionString;
        public PhotoProvider(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public IEnumerable<Photo> GetFriendsPhoto()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                return connection.Query<Photo>(@"SELECT * FROM [Photo] ORDER BY date DESC");


            }
        }

        public IEnumerable<Photo> GetMyPhoto(int id)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                return connection.Query<Photo>(@"SELECT * FROM [Photo] WHERE userId=@id ORDER BY date DESC", new { id });


            }
        }
    }
}
