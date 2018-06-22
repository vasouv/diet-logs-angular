import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../../models/Measurement';
import { MeasurementService } from '../../../services/measurement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.css']
})
export class MeasurementListComponent implements OnInit {

  measurements: Measurement[];

  constructor(
    private route: ActivatedRoute,
    private measurementService: MeasurementService) { }

  ngOnInit() {
    this.getMeasurements();
  }

  getMeasurements(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.measurementService.getMeasurements(id).subscribe(measurements => this.measurements = measurements);
  }

}
