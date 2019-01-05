import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'auth/';
  jwtHelp = new JwtHelperService(); // variable to store the angular jwt service
  decodedToken: any;

  constructor(private $http: HttpClient) { }

  login (model: any) {
    return this.$http.post(this.baseUrl + 'login/', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelp.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        })
      );
  }

  register (model: any) {

    return this.$http.post(`${this.baseUrl}register`, model);
  }

  loggedIn () {
    // getting the toekn n the local storage
    const token = localStorage.getItem('token');
    // checking if the token is expired, then return false, else, return true
    return !this.jwtHelp.isTokenExpired(token);
  }
}
