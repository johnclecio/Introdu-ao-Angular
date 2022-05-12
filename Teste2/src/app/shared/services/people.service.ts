import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
    let peopleArray = [{
      firstName: 'John',
      lastName: 'Lima',
      age: 29
    },
    {
      firstName: 'Clecio',
      lastName: 'Fideles',
      age: 28
    },
    {
      firstName: 'Clecio',
      lastName: 'Lima',
      age: 27
    },
    {
      firstName: 'Fideles',
      lastName: 'Lima',
      age: 26
    },
  ]

  return of(peopleArray)
  }
}
