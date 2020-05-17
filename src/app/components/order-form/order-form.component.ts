import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FirebaseService} from "../../services/firebase.service";
import {OrderService} from "../../services/order.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm: FormGroup;

  constructor(private firebaseService: FirebaseService, private orderService: OrderService, private userService: UserService) {
    this.orderForm = new FormGroup({
      client: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      telephone: new FormControl(null, [Validators.required]),
      film: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.orderForm.patchValue({film: this.orderService.film.title})
  }

  onSumbit() {
    if (this.orderForm.valid) {
      this.firebaseService.postData('orders', Object.assign(this.orderForm.value, {
        clientId: this.userService.userId,
        status: "pending",
      }));
    }
  }
}
