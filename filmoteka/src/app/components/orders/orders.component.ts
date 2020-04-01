import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders;
  films;
  constructor(public firebase: FirebaseService, public userService: UserService) { }


  async ngOnInit() {
    this.orders = await this.firebase.getData("orders");
    let films = await this.firebase.getData("films");
    this.orders.forEach(el => {
      el.films = el.films.map(id => films.filter(film => film.id.trim() === id.trim())[0])
    });

    console.log(this.orders)
    // this.films = .map(async order => order.films.map(async filmId => await this.firebase.getDocumentById("films", filmId)));
  }

}
