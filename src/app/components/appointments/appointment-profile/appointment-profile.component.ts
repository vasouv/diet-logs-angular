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
    this.appointment = new Appointment(0, null, null, null);
    this.getAppointment();
  }

  getAppointment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appointmentService.getAppointmentByPersonID(id).subscribe(
      appointment => this.appointment = appointment
    );
  }

  addAppointment(appDate, appTime) {
    if (!appDate || !appTime) {
      alert("Appointment must have date and time");
    } else {
      const id = +this.route.snapshot.paramMap.get('id');
      let appToSave = new Appointment(0, appDate, appTime, null);
      this.appointmentService.saveAppointmentByPersonID(id, appToSave).subscribe(
        appointment => this.appointment = appointment
      );
    }
  }

}
