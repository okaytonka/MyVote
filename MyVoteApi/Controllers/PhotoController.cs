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
    public class PhotoController : ControllerBase
    {

        private readonly IPhotoProcessor photoProcessor;
        private readonly IPhotoProvider photoProvider;

        public PhotoController(IPhotoProcessor photoProcessor, IPhotoProvider photoProvider)
        {
            this.photoProvider = photoProvider;
            this.photoProcessor = photoProcessor;
        }
        
        [HttpGet("GetMyPhoto/{id}")]
        public IEnumerable<Photo> GetMyPhoto(int id)
        {
            return photoProvider.GetMyPhoto(id);
        }
        [HttpGet("GetFriendsPhoto")]
        public IEnumerable<Photo> GetFriendsPhoto()
        {
            return photoProvider.GetFriendsPhoto();
        }

        // GET: api/<PhotoController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PhotoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PhotoController>
        [HttpPost]
        public void Post([FromBody]Photo photo)
        {
            photoProcessor.Create(photo);

        }

        // PUT api/<PhotoController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PhotoController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
