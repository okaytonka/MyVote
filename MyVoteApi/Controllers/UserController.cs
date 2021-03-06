﻿using Microsoft.AspNetCore.Mvc;
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
        [HttpGet("AllUsers")]
        public IEnumerable<User> Get()
        {
            return userProvider.Get();
        }

        [HttpPost("GetLogin")]
        public IEnumerable<User> GetLogin([FromBody] User user)
        {
            return userProvider.GetLogin(user);
        }

        // GET api/<UserController>/5
        [HttpGet("GetProfile/{id}")]
        public IEnumerable<User> GetProfile(int id)
        {
            return userProvider.GetProfile(id);
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

        [HttpPut("UpdateUser/{id}")]
        public void UpdateUser(int id, [FromBody] User user)
        {
            user.id = id;
            userProcessor.UpdateUser(user);
        }

        [HttpPut("UpdateUserPhoto/{id}")]
        public void UpdateUserPhoto(int id, [FromBody] User user)
        {
            user.id = id;
            userProcessor.UpdateUserPhoto(user);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            userProcessor.Delete(id);
        }
    }
}
