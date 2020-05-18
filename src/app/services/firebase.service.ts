import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  /**
   * @param {string} collection - name of the collection that data is being added to
   * @param {Object} data - the data you want to add
   *
   *
   * @returns  {Promise}
   */
  public postData(collection: string, data) {
    this.firestore.collection(collection).add(data)
  }

  /**
   * @param {string} collection - name of the collection to get information from
   *
   *
   * @returns  {Promise}
   */
  public getData(collection: string) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(collection).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots.map((el: any) => Object.assign(el.payload.doc.data(), {id: el.payload.doc.id})))
        });
    })

    //this.firestore.collection(collection).valueChanges();
  }

  /**
   * @param {string} collection - name of the collection where the date should be updated
   * @param {string} id - id of the document to be updated
   * @param {string} data - updated value
   *
   * @returns  {Promise}
   */
  public updateData(collection, id, data) {
    return this.firestore.collection(collection).doc(id).set(data);
  }

  /**
   * @param {string} collection - name of the collection where the date should be dlete
   * @param {string} id - id of the document to be deleted
   * @param {string} data
   *
   * @returns  {Promise}
   */
  public deleteData(collection, id) {
    return this.firestore.collection(collection).doc(id).delete();
  }

  /**
   * @param {string} collection - name of the collection to get information from
   * @param {string} id - id of the document
   *
   * @returns  {Object}
   */
  public async getDocumentById(collection, id) {
    let doc: any;
    let data = await new Promise<any>((resolve, reject) => {
      this.firestore.collection(collection).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots.map((el: any) => Object.assign(el.payload.doc.data(), {id: el.payload.doc.id})))
        })
    });

    data.forEach(el => {
      if (el.id === id) {
        doc = el
      }
    });

    return doc;
  }
}
