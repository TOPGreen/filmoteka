import {Component, OnInit} from '@angular/core';
import {FirebaseService} from 'src/app/services/firebase.service';
import {UserService} from 'src/app/services/user.service';
import {IFilm} from "../../interfaces/IFilm";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  orders: any;
  films: IFilm;
  status: string;
  statuses: string[] = [];

  constructor(public firebase: FirebaseService, public userService: UserService) {
  }

  async ngOnInit() {
    this.orders = await this.firebase.getData("orders");
    this.orders.forEach(order => {
      this.statuses.push(order.status);
    })

    // let films = await this.firebase.getData("films");

    console.log(this.orders)
  }

  setOrderStatus(index: number) {
    this.orders[index].status = this.statuses[index];
    this.firebase.updateData("orders", this.orders[index].id, this.orders[index]);
  }

}
