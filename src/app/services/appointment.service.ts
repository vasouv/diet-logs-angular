import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Appointment } from '../models/Appointment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class AppointmentService {

  appointmentsUrl: string = 'http://localhost:8080/appointments';
  personsUrl: string = 'http://localhost:8080/persons';

  constructor(private httpClient: HttpClient) { }

  public getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.appointmentsUrl);
  }

  public getAppointmentByPersonID(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.personsUrl}/${id}/appointment`);
  }

}
