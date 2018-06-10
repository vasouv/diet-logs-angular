import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-person-new-form',
  templateUrl: './person-new-form.component.html',
  styleUrls: ['./person-new-form.component.css']
})
export class PersonNewFormComponent implements OnInit {

  person: Person = {
    id: 0,
    name: '',
    address: '',
    phone: '',
    age: 0,
    height: 0.0,
    targetkg: 0.0,
    illness: '',
    medication: '',
    allergies: ''
  };

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  addPerson(): void {
    this.personService.savePerson(this.person).subscribe(savedPerson => console.log(savedPerson));
    this.clear();
  }

  clear(): void {
    this.person = {
      id: 0,
      name: '',
      address: '',
      phone: '',
      age: 0,
      height: 0.0,
      targetkg: 0.0,
      illness: '',
      medication: '',
      allergies: ''
    }
  }

}
