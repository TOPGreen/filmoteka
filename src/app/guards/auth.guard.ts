import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable, pipe} from "rxjs";
import {Injectable} from "@angular/core";
import {map, take, tap} from 'rxjs/operators';
import {AngularFireAuth} from "@angular/fire/auth";
import {UserService} from "../services/user.service";
import {FirebaseService} from "../services/firebase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router, private afAuth: AngularFireAuth, private firebaseService: FirebaseService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.afAuth.authState
      .pipe(
        take(1),
        map(authState => !!authState),
        tap(async (authenticated) => {
          if (!authenticated) {
            this.router.navigate(['login']);
          } else {
            const users = await this.firebaseService.getData("users")
            this.authService.setUserRole(0);
            users.forEach(userInfo => {
              if (userInfo.uid === this.authService.getUser.uid) {
                this.authService.setUserRole(userInfo.role);
              }
            });
          }
        })
      );
  }
}
