import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      // take(1), assim que o servidor der uma resposta, eu finalizo a incrição de dados
      // first(), eu obtenho a 1 resposta que o servidor me enviar, como não é um websocket, so vou querer 1x os dados
      first(),
      delay(3000),
      tap(courses => console.log(courses))
    );
  }
}
