import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PersonListComponent } from './components/persons/person-list/person-list.component';
import { PersonNewFormComponent } from './components/persons/person-new-form/person-new-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppointmentsListComponent } from './components/appointments/appointments-list/appointments-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'persons', component: PersonListComponent },
  { path: 'person-new', component: PersonNewFormComponent },
  { path: 'appointments', component: AppointmentsListComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
