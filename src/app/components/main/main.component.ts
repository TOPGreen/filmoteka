import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import {Router} from '@angular/router';
import {IFilm} from "../../interfaces/IFilm";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  films: IFilm[] = [];

  constructor(private firebase: FirebaseService) {
  }

  async ngOnInit() {
    this.films = await this.firebase.getData("films")
  }

}
