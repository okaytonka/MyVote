using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public interface IUserProcessor
    {
        void Create(User user);
        void Update(User user);
        void Delete(int userId);
        void UpdateUser(User user);
        void UpdateUserPhoto(User user);


    }
}
