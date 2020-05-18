import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service'
import {IFilm} from "../../interfaces/IFilm";
import {FormControl, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public searchForm: FormGroup;
  films: IFilm[] = [];

  constructor(private firebase: FirebaseService) {
    this.searchForm = new FormGroup({
      "search": new FormControl('', []),
      "genre": new FormControl('Любой', []),
    });
  }

  async ngOnInit() {
    this.films = await this.firebase.getData("films");
  }

}
