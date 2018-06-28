import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../models/Appointment';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  appointmentsToday: Appointment[];
  appointmentsTomorrow: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentsToday = [];
    this.appointmentsTomorrow = [];
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointmentsToday().subscribe(appointmentsToday => this.appointmentsToday = appointmentsToday);
    this.appointmentService.getAppointmentsTomorrow().subscribe(appointmentsTomorrow => this.appointmentsTomorrow = appointmentsTomorrow);
  }

}
