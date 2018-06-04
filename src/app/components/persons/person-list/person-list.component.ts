import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];

  constructor() { }

  ngOnInit() {
    let vasouv = new Person(1, "Vasilis", "Themistokleous", "72525", 31, 1.77, 90, "cholesterol", "anti-cholesterol pills", "sometimes pollen");
    let chris = new Person(2, "Christos", "Sardewn", "12345", 31, 1.80, 78, "none", "nome", "none");
    let maik = new Person(3,"Mixalis","Paulou Mela","23456",30,1.82,95.3,"none","cough syrup","a lot");
    this.persons.push(vasouv);
    this.persons.push(chris);
    this.persons.push(maik);
  }

}
