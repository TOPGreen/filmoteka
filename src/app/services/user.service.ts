import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId;

  public user: User = {
    login: null,
    password: null,
    role: -1,
  };

  constructor() { }
}

interface User {
  login: string,
  password: string,
  role: number
}
