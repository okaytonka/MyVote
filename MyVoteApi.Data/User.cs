using System.Collections.Generic;

namespace MyVoteApi.Data
{
    public class User
    {
        public string name { get; set; }
        public string password { get; set; }
        public string about { get; set; }
        public string school { get; set; }
        public string country { get; set; }
        public string email { get; set; }
        public int id { get; set; }
        public string photo { get; set; }
        public List<object> friends { get; set; }
    }
}