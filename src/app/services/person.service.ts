import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Person } from '../models/Person';

@Injectable()
export class PersonService {

  personsUrl: string = 'http://localhost:8080/persons';

  constructor(private httpClient: HttpClient) { }

  public getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personsUrl);
  }

}
