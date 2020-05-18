import {Component, OnInit} from '@angular/core';
import {FirebaseService} from 'src/app/services/firebase.service';
import {UserService} from 'src/app/services/user.service';
import {IFilm} from "../../interfaces/IFilm";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any;
  films: IFilm[];

  constructor(public firebase: FirebaseService, public userService: UserService) {
  }

  async ngOnInit() {
    this.orders = await this.firebase.getData("orders");
    this.orders = this.orders.filter(order => order.clientId.trim() === this.userService.getUser.uid.trim());
  }

  getStatus(status) {
    let output = ""
    switch (status) {
      case "pending":
        output = "Обрабатывается"
        break;
      case "resolved":
        output = "Готов"
        break;
      case "rejected":
        output = "Отклонен"
        break;
    }
    return output;
  }

}
