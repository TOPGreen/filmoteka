import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data = [];
  films;
  filmTitle;

  constructor(private firebase: FirebaseService) {
    this.films = this.firebase.getData("films")
  }


  async ngOnInit() {

  }

  public addFilm() {
    this.firebase.postData("films", {
      title: this.filmTitle
    })
  }

  public deleteFilm(id) {
    this.firebase.deleteData("films", id);
  }

  public editFilm() {
    this.firebase.updateData("films", this.films[0].id, { title: "Interstellar" });
  }

}
