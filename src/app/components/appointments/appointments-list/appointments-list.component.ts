import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../models/Appointment';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointments = [];
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);
  }

}
