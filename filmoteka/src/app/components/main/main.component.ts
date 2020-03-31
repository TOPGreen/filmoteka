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
    this.films = firebase.films;
    console.log(this.films)
  }


  async ngOnInit() {

  }

  public addFilm() {
    this.firebase.addFilm({
      id: 0,
      title: this.filmTitle
    })
  }
}
