import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../models/Appointment';

@Component({
  selector: 'app-appointment-profile',
  templateUrl: './appointment-profile.component.html',
  styleUrls: ['./appointment-profile.component.css']
})
export class AppointmentProfileComponent implements OnInit {

  appointment: Appointment;

  constructor(
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.getAppointment();
  }

  getAppointment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appointmentService.getAppointmentByPersonID(id).subscribe(
      appointment => this.appointment = appointment
    );
  }

}
