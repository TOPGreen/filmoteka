import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private firebase: FirebaseService, private router: Router, private userSevice: UserService) {
    this.loginForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(0, []),
    })
    userSevice.user = { login: null, password: null, role: -1 };
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const users = await this.firebase.getData("users")

      users.forEach(user => {
        // if (user.payload.doc.data().login === this.loginForm.value.login && user.payload.doc.data().password === this.loginForm.value.password) {
        if (user.login === this.loginForm.value.login && user.password === this.loginForm.value.password) {
          console.log("LOGIN SUCCES", user);
          this.userSevice.user = user;
          this.userSevice.userId = user.id;
          this.router.navigate(['/']);
        } else {
          console.log("err")
        }
      });


    } else {
      alert("Некорректные данные");
    }
  }
}
