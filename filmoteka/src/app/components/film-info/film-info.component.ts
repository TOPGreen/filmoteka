import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {


  id;
  film;

  constructor(private activatedRouter: ActivatedRoute,
    private router: Router,
    private firebase: FirebaseService) { 
      this.activatedRouter.params.subscribe(param => {
      this.id = param.id;
    });}

 async ngOnInit() {
    this.film = await this.firebase.getDocumentById("films", this.id);

    
  }

}
