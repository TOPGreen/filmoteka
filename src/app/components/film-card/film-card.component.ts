import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {FirebaseService} from 'src/app/services/firebase.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from "../../interfaces/IUser";
import {IFilm} from "../../interfaces/IFilm";

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: IFilm;
  @Output() refresh = new EventEmitter<{}>();

  role: number;

  constructor(private firebase: FirebaseService, public userService: UserService, private activatedRouter: ActivatedRoute,
              private router: Router,) {
    this.role = userService.getUserRole;
  }

  ngOnInit(): void {
  }

  public deleteFilm(event) {
    event.stopPropagation();
    this.firebase.deleteData("films", this.film.id);
    this.firebase.deleteData("requests", this.film.id);
    this.refresh.emit({});
  }

  public editFilm() {
    this.firebase.updateData("films", this.film.id, {title: "Interstellar"});
    this.refresh.emit({});
  }

  filmCardClick() {
    this.router.navigate(['/info', this.film.id])
  }
}


