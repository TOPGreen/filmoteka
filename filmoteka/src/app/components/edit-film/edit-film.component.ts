import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  id;
  film;
  filmForm: FormGroup;
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private firebase: FirebaseService
  ) {
    this.activatedRouter.params.subscribe(param => {
      this.id = param.id;
    });

    this.filmForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    })
  }

  async ngOnInit() {
    if (this.id !== -1) {
      this.film = await this.firebase.getDocumentById("films", this.id);
      console.log(this.film)
      this.filmForm.patchValue({
        title: this.film.payload.doc.data().title,
      })
    }
  }

  public async addFilm() {
    await this.firebase.postData("films", {
      title: this.filmForm.value.title
    })
    this.router.navigate(['/']);
  }

  public async updateFilm() {
    await this.firebase.updateData("films", this.id, {
      title: this.filmForm.value.title
    })
    this.router.navigate(['/']);
  }

}
