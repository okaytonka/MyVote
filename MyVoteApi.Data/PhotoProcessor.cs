using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public class PhotoProcessor : IPhotoProcessor
    {

        private readonly string connectionString;
        public PhotoProcessor(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public void Create(Photo photo)
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Execute("INSERT INTO [Photo] (date,photo1,photo2,photo3,userId) VALUES (@date,@photo1,@photo2,@photo3,@userId)",
                    new { photo.date,photo.photo1,photo.photo2,photo.photo3,photo.userId });
            }
        }

        public void Delete(int photoId)
        {
            throw new NotImplementedException();
        }

        public void Update(Photo photo)
        {
            throw new NotImplementedException();
        }
    }
}
