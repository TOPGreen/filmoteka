import {Injectable} from '@angular/core';
import {IUser} from "../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId: string;

  public user: IUser = {
    login: null,
    password: null,
    role: -1,
  };

  constructor() {
  }
}

