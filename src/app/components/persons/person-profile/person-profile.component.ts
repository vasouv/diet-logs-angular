import { Component, OnInit, Input } from '@angular/core';
import { Person } from "../../../models/Person";
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../../services/person.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {

  @Input() person: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

}
