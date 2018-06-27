import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Appointment } from '../models/Appointment';
import { backendAppointmentsUrl, backendPersonsUrl } from "../static-stuff/static-stuff";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class AppointmentService {

  appointmentsUrl: string = backendAppointmentsUrl;
  personsUrl: string = backendPersonsUrl;

  constructor(private httpClient: HttpClient) { }

  public getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.appointmentsUrl);
  }

  public getAppointmentByPersonID(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(`${this.personsUrl}/${id}/appointment`);
  }

  public saveAppointmentByPersonID(id: number, appToSave: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.personsUrl}/${id}/appointment`, appToSave, httpOptions);
  }

  public deleteAppointment(appid: number): Observable<Appointment> {
    return this.httpClient.delete<Appointment>(`${this.appointmentsUrl}/${appid}`);
  }

}
