import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  films = [];

  constructor(private firebase: FirebaseService) {
  }


  async ngOnInit() {
    this.films = await this.firebase.getData("films")
  }

}
