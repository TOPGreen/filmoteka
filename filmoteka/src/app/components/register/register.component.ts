import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  constructor(private firebase: FirebaseService, private router: Router, ) {
    this.regForm = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(0, []),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.regForm.valid) {
      await this.firebase.postData("users", this.regForm.value);
      this.router.navigate(['/login']);
    } else {
      alert("Некорректные данные");
    }
  }

}
