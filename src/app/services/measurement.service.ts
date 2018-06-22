import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Measurement } from "../models/Measurement";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class MeasurementService {

  personsUrl: string = 'http://localhost:8080/persons';

  constructor(private httpClient: HttpClient) { }

  public getMeasurements(pid: number): Observable<Measurement[]> {
    return this.httpClient.get<Measurement[]>(`${this.personsUrl}/${pid}/measurements`);
  }

  public addMeasurement(pid: number, measurement: Measurement): Observable<Measurement> {
    return this.httpClient.post<Measurement>(`${this.personsUrl}/${pid}/measurements`, measurement, httpOptions);
  }

}