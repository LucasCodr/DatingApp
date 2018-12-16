using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {      
        /**
        db context options instance
         */  
        public DataContext (DbContextOptions<DataContext> options) : base(options) { }

        /**
        telling entity framework about our properties */
        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }
    }
}