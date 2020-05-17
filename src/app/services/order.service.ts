import {Injectable} from '@angular/core';
import {IFilm} from "../interfaces/IFilm";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  film: IFilm;

  constructor() {
  }
}
