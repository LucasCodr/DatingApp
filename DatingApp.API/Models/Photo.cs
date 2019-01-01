using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public DateTime DateAdded { get; set; }

        public bool IsMain { get; set; }       

        // these two properties below set the delete operation to be cascaded on the photos table and user not nullable
        public User User { get; set; } 

        public int UserId { get; set; }
    }
}