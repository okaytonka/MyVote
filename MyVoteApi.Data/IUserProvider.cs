using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyVoteApi.Data
{
    public interface IUserProvider
    {
        IEnumerable<User> Get();
    }
}
