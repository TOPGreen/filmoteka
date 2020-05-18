import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/IUser";
import {auth, User} from "firebase/app";
import {take} from "rxjs/operators";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {FirebaseService} from "./firebase.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // userId: string;
  //
  // public user: IUser = {
  //   login: null,
  //   password: null,
  //   role: -1,
  // };
  //
  // constructor() {
  // }
  private authState$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private firebaseService: FirebaseService) {
    this.authState$ = afAuth.authState;
    this.changeAuthState();
  }

  private user: User
  private role: number = -1;

  get getUserRole(): number {
    return this.role;
  }

  setUserRole(role: number) {
    this.role = role;
  }

  get getUser(): User {
    return this.user;
  };

  get authStatus(): boolean {
    return this.user !== null;
  }

  changeAuthState() {
    this.authState$.pipe(take(1)).subscribe(user => this.user = user)
  }

  async doRegister(value): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(value.login, value.password)
      .then(res => {
        this.role = 0;
        this.changeAuthState();
        return res;
      })
  }

  async doLogin(value): Promise<any> {
    return auth().setPersistence(auth.Auth.Persistence.LOCAL)
      .then(() =>
        this.afAuth.auth.signInWithEmailAndPassword(value.login, value.password)
          .then(async (res) => {
            await this.changeAuthState();
            const users = await this.firebaseService.getData("users")
            this.role = 0;
            users.forEach(userInfo => {
              if (userInfo.uid === this.getUser.uid) {
                this.role = userInfo.role;
              }
            });
            return res
          })
      )
  }

  async doLogout(): Promise<any> {
    return this.afAuth.auth.signOut().then((res) => {
      this.setUserRole(-1);
      this.changeAuthState();
      return res;
    }).catch(err => err);
  }


}

