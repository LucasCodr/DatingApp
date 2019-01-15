import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {

    constructor(private userService: UserService, private router: Router,
        private alertifyService: AlertifyService,
        private authService: AuthService) { }
    /**
     * When resolved get user that matches the id param
     * @param route Activated Route snapshot to get the needed params and resolve the user
     */
    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertifyService.error('Problem retrieving member data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}