import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {

    this.persons = [];
    this.fetchDataFromBackend();

  }

  private fetchDataFromBackend() {
    this.personService.getPersons().subscribe(result => {
      this.persons = result;
    });
  }

  deletePerson(person: Person): void {
    this.personService.deletePerson(person.id).subscribe(result => console.log(result));
  }

}
