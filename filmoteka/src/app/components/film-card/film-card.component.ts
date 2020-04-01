import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: any;
  @Output() refresh = new EventEmitter<{}>();

  user;
  constructor(private firebase: FirebaseService, public userService: UserService) {
    this.user = userService.user
  }

  ngOnInit(): void {
  }

  public deleteFilm() {
    this.firebase.deleteData("films", this.film.payload.doc.id);
    this.refresh.emit({});
  }

  public editFilm() {
    this.firebase.updateData("films", this.film.payload.doc.id, { title: "Interstellar" });
    this.refresh.emit({});
  }


}


