using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public interface IPhotoProcessor
    {
        void Create(Photo photo);
        void Update(Photo photo);
        void Delete(int photoId);
    }
}
