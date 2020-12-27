using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public interface IPhotoProvider
    {
        IEnumerable<Photo> GetMyPhoto(int id);
        IEnumerable<Photo> GetFriendsPhoto();
    }
}
