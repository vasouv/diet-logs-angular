import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Measurement } from "../models/Measurement";
import { backendPersonsUrl } from "../static-stuff/static-stuff";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class MeasurementService {

  personsUrl: string = backendPersonsUrl;

  constructor(private httpClient: HttpClient) { }

  public getMeasurements(pid: number): Observable<Measurement[]> {
    return this.httpClient.get<Measurement[]>(`${this.personsUrl}/${pid}/measurements`);
  }

  public addMeasurement(pid: number, measurement: Measurement): Observable<Measurement> {
    return this.httpClient.post<Measurement>(`${this.personsUrl}/${pid}/measurements`, measurement, httpOptions);
  }

  public deleteMeasurement(pid: number, mid: number): Observable<Measurement> {
    return this.httpClient.delete<Measurement>(`${this.personsUrl}/${pid}/measurements/${mid}`, httpOptions);
  }

}
