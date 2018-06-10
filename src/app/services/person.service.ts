import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Person } from '../models/Person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class PersonService {

  personsUrl: string = 'http://localhost:8080/persons';

  constructor(private httpClient: HttpClient) { }

  public getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.personsUrl);
  }

  public savePerson(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.personsUrl, person, httpOptions);
  }

}
