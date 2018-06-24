import { Person } from "./Person";

export class Appointment {
    id: number;
    appointmentDate: any;
    appointmentTime: any;
    person: Person;

    constructor(id: number, appointmentDate: any, appointmentTime: any, person: Person) {
        this.id = id;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.person = person;
    }
}