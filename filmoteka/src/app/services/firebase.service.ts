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
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(collection).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
    })

    //this.firestore.collection(collection).valueChanges();
  }

  public updateData(collection, filmId, data) {
    return this.firestore.collection(collection).doc(filmId).set(data);
  }

  public deleteData(collection, filmId) {
    return this.firestore.collection(collection).doc(filmId).delete();
  }

  public async getDocumentById(collection, id) {
    let doc;
    let data = await new Promise<any>((resolve, reject) => {
      this.firestore.collection(collection).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
    });

    data.forEach(el => {
      if (el.payload.doc.id === id) {
        doc = el
      }
    });

    return doc;
  }
}
