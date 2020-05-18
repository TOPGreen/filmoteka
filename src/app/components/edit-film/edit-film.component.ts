import {Component, OnInit} from '@angular/core';
import {FirebaseService} from 'src/app/services/firebase.service';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {IFilm} from "../../interfaces/IFilm";

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

  id: string;
  film: IFilm;
  filmForm: FormGroup;
  requestId: string;

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
      image: new FormControl(null, [Validators.required]),
      genre: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      count: new FormControl(null, [Validators.required, Validators.min(1)]),
      desc: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      actor: new FormControl(null, []),
      rating: new FormControl(null, [Validators.required]),
    })
  }

  async ngOnInit() {
    if (this.id === '0') {
      this.requestId = '0'
    }
    if (this.id !== '-1' && this.id !== '0') {
      this.film = await this.firebase.getDocumentById("films", this.id);
      if (!this.film) {
        this.film = await this.firebase.getDocumentById("requests", this.id);
        this.requestId = this.id;
        this.id = '-1';
      }
      this.filmForm.patchValue({
        title: this.film.title,
        image: this.film.image,
        genre: this.film.genre,
        year: this.film.year,
        count: this.film.count,
        desc: this.film.desc,
        director: this.film.director,
        actor: this.film.actor,
        rating: this.film.rating
      })
    }
  }

  public async addFilm() {
    if (this.filmForm.valid) {
      await this.firebase.postData("films", this.filmForm.value)
      if (this.requestId === '0') {
        await this.firebase.postData("requests", this.filmForm.value);
      } else if (this.requestId) {
        await this.firebase.deleteData("requests", this.requestId);
      }
      this.router.navigate(['/']);
    } else {
      alert("Некорректные данные")
    }
  }

  public async updateFilm() {
    if (this.filmForm.valid) {
      await this.firebase.updateData("films", this.id, this.filmForm.value);
      this.router.navigate(['/']);
    } else {
      alert("Некорректные данные")
    }
  }

  public async makeRequest() {
    if (this.filmForm.valid) {
      await this.firebase.postData("requests", this.filmForm.value);
      this.router.navigate(['/requests']);
    } else {
      alert("Некорректные данные")
    }
  }

}
