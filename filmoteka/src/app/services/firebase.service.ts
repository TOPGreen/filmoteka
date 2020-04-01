import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  films;
  constructor(private firestore: AngularFirestore) {
    // this.films = firestore.collection('films').snapshotChanges();
  }

  public postData(collection, data) {
    this.firestore.collection(collection).add(data)
  }

  public getData(collection) {
    return this.firestore.collection(collection).valueChanges();
  }

  public updateData(collection, filmId, data) {
    data.nameToSearch = data.name.toLowerCase();
    return this.firestore.collection(collection).doc(filmId).set(data);
  }

  public deleteData(collection, filmId) {
    return this.firestore.collection(collection).doc(filmId).delete();
  }

}
