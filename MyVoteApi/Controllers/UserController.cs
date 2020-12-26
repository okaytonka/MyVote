using Microsoft.AspNetCore.Mvc;
using MyVoteApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyVoteApi.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserProvider userProvider;
        private readonly IUserProcessor userProcessor;

        public UserController (IUserProvider userProvider, IUserProcessor userProcessor)
        {
            this.userProvider = userProvider;
            this.userProcessor = userProcessor;
        }


        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return userProvider.Get();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody]User user)
        {
            userProcessor.Create(user);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User user)
        {
            user.id = id;
            userProcessor.Update(user);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            userProcessor.Delete(id);
        }
    }
}
