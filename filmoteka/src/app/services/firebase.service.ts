import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  films;
  constructor(private firestore: AngularFirestore) {
    this.films = firestore.collection('films').valueChanges();
  }

  public addFilm(data) {
    this.firestore.collection('films').add(data)
  }
}
