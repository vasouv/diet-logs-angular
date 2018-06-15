import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../../models/Person";

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
