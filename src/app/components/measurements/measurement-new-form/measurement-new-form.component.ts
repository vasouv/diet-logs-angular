import { Component, OnInit } from '@angular/core';
import { MeasurementService } from '../../../services/measurement.service';
import { Measurement } from '../../../models/Measurement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-measurement-new-form',
  templateUrl: './measurement-new-form.component.html',
  styleUrls: ['./measurement-new-form.component.css']
})
export class MeasurementNewFormComponent implements OnInit {

  formWeight: number = 0;

  constructor(
    private route: ActivatedRoute,
    private measurementService: MeasurementService
  ) { }

  ngOnInit() {
  }

  addMeasurement(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    let measure = new Measurement(0, new Date(), this.formWeight, 0);
    this.measurementService.addMeasurement(id, measure).subscribe(meas => console.log(meas));
    this.clear();
  }

  clear(): void {
    this.formWeight = 0;
  }

}
