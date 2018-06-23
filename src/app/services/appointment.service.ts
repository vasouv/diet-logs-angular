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

  constructor(private httpClient: HttpClient) { }

  public getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.appointmentsUrl);
  }

}
