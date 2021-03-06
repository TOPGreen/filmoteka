import {Pipe, PipeTransform} from '@angular/core';
import {IFilm} from "../interfaces/IFilm";

@Pipe({
  name: 'filmFilter'
})
export class FilterPipe implements PipeTransform {

  transform(films: IFilm[], searchString: string, genre: string, sortParam: string, sortDirection: string, ...args: unknown[]): unknown {
    return films.filter(film => {
      if (searchString && !film.title.toLowerCase().includes(searchString.toLowerCase())) {
        return false
      }
      if (genre !== 'Любой' && !film.genre.toLowerCase().includes(genre.toLowerCase())) {
        return false;
      }
      return true;
    }).sort((a: IFilm, b: IFilm) => {
      let result = +a[sortParam] - +b[sortParam]
      return sortDirection === "up" ? result : -result;
    });
  }

}
