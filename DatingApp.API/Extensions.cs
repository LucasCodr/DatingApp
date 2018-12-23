using Microsoft.AspNetCore.Http;

namespace DatingApp.API
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message) {
            #region Creating a new header
            // Building a new header passing an error message as its value
            response.Headers.Add("Application-Error", message);

            // Allowing the above method to be displayed
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");           
            #endregion            
        }
    }
}