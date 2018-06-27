import { Component, OnInit } from '@angular/core';
import { Measurement } from '../../models/Measurement';
import { MeasurementService } from '../../services/measurement.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartMeasurements: Measurement[] = [];
  chartData = [];

  chartDates: string[] = [];
  chartWeights: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private measurementService: MeasurementService) { }

  ngOnInit() {
    this.getMeasurementsForChart();
  }

  getMeasurementsForChart(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.measurementService.getMeasurements(id).subscribe(measurements => {
      this.chartMeasurements = measurements;

      this.extractMeasurementData();
      this.createChart();
    });
  }

  extractMeasurementData(): void {
    this.chartMeasurements.forEach(measure => {
      let mDate = new Date(measure.measuredate);
      this.chartDates.push(mDate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
      this.chartWeights.push(measure.weightkg);
    });
  }

  createChart(): void {

    this.chartData = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.chartDates,
        datasets: [{
          data: this.chartWeights
        }]
      }
      ,
      options: {
        title: {
          display: true,
          text: 'Measurements'
        },
        legend: {
          display: false
        }
      }
    })
  }

}
