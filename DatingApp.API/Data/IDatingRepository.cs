using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
        // generic method, it can add users or photos into the db
        void Add<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        /**
            boolean return type to check if there's more than 1 changes to save, if it's true, then return true and we can peform the 
            save action
        */
        Task<bool> SaveAll();

        Task<IEnumerable<User>> GetUsers();

        /** 
        Summary:
            Search for the user with the specified id        
            Type parameters:
                id:
                    The user id to be fetched.
        */
        Task<User> GetUser(int id);
    }
}